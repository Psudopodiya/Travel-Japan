module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime', 
        'eslint:recommended', 
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react', 
        'simple-import-sort', 
    ],
    rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'semi': ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'quotes': ['error', 'single'],
        'no-var': 'error',
        'no-undef': 'error',
        'no-cond-assign': 'error',
        'complexity': ['warn', 5],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        
        'react/jsx-uses-react': 'off', 
        'react/jsx-uses-vars': 'error', 
        'react/react-in-jsx-scope': 'off', 
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
