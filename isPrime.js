function isPrime(number) {
  //ternary function and a nested ternary to avoid the number 1 which is prime
  return [2,3,5,7,11].includes(number) ? true : ![2,3,5,7,11].some(x => number % x === 0) && number !== 1 ? true : false;

};

function getPrimes(start, finish) {
  // Using Math.max and Math.min to create absolute range
  // (1,30) and (30,1) will yield the same range
  var max = Math.max(start, finish);
  var min = Math.min(start, finish);
  var range = (start===finish) ? 0 : max - min;

  var finStr = [];
//   if (max === min && min !== 0 || max !== 0) {min!== 0? finStr.push(min): finStr.push(max);}
//   else if (range <= 1 ) { return [];}
  for (let i = min; i <= max; i++) {
      finStr.push(i);
  }

  return finStr.filter(a => [2,3,5,7,11].includes(a) ? a : ![2,3,5,7,11].some(x => a % x === 0) && a !== 1 ? true : false);

  // ...
}
