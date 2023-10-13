export function lengthOfLongestSubstring(s: string): number {
	let currentStr = '';
	let maxStr = '';
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		const index = currentStr.indexOf(char);
		if(index !== -1){
			currentStr = currentStr.slice(index + 1);
		}

		currentStr += char;
		if(maxStr.length < currentStr.length){
			maxStr = currentStr;
		}
	}

	return maxStr.length;
}

/*
檢討
* 要的不是第一個長度，是每個字元都是為起點的長度
* 當你看不懂別人的答案時，就有徵兆自己不懂了
* 切得不夠細
 */



