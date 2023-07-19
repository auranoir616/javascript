function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    } else {
      const pivot = arr[0];
      const less = [];
      const greater = [];
  
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          less.push(arr[i]);
        } else {
          greater.push(arr[i]);
        }
      }
  
      return [...quickSort(less), pivot, ...quickSort(greater)];
    }
  }
  
  // Contoh penggunaan fungsi quickSort
  const array = [7, 2, 34, 85, 66, 5, 3, 4];
  const sortedArray = quickSort(array);
  console.log(sortedArray);
  