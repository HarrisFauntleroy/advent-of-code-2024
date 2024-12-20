import { Direction, Grid, Position } from "./types";

// Grid parsing
export const parseGrid = (input: string): Grid => {
  return input
    .split("\n") // Split the string into lines by the newline character
    .map((val) => val.trim()) // Trim any whitespace from start/end of each line
    .filter(Boolean) // Remove any empty lines
    .map((row) => row.split("")); // Split each line into an array of characters
};

// Calculate position offset for a given direction
export const getOffset = (
  position: Position,
  offset: number,
  direction: Direction,
): Position => {
  const [startRow, startCol] = position;
  const directionOffsets: Record<Direction, Position> = {
    N: [startRow - offset, startCol], // Up
    NE: [startRow - offset, startCol + offset], // Up + Right
    E: [startRow, startCol + offset], // Right
    SE: [startRow + offset, startCol + offset], // Down + Right
    S: [startRow + offset, startCol], // Down
    SW: [startRow + offset, startCol - offset], // Down + Left
    W: [startRow, startCol - offset], // Left
    NW: [startRow - offset, startCol - offset], // Up + Left
  };
  return directionOffsets[direction];
};

// Grid boundary checking
export const isInBounds = (
  startPos: Position,
  grid: string[][],
  word: string,
  direction: Direction,
): boolean => {
  const endPos = getOffset(startPos, word.length - 1, direction);

  const [row, col] = endPos;
  const numRows = grid.length;
  const numCols = grid[0].length;
  return row >= 0 && row < numRows && col >= 0 && col < numCols;
};

// Word checking
export const checkWordInDirection = (
  startPos: Position,
  grid: string[][],
  word: string,
  direction: Direction,
): boolean => {
  if (!isInBounds(startPos, grid, word, direction)) return false;

  console.log("word", word);

  return [...word].every((nextLetter, index) => {
    console.log("nextLetter", nextLetter);
    const [currentRow, currentCol] = getOffset(startPos, index, direction);
    const currentLetter = grid[currentRow][currentCol];
    return currentLetter === nextLetter;
  });
};

// Finding start positions
export const findStartPosition = (grid: Grid, char: string): Position[] => {
  const positions: Position[] = [];
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === char) positions.push([rowIndex, colIndex]);
    });
  });
  return positions;
};

export const DIRECTIONS: Direction[] = [
  "N",
  "NE",
  "E",
  "SE",
  "S",
  "SW",
  "W",
  "NW",
];

export const INTERCARDINAL_DIRECTIONS: Direction[] = ["NE", "SE", "SW", "NW"];
