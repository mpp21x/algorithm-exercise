export function lengthOfLongestSubstring(s: string): number {
	let currentStr = '';
	let maxStr = '';
	for (let i = 0; i < s.length; i++) {
		if(currentStr.indexOf(s[i]) !== -1){
			currentStr = currentStr.slice(currentStr.indexOf(s[i]) + 1);
		}

		currentStr += s[i];
		if(maxStr.length < currentStr.length){
			maxStr = currentStr;
		}
	}

	return maxStr.length;
}

