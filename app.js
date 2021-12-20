///////////////---- Welcome to JavaScript ----//////////////
console.log("//////---- Welcome to JavaScript ----//////")


// Numbers
var num1 = 3;
var num2 = 4;
var sum = num1 + num2;

console.log(5);
console.log(num1);
console.log(sum);

// String
var firstname = 'gaurav';
var lastname = 'kumar';

console.log(firstname);
console.log('shankar');
console.log(firstname , lastname);
console.log(firstname + lastname);

// camel case (Recommended for JS)
var firstNum = 40;
console.log(firstNum);

// Pascal case
var FirstNum = 50;
console.log(FirstNum);

// Snake case
var first_num = 60;
console.log(first_num);


// //////////////////// Rules for naming JS variables ///////////////////////

//- Name can contain letter, digits, _ , $
var mySubject1 = 51;
var mySubject_ = 52;
var mySubject$ = 53;
console.log(mySubject1, mySubject_, mySubject$);

//- Name cannot start with a digit
//var 2subject = 54     // SyntaxError:

//- Name can start with an _ or $
var _subject = 55;
var $subject = 56;
console.log(_subject, $subject);

//- Names are case senstitive
var x = 0;
var X = 1;
console.log(x, X);

//- Names cannot be reserved keywords
// var var = 5 
var varName = "shankar";
console.log(varName);


////////////////////-- JS Nmubers --///////////////////


var num1= 10; //Integer
var num2= 20.9; //Decimal Number
console.log(typeof(num1));
console.log(typeof(num2));

//Addition
var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum);

//substraction
var diff = num3 - num1;
console.log(diff);

//Multiplication
var mul = num1 * num2;
console.log(mul);

//Division
var div = num3/num1;
console.log(div);

//Infinity & Zero
var divByZero = num3/0;
console.log(divByZero);
console.log(typeof(divByZero));

// Multiply by string 
var mulByString = num1 * 'A';
console.log(mulByString);
console.log(typeof(mulByString));

////// JS Number - Functions

var num1= 10;
var num2= 20.9;

// toString() number as input and returns a string
console.log(num1.toString());
console.log(typeof(num2.toString()));

var strNum1 = "80";
var strNum2 = "70";
var strNum3 = "vasu";
console.log(strNum1);
console.log(typeof(strNum1));

// pareseInt() string numeral as input and returns a number
console.log(parseInt(strNum1));
console.log(typeof(parseInt(strNum2)));
console.log(parseInt(strNum3));

// pareseFloat() string numeral as an input and returns a floating number
console.log(parseFloat(strNum1));
console.log(typeof(parseFloat(strNum2)));
console.log(parseFloat(strNum3));

// toFixed() takes floating number and rounds it off given position
var strFloat = 87.8744774;
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(2));
console.log(strFloat.toFixed(6));
console.log(strFloat.toFixed(10));

////////////////////-- JS Strings --///////////////////


// var myFirstString = '''I Love JavaScript'''  //SyntaxError //only support single or double quotes
var myFirstString = "I Love JavaScript";
console.log(myFirstString);

var mySecondString = 'We will learn JavaScript';
console.log(mySecondString);

// what if my string contians a double quote
//var doubleQuotesString = "This is a "JavaScript" string"  //SyntaxError
var doubleQuotesString = "This is a \"JavaScript\" double quotes string";
console.log(doubleQuotesString);

// what if my string contians a single quote
//var singleQuotesString = 'This is a 'JavaScript' string'  //SyntaxError
var singleQuotesString = 'This is a \'JavaScript\' single quotes string';
console.log(singleQuotesString);

//or you can write in this way also
var doubleQuotesString2 = "This is a 'JavaScript' double quotes string";
console.log(doubleQuotesString2);

var singleQuotesString2 = 'This is a "JavaScript" single quotes string';
console.log(singleQuotesString2);

////////////////////-- JS String Functions --///////////////////

var myFirstString = "This is a string for Javascript string functions, Javascript";

// returns the length of the string
console.log(myFirstString.length);

// Find index of a string inside another string
console.log(myFirstString.indexOf('Javascript'));
console.log(myFirstString.indexOf("This"));

// Find Last index of a string inside another string
console.log(myFirstString.lastIndexOf('Javascript'));
console.log(myFirstString.lastIndexOf("This"));

// Get a part of our string .slice(start, end)
console.log(myFirstString.slice()); //if you leave blank showing full string
console.log(myFirstString.slice(0,4)); //0 to 4 means only show 4 , string starts from 0 so if you count 4th num it's shows only upto 3
console.log(myFirstString.slice(21,31));
console.log(myFirstString.slice(10));
console.log(myFirstString.slice(-28)); //count from reverse like: .........-5,-4,-3,-2,-1
console.log(myFirstString.slice(-21,-11));

// Get sub string function :- .substr(startposition, length)
console.log(myFirstString.substr(11));
console.log(myFirstString.substr(10, 6));
console.log(myFirstString.substr(17, 3));

var exampleString = "This is Javascript tutorial";

// toUpperCase() - it converts our string -> uppercase
console.log(exampleString.toUpperCase());

// toLowerCase() - it converts our string -> lowercase
console.log(exampleString.toLowerCase());

var firstName = "Gaurav";
var middleName = "Shankar";
var lastName = "Kumar";

// concat() - it merges two or more strings
console.log(firstName.concat(lastName));
console.log(firstName.concat(middleName.concat(lastName)));
console.log(firstName.concat(middleName.concat(lastName.concat("GSK"))));

// you can also use ',' to contact two or more strings
console.log(firstName,middleName,lastName);
console.log(firstName,middleName,lastName,"GSK");

// you can also use operator '+' to contact two or more strings
console.log(firstName+middleName+lastName);
console.log(firstName+middleName+lastName+"GSK");

// you can do some extra 
console.log(firstName.concat(middleName+lastname,"GSK"));
console.log(firstName.concat(middleName)+lastname,"GSK");
console.log(firstName.concat(middleName)+(lastname),("GSK"));

// .trim() - it removes extra spaces
var extraSpace = "          mystring        ";
console.log(extraSpace.trim());

var extraSpace2 = "          My        String        ";  // remove only starting end point spaces
console.log(extraSpace2.trim());

// .charAt() - this take a position as an arg and returns the charcter at the position
var charAtExample = "This is my test string";
console.log(charAtExample.charAt());
console.log(charAtExample.charAt(0));
console.log(charAtExample.charAt(11)); //Returns the character at the specified index
console.log(charAtExample.charAt(11),(charAtExample.charAt(16)));

// .split() - splits our string on the basis of the arguments passed
var sampleString = "This is my sample string";
console.log(sampleString.split());
console.log(sampleString.split(''));
console.log(sampleString.split(' '));
console.log(sampleString.split(','));

var sampleString2 = "This,is,my,sample,string";
console.log(sampleString2.split(','));


////////////////////-- JS NULL & UNDEFINED --///////////////////


var mvar; //mvar holds no value
console.log(mvar);

mvar = null; //mvar holds the value null
console.log(mvar);