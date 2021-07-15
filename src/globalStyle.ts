import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import bg from "assets/bg.png";

export const Device = {
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1440px)`,
};

const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: local('Material Icons'),
            local('MaterialIcons-Regular');
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        user-select: none;
        vertical-align: middle;
        text-rendering: optimizeLegibility;
    }
    
    /* Rules for sizing the icon. */
    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }

    /* Rules for using icons as black on a light background. */
    .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
    .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

    /* Rules for using icons as white on a dark background. */
    .material-icons.md-light { color: rgba(255, 255, 255, 1); }
    .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc9.ttf) format('truetype');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc9.ttf) format('truetype');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3aPw.ttf) format('truetype');
}

@font-face {
  font-family: 'zapfhumnst';
  src:
       url('Zap601Rm.ttf')  format('truetype')
}

    ::-webkit-scrollbar {
        width: 4px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--secondary);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-variant);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        -moz-tab-size: 4;
        tab-size: 4;
    }

    #root, html, body {
        height: 100vh;
    }

    html {
        font-size: 50%;
        scroll-behavior: smooth;

        @media ${Device.laptop} {
            font-size: 62.5%;
        }
    }
    
    body {
        --shadow0: 0 0.8px 2.7px rgba(0, 0, 0, 0.13),
  0 2.7px 8.9px rgba(0, 0, 0, 0.093),
  0 12px 40px rgba(0, 0, 0, 0.08)
;
        --shadow1: 0 3.9px 2.6px rgba(0, 0, 0, 0.035), 0 31px 21px rgba(0, 0, 0, 0.07);
        --shadow1: inset 0 0.8px 2.7px rgba(0, 0, 0, 0.13),
inset  0 2.7px 8.9px rgba(0, 0, 0, 0.093),
inset  0 12px 40px rgba(0, 0, 0, 0.08)
;
        --primary: #412c43;
        --primary-variant: #80a99f;
        --secondary: #d2ae6d;
        --secondary-variant: #e4e0d9;
        --on-secondary: rgba(255, 255, 255, 0.87);
        --on-secondary-variant: rgba(255, 255, 255, 0.05);
        --background: #efefef;
        --on-background: rgba(0, 0, 0, 0.87);
        --on-background-variant: rgba(0, 0, 0, 0.6);
        --on-background-disabled: rgba(0, 0, 0, 0.038);
        --surface: #d7d7d7;
        --error: #c51162;
        --overlay: #1e1e1e66;
        --font-family: "zapfhumnst";
        --font-family-alt: "Source Sans Pro";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        font: 300 1.2rem/2rem var(--font-family);
        color: var(--on-background);
        background-color: #fafafa;
    background-color: var(--secondary-variant);
        background-image: url(${bg});
        background-repeat: repeat;
        overflow-x: hidden;
    }

    button,
    input[type="submit"] {
        padding: 7px 16px;
        margin: 4px;
        background: none;
        border-radius: 4px;
        border: 1px solid transparent;
        outline: none;
        box-shadow: none;
        letter-spacing: 0.1px;
        letter-spacing: 0.01rem;
        font: 400 1.5rem/2.8rem var(--font-family);
        text-transform: uppercase;
        color: var(--secondary);
        transition: 0.1s ease-in-out;
    }

    button:hover,
    input[type="submit"]:hover {
        background-color: var(--on-background-disabled);
        cursor: pointer;
    }

    button:focus,
    input[type="submit"]:focus {
        outline: none;
    }

    button:disabled,
    input[type="submit"]:disabled {
        cursor: default;
        background: none;
        color: var(--on-background-disabled);
    }

    select:hover {
        cursor: pointer;
    }

    input[type="search"],
    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="tel"],
    input[type="date"],
    input[type="time"],
    input[type="password"],
    textarea,
    select {
        width: 100%;
        padding: 12px 16px;
        outline: none;
        border: 1px solid var(--on-background-disabled);
        background: var(--on-background-disabled);
        border-radius: 4px;
        letter-spacing: 0.1px;
        letter-spacing: 0.01rem;
        font: 400 1.3rem/2rem var(--font-family-alt);
        color: var(--on-background);
        transition: 0.1s ease-in-out;
    }

    input[type="number"] {
        text-align: right;
    }

    textarea {
        resize: none;
    }

    input[type="search"]:focus,
    input[type="text"]:focus,
    input[type="number"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus,
    input[type="date"]:focus,
    input[type="time"]:focus,
    input[type="password"]:focus,
    textarea:focus,
    select:focus {
        outline: none;
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid var(--secondary);
    }

    input[type="checkbox"] {
        display:none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: var(--on-background);
        -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
        border-width: 1px;
        border-style: solid;
        border-color: #2f2f2f;
        border-image: none;
    }

    b {
        font-weight: 500;
    }

    p {
        font: 300 1.5rem/2.8rem var(--font-family-alt);
        margin: 0;
    }

    h2 {
        letter-spacing: 0px;
        letter-spacing: 0rem;
        font: 600 2.4rem/3.2rem var(--font-family);
        text-align: center;
        text-transform: uppercase;
        margin: 20px 0 40px 0;
    }

    h3 {
        letter-spacing: 0.05px;
        letter-spacing: 0.005rem;
        font: 500 2.4rem/3.2rem var(--font-family);
        margin: 0px;
    }

    h4 {
        letter-spacing: 0.05px;
        letter-spacing: 0.005rem;
        font: 400 2rem/2.8rem var(--font-family-alt);
        margin: 20px 0;
    }

    label {
        letter-spacing: 0.1px;
        letter-spacing: 0.01rem;
        font: 400 1.3rem/2.4rem var(--font-family);
    }
`;

export default GlobalStyle;
