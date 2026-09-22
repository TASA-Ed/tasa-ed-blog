---
title: Sublime Text 4213 Patch 方法
published: 2026-09-22
pinned: false
description: Sublime Text Build 4213 的 Patch 方法
tags: [SublimeText, 教程]
category: 教程
author: 德二吹风机
draft: false
---

各位好，昨天 Sublime Text 更新了 Build 4213 版本，然后我更新后发现以前的 Patch 失效了，要重新 Patch 一遍。

然后咱参考了原来的 Patch 方法，但是发现是搜不到 `0F B6 51 05 83 F2 01 44` 这串十六进制的。

然后我和 AI 研究了一下，发现其实方法不变，只是十六进制不同。

## 原方法的原理

AI 分析原方法修改了 Build 4200 窗口标题构造函数 `sub_14004772A` 地址 `0x140047780` 的逻辑。

### 原始逻辑

```asm
0F B6 51 05    movzx edx, byte ptr [rcx+5]   ; edx = lic->registered 字节
83 F2 01       xor   edx, 1                  ; edx ^= 1  → 取反
44             ...
```

其中 `rcx` 是 license 对象（来自 `[a1+1240]`）：

- **`+4` 字节** = "licensed（已授权）"标志
- **`+5` 字节** = 许可证有效性标志（1 = 有效）

当 `[rcx+5] == 0`（未注册）时 `v5 = 0^1 = 1`，于是 `v6 = 2*1+4 = 6`，即把标志位 **bit 2** 置入传给标题构造器 `sub_1401C77AF` 的 `flags(v10)`，最终进入：

```c
if ( (a4 & 2) != 0 )          // sub_1401C77AF @0x1401c78fc
  for ( i = 0; i != 12; ++i )
    append( "@[GPR\\FAPGPQ"[i] ^ 0x15 );   // 逐字符 XOR 0x15
```

`@[GPR\FAPGPQ` 每个字符 `^ 0x15` 解码出来正好是 `UNREGISTERED`。

### 补丁逻辑

```asm
C6 41 05 01    mov  byte ptr [rcx+5], 1   ; 强制把有效性字节写成 1
31 D2          xor  edx, edx              ; edx = 0  (等价于已注册分支)
90             nop                        ; 补齐原 xor 指令的 2 字节
44             ...                        ; 下一条指令的 REX 前缀保持不变
```

补丁同时做了两件事：

1. `mov byte [rcx+5], 1`：在运行时把 license 对象的"有效"字节强制置 1，欺骗所有后续读取该字节的代码（包括 About 窗口判断 `*(a2+5)==1` 走"Registered to …"分支）。
2. `xor edx, edx`：因为原代码是 `edx = byte ^ 1`，现在直接让 `edx = 0`，于是 `v5 = 0、v6 = 0`（即**不设置 bit 2**），标题里不会再拼接 `UNREGISTERED`。8 字节长度与原来完全一致，末字节 `0x44`（下一条 `lea` 的 REX 前缀）被保留，指令对齐不受影响。

简单来说，这一处改动把许可证状态字节在内存中永久伪装成"有效"。

## 搜不到那串十六进制的原因

这次更新后 license 对象的结构体布局变了，因此那两个字节的字段被往后挪了。

### 4200（sub_14004772A，0x140047780）

```asm
0F B6 51 05    movzx edx, byte ptr [rcx+5]    ; → +5 = registered 字节
83 F2 01       xor   edx, 1
44 8D 04 55 04 00 00 00   lea r8d, [rdx*2+4]
80 79 04 00    cmp byte ptr [rcx+4], 0        ; → +4 = licensed 字节
```

### 4213（sub_140047830，0x140047886）

```asm
0F B6 51 0C    movzx edx, byte ptr [rcx+0Ch]  ; → +0xC  = registered 字节
83 F2 01       xor   edx, 1
44 8D 04 55 04 00 00 00   lea r8d, [rdx*2+4]
80 79 0D 00    cmp byte ptr [rcx+0Dh], 0      ; → +0xD  = licensed 字节
```

### 结论

功能是完全一样的，都是读 license 对象的 "registered" 字节再 `^ 1，+4`（4200）对应 `+0xD`（4213），`+5`（4200）对应 `+0xC`（4213）。

只是偏移量不同，4213 的 license 结构体在头部多了 8 个字节（字段从 +4/+5 移到 +12/+13），所以字节序列由 `51 05 … 79 04` 变成了 `51 0C … 79 0D`，按 4200 的原始 8 字节模式自然搜不到。

另外 4213 把 title builder 里的常量也改了（`SAFE MODE`→`S`、`A`→`ADMIN`、`P`→`L`、`LICENSE UPGRADE REQUIRED`→`PRIVATE BETA`），但 "UNREGISTERED" 的解码循环（`^ 0x15`）和 Help 菜单的 `+0xC` 状态读取逻辑一致。

## 4213 的 Patch 方法

可以用同样思路，针对 `0x140047886` 把 8 字节补丁改为：

```asm
C6 41 0C 01    mov  byte ptr [rcx+0Ch], 1   ; 强制 registered = 1
31 D2          xor  edx, edx                ; 相同的已注册分支
90             nop
44             (保留原下条指令的 REX 前缀)
```

只需要把偏移 `05/04` 的区域改成 `0C/0D`，逻辑与 4200 相同。

## 总结

可以在十六进制编辑器中搜索 `0F B6 51 0C 83 F2 01`，然后替换为 `C6 41 0C 01 31 D2 90`。

简单分享一下（含 AI 生成）。
