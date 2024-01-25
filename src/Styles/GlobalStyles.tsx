import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --color-white: white;
  --color-white-dark: #F5F5F5;
  --color-black: #000000;
  --color-black-light: rgba(0, 0, 0, 0.3);
  --color-black-border: rgba(0, 0, 0, 0.296);

  --color-orange-icon: #ed593b;
  --color-grey-icon: #bab7b6;

  --color-grey-inputBorder: #828282;

  --color-red-button: #DB4444;
  
  --color-white-text: #FAFAFA;

  --color-grey-text: #7D8184;

`;

export default GlobalStyles;
