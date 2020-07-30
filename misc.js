 /* WebCell(Web SpreadSheet) by N Paul. This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download source files from my github profile https://github.com/nirmalpaul383 .It has a wide range of formulas that you can use to your calculation. You will find most common formulas already pre-defined here. Although I have not covered all formulas , for example I have not defined any 'range()' or ':' formula here(To be honest It would have been very complicated). However, you can also create your own functions / formulas or even variables,arrays or even object with JavaScript's code... My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/ FaceBook Page: https://www.facebook.com/a.New.Way.Technical/ GitHub Page: https://github.com/nirmalpaul383
*/



{ //For set/draw div accroding to device
  let vh = window.innerHeight;
  let vw = window.innerWidth;

  if (vh > vw) {
    document.getElementById('intro').style.width = 50 + 'vw';
    document.getElementById('intro').style.height = 50 + 'vw';
  } else {
    document.getElementById('intro').style.width = 50 + 'vh';
    document.getElementById('intro').style.height = 50 + 'vh';
  };
};

function intro() {
  document.getElementById('table').style.display = "table";
  document.getElementById('intro').style.display = 'none';
  document.getElementById('toolBar').style.display = 'block';
}
window.addEventListener('load', intro);



let customCodesLog = document.getElementById('customCodesLog');
let customCode = document.getElementById('customCode');

var customCodeArr = [];
customCodesLog.value = `By Default 'WebCell(SpreadSheet) by N Paul' has a huge collection of formulas, which you can use. In addition to default functions/formulas
you can add more function. Using JavaScript code you can add more functions,variables,arrays,object and almost anything. 

e.g "function percentage(x,y) {let ans = (y/x*100) ; return ans + '%';}" can create 'percentage' formula which can take two input and calculate percentage...

All user input codes are stored on 'customCodeArr' array.`;

{ //For adding new code(s)
  function addCustomCode() {
    customCodesLog.value += `
 User: ${customCode.value}`;

    customCodeArr.push(customCode.value);

    let outputResponse = "";

    for (let i = 0; i < customCodeArr.length; i++) {
      if (i != (customCodeArr.length - 1))
      {
        try {
          eval(customCodeArr[i]);
          throw "Error";
        }
        catch (err) {}
      }
      else
      {
        try {
          outputResponse = eval(customCodeArr[i]);
        }
        catch (err) {
          outputResponse = err;
        }
      };
    };

    customCodesLog.value += `
 JavaScript Engine: ${outputResponse}
 `;

    customCode.value = "";
  };
};

{ //Tool2 functions are defined in this block

  //For changing background Color
  function backColChange() {
    let tool2CellRef = document.getElementById('tool2CellRef').value;
    let backCol = document.getElementById('backCol').value;
    try {
      tool2CellRef = tool2CellRef.toUpperCase();

      document.getElementById(tool2CellRef).style.backgroundColor = `${backCol}`;
    } catch {};
  };

  //For changing font Color
  function fontColChange() {
    let tool2CellRef = document.getElementById('tool2CellRef').value;
    let fontCol = document.getElementById('fontCol').value;
    try {
      tool2CellRef = tool2CellRef.toUpperCase();

      document.getElementById(tool2CellRef).style.color = `${fontCol}`;
    } catch {};
  };

  //For changing font Size
  function fontSizeChange() {
    let tool2CellRef = document.getElementById('tool2CellRef').value;
    let fontSize = document.getElementById('fontSize').value;
    try {
      tool2CellRef = tool2CellRef.toUpperCase();

      document.getElementById(tool2CellRef).style.fontSize = `${fontSize}pt`;
    } catch {};
  };


};

{
  /* Display tool1 and hide tool2,tool3. Display tool2 and hide tool1,tool3. Display tool3 and hide tool1,tool2. */

  let tool1 = document.getElementById('tool1');
  let tool2 = document.getElementById('tool2');
  let tool3 = document.getElementById('tool3');

  function enableTool1() {
    try { tool1.style.display = 'table' } catch {};
    try { tool2.style.display = 'none' } catch {};
    try { tool3.style.display = 'none' } catch {};
  }

  function enableTool2() {
    try { tool1.style.display = 'none' } catch {};
    try { tool2.style.display = 'block' } catch {};
    try { tool3.style.display = 'none' } catch {};
  }

  function enableTool3() {
    try { tool1.style.display = 'none' } catch {};
    try { tool2.style.display = 'none' } catch {};
    try { tool3.style.display = 'block' } catch {};
  }

}