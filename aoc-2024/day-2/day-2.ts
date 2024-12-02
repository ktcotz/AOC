import { loadInput } from "../../utils/utils";

const input = loadInput("input");

const MIN = 1;
const MAX = 3;

const isValidLevel = (level: number[]) => {
  let type = "ASC";

  if (level[0] > level[1]) {
    type = "DESC";
  }

  for (let i = 0; i < level.length; i++) {
    let difference = Math.abs(level[i] - level[i + 1]);

    if (level[i] > level[i + 1] && type === "ASC") {
      return "UNSAFE";
    }

    if (level[i] < level[i + 1] && type === "DESC") {
      return "UNSAFE";
    }

    if (difference < MIN || difference > MAX) {
      return "UNSAFE";
    }
  }

  return "SAFE";
};

const partOne = () => {
  const levels = input
    .split("\n")
    .map((line) => line.split(" ").map((num) => Number(num)));

  const validLevels = levels.map((level) => isValidLevel(level));
  const partTwo = levels.map((level) => {
    const validated = level.map((lv, i) =>
      isValidLevel(level.filter((_, id) => id !== i))
    );

    return validated.includes("SAFE");
  });

  console.log(partTwo.filter((el) => Boolean(el)).length);

  return partTwo.filter((el) => Boolean(el));
};

partOne();
