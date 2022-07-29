module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: "module",
    },
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      "jest/globals": true,
    },
    extends: [
      /**
       * Airbnb rules are considered the gold standard for React projects.
       * For details on specific rule choices, read their well-commented rule files:
       * Base: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules
       * React + Accessibility: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb/rules
       *
       * Airbnb extends the recommended rules for the following:
       * - eslint-plugin-import - https://github.com/benmosher/eslint-plugin-import
       * - eslint-plugin-react - https://github.com/yannickcr/eslint-plugin-react
       * - eslint-plugin-react-hooks - https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
       * - eslint-plugin-jsx-a11y - https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
       */
      "airbnb",
      "airbnb/hooks",
  
      /**
       * Provides marked up hints in your editor for browser compatibility.
       * https://github.com/amilajack/eslint-plugin-compat
       */
      "plugin:compat/recommended",
  
      /**
       * This plugin intends to support linting of ES2015+ (ES6+) import/export syntax,
       * and prevent issues with misspelling of file paths and import names.
       * https://github.com/benmosher/eslint-plugin-import#installation
       */
      "plugin:import/recommended",
  
      /**
       * Typescript support for eslint-plugin-import
       * https://github.com/benmosher/eslint-plugin-import#typescript
       */
      "plugin:import/typescript",
  
      /**
       * React 17 automatically handles the React imports and does not need to be in scope
       */
      "plugin:react/jsx-runtime",
  
      /**
       * Enable ESLint prettier dependencies to display prettier errors as ESLint errors.
       * A nice benefit is that formatting across the project can be automatically fixed using ESLint's --fix option.
       * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
       * https://github.com/prettier/eslint-config-prettier#special-rules
       *
       * This should be the last configuration in the extends array.
       */
      "plugin:prettier/recommended",
    ],
    overrides: [
      /**
       * ----------------------
       * TypeScript Overrides.
       * ----------------------
       */
      {
        files: ["**/*.{ts,tsx}"],
        /**
         * Supporting TypeScript best practices.
         * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs
         */
        extends: ["plugin:@typescript-eslint/recommended"],
      },
      /**
       * ----------------
       * Jest Overrides.
       * ----------------
       */
      {
        files: ["**/{src,tests}/**/*.{spec,test,tests}.*"],
        /**
         * Supporting Jest best practices
         * https://github.com/jest-community/eslint-plugin-jest#recommended
         * https://github.com/testing-library/eslint-plugin-jest-dom#recommended-configuration
         * https://github.com/testing-library/eslint-plugin-testing-library#react
         */
        extends: [
          "plugin:jest/recommended",
          "plugin:jest-dom/recommended",
          "plugin:testing-library/react",
        ],
        rules: {
          "compat/compat": "off",
          // TODO: Need to enable it future. These rules will cause breaking changes
          // "testing-library/no-render-in-setup": "off",
          // "testing-library/no-unnecessary-act": "off",
          // "testing-library/no-wait-for-side-effects": "off",
          // "testing-library/no-wait-for-multiple-assertions": "off",
          // "testing-library/prefer-screen-queries": "off",
          // "testing-library/prefer-presence-queries": "off",
          // "testing-library/no-node-access": "off",
          // "testing-library/no-container": "off",
        },
      },
    ],
    plugins: [
      /**
       * Finds and removes unused ES6 modules.
       * https://www.npmjs.com/package/eslint-plugin-unused-imports
       */
      "unused-imports",
    ],
    rules: {
      /**
       * -------------------
       * Bug Fix Overrides.
       * -------------------
       */
      // Fix for - 'ENUM' is already declared in the upper scope.
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
  
      // Fix for - 'React' was used before it was defined.
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
  
      /**
       * ----------------------------------------------------------------
       * Recommended rulesets for eslint-plugin-unused-imports.
       * https://github.com/sweepline/eslint-plugin-unused-imports#usage
       * ----------------------------------------------------------------
       */
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
  
      /**
       * -------------------
       * General Overrides.
       * -------------------
       */
      // Allow importing a module without specifying the file extension for files with extension js,jsx,ts,tsx.
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
  
      // Allow named exports when module only contains a single export.
      "import/prefer-default-export": "off",
  
      /**
       * Prevent importing packages through relative paths.
       * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md
       */
      "import/no-relative-packages": ["error"],
  
      // Allow JSX in the following file extensions.
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
  
      // Allow prop spreading.
      "react/jsx-props-no-spreading": "off",
  
      // Using TypeScript interfaces for prop type validation instead.
      "react/prop-types": "off",
  
      // Allow dev dependencies to be imported in non-runtime locations
      "import/no-extraneous-dependencies": "off",
  
      // This rule is aimed to enforce consistent function types for function components
      "react/function-component-definition": "off",
  
      // A fragment is redundant if it contains only one child, or if it is the child of a html element, and is not a keyed fragment.
      // allowExpressions : When true single expressions in a fragment will be allowed
      "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
  
      // TODO: Need to enable these rules once following issues has been resolved on eslint-airbnb
      // Open Issue: https://github.com/iamturns/eslint-config-airbnb-typescript/issues/182#issuecomment-970687682
      "react/no-namespace": "off",
      "react/no-arrow-function-lifecycle": "off",
      "react/no-invalid-html-attribute": "off",
      "react/no-unused-class-component-methods": "off",
      "react/no-unescaped-entities": "off",
      "react/require-default-props": "off",
    },
    settings: {
      react: {
        // Tell eslint-plugin-react to automatically detect the version of React to use.
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          // Allow absolute path imports alongside TypeScript and Webpack configs.
          paths: ["app"],
        },
      },
    },
  };
  