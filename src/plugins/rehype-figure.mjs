import { h } from "hastscript";
import { visit } from "unist-util-visit";
import { shouldAddNoReferrer } from "../utils/image-utils.ts";

/**
 * 将带有 alt 文本的图片转换为包含 figcaption 的 figure 元素的 rehype 插件
 *
 * @returns {Function} A transformer function for the rehype plugin
 */
export default function rehypeFigure() {
	return (tree) => {
		visit(tree, "element", (node, index, parent) => {
			// 只处理 img 元素
			if (node.tagName !== "img") {
				return;
			}

			// 跳过已由其它插件接管渲染的图片（例如 plantuml）
			const classRaw = node.properties?.className;
			const classNames = Array.isArray(classRaw)
				? classRaw
				: typeof classRaw === "string"
					? classRaw.split(/\s+/)
					: [];
			if (classNames.includes("plantuml-image")) {
				return;
			}

			const imgProps = { ...node.properties };

			// 添加 referrerpolicy（如果需要）解决 403 问题
			// 无论是否有 alt，都要检查并添加 referrerpolicy
			if (imgProps.src && shouldAddNoReferrer(imgProps.src)) {
				imgProps.referrerpolicy = "no-referrer";
			}

			// 获取 alt 属性
			let alt = imgProps.alt;

			// 如果没有 alt 属性或 alt 为空字符串，则只更新属性并保持原样
			if (!alt || alt.trim() === "") {
				node.properties = imgProps;
				return;
			}

			let figure;
			// 如果定义了大小
			if (alt.includes("=")){
				// 获取大小
				const size = (alt.slice(alt.indexOf("=") + 1)).split("x");
				// 去掉定义大小的属性
				alt = alt.slice(0, alt.indexOf("="));
				// 创建 figure 元素，包含原始的 img 加大小和居中的 figcaption
				figure = h("figure", [
					// 使用原始属性的 img 节点
					h("img", {
						...imgProps,
						// 更新大小
						height: size[1],
						width: size[0]
					}),
					h("figcaption", alt),
				]);
			} else {
				// 创建 figure 元素，包含原始的 img 和居中的 figcaption
				figure = h("figure", [
					// 使用原始属性的 img 节点
					h("img", {
						...imgProps,
					}),
					h("figcaption", alt),
				]);
			}

			// 居中显示
			const centerFigure = h("center", figure);

			// 替换当前的 img 节点为 figure 节点
			if (parent && typeof index === "number") {
				parent.children[index] = centerFigure;
			}
		});
	};
}
