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
//    return curElem > 9;
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
//    return ACCUMULATOR = curElem + ACCUMULATOR;
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











//LENGTH OF STRING:-
// var a = "Hello World";
// console.log(a.length);







//ESCAPE CHARACTER :-

// var r = "We are the so called \"Vikings\" from the earth";
// console.log(r);

// var s = 'We are the so called "Vikings" from the earth';
// console.log(s);




















//  //FINDING A STRING IN A STRING:-

// var r = "I am Vishal Chauhan";
// console.log(r.indexOf("Vishal", 8));




// var r = "I am Vishal Chauhan";
// console.log(r.lastIndexOf("Chauhan"));

























//SEARCHING A STRING IN STRING:-

// var r = "I am Vishal Chauhan";
// console.log(r.search("Vishal"));















//EXTRACTING STRING PART:-

/* We have three methods for this
   => slice(start, end)
   => substring(start, end)
   => substr(start, length)
*/

// var a = "I am Vishal Chauhan"

// var b = a.slice(0, 5);
// console.log(b);






















//                    1:1 CHALLENGE TIME :-


//Display only 50 Character of the String like twitter will do

// let mytweet = "My name is Vishal. I Live in faridabad haryana. I have competed my gardaduation from school of open learning delhi university "
// var r = mytweet.slice(0, 50);
// console.log(r)












//substring method:-

// var a = "I am Vishal Chauhan"

// var b = a.substring(5, -2);
// console.log(b);






// substr method :-
/* The diferrence is that the second perameter specify the 'length' ; not 'end'  like splice and substring*/



// var a = "I am Vishal Chauhan"

// var b = a.substr(0, 5)
// console.log(b);



















////*************************REPLACING STRING CONTENT **********************/


// let intro = "My name is Vishal , i Live In fardiabad";

// var a = intro.replace("fardiabad", "faridabad");
// console.log(intro);
// console.log(a);



////**** REPLACE METHOD DOES NOT CHANGE THE STRING, IT GIVES A NEW STRING********//






























////*********************EXTRACTING STRING CHARACTERS********************/

//\\WE HAVE THREE METHODS//\\
//*) The charAt()  ==> it return the character at a.
//*) The charCodeAt() ==> it return the unicode of the character in a string.The method returns a UTF-16 code (an integer between 0 and 65535)
//*) The Property Access  ==> ECMASCRIPT 5 (2009) ALLOWS PROPERTY ACCESS [] ON STRINGS.



// let str = "Hello World";
// console.log(str.charAt(6));
// console.log(str.charCodeAt(6));
// console.log(str[0]);




















//\\The









////*************Challenge Time ***************//

////RETURN THE UNICODE OF THE LAST CHARACTER IN A STRING////

// let uni = "Hello"
// console.log(uni.charCodeAt(uni.length - 1));



















//OTHER USEFULL METHODS FOR THE STRINGS//

//UPPERCASE ==> toUpperCase()
//LOWERCASE ==> toLowerCase()

// let a = "dgDASsadk"
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());











////concate method :-

// let a = "Vishal";
// let b = "Chauhan";

// console.log(a + b);
// console.log(a.concat(b));
// console.log(a.concat(" ", b));
// console.log(`${a} ${b}`);












////trim() method :- removes whitespaces from both sides :-
////it removes spaces from beginning and end of the string, but from the center of the string.

// let a = "             Hello Baby         ";
// console.log(a.trim());










////Convert string to array :-
//**it can be converted by using split() method */


// let a = "a,b,v,d,g,c, vishal baba love | nhi | mila";

// console.log(a.split(","));              // split on commas
// console.log(a.split(" "));              // split on space
// console.log(a.split("|"));              // split on pipe






































//**************************DATE AND TIME OBJECT METHOD **********************/



//Date object contain a anumver that represents milliseconds since 1 january 1970.

//THERE ARE 4 WAYS TO CREATE DATE OBJECT==>


//1ST METHOD ==> new Date() constructor.



// let currdate = new Date();
// console.log(currdate);                              //2022-10-07T08:18:09.963Z


// console.log(new Date());                            //2022-10-07T08:18:09.972Z



// console.log(new Date().toLocaleString());          //7/10/2022, 1:48:09 pm



// console.log(new Date().toString());               //Fri Oct 07 2022 13:48:10 GMT+0530 (India Standard Time)








// //2nd METHOD ==>

//console.log(Date.now());

// new Date(year, month, day, hour, minute, second)
//January is 0 and December is 11;




// let d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d.toLocaleString());




// let d = new Date(2018, 11, 24);
// console.log(d.toLocaleString());







// //3rd Method ==>

// let d = new Date("October 07, 2022 14:59:00");
// console.log(d.toLocaleString());









// //4th Method ==>
// // new Date(millisecond)


// let d = new Date(1665135224932)
// console.log(d.toLocaleString());


// let a = new Date(0);
// console.log(a.toLocaleString());






















//******DATE METHODS ******//


// const cd = new Date();

// // // How to get the individual date :-

// console.log(cd.toLocaleString());
// console.log(cd.getFullYear());
// console.log(cd.getMonth());       //0-11 jan to dec
// console.log(cd.getDate());
// console.log(cd.getDay());





// const cd = new Date();

// // // How to set individual Date :-


// let a = cd.setFullYear(2022);
// let b = cd.setDate(07);
// let c = cd.setMonth(10);


// console.log((`${a}/ ${b} /  ${c}`).toLocaleString());






















//*********************TIME METHODS ***********//

// const ct = new Date();

// //How to get individual time \\

// console.log(ct.getTime());        // Return in the form of Milliseconds since 1 January 1970.
// console.log(ct.getHours());       // Return in the form of number.
// console.log(ct.getMinutes());
// console.log(ct.getSeconds());
// console.log(ct.getMilliseconds());








// const st = new Date();
// //  // How to set time Individually\\

// console.log(st.setHours(15));
// console.log(st.setMinutes(20));
// console.log(st.setSeconds(32));
// console.log(st.setMilliseconds(812));



























//**************************MATH OBJECT  IN JAVASCRIPT ***************//

//it allows you to do mathmatical task with numbers//



/* ==> Math.PI */
console.log(Math.PI);





/* ==> Math.round()   */

let num = 10.34434;
console.log(Math.round(num));           // Returns a rounded value. To nearest integer.







/* ==> Math.pow()  */

console.log(Math.pow(2, 4));             //Returns power 2 * 2 * 2 * 2








/* ==> Math.sqrt() */

console.log(Math.sqrt(25));                // Returns square root
console.log(Math.sqrt(81));
console.log(Math.sqrt(24));










/* ==> Math.abs()  */

console.log(Math.abs(-55));                // Return absolute Value.. Convert Negative to Positive
console.log(Math.abs(-55.5));
console.log(Math.abs(-67));









/* ==> Math.ceil() */

console.log(Math.ceil(4.4))                 //Returns upper numbers 
console.log(Math.ceil(9.1))








/* ==> Math.floor() */
console.log(Math.floor(4.9))                // Return lower number









/* ==> Math.min() */

console.log(Math.min(10, 4, 5, 2, 4, 0, -20, 4, 6, 9));             //Returns min number







/* ==> Math.max() */


console.log(Math.max(10, 4, 5, 2, 4, 0, -20, 4, 6, 9));             //Returns max number








/* ==> Math.random() */

console.log(Math.trunc(Math.random() * 10));                        //Returns a random number










/* ==> Math.trunc() */

console.log(Math.trunc(4.6));                                           //Decimal ke pehle ka integer deta h










