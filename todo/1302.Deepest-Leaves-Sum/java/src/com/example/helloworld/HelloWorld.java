package com.example.helloworld;

import java.util.Arrays;
import java.util.HashMap;

public class HelloWorld {
    public static void main(String[] args) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, 3);
        Solution solution = new Solution();
        System.out.println(Arrays.toString(map.entrySet().toArray()));
    }
}
