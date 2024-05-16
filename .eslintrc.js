module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    rules: {
        // Add custom rules here
    },
};
