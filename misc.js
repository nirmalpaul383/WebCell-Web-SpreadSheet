 /* WebCell(Web SpreadSheet) by N Paul. This project is originally made by me (N Paul) (https://github.com/nirmalpaul383). You can download source files from my github profile https://github.com/nirmalpaul383 .It has a wide range of formulas that you can use to your calculation. You will find most common formulas already pre-defined here. Although I have not covered all formulas , for example I have not defined any 'range()' or ':' formula here(To be honest It would have been very complicated). However, you can also create your own functions / formulas or even variables,arrays or even object with JavaScript's code... My YouTube Page: https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/ FaceBook Page: https://www.facebook.com/a.New.Way.Technical/ GitHub Page: https://github.com/nirmalpaul383
  */



 { //For setting/drawing welcome div accroding to device
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
   /*When the page is fully loaded welcome div will be hidden and cells & toolbar will be shown */
   document.getElementById('table').style.display = "table";
   document.getElementById('intro').style.display = 'none';
   document.getElementById('toolBar').style.display = 'block';
 }
 window.addEventListener('load', intro); /*When the page is fully loaded welcome div will be hidden and cells & toolbar will be shown */


 {//This block will responsible for 'add new function' feature
 /* This block's codes are taken from my ( https://github.com/nirmalpaul383/JavaScript_Console_Mini-inside-webpage/ ) project */
   
   let customCodesLog = document.getElementById('customCodesLog'); //Display
   let customCode = document.getElementById('customCode'); //Input

   let processTemp = '' //Process Temp

   customCodesLog.value = `By Default 'WebCell(SpreadSheet) by N Paul' has a huge collection of formulas, which you can use. In addition to default functions/formulas
you can add more function. Using JavaScript code you can add more functions,variables,arrays,object and almost anything. 

e.g "function percentage(x,y) {let ans = (y/x*100) ; return ans + '%';}" can create 'percentage' formula which can take two input and calculate percentage...

`; /* Set opening/welcome value to the display */

   //For adding new code(s)
   function addCustomCode() {

     let processTemp = '' //Process Temp

     customCodesLog.value = `${customCodesLog.value} user: ${customCode.value}
`; /* User input code will be displayed on the display log */

     {
       try {
         processTemp = window.eval(customCode.value);
         /* Try to evaluate user's input and record its output. 'window.eval()' is used 
              because 'eval()' has local scope but 'window.eval()' has global scope*/
       }
       catch (errorMsg) {
         processTemp = errorMsg; /* If an error occurred while evaluating. It will record the error message */
       }
     };

     customCode.value = ''; /* It will clear user input panel */

     customCodesLog.value = `${customCodesLog.value} JavaScript Engine: ${processTemp}

`; /* It will show the final output to the display(by Creating a log) */


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
