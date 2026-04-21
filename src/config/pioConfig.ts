import type { Live2DModelConfig, SpineModelConfig } from "../types/config";

// Spine 看板娘配置
export const spineModelConfig: SpineModelConfig = {
	// Spine 看板娘开关
	enable: false,

	// Spine模型配置
	model: {
		path: "",
	},

	// 位置配置
	position: {
		// 显示位置 bottom-left，bottom-right，top-left，top-right，注意：在右下角可能会挡住返回顶部按钮
		corner: "bottom-left"
	},
	size: {}
};

// Live2D 看板娘配置
export const live2dModelConfig: Live2DModelConfig = {
	// Live2D 看板娘开关
	enable: false,
	// Live2D模型配置
	model: {
		// Live2D模型文件路径
		path: "",
	}
};
