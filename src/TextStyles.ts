class TextStyles {
  static RESET = '\x1b[0m';
  static RED = '\x1b[31m';
  static BLUE = '\x1b[34m';

  static red = (str: string) => `${TextStyles.RED}${str}${TextStyles.RESET}`;

  static blue = (str: string) => `${TextStyles.BLUE}${str}${TextStyles.RESET}`;
}

export default TextStyles;
