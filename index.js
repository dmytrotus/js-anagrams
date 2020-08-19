/**
Напишите функцию, которая найдет все наборы анаграмм в строке. 
Анаграммы - слова, составленные из одного и того же набора букв (рост-сорт-трос)
*/


const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';



function getAnagrams(str) {
const sortStringByLetters = (string) => string.split('').sort();

const memo = {};

str.split(' ').forEach((curr) => {
  const temp = sortStringByLetters(curr);
  if (temp in memo) {
    memo[temp] = [...memo[temp], curr]
  } else {
    memo[temp] = [curr];
  } 
})
  
console.log(memo)

console.log(string.split('').sort())
