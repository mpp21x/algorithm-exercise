/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    // @ts-ignore
    J = new Set(J);
    return S.split('').filter((stone) => J.has(stone)).length;
};

// 3
console.log(numJewelsInStones('aA', 'aAAbbbb'));

// 0
console.log(numJewelsInStones('z', 'ZZ'));
