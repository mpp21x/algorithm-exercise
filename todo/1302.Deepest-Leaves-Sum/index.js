var deepestLeavesSum = function (root) {
    let max = 0;
    const depthSum = {};
    const traverse = (root, depthNum = 0) => {
        max = Math.max(max, depthNum);

        if (!depthSum[depthNum]) {
            depthSum[depthNum] = 0
        }

        depthSum[depthNum] += root.val;
        if (root.left) traverse(root.left, depthNum + 1);
        if (root.right) traverse(root.right, depthNum + 1)
    };
    traverse(root);
    return depthSum[max];
};
