// commitlint.config.js
module.exports = {
  plugins: ["commitlint-plugin-jira-rules"],
  extends: ["@commitlint/config-conventional", "jira"],
  rules: {
    // https://commitlint.js.org/#/reference-rules
    "header-min-length": [2, "always", 12],
    "subject-case": [
      2,
      "always",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
  },
};
