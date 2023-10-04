const arr = [];
arr.length = 100000;
arr.push(10);
let now = performance.now();
console.log('----------');
console.log('使用 indexOf');
console.log(arr.indexOf(10));
let result: any = (performance.now()) - now;
console.log(`共用去 ${result}`);

now = performance.now();
console.log('----------');
console.log('使用 for');
for (let i = 0; i < 100000; i++) {
    if (arr[i] === 10) {
        break;
    }
}
result = performance.now() - now;
console.log(`共用去 ${result}`);

