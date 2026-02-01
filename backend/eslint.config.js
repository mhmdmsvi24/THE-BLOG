import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, prettier, import: importPlugin.flatConfigs.recommended },
    extends: ["js/recommended", eslintConfigPrettier],
    languageOptions: { globals: globals.node },
  },
]);
