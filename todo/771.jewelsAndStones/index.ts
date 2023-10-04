/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let count = 0;
    for (let stone of S) {
        count += J.indexOf(stone) !== -1 ? 1 : 0;
    }
    return count;
};

// 3
console.log(numJewelsInStones('aA', 'aAAbbbb'));

// 0
console.log(numJewelsInStones('z', 'ZZ'));
