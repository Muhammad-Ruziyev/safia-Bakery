export const formatPrice = (number) => {
  return new Intl.NumberFormat().format(number / 1);
};
