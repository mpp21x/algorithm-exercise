package com.example.helloworld;

import java.util.Arrays;
import java.util.HashMap;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
    public int deepestLeavesSum(TreeNode root) {
        return dfs(root, new HashMap<Integer, Integer>(), 0);
    }

    public int dfs(TreeNode root, HashMap<Integer, Integer> depthSum, int depth) {
        if (root == null) {
            return 0;
        }

        depthSum.put(depth, depthSum.containsKey(depth) ? depthSum.get(depth) + root.val : root.val);
        depthSum.put(depth, depthSum.containsKey(depth) ? depthSum.get(depth) + root.val : root.val);

        dfs(root.left, depthSum, depth + 1);
        dfs(root.right, depthSum, depth + 1);

        return depthSum.get(depthSum.size() - 1);
    }
}
