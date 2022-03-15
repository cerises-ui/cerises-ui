module.exports = {
  extends: ['plugin:markdown/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['standard-with-typescript', 'plugin:import/typescript'],
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/naming-convention': 0,
        'multiline-ternary': 0,
        'no-void': 0,
        'import/no-cycle': 1
      }
    },
    {
      files: ['light.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0
      }
    },
    {
      files: '**/*.md/*.js',
      rules: {
        'no-undef': 0
      }
    },
    {
      files: ['**/*.md/*.ts'],
      processor: 'markdown/markdown',
      rules: {
        'import/order': 0,
        'prettier/prettier': 0,
        '@typescript-eslint/consistent-type-definitions': 0
      }
    },
    {
      files: '*.spec.ts',
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly'
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 0
      }
    },
    {
      files: '*',
      globals: {
        __DEV__: 'readonly'
      }
    }
  ]
}
