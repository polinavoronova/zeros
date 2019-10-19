module.exports = function zeros(expression) {

  let arrOfFactorials = [];
  arrOfFactorials = expression.split('*');
  let doubleFactorials = [];
  let simpleFactorials = [];

  for (let elem of arrOfFactorials) {
    if (elem.includes('!!')) {
      doubleFactorials.push(elem.slice(0, -2));
    }

    else if (elem.includes('!')) {
      simpleFactorials.push(elem.slice(0, -1));
    }
  }

  let countOfTwo = 0;
  let countOfFive = 0;

  for (let elem of doubleFactorials) {
    elem = Number(elem);
    for (let number = elem; number >=1; number-=2) {
      if (number % 2 === 0) {
        for (let i = number; i >= 2; i /= 2) {
          if (i % 2 === 0) {
            countOfTwo++;
          }   
        }             
      }

      if (number % 5 === 0) {
        for (let i = number; i >= 5; i /= 5) {
          if (i % 5 === 0) {
            countOfFive++;
          }  
        }  
      }

    }
  }
 
  for (let elem of simpleFactorials) {
    elem = Number(elem);
    for (let number = elem; number >=1; number--) {
      if (number % 2 === 0) {
        for (let i = number; i >= 2; i /= 2) {
          if (i % 2 === 0) {
            countOfTwo++;
          }
        }       
      }

      if (number % 5 === 0) {
        for (let i = number; i >= 5; i /= 5) {
          if (i % 5 === 0) {
            countOfFive++;
          }
        }          
      }

    }
  }

  return countOfFive < countOfTwo ? countOfFive : countOfTwo;
}
