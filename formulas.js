/* WebCell(Web SpreadSheet) by N Paul. This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download source files from my github profile https://github.com/nirmalpaul383 .It has a wide range of formulas that you can use to your calculation. You will find most common formulas already pre-defined here. Although I have not covered all formulas , for example I have not defined any 'range()' or ':' formula here(To be honest It would have been very complicated). However, you can also create your own functions / formulas or even variables,arrays or even object with JavaScript's code... My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/ FaceBook Page: https://www.facebook.com/a.New.Way.Technical/ GitHub Page: https://github.com/nirmalpaul383
*/

{ //This code block will contained all pre-defined formulas/function
  {
    //Some Constants
    /* Use 'var' keyword instead of 'const' because 'const' is block level scope (if  declearing in a block...)
    and for simplicity user can change constant's value ... */
    var pi = Math.PI;
    var e = Math.E;
    var LN2 = Math.LN2;
    var LN10 = Math.LN10;
    var LOG2E = Math.LOG2E;
    var LOG10E = Math.LOG10E;
    var SQRT1_2 = Math.SQRT1_2;
    var SQRT2 = Math.SQRT2;
  };

  { //Common formula that can be implemented directly by JavaScript's Math object

    function abs(input) {
      return Math.abs(input);
    };

    function acos(input) {
      return Math.acos(input);
    };

    function asin(input) {
      return Math.asin(input);
    };

    function atan(input) {
      return Math.atan(input);
    };

    function atan2(input, input2) {
      return Math.atan2(input2, input);
    };

    function cbrt(input) {
      return Math.cbrt(input);
    };

    function sin(input) {
      return Math.sin(input);
    };

    function cos(input) {
      return Math.cos(input);
    };

    function tan(input) {
      return Math.tan(input);
    };

    function ceil(input) {
      return Math.ceil(input);
    };

    function floor(input) {
      return Math.floor(input);
    };

    function rand() {
      return Math.random();
    };

    function pow(x, y) {
      return Math.pow(x, y);
    };

    function sqrt(input) {
      return Math.sqrt(input);
    };

    function log(input) {
      return Math.log(input);
    };

    function log10(input) {
      return Math.log10(input);
    };

    function max(...inputs) {
      //Take all inputs as array using spread oparater('...')
      return Math.max(...inputs);
    };

    function min(...inputs) {
      //Take all inputs as array using spread oparater('...')
      return Math.min(...inputs);
    };

    function mod(number, divisor) {
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
      if (input % 2) {
        //When Remainder is 1 that means it is not a even number (it is odd number)
        return false;
      }
      else {
        return true;
      };
    };

    function odd(input) {
      if (input % 2) {
        //When Remainder is 1 that means it is a odd number (not a even number)
        return true;
      }
      else {
        return false;
      };
    };

  }








}