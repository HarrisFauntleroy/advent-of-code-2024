export type Direction = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";

export type Position = [number, number];

export type Grid = string[][];

export type WordLocation = {
  startPos: Position;
  direction: Direction;
};
