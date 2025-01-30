// for loop 
// for( initialization ; condition ; afterthought)
//     statement {}
// 
// 
//  an example , the function statement 
// select tag in html.

/*function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
*/


/*for ( let i = 0 ; i < 5 ; i++){
  console.log(i);
} */

/*let fruits = ["apple" , "orange" , "banana" , "pear" , "strawberry"];

for (let i = 0 ; i < fruits.length ; i++){
  console.log(fruits[i]);
}
*/

// do.. while loop

/*let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

*/

let scores = [20, 30, 45, 50, 60 , 70] ; 
let sum = 0;

for ( let i = 0 ; i<scores.length ; i++){
  sum += scores[i];
}

console.log(sum);