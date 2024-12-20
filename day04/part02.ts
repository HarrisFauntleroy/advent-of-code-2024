import {
  checkWordInDirection,
  findStartPosition,
  INTERCARDINAL_DIRECTIONS,
  getOffset,
  parseGrid,
} from "./helpers";
import { Grid, WordLocation, Position } from "./types";

export const findXPatterns = (wordSearch: string) => {
  const grid = parseGrid(wordSearch);
  const word = "MAS";

  // First, find all instances of MAS in any direction
  const allMASPatterns = findAllWordInstances(word, grid);
  const xPatterns: Array<[WordLocation, WordLocation]> = [];

  console.log("xPatterns", xPatterns);
  const part1 = xPatterns.map((location) => {
    return location.sort();
  });

  // For each MAS found, look for another MAS that intersects at the 'A'
  allMASPatterns.forEach((location1) => {
    allMASPatterns.forEach((location2) => {
      if (location1 === location2) return; // Skip same pattern

      const isValidXPattern = checkIfFormsX(location1, location2, grid);
      if (isValidXPattern) {
        xPatterns.push([location1, location2]);
      }
    });
  });

  // Divide by 2 since each X pattern is counted twice... for now
  return xPatterns.length / 2;
};

const findAllWordInstances = (word: string, grid: Grid): WordLocation[] => {
  const foundPatterns: WordLocation[] = [];
  const startPositions = findStartPosition(grid, word[0]);

  startPositions.forEach((startPos) => {
    INTERCARDINAL_DIRECTIONS.forEach((direction) => {
      if (checkWordInDirection(startPos, grid, word, direction)) {
        foundPatterns.push({ startPos, direction });
      }
    });
  });

  return foundPatterns;
};

const getMiddlePosition = (location: WordLocation, grid: Grid): Position => {
  const { startPos, direction } = location;
  // For "MAS", middle letter 'A' is at index 1
  return getOffset(startPos, 1, direction);
};

const checkIfFormsX = (
  loc1: WordLocation,
  loc2: WordLocation,
  grid: Grid,
): boolean => {
  // Get positions of middle 'A' for both patterns
  const middlePos1 = getMiddlePosition(loc1, grid);
  const middlePos2 = getMiddlePosition(loc2, grid);

  // Check if they intersect at the same 'A'
  const [row1, col1] = middlePos1;
  const [row2, col2] = middlePos2;

  if (row1 !== row2 || col1 !== col2) {
    return false; // Must share the same 'A'
  }

  // Check if they form valid diagonal patterns for an X
  // Only allow pairs of opposite directions
  const validPairs = new Set(
    [
      ["NW", "NE"],
      ["NW", "SW"],

      ["NE", "SE"],
      ["NE", "NW"],

      ["SE", "NE"],
      ["SE", "SW"],

      ["SW", "NW"],
      ["SW", "SE"],
    ].map((pair) => pair.join(",")),
  );

  const val = [loc1.direction, loc2.direction];
  console.log("val", val);
  return validPairs.has(val.join(","));
};

// const wordSearch = await Bun.file("./data.txt").text();
// console.log(findXPatterns(wordSearch));
