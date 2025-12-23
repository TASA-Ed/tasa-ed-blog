import type { Live2DModelConfig, SpineModelConfig } from "../types/config";

// Spine 看板娘配置
export const spineModelConfig: SpineModelConfig = {
	enable: false,
	model: {
		path: "",
	},
	position: {
		// 显示位置 bottom-left，bottom-right，top-left，top-right，注意：在右下角可能会挡住返回顶部按钮
		corner: "bottom-left"
	},
	size: {}
};

// Live2D 看板娘配置
export const live2dModelConfig: Live2DModelConfig = {
	enable: false, // 启用 Live2D 看板娘
	model: {
		// Live2D模型文件路径
		path: "",
	}
};
