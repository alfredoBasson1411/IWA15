// scripts.js

const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ],
  };
  
  // Only edit below
  
  const result = [];
  
  const extractBiggest = () => {
    let max = Number.NEGATIVE_INFINITY;
    let maxIndex = -1;
  
    // Find the index of the array with the largest last value
    for (let i = 0; i < data.lists.length; i++) {
      const lastValue = data.lists[i][1][data.lists[i][1].length - 1];
      if (lastValue > max) {
        max = lastValue;
        maxIndex = i;
      }
    }
  
    // Remove the largest value from its array and add it to the result array
    if (maxIndex !== -1) {
      const removed = data.lists[maxIndex][1].pop();
      result.push(removed);
    }
  };
  
  // Only edit above
  
  // Run extractBiggest 15 times
  for (let i = 0; i < 15; i++) {
    extractBiggest();
  }
  
  console.log(result);
  