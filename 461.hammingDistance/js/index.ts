var hammingDistance = function (x: number, y: number): number {
    let big: any = Math.max(x, y);
    let small: any = Math.min(x, y);
    big = (big).toString(2).split('');
    small = (small).toString(2).split('');

    let bigLength = big.length;

    let currentDifferentNum = bigLength - small.length;

    let distance = 0;
    for (let i = 0; i < bigLength; i++) {
        let isNotSameLength = currentDifferentNum !== 0;
        if (isNotSameLength) {
            currentDifferentNum--;
            small.unshift('q');
            if(big[i] !== '0'){
                distance++;
            }
            continue;
        }

        distance += big[i] !== small[i] ? 1 : 0;
    }

    return distance;
};
console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 1));
console.log(hammingDistance(93, 73));
