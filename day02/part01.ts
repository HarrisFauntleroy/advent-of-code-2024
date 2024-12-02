import { isLevelSafe, parseLevel, parseReports } from "./helpers";

/**
 *
 * @param reports
 * @returns
 */
export const safeReports = (reports: string) => {
  const parsedReports = parseReports(reports);

  return parsedReports.map((level) => {
    const levels = parseLevel(level);

    const areAdjacentMovementsSafe = levels.every((level, index) => {
      if (index === levels.length - 1) return true;
      return isLevelSafe(level, levels[index + 1]);
    });

    const isIncreasing = levels[0] < levels[1];
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
 *
 * @param reports
 * @returns
 */
export const totalSafeReports = (reports: string) => {
  return safeReports(reports).filter(Boolean).length;
};
