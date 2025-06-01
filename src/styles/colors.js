const colors = {
  main: "#3e3e3e",
  blue: "#008cff",
  darkBlue: "#22405C",
  darkBlue2: "#182D40",
  light: "#bdbdbd",
  white: "#ffffff",
};

export const colorStyles = Object.keys(colors).reduce((acc, colorName) => {
  acc[`color_${colorName}`] = { color: colors[colorName] };
  acc[`bg_${colorName}`] = { backgroundColor: colors[colorName] };
  acc[`border_${colorName}`] = { borderColor: colors[colorName] };
  return acc;
}, {});

export default colors