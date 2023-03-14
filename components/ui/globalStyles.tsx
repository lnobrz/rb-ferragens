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
    overflow-x: hidden;
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
    background: radial-gradient(50% 50% at 50% 50%, #1B1B18 0%, #0A0800 100%) !important;
    margin: 0;
  }

  .secondaryTitleLeft {
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    text-align: left;
    &:before {
    content: url("/images/vertical-decoration.svg");
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
    text-align: right;
    &:after {
    content: url("/images/vertical-decoration.svg");
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 16px;
    margin-bottom: 20px;
  }
  }

  .tertiaryTitleLeft {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    &:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 58px;
    margin-right: 24px;
    background: #cdaf18;
    }
  }

  .tertiaryTitleRight {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    &:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 58px;
    margin-left: 24px;
    background: #cdaf18;
    }
  }

  .indexSectionParagraph {
    text-align: right;
    margin-top: 28px;
    margin-bottom: 50px;
  }

  .textStart {
    text-align: left;

    @media (min-width: 700px) {
      text-align: right;
      max-width: 50%
    }
  }

  .textEnd {
    text-align: right;

    @media (min-width: 700px) {
      text-align: left;
      max-width: 40%
    }

    @media (min-width: 700px) {
      max-width: 30%
    }

    @media (min-width: 1000px) {
      max-width: 20%
    }
  }

  .aboutButton {
    margin: 0px 0px 28px 20px;
  }
`;
