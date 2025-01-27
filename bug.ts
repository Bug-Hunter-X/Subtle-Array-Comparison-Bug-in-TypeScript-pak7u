function compareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(compareArrays([1, 2, 3], [1, 2, 3])); // true
console.log(compareArrays([1, 2, 3], [1, 2, 4])); // false
console.log(compareArrays([1, 2, 3], [1, 2, 3, 4])); // false