import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html,
    body,
    canvas,
    img,
    p {
    font-family: 'Ubuntu', sans-serif;
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    }

    hr {
    border: 0;
    border-bottom: 2px solid #323232;
    width: 90%;
    max-width: 500px;
    margin: auto;
    }

    a {
    color: skyblue !important;
    }
`;
