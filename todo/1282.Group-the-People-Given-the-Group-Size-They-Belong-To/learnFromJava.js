/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {

    const sizesLength = groupSizes.length;
    const tempGroups = {};
    const ans = [];

    for (let i = 0; i < sizesLength; i++) {
        let groupSize = groupSizes[i];
        let tempGroup = [];

        if (tempGroups.hasOwnProperty(groupSize)) {
            tempGroup = tempGroups[groupSize];
        }
        tempGroup.push(i);
        tempGroups[groupSize] = tempGroup;
        if (tempGroup.length === groupSize) {
            ans.push(tempGroup);
            delete tempGroups[groupSize];
        }
    }

    return ans;
};


console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
