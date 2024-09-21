// https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

const sqaure = (rows = 5, cols = 5) => {
  console.group('1. square');
  for (let i = 0; i < rows; i++) {
    let str = '';
    for (let j = 0; j < cols; j++) {
      str += '* ';
    }
    console.log(str);
  }
  console.groupEnd();
};

const triangleChar = (rows = 5, cols = 5) => {
  console.group('2. triangleChar');
  for (let i = 0; i < rows; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += '* ';
    }
    console.log(str);
  }
  console.groupEnd();
};

const triangleNum1 = (rows = 5, cols = 5) => {
  console.group('3. triangleNum1');
  for (let i = 0; i < rows; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += j + 1 + ' ';
    }
    console.log(str);
  }

  console.groupEnd();
};
const triangleNum2 = (rows = 5, cols = 5) => {
  console.group('4. triangleNum2');
  for (let i = 0; i < rows; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += i + 1 + ' ';
    }
    console.log(str);
  }

  console.groupEnd();
};

const triangleInv = (rows = 5, cols = 5) => {
  console.group('5. triangleInv');
  for (let i = 0; i < rows; i++) {
    let str = '';
    for (let j = i; j <= cols; j++) {
      str += '* ';
    }
    console.log(str);
  }

  console.groupEnd();
};

const triangleInvNum = (rows = 5, cols = 5) => {
  console.group('6. triangleInvNum');
  for (let i = 0; i < rows; i++) {
    let str = '';
    for (let j = 0; j < cols-i; j++) {
      str += (j + 1) + ' ';
    }
    console.log(str);
  }

  console.groupEnd();
};


const triangleTri = (rows = 5, cols = 5) => {
  console.group('7. triangleTri');
  for (let i = 0; i < rows; i++) {
    let str = '';
    let spc = '';
    for (let k = 0; k < rows-i-1; k++) {      
      spc += ' ';
    }
    for (let j = 0; j < i; j++) {
      str += '**';
    }
    console.log(spc + str + '*');
  }

  console.groupEnd();
};

const triangleTriInv = (rows = 5, cols = 5) => {
  console.group('8. triangleTriInv');
  for (let i = 0; i < rows; i++) {
    let str = '';
    let spc = '';
    for (let k = 0; k < i; k++) {      
      spc += ' ';
    }
    for (let j = i; j < rows-1; j++) {
      str += '**';
    }
    console.log(spc + str + '*');
  }

  console.groupEnd();
};

console.clear();

sqaure();
triangleChar();
triangleNum1();
triangleNum2();
triangleInv();
triangleInvNum();
triangleTri();
triangleTriInv();
//Other patterns were similar to above ones. so skipping it. 
