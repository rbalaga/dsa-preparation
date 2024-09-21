const selectionSort = (arr) => {
  const n = arr.length;
  console.group('Selection sorting:');
  console.log(arr);

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
        console.log(`Swapping ${arr[i]} with ${arr[min]}`);
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
  }
  console.log(arr);
  console.groupEnd();
};

selectionSort([9, 6, 4, 4, 1, 2]);
