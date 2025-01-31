export const partition = <T>(arr: T[], n: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += n) {
    result[result.length] = arr.slice(i, i + n);
  }
  return result;
};
