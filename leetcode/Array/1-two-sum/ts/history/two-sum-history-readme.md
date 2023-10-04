# Improve history

#### v1

```
export function twoSum(nums: number[], target: number): number[] {

    const map = {};
    const results: number[] = [];
    for(let i = 0; i < nums.length; i++){
        const number = nums[i];
        const diff = Math.abs(target - number);
        if(!map.hasOwnProperty(diff)){
            map[number] = i;
            continue;
        }
        results.push(map[diff], i);
        break;
    }



    return results;
}
```

* There is no reason to use `Math.abs`.
* The `results' variable is not needed. It is only used once
