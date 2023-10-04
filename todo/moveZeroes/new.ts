var moveZeroes = function (nums: number[]): void {
    let index =0;
    for (let times = 0; times < nums.length; times++) {
        if (!times[index]) {
            nums.splice(index, 1);
            nums.push(0);
        } else{
            index++;
        }
    }
};
