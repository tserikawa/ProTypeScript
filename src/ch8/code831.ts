import { readFile } from "fs/promises";

const p: Promise<string> = readFile("foo.txt", "utf8");

p.then((data) => console.log(data));
