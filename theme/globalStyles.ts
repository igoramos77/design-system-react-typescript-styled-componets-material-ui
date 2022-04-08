import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    text-transform: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Inter', sans-serif !important;
    
    ::selection {
      background-color: #ff0000;
      color: #fff;
    }
  }

  html, #root {
    
  }
`;