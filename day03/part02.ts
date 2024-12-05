export const mulInstructionsWithControls = (instructions: string): number => {
  let sum = 0;
  let enabled = true;

  const mulRegex = /mul\((\d+),(\d+)\)/g;
  const controlRegex = /(don't|do)\(\)/g;

  // Find all control instructions and their positions
  const controls: { position: number; enabled: boolean }[] = [];

  let controlMatch: RegExpExecArray | null;

  while ((controlMatch = controlRegex.exec(instructions)) !== null) {
    controls.push({
      position: controlMatch.index,
      enabled: controlMatch[1] === "do",
    });
  }

  let mulMatch: RegExpExecArray | null;

  while ((mulMatch = mulRegex.exec(instructions)) !== null) {
    const relevantControls = controls.filter(
      (c) => c.position < mulMatch!.index,
    );
    if (relevantControls.length > 0) {
      enabled = relevantControls[relevantControls.length - 1].enabled;
    }

    if (enabled) {
      const num1 = Number(mulMatch[1]);
      const num2 = Number(mulMatch[2]);
      sum += num1 * num2;
    }
  }

  return sum;
};
