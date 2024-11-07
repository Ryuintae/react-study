const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let N = Number(input[0]);
let list = input[1].split(" ").map(Number);
// let max = list[0], min = list[0];

// for (let i = 0; i <= N; i++) {
//     if (max < list[i]) {
//         max = list[i];
//     }
//     if (min > list[i]) {
//         min = list[i];
//     }
// }

list.sort(function (a, b) {
    return a-b
})
console.log(`${list[0]}`,`${list[N-1]}`)