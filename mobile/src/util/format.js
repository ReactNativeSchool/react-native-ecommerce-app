export const money = num => {
  return `$${Math.round(num * 0.01 * 100) / 100}`;
};
