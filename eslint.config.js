import antfu from "@antfu/eslint-config"

export default {
    ...antfu(),
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "elint:recommended",
        "plugin:nuxt/recommended",
        "plugin:vue/recommended",
        "plugin:@typescrip-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["vue", "nuxt", "@typescript-eslint"],
}
