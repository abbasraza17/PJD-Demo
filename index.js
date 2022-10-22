console.log(`Hello World`);

const arr = [14, 18, 12, 13, 29, 27, 22, 24, 30, 32, 26];
const target = 24;
const range = 4;
const newArr = arr.filter((num) => {
  return num >= target - range && num <= target + range;
});

console.log(newArr);
