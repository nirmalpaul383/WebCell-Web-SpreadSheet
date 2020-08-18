/**
This project is originally made by me(N Paul).My github profile https: //github.com/nirmalpaul383/ My youtube page https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
  This is an open source program. You are welcomed to modify it...If you want to support me please give a like to our facebook page https://facebook.com/a.new.way.Technical/
  
 WebCell(Web SpreadSheet) by N Paul. This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download source files from my github profile https://github.com/nirmalpaul383 .It has a wide range of formulas that you can use to your calculation. You will find most common formulas already pre-defined here. Although I have not covered all formulas , for example I have not defined any 'range()' or ':' formula here(To be honest It would have been very complicated). However, you can also create your own functions / formulas or even variables,arrays or even object with JavaScript's code... My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/ FaceBook Page: https://www.facebook.com/a.New.Way.Technical/ GitHub Page: https://github.com/nirmalpaul383

**/


{ //This block of code cotaints all essentials variables

  //Selecting table element by 'table' id
  var table = document.getElementById('table');

  //Set all rows name (A,B,C ... Z)
  var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var rowLenght = rows.length;

  //Set all column name (1,2,3 ... 20)
  var column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
         26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
  var columnLenght = column.length;

  //Database(Object) Declearing for keeping old(unsolved) values
  var oldDB = {};
  //Database(Object) Declearing for keeping new(solved) values
  var newDB = {};


}

{ //This block will create rows & columns

  for (let rowNumber = 1; rowNumber <= columnLenght; rowNumber++) {

    // Creating a row with particular id(R & 'current rowNumber')
    table.innerHTML += `<tr id="R${rowNumber}" > </tr>`;

    //For selecting current row 'idVar' is created (will be used in next)
    let idVar = "R" + rowNumber;

    // Creating all Table datas(<td> s) in current row:
    for (let Index = 0; Index <= (rowLenght - 1); Index++) {
      var currentTD = rows[Index] + rowNumber;
      document.getElementById(idVar).innerHTML += `<td> <input class='cell' type='text' id='${currentTD}' placeholder='${currentTD}' onfocus='engineHistory(this.id)' onblur='engineStart(this.id)'> </td>`;

    }
  }
};


//When user leaves from current cell it automaticly update/evaluate expression(s)
function engineStart(idOfThisEle) {

  let input = document.getElementById(idOfThisEle);


  oldDB[idOfThisEle] = input.value; /** Record current expression in oldDB with ID **/

  engineUpdate(); /** Call Update function **/



};


//When user click the cell then user see his/her entered expresion instead of the answer
function engineHistory(idOfThisEle) {
  let input = document.getElementById(idOfThisEle);
  if (oldDB[idOfThisEle] != undefined) {
    input.value = oldDB[idOfThisEle]
  }
};

//Update each ans to newDB and set each cell value according to newwDB
function engineUpdate() {
  for (let property in oldDB) {

    if (oldDB[property][0] === '=') {
      newDB[property] = engineRef((oldDB[property].slice(1)));
      document.getElementById(property).value = newDB[property];

    }

  }
};

//Calculate expression
function engineRef(inputExpression) {
  let cellRef = /(?<![a-z])(?<!\')(?<!\")([a-z][1-9][0-9]{0,1})(?!\")(?!\')(?![a-z])/gi; //Reg Expression for capturing cell reference

  { //Replace all cell reference with its value

    var temp = cellRef.exec(inputExpression); //Finding first cell ref match

    while (temp != null) {
      /*Until cell ref match not found do same loop*/

      let idTemp = temp[1].toUpperCase(); /*Convert Cell reference to upper case for accessing with getElementById*/

      if (document.getElementById(idTemp).className == 'cell') /*It will test whether the cell reference is referring to the cell by using className*/
      {
        inputExpression = inputExpression.replace(/(?<![a-z])(?<!\')(?<!\")([a-z][1-9][0-9]{0,1})(?!\")(?!\')(?![a-z])/i, Number(document.getElementById(idTemp).value)); /* Replace cell ref with actual value of that cell*/
      }
      temp = cellRef.exec(inputExpression);
    } /* When loop is complete it will automaticlly replace all cell ref with its value and return inputExpression string */
  }

  return engineFunctionExecuter(inputExpression);

};

//Return value according to defined function
function engineFunctionExecuter(input) {

  if (/(?<!\')(?<!\")(?<![a-z])(?<![0-9])(if\()/gi.test(input)) {
    //Reg Ex.test() for 'IF()' function
    input = input.replace(/(?<!\')(?<!\")(?<![a-z])(?<![0-9])(if\()/gi, 'fif(');
    /* To avoid/ensure 'if formula function' does not execute as JavaScript's 'if function' */
  };

  /* If bad syntax or any invalid expression is given program flow should not be stopped and errror message should be shown */
  //Second, cell expression should be executed
  try {
    return eval(input);
  }
  catch (error) {
    return error;
  };
};
