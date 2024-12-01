import { loadInput } from "../../utils/utils";

const input = loadInput("input");

const partOne = () => {
  const firstListNumbers: number[] = [];
  const secondListNumbers: number[] = [];
  let result = 0;

  input.split("\n").forEach((line) => {
    const [x, y] = line.split(" ".repeat(3));

    if (x && y) {
      firstListNumbers.push(Number(x));
      secondListNumbers.push(Number(y));
    }
  });

  const sortedOne = firstListNumbers.sort((a, b) => (a -= b));
  const sortedTwo = secondListNumbers.sort((a, b) => (a -= b));

  sortedOne.forEach((item, idx) => {
    result += Math.abs(item - sortedTwo[idx]);
  });

  console.log(result);
};

const partTwo = () => {
  const firstListNumbers: number[] = [];
  const secondListNumbers: number[] = [];

  input.split("\n").forEach((line) => {
    const [x, y] = line.split(" ".repeat(3));

    if (x && y) {
      firstListNumbers.push(Number(x));
      secondListNumbers.push(Number(y));
    }
  });

  const result = firstListNumbers
    .map((number) => {
      const itemsInSecond = secondListNumbers.filter((item) => item === number);

      return number * itemsInSecond.length;
    })
    .reduce((acc, next) => (acc += next), 0);

  console.log(result);
};

partTwo();
