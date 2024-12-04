import { isLevelSafe, parseLevel, parseReports } from "./helpers";

/**
 * Takes a string of reports and returns an array of booleans indicating whether each report is safe.
 * A report is safe if:
 * 1. All adjacent movements are within a safe range (1-3)
 * 2. The sequence maintains a consistent direction (all increasing or all decreasing)
 * @param reports Multi-line string of reports
 * @returns Array of booleans, true for safe reports
 */
export const safeReports = (reports: string): boolean[] => {
  const parsedReports = parseReports(reports);

  return parsedReports.map((level) => {
    const levels = parseLevel(level);

    // Check if all adjacent movements are within safe range
    const areAdjacentMovementsSafe = levels.every((level, index) => {
      if (index === levels.length - 1) return true;
      return isLevelSafe(level, levels[index + 1]);
    });

    // Determine if sequence is increasing or decreasing
    const isIncreasing = levels[0] < levels[1];
    // Check if sequence maintains consistent direction
    const isConsistent = levels.every((level, index) => {
      if (index === levels.length - 1) return true;
      return isIncreasing
        ? level < levels[index + 1]
        : level > levels[index + 1];
    });

    return areAdjacentMovementsSafe && isConsistent;
  });
};

/**
 * Counts the total number of safe reports in the input string
 * @param reports Multi-line string of reports
 * @returns Number of safe reports
 */
export const countSafeReports = (reports: string) => {
  return safeReports(reports).filter(Boolean).length;
};
