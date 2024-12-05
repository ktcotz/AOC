import { loadInput } from "../../utils/utils";

const input = loadInput();

const getFirstFromInput = () => {
  const rulesObject: Record<number, number[]> = {};

  const [rules] = input.split(/\r?\n\r?\n/);

  rules.split("\n").forEach((line) => {
    const [first, second] = line.split("|").map((el) => Number(el));

    if (rulesObject[first] && !rulesObject[first].includes(second)) {
      rulesObject[first].push(second);
    } else {
      rulesObject[first] = [second];
    }
  });

  return rulesObject;
};

const calculate = () => {
  const rules = getFirstFromInput();

  const [_, updates] = input.split(/\r?\n\r?\n/);

  const betterUpdates = updates
    .split("\n")
    .map((line) => line.split(",").map((el) => Number(el)));

  const isValidUpdates = betterUpdates.map((update) => {
    return update.every((item, id) => {
      const afterItem = update.slice(id + 1);
      const rule = rules[item];

      if (afterItem.length === 0) return true;

      return afterItem.every((item) => rule?.includes(item));
    });
  });

  const sum = isValidUpdates
    .map((item, id) => {
      if (!item) return 0;
      const row = betterUpdates[id];
      const middle = row[Math.floor(row.length / 2)];

      return middle;
    })
    .reduce((acc, next) => (acc += next), 0);

  console.log(sum);
};

const partTwo = () => {
  const rules = getFirstFromInput();

  const [_, updates] = input.split(/\r?\n\r?\n/);

  const betterUpdates = updates
    .split("\n")
    .map((line) => line.split(",").map((el) => Number(el)));

  const isValidUpdates = betterUpdates.map((update) => {
    return update.map((item, id) => {
      const afterItem = update.slice(id + 1);
      const rule = rules[item];

      if (afterItem.length === 0) return true;

      return afterItem.every((item) => rule?.includes(item));
    });
  });

  const invalidUpdates = isValidUpdates.map((update, idx) => {
    if (!update.includes(false)) return 0;

    return betterUpdates[idx].map((item, id) => {
      const rule = rules[item];

      const nextItem = betterUpdates[idx][id + 1];

      if (!nextItem) return item;

      if (!rule?.includes(nextItem)) {
        [betterUpdates[idx][id], betterUpdates[idx][id + 1]] = [
          betterUpdates[idx][id + 1],
          betterUpdates[idx][id],
        ];

        return nextItem;
      }

      return item;
    });
  });

  const sum = invalidUpdates
    .map((item, id) => {
      if (!item) return 0;
      const row = betterUpdates[id];
      const middle = row[Math.floor(row.length / 2)];

      return middle;
    })
    .reduce((acc, next) => (acc += next), 0);

  console.log(sum);
};

partTwo();
