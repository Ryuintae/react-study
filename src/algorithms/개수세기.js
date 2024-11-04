const fs = require("fs")
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let V = Number(input[2]);
let list = input[1].split(" ").map(Number)

let result = list.filter((element) => element === V).length
console.log(result)


