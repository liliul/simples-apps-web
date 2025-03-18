class NumArray {
    constructor(nums) {
        this.prefix = [0];
        for (let i = 0; i < nums.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i];
        }
    }

    sumRange(left, right) {
        return this.prefix[right + 1] - this.prefix[left];
    }
}

// Teste
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); 
console.log(numArray.sumRange(2, 5)); 
console.log(numArray.sumRange(0, 5)); 


console.log("---------------------------------------------------------");

class NumArray2 {
    constructor(nums) {
        this.nums = nums;
        this.bit = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.add(i + 1, nums[i]);
        }
    }

    add(index, value) {
        while (index < this.bit.length) {
            this.bit[index] += value;
            index += index & -index;
        }
    }

    update(index, val) {
        let diff = val - this.nums[index];
        this.nums[index] = val;
        this.add(index + 1, diff);
    }

    sum(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.bit[index];
            index -= index & -index;
        }
        return sum;
    }

    sumRange(left, right) {
        return this.sum(right + 1) - this.sum(left);
    }
}

// Teste
const numArray2 = new NumArray2([1, 3, 5]);
console.log(numArray2.sumRange(0, 2));
numArray2.update(1, 2); 
console.log(numArray2.sumRange(0, 2));

