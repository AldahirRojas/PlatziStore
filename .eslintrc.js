module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:eslint-plugin-jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'next',
        'next/core-web-vitals',
    ],
    rules: {
        'semi': ['error', 'always'],
        'prettier/prettier': 0,
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    }
}