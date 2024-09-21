const bubbleSort = (arr) => {
  const n = arr.length;
  console.group('Bubble sorting:');
  console.log(arr);

  const swap = (s, t) => {
    console.log(`Swapping ${arr[s]} with ${arr[t]}`);
    let temp = arr[s];
    arr[s] = arr[t];
    arr[t] = temp;
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        swap(i, j);
      }
    }
  }
  console.log(arr);
  console.groupEnd();
};

bubbleSort([9, 6, 4, 4, 1, 2]);
