import { readFileSync } from "fs";

export const loadInput = (file: string = "input"): string =>
  readFileSync(file, { encoding: "utf-8" });
