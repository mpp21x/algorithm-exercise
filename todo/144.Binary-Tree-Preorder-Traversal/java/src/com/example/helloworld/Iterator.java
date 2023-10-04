package com.example.helloworld;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class Iterator {
    public List<Integer> preorderTraversal(TreeNode root) {
        ArrayList<Integer> list = new ArrayList<>();
        Stack<TreeNode> stack = new Stack();
        stack.push(root);
        while (!stack.isEmpty()) {
            root = stack.pop();
            if (root == null) {
                continue;
            }
            list.add(root.val);
            stack.push(root.right);
            stack.push(root.left);
        }

        return list;
    }
}
