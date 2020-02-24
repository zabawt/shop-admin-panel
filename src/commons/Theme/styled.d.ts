import "styled-components";

interface IColors {
  main: string;
  second: string;
}

interface ISizes {
  extraSmall: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgrounds: IColors;
      foregrounds: IColors;
      borders: IColors;
      texts: IColors;
    };
    padding: ISizes;
    mixins: {
      [key: string]: (...params) => string;
    };
  }
}
