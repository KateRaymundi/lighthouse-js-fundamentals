const raining = true;
const cold= true;
const temperature = -20;

/*if(raining) {
  console.log('Don\'t forget your umbrela');
}*/
/*if(cold) {
  console.log('Make sure you pick out your scarf');
} else {
  console.log('Short sleeves are fine!');
}*/
if (temperature < 0 ) {
  console.log('Make sure you pick out your scarf');
} else if (temperature < 15) {
  console.log('Short sleeves don\'t fit it');
} else {
  console.log('Short sleeves are fine');
} 
console.log('Now you\'re ready to go outside');