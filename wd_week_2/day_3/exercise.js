//  Write a JavaScript statement that selects the #meDom ID element.

//  Write at least 2 ways to select the #myFamily ul element.

//  Write a JavaScript statement that selects Hans.

// Write a JavaScript statement that selects the .rideOrDie class.

//  Bonus: Can you select Brian Oconner?

//  Bonus2: Can you console log Brian Oconner?


let meDom = document.getElementById("meDom").innerHTML
console.log(meDom);

let myFamily = document.getElementsByTagName("ul");
console.log(myFamily);

let myFamily2 = document.querySelectorAll("ul");
console.log(myFamily2);

let hans = document.getElementsByClassName('rideOrDie').innerHTML;
console.log(hans);

let brian = document.getElementsByClassName('myFamily')[3].innerHTML;
console.log(brian);