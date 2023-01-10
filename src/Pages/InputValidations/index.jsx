// Function to remove special characters,numbers
export const cleanInputWithSpace = (inp) => {
  if (inp) {
    return inp.replace(/[^a-zA-Z ]/g, "");
    // .replace(/\s/g, "");
  }
  return "";
};
//function to remove only special characters
export const cleanInputWithOutSymbol = (inp) => {
  if (inp) {
    return inp.replace(/[^a-zA-Z0-9 ]/g, "");
    // .replace(/\s/g, "");
  }
  return "";
};
//function to remove space
export const cleanEmailInput = (inp) => {
  if (inp) {
    return inp.replace(/\s/g, "");
  }
  return "";
};
// Function to remove special characters,numbers,space from a string
export const cleanInputWithOutSpace = (inp) => {
  if (inp) {
    return inp.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, "");
  }
  return "";
};
//function for only input Number
export const cleanNumberInput = (inp) => {
  if (inp) {
    return inp.replace(/(?!-)[^0-9.]/g, "").replace("-", "");
  } else {
    return "";
  }
};
//   export default {cleanPersonNameInput,}
