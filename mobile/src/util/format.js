export const money = num => {
  return (num * 0.01).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
