import { Linter } from "eslint";
import next from "eslint-config-next";

const config: Linter.FlatConfig[] = [
  ...next(),
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "react/no-unescaped-entities": "error", // Keep this as error
    },
  },
];

export default config;
