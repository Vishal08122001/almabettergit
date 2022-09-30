// console.log("Hello");
// var r = 5;
// var s = 6;

// if (r >= s) {
//     console.log("Mujhe Samjh Nhi Aata");
// }
// else {
//     console.log("Vishal");
// }









// for(var i = 2; i<= 100; i++)
// {var ct = 0;
//     for(var j = 1; j<=i; j++)
//     {
//         if(i%j==0)
//         {
//             ct = ct+1;
//         }

//     }
//     if(ct==2){console.log(i);}
// }




// var r = 5;
// var s = 10;

// console.log((s<r)?"Hello Baby":"No  way!");









// var area = '1234';
// var pi = 3.14, l=5, b=4, r=3;

// switch(area)
// {
//     case '1234':
//         console.log("area "+ pi*r**2);
//         break;
//     case 'sqare':
//         console.log("Area " + l*b);
//         break;
//     default:
//         console.log("0000");
// }






















// var r=10;
// var s=1;

// do
// {
//     debugger;
//     console.log(s);
//     s++;

// }while(s>r);










// var a = 5;
// for(var i=0; i<=10; i++)
// {
//     console.log(i*5);
// }








// function pooja(a,b)
// {  // var a = "I Love You";
//    // var b = "Vishal";
//     var c = a+b;
//     console.log(c);
// }

// pooja("I Love you", " Vishal");


// const funE = function (a, b) {
//     return total = a + b;
// }

// const sum == funE(5, 2)
// console.log(sum);

// let r = 12;
// console.log(r);

// r = 13;
// console.log(r);


// function r() {
//     const x = 1;
//     console.log(x);

//     if (true) {
//         const y = 2;
//         console.log(x);
//         console.log(y);

//     }
//     x=4;
//     console.log(x);
// }
// r();


//Templete Literals :-
// for (var i = 1; i <= 10; i++) {
//     var tableof = 8;
//     console.log(`${tableof} * ${i} = ${tableof * i}`);
// }


// Default Parameters :-
// These are default parameters which are use default values.

// function multi(a, b = 3) {
//     return a * b;
// }
// console.log(multi(5, 2));







//Arrow Function :-
// don't need to write 'return' if function is of one line.
// you can not call function before initialising it.

// const sum = (a, b) => `Sum of two numbers ${a + b}`;

// console.log(sum(5, 4));








//Arrays In JavaScript:-

// var r = [1, 2, 'hello', 4, 5, 6, 7];
// console.log(r);

//Check the lenght of array by arr.length

// var r = [1, 2, 'hello', 4, 5, 6, 7];

// for (var i = 0; i < r.length; i++) {
//     console.log(r[i]);
// }




// //For In Loop:-
// var r = [1, 2, 'hello', 4, 5, 6, 7];
// for (let elements in r) {
//     console.log(elements);
// }

// //For of Loop: -
// var r = [1, 2, 'hello', 4, 5, 6, 7];
// for (let elements of r) {
//     console.log(elements);
// }




//FOR EACH ();
// var name = ['Vishal', 'Ramesh', 'Suresh', 'Pooja', 'Love'];
// //name.forEach(function (element, index, array) {
// // console.log(element + " index: " + index + " " + array);
// //})

// name.forEach((element, index, array) => {
//     console.log(element + " index: " + index + " " + array);
// });











// SEARCHING AND FILTER OF AN ARRAY:-
// INDEX OF METHOD==

// var r = [1, 2, 3, 4, 6, 7, 8, 9];
// console.log(r.indexOf(8));


// //LAST INDEX OF METHOD ==
// var r = [1, 2, 3, 4, 6, 7, 8, 9];
// console.log(r.lastIndexOf(8));


// //INCLUDES METHOD ==
// var r = [1, 2, 3, 4, 6, 7, 8, 9];
// console.log(r.includes(5));















//FIND METHOD
//RETURNS THE FOUND ELEMENT IN THE ARRAT
//ONLY PROBLEM IS THAT IT RETURNS ONLY ONE VALUE==


//const price = [200, 250, 350, 400, 450, 500, 550, 600];
//price <400

// const check = price.find((currVal) => {
//     return currVal < 400
// });
// console.log(check);

// 2ND WAY:-
//console.log(price.find((currVal) => currVal < 400));














//FIND INDEX  METHOD:-

// const price = [200, 250, 350, 400, 450, 500, 550, 600];
// console.log(price.findIndex((currVal) => currVal < 400));















//FILTER()

// const price = [200, 250, 350, 400, 450, 500, 550, 600];
// //price < 400

// const newprice = price.filter((elements) => {
//     return elements <= 400;
// });
// console.log(newprice);
















//HOW TO SORT AN ARRAY:-  ASSENDING TO DECENDING, DECENDING TO ASSENDING.

// var months = ['March', 'January', ' December', 'February'];
// console.log(months.sort());

// var number = [7, 12, 4, 6, 2, 0, 86, 23, 23];
// number.sort();
// console.log(number.reverse());













//CREATE => READ => UPDATE => DELETE:  (CRUD METHOD)
//.PUSH METHOD => ADDS THE ELEMENT AT THE END OF AN ARRAY.

//const animals = ['pigs', 'goats', 'chicken', 'sheep'];
//animals.push('Dogs');
//console.log(animals);


// const animals = ['pigs', 'goats', 'chicken', 'sheep'];
// const count = animals.push('Dogs', 'cats', 'cow');
// console.log(animals);
// console.log(count);



//.UNSHIFT METHOD => ADDS THE ELEMENT AT THE BEGGINING OF THE ARRAY.

// const animals = ['pigs', 'goats', 'chicken', 'sheep'];
// const count = animals.unshift('Dogs', 'cats');
// console.log(animals);
// console.log(count);






















//.POP() METHOD :- REMOVE ONE ELEMENT FROM THE END OF THE ARRAY.

// const number = [1, 2, 3, 4, 5, 6];
// number.pop();
// console.log(number);






//.SHIFT METHOD :- REMOVE ONE ELEMENT FROM THE BEGINNING OF THE ARRAY.

// const number = [1, 2, 3, 4, 5, 6];
// number.shift();
// console.log(number);











//SPLICE METHOD() :-
///******QUESTION*****
//1: Add Dec at the end of an array.
//2: What is the return value of splice method.
//3: update march to March.
//4: Delete June from the Array.  USING ONLY ONE METHOD.



// const months = ['Jan', 'march', 'April', 'June', 'July'];
//Sol1:-

// const newmonth = months.splice(months.length, 0, 'Dec');
// console.log(months);

//Sol2 :-
// const newmonth = months.splice(months.length, 0, 'Dec');
// console.log(newmonth);


//Sol3 :-

// var indexofMarch = months.indexOf('march');
// if (index != -1) {
//     months.splice(indexofMarch, 1, 'March');
// }
// console.log(months);


//Sol4 :-
// var indexOfJune = months.indexOf('June');
// if (indexOfJune != -1) {
//     months.splice(indexOfJune, 1,);
// }
// console.log(months);















//EMAIL VALIDATION:-

// function validate() {
//     var mail = document.getElementById("text").value;
//     var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

//     if (regx.text(mail)) {
//         alert("Congratulations! You Have Provided a Valid Mail")
//         return true
//     }
//     else {
//         alert("Sorry! Please Enter a Valid Mail")
//         return False;
//     }
// }



// validate();





























//MAP(), REDUCE(), FILTER()   METHOD:-



/* MAP() => Map method return a new array containing the result.
if we use any <, > ,= it returns only value in True and False */



// const array1 = [1, 4, 9, 16, 25];
// //num > 9

// let newarr = array1.map((curElem, index, array1) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newarr);










// const array1 = [1, 4, 9, 16, 25];
// // num>9
// let newarr = array1.map((curElem, index, arr) => {
//     return `Index no. =${index} and the value is ${curElem} belong to ${arr}`
// })

// console.log(newarr);

















//FIND THE SQUAREROOT OF ARRAY:-

// let array = [25, 36, 49, 64, 81, 100];
// let newArr = array.map((curElem) => {
//     return Math.sqrt(curElem);

// })
// console.log(newArr);











// //FILTER METHOD:-

//MULTIPLY EACH ELEMENT OF ARRAY BY 2 AND RETURN ONLY THOSE WHICH ARE GRATER THEN 10

/* WE WILL USE CHAINING METHOD IN THIS. */

// let arr = [2, 4, 5, 6, 7, 8];
// let newArr = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10);

// console.log(newArr);

















//REDUCE METHOD :-

////WE USE REDUCE METHOD TO FLATTERN AN ARRAY(TO CONVERT 3D OR 2D ARRAY TO 1D ARRAY)

/* ACCUMULATOR
   CURRENT VALUE
   CURRENT INDEX
   SOURCE ARRAY */


// let arr = [5, 6, 2];
// let sum = arr.reduce((ACCUMULATOR, curElem, index, arr) => {
//     return ACCUMULATOR = curElem + ACCUMULATOR;
// }, 7)
// console.log(sum);

















//HOW TO CONVERT 2D OR 3D ARRAY TO 1D;

// const r = [[1, 2, 3], [3, 4, 5], [6, 5, 6]];


// let newr = r.reduce((ACCUMULATOR, curElem) => {
//     return ACCUMULATOR.concat(curElem);
// })
// console.log(newr);





































//STRINGS IN JAVASCRIPT :-
/* Escape Character
   Finding a String in a String
   Searching for a String in a String
   Extracting String Parts
   Replacing String Content
   Extracting String Characters
   Other useful methods */








Hello sdhagdfa



