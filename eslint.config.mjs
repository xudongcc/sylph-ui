import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/.vercel/**",
      "**/out/**",
      "**/build/**",
      "**/dist/**",
      "**/coverage/**",
      "**/.source/**",
      "packages/shadcn-ui/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("turbo"),
  ...compat.extends("prettier"),
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
          noSortAlphabetically: false,
          multiline: "last",
        }
      ],
    },
    settings: {
      next: {
        rootDir: ["apps/*/"],
      },
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
