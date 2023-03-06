function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
const generator = generateSequence();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 3, done: true }
console.log(generator.next()); // { value: undefined, done: true }


// const words: string[] = ['Pablo', 'Diablo', 'Staś'];
// const wordsOfLengts: number[] = words.map((word: string) => word.length);
// console.log(wordsOfLengts);

// const nums: number[] = [1, 2, 3, 4];
// const initialValue = 0;
// const summerFn = (accumulator: number, currentValue: number) => accumulator + currentValue;
// const sum: number = nums.reduce(summerFn, initialValue);
// console.log(sum);

// const person = { age: 32 };
// const pablo = {
//     ...person,
//     name: 'Pablo',
// };
// console.log(pablo);

// const multiplyBy = (num1: number) => {
//   return function (num2: number) {
//     return num1 * num2;
//   }
// }
// multiplyBy.foo = 'foo';
// const multiplyByTwo = multiplyBy(2);
// console.log(multiplyByTwo(4));
// console.log(multiplyBy.foo);

// const student = {
//   name: 'Mike',
//   gender: 'male',
//   age: 23,
//   foo: () => 'foo'
// };
// console.log(student[foo]);

// console.log(Object.keys(student)); // [ 'name', 'gender', 'age' ]
// console.log(Object.values(student)); // [ 'Mike', 'male', 23 ]
// console.log(Object.entries(student)); // [ [ 'name', 'Mike' ], [ 'gender', 'male' ], [ 'age', 23 ] ]

// Made Iterable
// function myNumbers() {
//   let n = 0;
//   return {
//     next: function () {
//       n += 10;
//       return { value: n, done: false };
//     }
//   };
// }
// // Create Iterable
// const n = myNumbers();
// console.log(n.next()); // { value: 10, done: false }
// console.log(n.next()); // { value: 20, done: false }
// console.log(n.next()); // { value: 30, done: false }

