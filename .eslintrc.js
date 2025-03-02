module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-query/recommended",
    "plugin:json/recommended",
    "plugin:perfectionist/recommended-natural",
    "prettier",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: [
    ".vscode",
    "**/fonts/*.ttf",
    "playwright.config.ts",
    "package.json",
    "tsconfig.json",
    "src/themes.ts",
    "jest.config.js",
    "postcss.config.js",
    "public/mockServiceWorker.js",
    "public/sw.js",
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.json", "*.mjs"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              [
                "^react",
                "^@tanstack",
                "^@sentry",
                "^@testing-library",
                "^(?!@)",
                "^",
              ],
              ["^@advisor"],
              ["^@"],
              ["^\\u0000"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
    {
      files: ["*.stories.tsx", "*.stories.ts"], // Patterns to match Storybook files
      rules: {
        "@typescript-eslint/no-empty-function": "off",
        // its part of the syntax
        "import/no-default-export": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    extraFileExtensions: [".json"],
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "react",
    "jsx-a11y",
    "readable-tailwind",
    "@typescript-eslint",
    "import",
    "simple-import-sort",
    "prettier",
    "react-query",
    "perfectionist",
    "testing-library",
  ],

  root: true,
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/keyword-spacing": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": "off",

    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-explicit-any": "off",

    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: [
          "class",
          "export",
          "return",
          "function",
          "interface",
          "type",
          "if",
          "switch",
          "try",
        ],
        prev: ["*"],
      },
      {
        blankLine: "any",
        next: ["export"],
        prev: ["export"],
      },
    ],
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/space-infix-ops": "error",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/type-annotation-spacing": "error",
    "array-bracket-spacing": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    eqeqeq: ["error", "smart"],
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    indent: "off",
    "json/*": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "warn",
      {
        code: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "naming-convention": [0, { format: "PascalCase", type: "enumMember" }],
    "no-console": ["error", { allow: ["error", "warn", "log"] }],
    "no-duplicate-imports": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "no-nested-ternary": "error",
    "no-restricted-imports": [
      "error",

      {
        patterns: [
          {
            group: ["classnames"],
            message: "Use `cnTwMerge` from `@utils/cnTwMerge`",
          },
          {
            group: ["tailwind-merge"],
            message: "Use `cnTwMerge` from `@utils/cnTwMerge`",
          },
        ],
      },
    ],
    "no-template-curly-in-string": "error",
    "object-curly-spacing": ["error", "always"],

    "perfectionist/sort-exports": "off",
    "perfectionist/sort-imports": "off",
    "perfectionist/sort-intersection-types": "off",
    "perfectionist/sort-named-imports": "off",
    "perfectionist/sort-union-types": "off",
    "prefer-template": "error",
    "prettier/prettier": "error",
    quotes: ["error", "double"],
    "react/button-has-type": "error",
    "react/destructuring-assignment": "error",
    "react/display-name": "off",
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { children: "never", propElementValues: "always", props: "never" },
    ],
    "react/jsx-curly-spacing": [
      2,
      {
        spacing: {
          objectLiterals: "never",
        },
        when: "never",
      },
    ],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-fragments": "error",
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": [
      "error",
      { checkFragmentShorthand: true, warnOnDuplicates: true },
    ],
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowFunctions: true,
        ignoreDOMComponents: true,
      },
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-props": "error",
    "react/jsx-tag-spacing": [2, { beforeSelfClosing: "always" }],
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "error",
    "react/no-array-index-key": "error",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-invalid-html-attribute": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-state": "error",
    "react/prefer-stateless-function": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "readable-tailwind/multiline": "off",
    "readable-tailwind/sort-classes": "off",
    semi: ["error", "always"],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "space-in-parens": ["error", "never"],
    "template-curly-spacing": ["error", "never"],
    "testing-library/no-debugging-utils": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
