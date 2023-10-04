var arr = [];
arr.length = 100000;
arr.push(10);
var now = performance.now();
console.log('----------');
console.log('使用 indexOf');
console.log(arr.indexOf(10));
var result = (performance.now()) - now;
console.log("\u5171\u7528\u53BB " + result);
now = performance.now();
console.log('----------');
console.log('使用 for');
for (var i = 0; i < 100000; i++) {
    if (arr[i] === 10) {
        break;
    }
}
result = performance.now() - now;
console.log("\u5171\u7528\u53BB " + result);
