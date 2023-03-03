const regex = /^#([0-9A-F]{3}){1,2}$/i;

export const validateColor = (color) => {
  const valid = (color.length === 4 || color.length === 7)
    && regex.test(color);

  return valid;
};