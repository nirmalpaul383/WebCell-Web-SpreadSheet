/* WebCell(Web SpreadSheet) by N Paul. This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download source files from my github profile https://github.com/nirmalpaul383 .It has a wide range of formulas that you can use to your calculation. You will find most common formulas already pre-defined here. Although I have not covered all formulas , for example I have not defined any 'range()' or ':' formula here(To be honest It would have been very complicated). However, you can also create your own functions / formulas or even variables,arrays or even object with JavaScript's code... My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/ FaceBook Page: https://www.facebook.com/a.New.Way.Technical/ GitHub Page: https://github.com/nirmalpaul383
 */

{
  /* Disabling JavaScript's default(stock) alert,prompt,confirm function */

  //Disabling JS alert function
  function alert() {
    return "Alert function is not intended to be used";
  };

  //Disabling JS prompt function
  function prompt() {
    return "Prompt function is not intended to be used";
  };

  //Disabling JS confirm function
  function confirm() {
    return "Confirm function is not intended to be used";
  };
}





{ //This code block will contained all pre-defined formulas/function
  {
    //Some Constants
    /* Use 'var' keyword instead of 'const' because 'const' is block level scope (if  declearing in a block...)
    and for simplicity user can change constant's value ... */
    var PI = Math.PI;
    var E = Math.E;
    var LN2 = Math.LN2;
    var LN10 = Math.LN10;
    var LOG2E = Math.LOG2E;
    var LOG10E = Math.LOG10E;
    var SQRT1_2 = Math.SQRT1_2;
    var SQRT2 = Math.SQRT2;
  };

  { //Common formula that can be implemented directly by JavaScript's Math object

    function abs(input) {
      /* Return absolute value. e.g 'abs(-5)' return +5 */
      return Math.abs(input);
    };

    function acos(input) {
      /* Returns the arccosine (in radians) of a number. 'x' is between -1 to +1 */
      return Math.acos(input);
    };

    function asin(input) {
      /* Returns the arcsine (in radians) of a number. */
      return Math.asin(input);
    };

    function atan(input) {
      /* Returns The arctangent (in radians) of the given number. */
      return Math.atan(input);
    };

    function atan2(input, input2) {
      /* Returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y). */
      return Math.atan2(input2, input);
    };

    function cbrt(input) {
      /* Returns cube root of the given number. */
      return Math.cbrt(input);
    };

    function sin(input) {
      /* Returns sine of the given number. */
      return Math.sin(input);
    };

    function cos(input) {
      /* Returns cosine of the given number. */
      return Math.cos(input);
    };

    function tan(input) {
      /* Returns tangent of the given number. */
      return Math.tan(input);
    };

    function ceil(input) {
      /* Returns smallest integer greater than or equal to the given number. */
      return Math.ceil(input);
    };

    function floor(input) {
      /* Returns a number representing the largest integer less than or equal to the given number. */
      return Math.floor(input);
    };

    function round(input) {
      /* Returns the rounded value( to the nearest integer) of the given number */
      return Math.round(input);
    };

    function rand() {
      /* Returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive). */
      return Math.random();
    };

    function pow(x, y) {
      /* Returns number representing the given base(x) taken to the power of the given exponent(y). */
      return Math.pow(x, y);
    };

    function sqrt(input) {
      /* Returns the square root of a given number. */
      return Math.sqrt(input);
    };

    function log(input) {
      /* Returns the natural logarithm (base e) of a number. */
      return Math.log(input);
    };

    function log10(input) {
      /* Returns the base 10 logarithm of a number. */
      return Math.log10(input);
    };

    function max(...inputs) {
      //Take all inputs as array using spread oparater('...')
      /* Returns the largest of the given numbers. */
      return Math.max(...inputs);
    };

    function min(...inputs) {
      //Take all inputs as array using spread oparater('...')
      /* Returns the smallest of the given numbers. */
      return Math.min(...inputs);
    };

    function mod(number, divisor) {
      /* Returns the remainder after a number is divided by a divisor. */
      return number % divisor;
    };

  }


  { //Formulas which are implemented using mixing of other formula(s)/function(s)

    function fif(a, b, c) {
      //User enter 'if(...)' and system(line 114 to line 116 on main.js) will automaticaly converts it as 'fif(...)'

      //If condition 'a' true then execute 'b' otherwise execute 'c'
      if (a) {
        return b
      }
      else {
        return c
      };
    };

    function sum(...inputs) {
      //This formula will add all value and return that value
      let ans = 0;
      for (let i in inputs) {
        ans += inputs[i];
      };
      return ans;
    };

    function count(...inputs) {
      //It can count all given inputs
      return inputs.length;
    };

    function avg(...inputs) {
      //Average formula
      let ans = 0;
      //Sum all value using 'sum(...)' formula and divide it with total numbers of input(using count formula)
      ans = (sum(...inputs) / count(...inputs));
      return ans;
    };

    function even(input) {
      /* Returns true if given number is even else return false */

      if (input % 2) {
        //When Remainder is 1 that means it is not a even number (it is odd number)
        return false;
      }
      else {
        return true;
      };
    };

    function odd(input) {
      /* Returns true if given number(x) is odd else return false */

      if (input % 2) {
        //When Remainder is 1 that means it is a odd number (not a even number)
        return true;
      }
      else {
        return false;
      };
    };

    function fact(input) {
      /* Returns factorial of a number */

      input = Math.floor(input); //Factorial is only for a (full) integer number

      if (input < 0) {
        return "Error: negative number";
      }
      else if (input == 0) {
        return 1;
      }
      else {
        let ans = 1;

        for (let index = input; index >= 1; index = index - 1) {
          ans = ans * index;
        };
        return ans;
      };
    };

    function fibonacci(FibonacciNumberIndex) {
      /* Returns Fibonacci number/value (according to the Fibonacci number series) of a given index value */

      let a = 0;
      let b = 1;
      let c;

      if ((FibonacciNumberIndex % 1) != 0) {
        return "Please provide a Integer number"
      }; // If a floating point number is given then the calculation will not be done

      if (FibonacciNumberIndex == 0) {
        return 0;
      }
      else if (FibonacciNumberIndex < 0) {
        return "Negative number";
      }
      else {

        //Expected output 0,1,1,2,3,5,8,13,21,34 ...
        //Where userInput 0,1,2,3,4,5,6,7 ,8 ,9 ...

        for (let i = 0; i <= (FibonacciNumberIndex - 2); i++) {
          c = a + b;
          a = b;
          b = c;
        };

        /* When 'FibonacciNumberIndex' = 0 or 1 , JS Engine does not
        enter in this 'for loop' above and just only the value of 'b' will be returned.
        In such case the value of 'b' will be = 1
        (Value of 'b' is declared at the top inside this function)*/

        return b;
      };
    };

  };
};
