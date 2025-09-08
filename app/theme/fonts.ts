

const fonts = {
  figtree300: "FigtreeLight",
  figtree400: "FigtreeRegular",
  figtree400Italic: "FigtreeRegularItalic",
  figtree500: "FigtreeMedium",
  figtree600: "FigtreeSemiBold",
  figtree700: "FigtreeBold",
  figtree700Italic: "FigtreeBoldItalic",
  figtree800: "FigtreeExtraBold",
  figtree900: "FigtreeBlack",
  instruction400: "Instruction",
  instruction400Italic: "InstructionItalic",
  instruction700: "InstructionBold",
  instruction700Italic: "InstructionBoldItalic",
} as const;

export type FontName = keyof typeof fonts;
export default fonts;
