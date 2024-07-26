//해당 문제를 forEach로 변경하여 풀어주세요
let arr1 = [10, 20, 30];

// 해당 로직을 작성하세요
const result = [];
arr1.forEach((el) => result.push(el * 10));
console.log(result);
// 결과 값: [100, 200, 300] 출력해주세요

let arr2 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
const result2 = [];
arr2.forEach((el) => {
  if (el % 5 === 0) result2.push(el);
});
console.log(result2);
// 결과값 [10]
