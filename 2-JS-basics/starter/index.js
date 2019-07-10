/* Variable Types Lecture
 
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);
*/

//Variable mutation and type coercion

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job= 'teacher';
isMarried = false;

console.log(firstName + 'is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried);

//alert(firstName + 'is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried);

//prompt user add info

//Basic Operators

var yearJohn = 2018 - 28;
console.log(yearJohn);

//Operator Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//Challenge 1

// BMI = mass / height^2 = mass / (height * height)

var massJohn = 160;
var heightJohn = 75;
var massMark = 200;
var heightMark = 75;
 
var bmiJohn = massJohn / (heightJohn * heightJohn)
var bmiMark = massMark / (heightMark * heightMark)

var isHigher = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s?' + isHigher)

// If/else

var firstName = "John";
var civilStatus = "single";

if(civilStatus === 'married'){
  console.log(firstName + 'is married')
} else{
  console.log(firstName + 'is single')
}
