"use strict";

const DEFAULT_AMBIGUOUS_WORDS = [
  "click here",
  "here",
  "link",
  "a link",
  "learn more",
];

const DEFAULT_REDUNDANT_WORDS = ["image", "picture", "photo"];

module.exports = {
  plugins: ["jsx-a11y"],
  rules: {
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-ambiguous-text": [
      "error",
      {
        words: [
          ...DEFAULT_AMBIGUOUS_WORDS,
          "こちら",
          "こちらをクリック",
          "もっとみる",
          "もっと見る",
          "詳細",
          "詳細をみる",
          "詳細を見る",
          "詳細はこちら",
          "詳細はコチラ",
        ],
      },
    ],
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/autocomplete-valid": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/control-has-associated-label": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": [
      "error",
      {
        words: [...DEFAULT_REDUNDANT_WORDS, "写真", "画像", "イメージ"],
      },
    ],
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    "jsx-a11y/no-noninteractive-element-interactions": "error",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/no-onchange": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/prefer-tag-over-role": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
  },
};
