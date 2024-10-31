const fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(file).toString().trim().split('\n').map(Number);

let a = [];
for (let i = 1; i <= 30; i++) {
    a.push(i)
}

// 함수 구현
function callback(x) {
    return !inputData.includes(x)
}

let result = a.filter((x) => !inputData.includes(x))
console.log(result.join(`\n`));
