// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "extends": [
    "eslint:recommended",
    "react-app",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "project": true, "tsconfigRootDir": "./" },
  "plugins": ["@typescript-eslint"],
  "root": true,
  "ignorePatterns": ["dist"],
  "rules": {
    "@typescript-eslint/consistent-type-imports": [
      2,
      { "fixStyle": "separate-type-imports" }
    ],
    "@typescript-eslint/no-restricted-imports": [
      2,
      {
        "paths": [
          {
            "name": "react-redux",
            "importNames": ["useSelector", "useStore", "useDispatch"],
            "message": "Please use pre-typed versions from `src/app/hooks.ts` instead."
          }
        ]
      }
    ]
  },
  "overrides": [
    { "files": ["*.{c,m,}{t,j}s", "*.{t,j}sx"] },
    { "files": ["*{test,spec}.{t,j}s?(x)"], "env": { "jest": true } }
  ]
}
