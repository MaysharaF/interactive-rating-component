import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --light-grey: #969FAD;
    --medium-gray: #7C8798;
    --dark-blue: #262E38;
    --very-dark-blue: #131518;
    --black-gradient: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);

    --orange: #FC7614;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    background-color: var(--very-dark-blue);
  }

  body, input, button {
    font: 15px Overpass, sans-serif;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
  }
`;