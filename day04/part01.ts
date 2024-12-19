import {
  checkWordInDirection,
  findStartPosition,
  DIRECTIONS,
  parseGrid,
} from "./helpers";
import { Position } from "./types";

export const findWord = (searchTerm: string, input: string) => {
  const grid = parseGrid(input);
  const foundPositions: Position[] = [];

  const startPositions = findStartPosition(grid, searchTerm[0]);

  startPositions.forEach((startPos) => {
    DIRECTIONS.forEach((direction) => {
      const wordFound = checkWordInDirection(
        startPos,
        grid,
        searchTerm,
        direction,
      );
      if (wordFound) {
        foundPositions.push(startPos);
        // console.log(`Found "${searchTerm}" at position [${startPos}] going ${direction}`);
      }
    });
  });

  return foundPositions.length;
};

// const input = await Bun.file("./data.txt").text();
// console.log(findWord("XMAS", input))
