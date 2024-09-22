export { }

/* 2.1.1 文と式の基本 */
//---
// // 変数宣言の"文"
// // 右辺は文字列を表す"式"
// const greeting = "Hello, ";
// const target = "world!";
// // greeting+targetは式
// console.log(greeting + target);

//---
// // 変数名も式として扱える
// const greeting = "Hello, ";
// const target = greeting;
// console.log(greeting + target);

//---
// 文字列リテラルは式なのでこういう書き方もできる
const greeting = "Hello, ";
const text = greeting + "world!";
console.log(text);