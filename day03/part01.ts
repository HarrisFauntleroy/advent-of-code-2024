export const mulInstructions = (instructions: string): number => {
  const regex = /mul\((\d+),(\d+)\)/g;
  let match: RegExpExecArray | null;
  let sum = 0;
  while ((match = regex.exec(instructions)) !== null) {
    sum += Number(match[1]) * Number(match[2]);
  }
  return sum;
};
