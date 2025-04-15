console.log(
  "Masalalarni yechish uchun maydonchaga xush kelibsiz o'rtoq Boshliq!"
);
//  ********************************   Task S     *****************************************

const missingNumber = (arr: number[]) => {
  const sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
};

console.log(missingNumber([4, 2, 1, 0]));
