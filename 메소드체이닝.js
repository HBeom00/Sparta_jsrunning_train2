const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
];
console.log(
  students
    .filter((el) => el["scores"].reduce((sum, el) => sum + el, 0) / 2 >= 80)
    .map((el) => el["name"])
);
// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]

const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
console.log(numbers.map((el) => el * 2).filter((el) => el <= 30));
// 출력값 : [10, 20, 30]
