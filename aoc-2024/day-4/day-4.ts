import { loadInput } from "../../utils/utils";

const input = loadInput("input");

const matrix = input.split("\n").map((line) => line.split(""));

const checkTop = (matrix: string[][], x: number, y: number) => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += matrix[x - i]?.[y];
  }

  if (result === "XMAS") return 1;

  return 0;
};

const checkBottom = (matrix: string[][], x: number, y: number) => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += matrix[x + i]?.[y];
  }

  if (result === "XMAS") return 1;

  return 0;
};

const checkLeft = (matrix: string[][], x: number, y: number) => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += matrix[x]?.[y - i];
  }

  if (result === "XMAS") return 1;

  return 0;
};

const checkRight = (matrix: string[][], x: number, y: number) => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += matrix[x]?.[y + i];
  }

  if (result === "XMAS") return 1;

  return 0;
};

const checkTopLeftDiagonal = (matrix: string[][], x: number, y: number) => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += matrix[x - i]?.[y - i];
  }

  if (result === "XMAS") return 1;

  return 0;
};

const checkTopRightDiagonal = (matrix: string[][], x: number, y: number) => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += matrix[x - i]?.[y + i];
  }

  if (result === "XMAS") return 1;

  return 0;
};

const checkBottomRightDiagonal = (matrix: string[][], x: number, y: number) => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += matrix[x + i]?.[y + i];
  }

  if (result === "XMAS") return 1;

  return 0;
};

const checkBottomLeftDiagonal = (matrix: string[][], x: number, y: number) => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += matrix[x + i]?.[y - i];
  }

  if (result === "XMAS") return 1;

  return 0;
};

const partOne = () => {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result += checkTop(matrix, i, j);
      result += checkBottom(matrix, i, j);
      result += checkLeft(matrix, i, j);
      result += checkRight(matrix, i, j);
      result += checkTopLeftDiagonal(matrix, i, j);
      result += checkTopRightDiagonal(matrix, i, j);
      result += checkBottomRightDiagonal(matrix, i, j);
      result += checkBottomLeftDiagonal(matrix, i, j);
    }
  }

  console.log(result);
};

partOne();

const checkBottomRightTopLeftDiagonal = (
  matrix: string[][],
  x: number,
  y: number
) => {
  let result = `${matrix[x + 1]?.[y + 1]}${matrix[x][y]}${
    matrix[x - 1]?.[y - 1]
  }`;

  return result;
};

const checkTopLeftBottomRightDiagonal = (
  matrix: string[][],
  x: number,
  y: number
) => {
  let result = `${matrix[x - 1]?.[y - 1]}${matrix[x][y]}${
    matrix[x + 1]?.[y + 1]
  }`;

  return result;
};

const checkTopRightBottomLeftDiagonal = (
  matrix: string[][],
  x: number,
  y: number
) => {
  let result = `${matrix[x + 1]?.[y - 1]}${matrix[x][y]}${
    matrix[x - 1]?.[y + 1]
  }`;

  return result;
};

const checkBottomLeftTopRightDiagonal = (
  matrix: string[][],
  x: number,
  y: number
) => {
  let result = `${matrix[x - 1]?.[y + 1]}${matrix[x][y]}${
    matrix[x + 1]?.[y - 1]
  }`;

  return result;
};

const partTwo = () => {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const item = [
        checkTopLeftBottomRightDiagonal(matrix, i, j),
        checkTopRightBottomLeftDiagonal(matrix, i, j),
        checkBottomRightTopLeftDiagonal(matrix, i, j),
        checkBottomLeftTopRightDiagonal(matrix, i, j),
      ];

      const filtered = item.filter((potential) => potential === "MAS");

      if (filtered.length >= 2) result++; // Sometimes is more than 2.
    }
  }

  console.log(result);
};

partTwo();
