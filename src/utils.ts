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

const imageFolders = {
  cronus: Object.values(
    import.meta.glob("./assets/cronus/*.png", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[],
  gear: Object.values(
    import.meta.glob("./assets/gear/*.png", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[],
  montero: Object.values(
    import.meta.glob("./assets/montero/*.png", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[],
  protection: Object.values(
    import.meta.glob("./assets/protection/*.png", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[],
  sotillo: Object.values(
    import.meta.glob("./assets/sotillo/*.png", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[],
  weapons: Object.values(
    import.meta.glob("./assets/weapons/*.png", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[],
};

export const image = (folder: keyof typeof imageFolders, name: string) => {
  // TODO: placeholder image instead of empty string
  return imageFolders[folder].find((i) => i.includes(name)) || "";
};
