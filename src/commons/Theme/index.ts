import { DefaultTheme } from "styled-components";

const spacingBaseSize = 12;
// eslint-disable-next-line
const deviceWidths = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

const sizes = {
  extraSmall: `${spacingBaseSize / 2}px`,
  small: `${spacingBaseSize}px`,
  medium: `${spacingBaseSize * 2}px`,
  large: `${spacingBaseSize * 3}px`,
  extraLarge: `${spacingBaseSize * 4}px`
};

const fontSizes = {
  small: "1em",
  medium: "1.2em",
  large: "1.7em"
};

const animationTimes = {
  fast: ".3s",
  medium: ".5s",
  slow: ".8s"
};

const colors = {
  backgrounds: {
    main: "WHITESMOKE",
    second: "GAINSBORO"
  },
  foregrounds: {
    main: "WHITE",
    second: "LIGHTGRAY"
  },
  borders: {
    main: "SNOW",
    second: "SILVER"
  },
  texts: {
    main: "DIMGRAY",
    second: "DARKGRAY"
  }
};

const theme: DefaultTheme = {
  colors: {
    ...colors
  },
  padding: {
    ...sizes
  },

  mixins: {
    input: () => `
          background: ${colors.foregrounds.main};
          border: 1px solid ${colors.borders.main};
          padding: ${sizes.small} ${sizes.medium};
          border-radius: 1.5pt;
          transition: background ${animationTimes.fast} ease-out, border ${animationTimes.fast} ease-out;
          font-size: ${fontSizes.small};
          outline: none;
          &:hover {
              background: ${colors.backgrounds.second};
              border: 1px solid ${colors.borders.second};
          }
    `,
    button: () => `
          background: ${colors.backgrounds.main};
          border: 1px solid ${colors.borders.main};
          padding: ${sizes.small} ${sizes.medium};
          border-radius: 1.5pt;
          transition: background ${animationTimes.fast} ease-out, border ${animationTimes.fast} ease-out;
          font-size: ${fontSizes.small};
          &:hover {
              background: ${colors.backgrounds.second};
              border: 1px solid ${colors.borders.second};
          }
        `
  }
};

export default theme;
