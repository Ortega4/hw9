// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

var date =  new Date();
var month = date.getMonth()+1;
var day = date.getDate();
var year = date.getFullYear();
if(month<10){
    month = "0"+month;
}
if(day<10){
    day = "0"+day;
}
var dateFormat = "Today is "+ month + "/" + day + "/" + year;
document.getElementById("dateOutput").innerHTML= dateFormat;
console.log(date);
console.log(month);
console.log(day);
console.log(dateFormat);



// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
var num1 = "10";
var num2 = "20";
var decNum = "1.5";
var str = "hi";



// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()
var ConvertNum1 = Number(num1);
var ConvertNum2 = Number(num2);
var ConvertDecNum = Number(decNum);
var ConvertStr = Number(str);
console.log(ConvertNum1+ " is NaN?: " + Number.isNaN(ConvertNum1));
console.log(ConvertNum2+" is NaN?: " +Number.isNaN(ConvertNum2));
console.log(ConvertDecNum+" is NaN?: " +Number.isNaN(ConvertDecNum));
console.log(ConvertStr+" is NaN?: " +Number.isNaN(ConvertStr));
console.log(ConvertNum1+" is integer?: " +Number.isInteger(ConvertNum1));
console.log(ConvertNum2+" is integer?: " +Number.isInteger(ConvertNum2));
console.log(ConvertDecNum+" is integer?: " +Number.isInteger(ConvertDecNum));
console.log(ConvertStr+" is Integer?: " +Number.isInteger(ConvertStr));







// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"
console.log("Original: " +num1+ " -> Converted: " +ConvertNum1+ " -> isNaN: " +Number.isNaN(ConvertNum1)+ "-> isInteger:" +Number.isInteger(ConvertNum1));
console.log("Original: " +num2+ " -> Converted: " +ConvertNum2+ " -> isNaN: " +Number.isNaN(ConvertNum2)+ "-> isInteger:" +Number.isInteger(ConvertNum2));
console.log("Original: " +decNum+ " -> Converted: " +ConvertDecNum+ " -> isNaN: " +Number.isNaN(ConvertDecNum)+ "-> isInteger:" +Number.isInteger(ConvertDecNum));
console.log("Original: " +str+ " -> Converted: " +ConvertStr+ " -> isNaN: " +Number.isNaN(ConvertStr)+ "-> isInteger:" +Number.isInteger(ConvertStr));




// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
var CombineString = 
"Original: " + num1 + " -> Converted: " + ConvertNum1 + " -> isNaN: " + Number.isNaN(ConvertNum1) + " -> isInteger: " + Number.isInteger(ConvertNum1) + "<br>" +
"Original: " + num2 + " -> Converted: " + ConvertNum2 + " -> isNaN: " + Number.isNaN(ConvertNum2) + " -> isInteger: " + Number.isInteger(ConvertNum2) + "<br>" +
"Original: " + decNum + " -> Converted: " + ConvertDecNum + " -> isNaN: " + Number.isNaN(ConvertDecNum) + " -> isInteger: " + Number.isInteger(ConvertDecNum) + "<br>" +
"Original: " + str + " -> Converted: " + ConvertStr + " -> isNaN: " + Number.isNaN(ConvertStr) + " -> isInteger: " + Number.isInteger(ConvertStr);



// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML= CombineString;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
var num3= 3;
var num4=4;
var num5=5;


//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
 var additionResult = num3 + num4;
 var SubtractionResult = num5-num4;


// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()

var stringToNum =num5.toLocaleString();

//
// 4. Build a string showing your results
    var calculationResults = "addition of "+num3+ " and "+ num4+ " is "+ additionResult +" and "+ "subtraction of "+num5+ " and "+ num4+ " is "+ SubtractionResult;
//
// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML= calculationResults;


// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value

var stringNum = "10";

var checkGraderThan = (num5>num4)?  num5 + " is greater than "+ num4: num5 + " is  not greater than " + num4;

var conditionRestults = document.createElement("p");
conditionRestults.textContent = "is \'10\' a integer?: "
conditionRestults.textContent += (Number.isInteger(stringNum)) ? "YES ": "NO";

var conditionRestults2 = document.createElement("p");
conditionRestults2.textContent +=  "check if a result is greater than a certain value: ";
conditionRestults2.textContent +=  checkGraderThan;








//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
document.getElementById("mathOutput").appendChild(conditionRestults); 
document.getElementById("mathOutput").appendChild(conditionRestults2); 
