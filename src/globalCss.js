import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: IBMPlexSans;
    src: local('IBM Plex Sans Light'),
        url('/fonts/IBMPlexSans-Light.woff2') format('woff2'),
        url('/fonts/IBMPlexSans-Light.woff') format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: IBMPlexSans;
    src: local('IBM Plex Sans'),
        url('/fonts/IBMPlexSans-Regular.woff2') format('woff2'),
        url('/fonts/IBMPlexSans-Regular.woff') format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: IBMPlexSans;
    src: local('IBM Plex Sans Medium'),
        url('/fonts/IBMPlexSans-Medium.woff2') format('woff2'),
        url('/fonts/IBMPlexSans-Medium.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: IBMPlexSans;
    src: local('IBM Plex Sans SemiBold'),
        url('/fonts/IBMPlexSans-SemiBold.woff2') format('woff2'),
        url('/fonts/IBMPlexSans-SemiBold.woff') format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: IBMPlexMono;
    src: local('IBM Plex Mono Light'),
        url('/fonts/IBMPlexMono-Light.woff2') format('woff2'),
        url('/fonts/IBMPlexMono-Light.woff') format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: IBMPlexMono;
    src: local('IBM Plex Mono'),
        url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'),
        url('/fonts/IBMPlexMono-Regular.woff') format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: IBMPlexMono;
    src: local('IBM Plex Mono Medium'),
        url('/fonts/IBMPlexMono-Medium.woff2') format('woff2'),
        url('/fonts/IBMPlexMono-Medium.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: IBMPlexMono;
    src: local('IBM Plex Mono SemiBold'),
        url('/fonts/IBMPlexMono-SemiBold.woff2') format('woff2'),
        url('/fonts/IBMPlexMono-SemiBold.woff') format('woff');
    font-weight: 600;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
    line-height: normal;
    color: inherit;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, img, div {
    display: block;
    box-sizing: border-box;
  }
  a, input, textarea, button {
    outline: none!important;
    background: transparent;
    border: 0;
    resize: none;
    text-decoration: none;
  }
  button {
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *, *:before, *:after{
    box-sizing: inherit;
    outline: none!important
  }
  body {
    font-family: IBMPlexSans, 'Helvetica Neue', Arial, sans-serif;
    font-style: normal;
    background: #fafafa;
  }
  .text_overflow{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  [disabled] {
    pointer-events: none;
  }
  select {
    appearance: none;
  }
  .hidden, [hidden] {
    display: none !important;
  }

  .ant-progress-inner {
    background: #fff!important;
  }

`;
