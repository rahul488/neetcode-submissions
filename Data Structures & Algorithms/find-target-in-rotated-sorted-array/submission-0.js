class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;

        function getPivot(l, r) {
            while (l <= r) {
                let mid = Math.floor((l + r) / 2);
                if (nums[mid] > nums[r]) {
                    l = mid + 1;
                } else if (mid >= 0 && nums[mid] < nums[mid - 1]) {
                    return mid;
                } else {
                    r = mid - 1;
                }
            }
            return Math.floor((l + r) / 2);
        }
        const pivot = getPivot(l, r);

        if (
            (target >= nums[pivot] && target > nums[r]) ||
            (target > nums[l] && target > nums[r])
        ) {
            r = pivot;
        } else if (target >= nums[pivot] && target < nums[l]) {
            l = pivot;
        }

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (target > nums[mid]) {
                l = mid + 1;
            } else if (target === nums[mid]) {
                return mid;
            } else {
                r = mid - 1;
            }
        }

        return -1;
    }
}
