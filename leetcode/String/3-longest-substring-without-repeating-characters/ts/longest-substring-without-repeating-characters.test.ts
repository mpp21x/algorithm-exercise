import {describe, expect, it} from '@jest/globals';
import {lengthOfLongestSubstring} from './longest-substring-without-repeating-characters';

describe('3 longest substring without repeating characters', () => {
	it('case 1', () => {
		expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
	});

	it('case 2', ()=>{
		expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
	})

	it('case 3', ()=>{
		expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
	})

	it('case 4', ()=>{
		expect(lengthOfLongestSubstring(' ')).toEqual(1);
	})

	it('case 5', () => {
		expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
	})
});
