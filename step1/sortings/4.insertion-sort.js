const insertionSort = (arr) => {
    const n = arr.length;
    console.group('Insertion sorting:');
    console.log(arr);
  
    const swap = (s, t) => {
      console.log(`Swapping ${arr[s]} with ${arr[t]}`);
      let temp = arr[s];
      arr[s] = arr[t];
      arr[t] = temp;
    };
  
    for (let i = 0; i < n; i++) {
      for (let j = i; j >= 0; j--) {
        if (arr[j] < arr[j-1]) {
          swap(j,j-1);
        }
      }
    }
    console.log(arr);
    console.groupEnd();
  };
  
  insertionSort([9, 6, 4, 4, 1, 2]);
  