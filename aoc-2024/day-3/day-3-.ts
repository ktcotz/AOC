import { loadInput } from "../../utils/utils";

const input = loadInput("input");

const multiply = (a: number, b: number) => a * b;
let enabled = true;

const removed = (line: RegExpMatchArray | null) => {
  const mapped: string[] = [];

  if (!line) return mapped;

  for (let i = 0; i < line.length; i++) {
    if (enabled) {
      mapped.push(line[i]);
    }

    if (line[i] === "don't()") {
      enabled = false;
    }

    if (line[i] === "do()") {
      enabled = true;
    }
  }

  return mapped;
};

const partOne = () => {
  const lines = input.split("\n");

  const regexr = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

  const map = new Map([["mul", multiply]]);

  const filtered = lines.map((line) => {
    const matchLine = line.match(regexr);

    const validLine = removed(matchLine);

    return validLine
      ?.map((item) => {
        const name = item.slice(0, item.indexOf("("));

        const [firstValue, secondValue] = item
          .slice(item.indexOf("(") + 1, item.indexOf(")"))
          .split(",");

        const fn = map.get(name);

        if (!fn) return 0;

        return fn(Number(firstValue), Number(secondValue));
      })
      .reduce((acc, next) => (acc += next), 0);
  });

  let sum = 0;

  for (let i = 0; i < filtered.length; i++) {
    sum += filtered[i];
  }

  console.log(sum);
};

partOne();
