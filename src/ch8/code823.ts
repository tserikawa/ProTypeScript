import { readFile } from "fs";
import { performance } from "perf_hooks";

const startTime: number = performance.now();
// readFileは非同期関数
readFile("./foo.txt", "utf8", (err, result) => {
  const endTime: number = performance.now();
  // ファイルの読み込みには時間がかかる。
  console.log(`${endTime - startTime}ミリ秒かかりました。`);
  // 処理が成功した時はerrはnullになる
  const success: Boolean = err === null;
  if (success) {
    console.log(result);
  } else {
    console.log(err?.message);
  }
});

console.log("読み込み開始");
