package com.example.helloworld;

import java.util.Stack;

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
    private Stack<TreeNode> stack;

    public void BSTIterator(TreeNode root) {
        stack = new Stack<>();
        pushLeft(root);
    }

    /** @return the next smallest number */
    public int next() {
        TreeNode node = stack.pop();
        pushLeft(node.right);
        return node.val;
    }

    /** @return whether we have a next smallest number */
    public boolean hasNext() {
        return !stack.isEmpty();
    }

    private void pushLeft(TreeNode node) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }
}
