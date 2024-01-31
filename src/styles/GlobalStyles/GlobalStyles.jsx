import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import ManropeRegular from '../fonts/Manrope-Regular.ttf';
import ManropeMedium from '../fonts/Manrope-Medium.ttf'
import ManropeSemiBold from '../fonts/Manrope-SemiBold.ttf';
import MontserratRegular from '../fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '../fonts/Montserrat-SemiBold.ttf';

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
    background-color: #fff;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    font-family: 'Manrope', 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* :root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: #242424;
  background-color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
} */

/* code {
    font-family: 'Roboto', sans-serif;
} */

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
      /* padding: 0; */
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
    /* border: none; */
}

/* p:last-child {
    margin-bottom: 0;
} */
`;

export default GlobalStyle;
