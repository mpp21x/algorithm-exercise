/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    var count = 0;
    for (var _i = 0, S_1 = S; _i < S_1.length; _i++) {
        var stone = S_1[_i];
        count += J.indexOf(stone) !== -1 ? 1 : 0;
    }
    return count;
};
// 3
console.log(numJewelsInStones('aA', 'aAAbbbb'));
// 0
console.log(numJewelsInStones('z', 'ZZ'));
