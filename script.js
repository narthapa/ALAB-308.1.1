//let variable
{
let x=10;
let y= 25;
let value =x+y;
console.log(value);
}

let a= 250;
let b= 350;
let result=a/b;
console.log(result);


//const variable

const x= 250;
const y=520;
console.log(x*y);


//Part 1: Math Problems

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50); //true

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25); //false

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique); //ture

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd); //true

const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isTwoOdd); //true

//divisible by 5
const module= (n1 + n2 + n3 + n4);
const M=50/5;
console.log(M); //10

//comparision
const comp1=n1;
const comp2=n4;
const C= n1<n4;
console.log(C); //false
 {
    const C=n1>n4;
    console.log(C); //True
 }


 //subtracts
 let s= n2-n1;
 console.log(s);//5

 const multiply=n3*5;
 console.log(multiply); //100

 let d=multiply/n4;
 console.log(d); //20



 {
    //Part 2: Practical Math
    
    /*You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.

You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?*/

const td=1500;
const m= 55;
const m1=60;
const m2=75;
constm2=75;
const mpg=30;
const mpg1=28;
const mpg2=23;
const costpergallon=3;
const tbuget=175;


//At 55 miles per hour, you get 30 miles per gallon.
const gallonsneeded =(td/mpg);
console.log(gallonsneeded); //Total gallons needed for =50
 
const totalcost=(gallonsneeded*costpergallon);
console.log(totalcost); //total cost for 55 miles= $150
 //Trip is possible 



 //At 60 miles per hour, you get 28 miles per gallon.
 const gallonsneeded60=(td/mpg1);
 console.log(gallonsneeded60);//53.57

 const totalcost1=(gallonsneeded60*costpergallon);
 console.log(totalcost1);//$160.72
 //Trip is possible



//At 75 miles per hour, you get 23 miles per gallon.
 const gallonsneeded75= (td/mpg2);
 console.log(gallonsneeded75);// 65.21

 const totalcost2=(gallonsneeded75*costpergallon);
 console.log(totalcost2); //$195.65
 // Trip is not possible.
 }


