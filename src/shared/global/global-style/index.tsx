import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: #121214;
        padding: 1.875em;
        text-align: center;
        min-height: 100vh;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    #root {
        flex: 1;

        display: flex;
        flex-direction: column;
        gap: 5.28vh;

        max-height: 800px;
        max-width: 700px;
    }

    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
