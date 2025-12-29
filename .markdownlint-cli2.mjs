export default {
    config: {
        default: true,
        MD013: false,
        MD024: {
            "siblings_only": true
        },
        MD060: {
            "style": "compact"
        },
        MD033: {
            allowed_elements: [
                "div",
                "span",
                "br",
                "p",
                "img",
                "template",
                "script",
                "style",
                "iframe",
                "em",
                "strong"
            ]
        }
    },
    ignores: [
        "**/node_modules/**",
        "**/.astro/**",
        "**/dist/**",
    ]
};