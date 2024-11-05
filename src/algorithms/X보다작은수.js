const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
let arr = input[1].trim().split(" ").map(Number);
let result = arr.filter((element) => element < X).join(" ")

console.log(result)
