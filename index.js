function hasTargetSum(array, target) {
  // Implementing the algorithm
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (i !== j && array[i] + array[j] === target) {
              return true;
          }
      }
  }
  return false;
}

/* 
Write the Big O time complexity of your function here
*/
// The time complexity of this solution is O(n^2), where n is the length of the array.

/* 
Add your pseudocode here
*/
/*
Pseudocode:
- Iterate over each element i in the array.
- For each i, iterate over each element j in the array.
- Check if i is not equal to j and array[i] + array[j] equals the target.
- If the condition is met, return true.
- If no pair is found, return false.
*/

/*
Add written explanation of your solution here
*/
/*
This solution uses a brute-force approach by checking all possible pairs of numbers in the array to see if their sum equals the target. The nested loops iterate through each element, and the condition is checked for each pair. While this approach works, it has a time complexity of O(n^2), which may not be optimal for large arrays. The algorithm returns true if any pair is found; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
