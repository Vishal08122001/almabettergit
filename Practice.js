// function printArray(number) {
//     var newArray = [];

//     for (var i = 1; i <= number; i++) {
//         newArray.push(i);
//     }

//     return newArray;
// }
// console.log(printArray(6));



// function swap(a, b) {
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     return [a, b];
// }
// console.log(swap(3, 4));



// function nameString(name) {
//     var b = "Edabit"
//     var result = name + b;
//     return result;
// }
// console.log(nameString("Vishal"));


// function simpleArraySum(ar) {
//     var sum = 0;
//     for (var i = 0; i < ar.length; i++) {
//         sum = sum + ar[i];
//     }
//     return sum;
// }
// console.log(simpleArraySum([1, 2, 3, 4, 5, 6]));





// function compareTriplets(a, b) {
//     for (var i = 0; i < a.length; i++) {
//         var s = [0];
//         var r = [0];
//         for (var j = 0; j < b.length; j++) {
//             if (a[i] > a[j]) { s++ };

//         }
//         else if (a[j] > a[i]) { r++ };
//     }
//     return [s, r];

// }
// console.log(compareTriplet([1, 2, 3], [2, 1, 2]));

// function compareTriplets(a, b) {
//     let alice = 0;
//     let bob = 0;
//     let answer = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) alice++;
//         if (a[i] < b[i]) bob++;
//     }
//     answer[0] = alice;
//     answer[1] = bob;
//     return answer;
// }


// function abc(arr) {
//     var x = 0, y = 0, z = 0;

//     var c = arr.length;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) x++;
//         if (arr[i] < 0) y++;
//         else if (arr[i] == 0) z++;
//     }
//     var r = x / c.toFixed(6);
//     var s = y / c.toFixed(6);
//     var t = z / c.toFixed(6);

//     return [r, s, t];

// }

// console.log(abc([1, 1, 0, -1, -1]));












// var a = [1, 2, 3, 4, 5, 6, 7, 5, 6, 8];
// let Lnumber = a[0];
// let number = a[0];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > Lnumber) {
//         number = Lnumber;
//         Lnumber = a[i];
//     }
//     else if (a[i] > number) {
//         number = a[i];
//     }

// } console.log(number);

// function abc(A, B) {
//     var GCD = 1;
//     for (var i = 1; i <= A; i++) {
//         if ((A % i == 0) && (B % i == 0)) {
//             GCD = i;
//         }


//     }
//     var lcd = A * B / GCD;
//     return lcd;

// }
// console.log(abc(9, 18));




















// function vowelsAndConsonants(s) {
//     let v = "";
//     let c = "";

//     for (let elements of s) {
//         if (elements == "a" || elements == "e" || elements == "i" || elements == "o" || elements == "u") { v = v + elements; }
//         else { c = c + elements; }
//     }



//     for (var i = 0; i < v.length; i++) { console.log(v.charAt(i)); }

//     for (var j = 0; j < c.length; j++) {
//         console.log(c.charAt(j));
//     }

// }
// vowelsAndConsonants("hello World");






















// function regexVar(re) {

//     for (var i = 0; i < re.length; i++) {
//         if ((re[0] == "a" || "e" || "i" || "o" || "u") && (re[re.length - 1] == re[0])) { console.log("True"); break; }
//         else { console.log("false"); break; }
//     }
//     return re;
// }
// regexVar("abcdea");





// function regexVar() {

//     const re = new RegExp('^([aeiou]).*\\1$');


//     return re;
// }
// regexVar("abcde");

// var readLine = 4;
// var readLine = 4.3;
// var readLine = " Hello";
// var i2 = +(readLine());
// var d2 = +(readLine());
// var s2 = readLine();

// // Print the sum of both integer variables on a new line.
// console.log(i + i2);

// // Print the sum of the double variables on a new line.
// console.log((d + d2).toFixed(1));

// // Concatenate and print the String variables on a new line
// // The 's' variable above should be printed first.
// console.log(s + s2);






















// function factorial(a) {
//     var fact = 1;
//     for (var i = 1; i <= a; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(factorial(4));










// function reverseString(s) {
//     try {
//         s = s.split('').reverse().join('');
//     }
//     catch (e) {
//         console.log(e.message);
//     }
//     finally {
//         console.log(s);
//     }
// }






// function A(c) {
//     c = c.split('');
//     c = c.reverse();
//     c = c.join('');
//     console.log(c);
// }

// A("12345");























// THROWING AN ERROR
// function isPositive(a) {

//     if (a >= 1) return "YES";
//     else if (a == 0) throw new Error("Zero Error");
//     else if (a < 0) throw new Error("Negative Error");
// }






//MEAL TIP PERCENT;



// function solve(meal_cost, tip_percent, tax_percent) {
//     const a = (meal_cost * tip_percent) / 100;
//     const b = (meal_cost * tax_percent) / 100;
//     console.log(Math.round(meal_cost + a + b));

// }
// solve(10.25, 17, 5);

























//GRADE PRINTER :-


// function getgrade(score) {
//     let grade;

//     if ((score > 25) && (score <= 30)) { grade = "A"; }
//     else if ((score > 20) && (score <= 25)) { grade = "B"; }
//     else if ((score > 15) && (score <= 20)) { grade = "C"; }
//     else if ((score > 10) & (score <= 15)) { grade = "D"; }
//     else if ((score > 5) & (score <= 10)) { grade = "E"; }
//     else if ((score > 0) & (score <= 5)) { grade = "F"; }
//     else { console.log("Please Enter Score between 0 to 30!"); }
//     return grade;
// }

// console.log(getgrade(34));

















//SWITCH CONDITION:-

// function getLetter(s) {
//     let letter;
//     // Write your code here
//     let vowel = /^[aeiou]/;
//     let con1 = /^[bcdfg]/;
//     let con2 = /^[hjklm]/;
//     let con3 = /^[npqrstvwxyz]/;
//     switch (true) {
//         case vowel.test(s):
//             letter = 'A'
//             break;
//         case con1.test(s):
//             letter = 'B'
//             break;
//         case con2.test(s):
//             letter = 'C'
//             break;
//         case con3.test(s):
//             letter = 'D'
//             break;
//         default:
//             letter = 'null'
//     }
//     return letter;
// }
//console.log(getLetter("bfskf"));


























//PRINT SECOND LARGEST NUMBER OF ARRAY

function getSecondLargest(nums) {
    let max1 = 0;
    for (const e of nums) {
        if (max1 < e) {
            max1 = e;
        }
    }

    let max2 = 0;
    for (const e of nums) {
        if (max2 < e && e < max1) {
            max2 = e;
        }
    }

    return max2;
}



















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























// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// let newa = a.map((curElem) => curElem * 2).filter((curElem) => curElem <= 6).reduce((ACCUMULATOR, curElem, index, a) => { return ACCUMULATOR = ACCUMULATOR + curElem });
// console.log(newa);

























// function Rectangle(a, b) {
//     const rec = {
//         length: a,
//         width: b,
//         perimeter: 2 * (a + b),
//         area: a * b

//     }
//     return rec;
// }























//CLASS VS INSTANCE:-


function Person(initialAge) {
    // Add some more code to run some checks on initialAge
    if (initialAge > 0) this.age = initialAge;
    else {
        this.age = 0;
        console.log("Age is not valid, setting age to 0.");
    }
    this.amIOld = function () {
        // Do some computations in here and print out the correct statement to the console
        if (this.age < 13) console.log("You are young.");
        else if (this.age < 18) console.log("You are a teenager.");
        else console.log("You are old.");

    };
    this.yearPasses = function () {
        this.age++;
    };
}



































//COUNT OBJECT HACKERRANK:-

function getCount(objects) {
    let count = 0;

    objects.map((curElem) => {
        if ((curElem.x) === (curElem.y)) { count = count + 1; }
    })

    return count;

}










