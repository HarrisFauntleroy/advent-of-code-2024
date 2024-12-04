/**
 * Calculates the absolute difference between two numbers
 * @param a First number
 * @param b Second number
 * @returns Absolute difference between a and b
 */
export const difference = (a: number, b: number): number => {
  return Math.abs(a - b);
};

/**
 * Determines if the transition between two levels is safe
 * A safe transition has a difference between 1 and 3 inclusive
 * @param a First level
 * @param b Second level
 * @returns true if difference is between 1-3, false otherwise
 */
export const isLevelSafe = (a: number, b: number): boolean => {
  const maxIncrease = 3;
  const minIncrease = 1;
  return difference(a, b) <= maxIncrease && difference(a, b) >= minIncrease;
};

/**
 * Splits input string into individual report lines
 * Filters out empty lines
 * @param reports Multi-line string of reports
 * @returns Array of report strings
 */
export const parseReports = (reports: string) => {
  return reports.split("\n").filter(Boolean);
};

/**
 * Converts a space-separated string of numbers into an array of numbers
 * E.g., "1 2 3" becomes [1, 2, 3]
 * @param level Space-separated string of numbers
 * @returns Array of parsed numbers
 */
export const parseLevel = (level: string) => {
  return level.split(/\s+/).map(Number);
};
