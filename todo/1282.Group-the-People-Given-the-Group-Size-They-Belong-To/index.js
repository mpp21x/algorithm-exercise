/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {


    const idsGroups = [];
    const cacheGroup = {};

    const checkAndPush = (groupSize, currentId) => {
        cacheGroup[groupSize].push(currentId);
        if (cacheGroup[groupSize].length === groupSize) {

            idsGroups.push(cacheGroup[groupSize]);
            delete cacheGroup[groupSize];
        }
    };

    const length = groupSizes.length;
    for (let id = 0; id < length; id++) {
        if (!cacheGroup.hasOwnProperty(groupSizes[id])) {
            cacheGroup[groupSizes[id]] = [];
            checkAndPush(groupSizes[id], id);
            continue;
        } else {
            checkAndPush(groupSizes[id], id);
        }
    }
    return idsGroups;
};


console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
