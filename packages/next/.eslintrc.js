module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    // This rule appears to serve no purpose and the docs don't even attempt to
    // explain why it's a good idea.
    "react/no-children-prop": "off",
    // There are many legitimate uses for empty functions and the intent of the
    // code is quite obvious.
    "@typescript-eslint/no-empty-function": "off",
    // Null assertions are easy to spot during code review, and the
    // alternatives are typically very verbose or require refactoring.
    "@typescript-eslint/no-non-null-assertion": "off",
    // Explicit any is easy to spot in code review, and the alternatives can
    // require spending a lot of time to write proper TypeScript types for
    // little gain.
    "@typescript-eslint/no-explicit-any": "off",
    // Infinite loops are unlikely to be placed by accident.
    "no-constant-condition": ["error", { checkLoops: false }],
  },
};
