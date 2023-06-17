import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Gasoek One', sans-serif;
    }
    body{
        background-color: ${(props) => props.theme.background};
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    #root{
        width: 100%;
    }
`;

export default GlobalStyles;
