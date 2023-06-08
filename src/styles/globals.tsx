import { Global, css } from "@emotion/react";

const style = css`
  @font-face {
    font-family: "AppleSD";
    src: url("/static/fonts/AppleSDGothicNeoR.ttf");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "AppleSD";
  }

  #__next {
    min-height: 100vh;
  }

  html {
    padding: 0;
    margin: 0;
    line-height: 1.15;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
  }
  main {
    flex: 1;
  }
`;

export const globalStyles = <Global styles={style} />;
