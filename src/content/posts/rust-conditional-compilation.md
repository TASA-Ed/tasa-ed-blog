---
title: Rust 下 features 条件编译
published: 2026-05-18
pinned: false
description: Rust 下通过 features 进行条件编译。
tags: [Rust,教程]
category: 教程
author: 德二吹风机
draft: false
---

最近咱在写一个 Rust 项目，然后项目需要分为不同的版本，就要用到条件编译，所以咱纪录一下（）。

## 定义 feature

要编译不同的版本，必须定义一个 feature，在 `Cargo.toml` 里添加一个 `[features]` 部分：

```toml
# Cargo.toml
[features]
# 这里方括号为空，表示这两个 feature 标志本身不启用其他额外功能
server = []
client = []
```

feature 的名字可以随便写，遵守规范即可。

当然，你可以精确控制某个 feature，比如添加特定的依赖，这些依赖只会在 feature 启用时才会被编译进去：

```toml
# Cargo.toml
[features]
# 仅当 server feature 启用时，才编译 tokio 依赖
server = ["dep:tokio"]
```

也可以开启默认启用的 features：

```toml
# Cargo.toml
[features]
default = ["server"]
server = []
```

## 条件代码

定义了 feature 之后，就可以写 `#[cfg(feature = "xxx")]` 了！这么写的意思是判断启用了 xxx feature 时才 xxx，当然，还可以有更多用法。

### 模块

rust 中可以用 `mod xxx` 来决定模块是否能被编译，在上面添加 `#[cfg(feature = "xxx")]` 就可以实现条件模块：

```rust
// 当启用 "server" feature 时，才编译 server 模块
#[cfg(feature = "server")]
pub mod server;
```

### 代码块和函数

在代码块或函数上面添加 `#[cfg(feature = "xxx")]` 就可以实现条件逻辑：

```rust
// 如果编译时启用了 "server" feature，则编译这个函数
#[cfg(feature = "server")]
fn start_server() {
    println!("启动服务器...");
    // ...
}

fn main() {
    // 如果编译时启用了 "server" feature，则编译这个代码块
    #[cfg(feature = "server")]
    {
        start_server();
    }
}
```

`const`，`static` 和 `struct` 也可以：

```rust
#[cfg(feature = "server")]
const DEFAULT_NAME: &str = "server1";

#[cfg(feature = "server")]
static HTML: OnceLock<String> = OnceLock::new();

#[cfg(feature = "server")]
pub struct ServerConfig {
    pub port: u16,
    // ...
}
```

### if 和 cfg! 宏

也可以在 `if` 上使用 `cfg!` 宏！逻辑会在编译时计算出来：

```rust
// 在编译期，cfg! 宏会计算出 true 或 false
if cfg!(feature = "server") {
    println!("指定了 server feature 标志");
} else {
    // 如果没启用，这个分支的代码就会被编译进去
    println!("未指定 feature 标志");
}
```

## 编译

写完代码就可以编译了！`cargo` 构建时可以通过 `--features` 参数指定要启用的 feature，如：

```bash
cargo build --release --features server
# 或多个
cargo build --release --features "server,xxx"
# 禁用默认 features
cargo build --release --no-default-features
```

## 总结

不是很复杂的说~ 而且非常好用！（）
