//find all the odd numbers between x and y
let answer = findOdd(1, 11001);
console.log(answer);

function findOdd(y,x) {
  if(x < y) {
    return 'X must be bigger than y, please try again with adjusted values.'  
  } else {
    let answerArray = [];
    for(let i = y; i <= x; i++) {
      if(i%2 !== 0) {
        answerArray.push(i);
      }
    }
    return answerArray;
  }
}
