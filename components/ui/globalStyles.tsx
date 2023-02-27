import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    background-color: #1B1A18;
    margin: 0;
  }

    .secondaryTitleLeft {
    align-items: center;
    justify-content: flex-start;
    &:before {
    content: url("/images/secondary-title-decoration.svg");
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 16px;
    margin-bottom: 18px;
  }
  }

  .secondaryTitleRight {
    align-items: center;
    justify-content: flex-end;
    &:after {
    content: url("/images/secondary-title-decoration.svg");
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 16px;
    margin-bottom: 20px;
  }
  }

  .tertiaryTitleLeft {
    margin-left: 20px;
    &:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 58px;
    margin-right: 24px;
    background: #cdaf18;
    border-radius: 1px;
    }
  }

    .tertiaryTitleRight {
    margin-right: 20px;
    &:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 58px;
    margin-left: 24px;
    background: #cdaf18;
    border-radius: 1px;
    }
  }

  .indexSectionParagraph {
    text-align: right;
    margin-top: 28px;
    margin-bottom: 50px;
  }
`;
