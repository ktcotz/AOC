import { readFileSync } from "fs";

export const loadInput = (file: string = "input") =>
  readFileSync(file, { encoding: "utf-8" });
