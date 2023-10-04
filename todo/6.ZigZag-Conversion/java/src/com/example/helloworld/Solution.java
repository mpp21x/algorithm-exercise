package com.example.helloworld;

import java.text.CharacterIterator;
import java.text.StringCharacterIterator;
import java.util.HashMap;

class Solution {
    public String convert(String s, int numRows) {
        HashMap<Integer, String> map = new HashMap<Integer, String>();
        int rowIndex = 0, addNum = numRows > 1 ? -1 : 0;

        CharacterIterator it = new StringCharacterIterator(s);
        while (it.current() != CharacterIterator.DONE) {
            if (map.containsKey(rowIndex)) {
                map.put(rowIndex, map.get(rowIndex).concat(String.valueOf(it.current())));
            } else {
                map.put(rowIndex, String.valueOf(it.current()));
            }
            if (rowIndex == (numRows - 1) || rowIndex == 0) {
                addNum *= -1;
            }
            rowIndex += addNum;
            it.next();
        }


        return String.join("", map.values());
    }
}