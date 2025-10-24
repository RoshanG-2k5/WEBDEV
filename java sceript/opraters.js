const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            throw new Error('Invalid operator');
    }
};
//single line comment
export { add, subtract, multiply, divide, operate };
/*
multi
line
comment
*/

// Compression operators
/* equals: ==
   not equals: !=
   strict equals: ===*/


  /* logical operators:
  logical and: &&,
  logical or: ||,
  logical not: !
  */

  /* condition statements if, else if, else, switch
  */
