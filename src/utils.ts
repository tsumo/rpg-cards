export const partition = <T>(arr: T[], n: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += n) {
    result[result.length] = arr.slice(i, i + n);
  }
  return result;
};

export const constructFilter = (brightness?: number, contrast?: number) => {
  let result = "grayscale(1)";
  if (brightness !== undefined) result = `${result} brightness(${brightness})`;
  if (contrast !== undefined) result = `${result} contrast(${contrast})`;
  return result;
};
