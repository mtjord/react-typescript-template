module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        // This needs to be last in this list to be able to overwrite other plugins' rules.
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'esnext',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'testing-library'],
    rules: {
        // The following rules aren't necessary anymore since React v17
        // (see https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint)
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
        'no-console': ['error', { allow: ['info', 'error'] }],
    },
    overrides: [
        {
            // Enable `eslint-plugin-testing-library`'s rules only for test files
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react'],
        },
    ],
};
