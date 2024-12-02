/**
 *
 * @param a
 * @param b
 * @returns
 */
export const difference = (a: number, b: number): number => {
  return Math.abs(a - b);
};

/**
 *
 * @param a
 * @param b
 * @returns
 */
export const isLevelSafe = (a: number, b: number): boolean => {
  const maxIncrease = 3;
  const minIncrease = 1;
  return difference(a, b) <= maxIncrease && difference(a, b) >= minIncrease;
};

/**
 *
 * @param reports
 * @returns
 */
export const parseReports = (reports: string) => {
  return reports
    .split("\n")
    .map((it) => it.replaceAll(" ", ""))
    .filter(Boolean);
};

/**
 *
 * @param level
 * @returns
 */
export const parseLevel = (level: string) => {
  return level.split("").map(Number);
};
