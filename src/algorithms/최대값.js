const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let list = input.map(Number)

let maxV = list[0];
let maxI = list[0];

for (let i = 0; i < list.length; i++) {
    if (list[i] >= maxV) {
        maxV = list[i];
        maxI = i;
    }
}
console.log(maxV)
console.log(maxI)
