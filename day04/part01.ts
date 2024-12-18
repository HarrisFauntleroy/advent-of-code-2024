// const wordSearch = await Bun.file("./data.txt").text();
// console.log(findWord("XMAS", wordSearch))

type Direction = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
type Position = [number, number];
type Grid = string[][];

// Grid parsing
export const parseGrid = (input: string): Grid => {
  return input
    .split("\n") // Split the string into lines by the newline character
    .map(val => val.trim()) // Trim any whitespace from start/end of each line
    .filter(Boolean) // Remove any empty lines
    .map(row => row.split("")); // Split each line into an array of characters
};

// Calculate position offset for a given direction
const getOffset = (position: Position, offset: number, direction: Direction): Position => {
  const [startRow, startCol] = position;
  const directionOffsets: Record<Direction, Position> = {
    'N': [startRow - offset, startCol],            // Up
    'NE': [startRow - offset, startCol + offset],   // Up + Right
    'E': [startRow, startCol + offset],            // Right
    'SE': [startRow + offset, startCol + offset],   // Down + Right
    'S': [startRow + offset, startCol],            // Down
    'SW': [startRow + offset, startCol - offset],   // Down + Left
    'W': [startRow, startCol - offset],            // Left
    'NW': [startRow - offset, startCol - offset]    // Up + Left
  };
  return directionOffsets[direction];
}

// Grid boundary checking
const isInBounds = (startPos: Position, grid: string[][], word: string, direction: Direction): boolean => {
  const endPos = getOffset(startPos, word.length - 1, direction)

  const [row, col] = endPos;
  const numRows = grid.length;
  const numCols = grid[0].length;
  return row >= 0 && row < numRows && col >= 0 && col < numCols;
}

// Word checking
const checkWordInDirection = (startPos: Position, grid: string[][], word: string, direction: Direction): boolean => {
  if (!isInBounds(startPos, grid, word, direction)) return false;

  for (let index = 0; index < word.length; index++) {
    const [currentRow, currentCol] = getOffset(startPos, index, direction);
    if (grid[currentRow][currentCol] !== word[index]) return false;
  }
  return true;
}

// Finding start positions
const findStartPosition = (grid: Grid, char: string): Position[] => {
  const positions: Position[] = [];
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === char) positions.push([rowIndex, colIndex]);
    });
  });
  return positions;
};

const DIRECTIONS: Direction[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export const findWord = (word: string, wordSearch: string) => {
  const grid = parseGrid(wordSearch);
  const foundPositions: Position[] = [];

  const startPositions = findStartPosition(grid, word[0]);

  startPositions.forEach((startPos) => {
    DIRECTIONS.forEach((direction) => {
      const wordFound = checkWordInDirection(startPos, grid, word, direction);
      if (wordFound) {
        foundPositions.push(startPos);
        console.log(`Found "${word}" at position [${startPos}] going ${direction}`);
      }
    });
  });

  return foundPositions.length
}
