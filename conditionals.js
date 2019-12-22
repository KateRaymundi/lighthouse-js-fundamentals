/*const raining = false;
const cold= true;
const temperature = 41;
const isCitizen = false
const age = 26

if(raining) {
  console.log('Don\'t forget your umbrela');
}

if(cold) {
  console.log('Make sure you pick out your scarf');
} else {
  console.log('Short sleeves are fine!');
}

if (temperature < 0 ) {
  console.log('Make sure you pick out your scarf');
} else if (temperature < 15) {
  console.log('Short sleeves don\'t fit it');
} else {
  console.log('Short sleeves are fine');
} 
console.log('Now you\'re ready to go outside');


if (isCitizen && age  > 18){
  console.log('You are able to vote');
} else {
  console.log('You are not able to vote');
}


if (temperature < - 40 || temperature > 40){
  console.log('Maybe is going outside isn\'t such a good idea');
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}*/


const whichSchool  = function (age) {
  
  if (age <13) {
  return 'Elementary School';
}   else if (age >= 13 && age < 19) {
  return 'Secondary School';
}   else if (age >= 19) {
  return 'Lighthouse Labs';
}
}
console.log("I am 12. Which school should I go to?");
console.log(whichSchool(12));
console.log("I am 42. Which school should I go to?");
console.log(whichSchool(42));
console.log("I am 18.5. Which school should I go to?");
console.log(whichSchool(18.5));


/*const whichSchool  = function (age) {
  
  if (age >= 1 && age <= 12) {
   return 'Elementary School';
} else if (age >= 13 && age <= 18) {
   return 'Secondary School';
} else if (age >= 19 && age <= 100) {
   return 'Lighthouse Labs';
}
}
console.log("I am 12. Which school should I go to?");
console.log(whichSchool(12));
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(42));
console.log("I am 18. Which school should I go to?");
console.log(whichSchool(18));
*/

