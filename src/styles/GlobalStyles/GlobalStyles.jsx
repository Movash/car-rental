import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import ManropeRegular from '../../fonts/Manrope/Manrope-Regular.ttf';
import ManropeMedium from '../../fonts/Manrope/Manrope-Medium.ttf';
import ManropeSemiBold from '../../fonts/Manrope/Manrope-SemiBold.ttf';
import MontserratRegular from '../../fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratSemiBold from '../../fonts/Montserrat/Montserrat-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'ManropeRegular';
        src: local('ManropeRegular'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeMedium';
        src: local('ManropeMedium'),
        url(${ManropeMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeSemiBold';
        src: local('ManropeSemiBold'),
        url(${ManropeSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'),
        url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'),
        url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

body {
    background-color: var(--white-color);
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    font-family: 'ManropeRegular', sans-serif;
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

::-webkit-scrollbar {
    width: 24px;
}

::-webkit-scrollbar-thumb {
    background: var(--black-opacity-5-color);
    border-radius: 24px;
    border: 8px solid white;
}

::-webkit-scrollbar-track {
    background: none;
    margin-top: 6px;
    margin-bottom: 6px;
}
`;

export default GlobalStyle;
