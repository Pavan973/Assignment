function array_max_consecutive_sum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
      temp_sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) {
        result = temp_sum;
      }
      temp_sum -= nums[i - k + 1];
    }
    return result;
  }
  
  console.log(array_max_consecutive_sum([ 0,0,1,1,0,0,0,1,0,0,1,1,1,0],4))
  console.log(array_max_consecutive_sum([1,0,0,0,0,1,0,0,0,1], 3))
  