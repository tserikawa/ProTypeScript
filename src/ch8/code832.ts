import { readFile } from "fs/promises";

const p: Promise<string> = readFile("fo.txt", "utf8");

// thenは成功した時に実行する関数
p.then((data) => console.log(`成功しました。${data}`));
p.then((result) => console.log("1"));
p.then((result) => console.log("2"));
p.then((result) => console.log("3"));

// catchは失敗した時に実行する関数
// errorはunknown型とすると良い。
p.catch((error: unknown) => console.error(`失敗しました。${error}`));
