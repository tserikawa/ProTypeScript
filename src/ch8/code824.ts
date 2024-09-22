import { performance } from "perf_hooks";

setTimeout(() => {
  console.log("タイマーが呼び出されました。");
}, 100);

const startTime: number = performance.now();
let count: number = 0;
while (performance.now() - startTime < 1000) {
  count++;
}
// 同期処理である次のconsole.logが先に実行される
console.log(count);
