import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { Montserrat, Manrope } from 'styles/fonts/fonts';

const GlobalStyle = createGlobalStyle`

    ${Manrope}
    ${Montserrat}

body {
    background-color: var(--white-color);
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    font-family: 'Manrope', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
    color: currentColor;
}

ul,
ol {
    list-style: none;
    padding: 0;
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

input,
textarea,
select,
button {
    font: inherit;
}

button {
    cursor: pointer;
    border: none;
}
`;

export default GlobalStyle;
