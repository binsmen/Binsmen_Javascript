// console.log("Into js");
// console.log("Pizza are crazy");

// window.alert( "This is an alert");
// window.alert( "How is an alert");

// console.log(`Hello there`);
// console.log(`Going cool guys`);

// document.getElementById("bye").textContent =`Hello`;
// document.getElementById("Hello").textContent = `Bye`;

// let age=17;

// if(age >= 18){
//     console.log(`You're eligible to vote since your age is ${age} , and that is greater than 17`);
// }
// else {
//     console.log(`Not eligible to vote`);
// }


// let FirstName= "Neel";
// let LastName = "Binsmen";

// console.log(typeof FirstName);
// console.log(FirstName);
// console.log(LastName);

// console.log(`You like ${FirstName}`);

// let isprime=true;

// console.log(`Yeah 2 is the only even prime no: ${isprime}`);

// let FullName="Neel Vasthav";
// let age=17;
// let isstudent=true;

// document.getElementById("det1").textContent = `You're name is ${FullName},`;
// document.getElementById("det2").textContent = `You're age is ${age},`;
// document.getElementById("det3").textContent = `You're a student ${isstudent}`;

// let score=0;
// score+=1;
// score++;
// score**=6;
// document.getElementById("det1").textContent = `You're total score is ${score}`;

//Learning operator precedence --> Let's go
// Order:
// 1.Parenthesis
// 2.Exponents
// 3.*,%,/
// 4.addition,subtraction
// 5.unary operators


//Easy way to accept user input
/*
let age;

age=window.prompt(`What's you're current age :`);

if(age>=18){
    console.log(`You're eligible to vote`);
}
else{
    console.log(`You're not eligible to vote`);
}
*/

//Proffesional way to take user input = HTML textbox



/*
document.getElementById("mysub").onclick = function(){
    username=document.getElementById("myText").value;
    console.log(`your username is ${username}`);
    if(username=="Abinivesh"){
        document.getElementById("welcome").textContent = `You're an idiot ${username}`;
    }else{
        document.getElementById("welcome").textContent = `Hey how has been going`;
    }

}
*/


//Still some confusion --> OF Accepting the isfemale and ismale

// let username; let ismale; let isfemale;
/*
document.getElementById("mysub").onclick = function(){
    username=document.getElementById("myText").value;
    ismale=document.getElementById("male").value;
    isfemale=document.getElementById("female").value;
    if(isfemale && username=="Abinivesh"){
        document.getElementById.textContent = `You're not eligible ${username}`;
    }else document.getElementById.textContent = `Happy journey ${username}`;
}
*/

/*
let age=window.prompt(`How old are you`);
age=Number(age);
age+=1;
console.log(age,typeof age);
*/


//Type conversion: Between Numb,String,Bool
/*
let x="money",y="money",z="money";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
*/


/*

let ra;

let circumference;

ra = window.prompt(`Enter the radius of an circle`);
circumference=2*PI*ra;
console.log(`The circumference of the circle is ${circumference}`)
*/


//Printing the area and circumference of the circle

/*
const PI=3.14159;

let radius;
let circumference;
let area;

document.getElementById("mysub").onclick = function(){
    radius=document.getElementById("myRadii").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    area=PI*(radius**2);
    document.getElementById("circumference").textContent = `The circumference of the circle is : ${circumference}cm`;
    document.getElementById("area").textContent =`The area of the circle is : ${area}cm2`;
}*/



//Counter program

/*
const decreasebtn= document.getElementById("decrease");
const resetbtn= document.getElementById("reset");
const increasebtn= document.getElementById("increase");
let countlabel= document.getElementById("countlabel");

let count=0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count=0;
    countlabel.textContent = count;
}
*/


//Random number generator

//For rolling an dice

// const min=1; const max=6;

// let randomNum=Math.floor(Math.random()*6)+1;

// console.log(randomNum);

// let num=Math.floor(6/5);

// console.log(num);



/*
document.getElementById("myBtn").onclick = function(){
    let randomNum=Math.floor(Math.random()*6)+1;
    document.getElementById("val_counter").textContent = randomNum;
    if(randomNum==6){
        document.getElementById("win").textContent = `Hooray u won`;
    }else document.getElementById("win").textContent = ``;
}
*/


/*
const fit=document.getElementById("fit??");
const two=document.getElementById("two");
const one=document.getElementById("one");
const x=document.getElementById("x");

const sub=document.getElementById("mySubmit");
const fitresult=document.getElementById("fit-result");
const timeresult=document.getElementById("time-result");

sub.onclick = function(){
    if(fit.checked){
        fitresult.textContent = `You're into the game 😎`;
    }
    else{
        fitresult.textContent = `Ahh Get out of your comfort zone buddy 😩`;
    }

    if(two.checked){
        timeresult.textContent = `lets rock !!!`;
    }
    else if(one.checked){
        timeresult.textContent = `lets rock !!!`;
    }
    else if(x.checked){
        timeresult.textContent = `lets rock !!!`;
    }
    else{
        timeresult.textContent = `Don't be so lazy 🙂‍↕️`;
    }
}
    */

//Ternary operator
/*
let age=18;

console.log(age>=18 ? `You're an adult` : `You're an minor`);
*/

//Switch --> Replacement of many if else if statements ;

/*
let Cgr=document.getElementById("cgr");
let sub=document.getElementById("mysub");
let result=document.getElementById("result");
let suprise=document.getElementById("suprise");
let grade;

sub.onclick = function(){
    let cgr=Cgr.value;
    switch(true){
        case cgr==10:
            grade="A*";
            break;
        case cgr>=7.5:
            grade="A";
            break;
        case cgr>=5:
            grade="B";
            break;
        default : 
            grade="F";
    }
    result.textContent = `Your grade for this academic year is ${grade}`;

    if(grade=="A*"){
    suprise.textContent = `Hooray you have been exempted for the next term , keep learning and keep grinding`;
    }
}
*/


//Number guessing game


/*
const min=1;
const max=100;

let randomNum=Math.floor(Math.random()*(max-min+1))+min;
let attempts=0;
let guess;

console.log(`Hey guess what the random number is ${randomNum}`);

while(true){
    guess=window.prompt(`Enter an number between ${min}-${max} -- > Chack how much attempt will it take for you`);
    guess=Number(guess);
    if(isNaN(guess) || guess<min || guess>max){
        window.alert(`Enter an valid number between ${min}-${max}`);
    }
    else{
        if(guess>randomNum){
            attempts++;
            window.alert(`Too high brotha!!`);
        }else if(guess < randomNum){
            attempts++;
            window.alert(`Are you serious ?? Why too low guess`);
        }else {
            window.alert(`You entered the correct number ${randomNum} and it took you ${attempts} attempts`);
            break;
        }
    }
}
*/



//Creating an temperature conversion card using js
/*
const val=document.getElementById("val");
const celcius=document.getElementById("celcius");
const farenheit=document.getElementById("farenheit");
const sub=document.getElementById("convert");
const out=document.getElementById("out")

let output;
let val1;

sub.onclick = function(){
    val1=Number(val.value);
    if(celcius.checked){
        output=(val1*9/5)+32;
    }else if(farenheit.checked){
        output=(val1-32)*5/9;
    }
    out.textContent = `The converted value is ${output}`;
}
*/


//Spread operators
/*
let fruits = ["apple","banana","mango"];

let food = [...fruits,"eggs","hamp","pine"];

console.log(food);

let num="strings";

let newnum = [...num].join("-");

console.log(newnum);
*/



//Rest parameters

/*
let item1="sushi";
let item2="Magique";
let item3="Pizza";
let item4="hamburger";
let item5="Rice";

//Reverse working manipulatories:
function getMenu(...Menu){
    return Menu;
}

let Menu=getMenu(item1,item2,item3,item4,item5);
console.log(`You've got ${Menu} in your Menu`);
*/


//Calculating the average of the marks using rest parameters 

/*
function myAverage(...numbers){
    let output=0;
    for(let num of numbers) output+=num;
    return output/numbers.length;
}

let average = myAverage(55.6,84,96);
console.log(`Your Average marks is ${average}`);
*/


//Dice Roller Program 

//ONclick property 
const val=document.getElementById("val");
const dice=document.getElementById("diceresult");
const image=document.getElementById("diceimage");

let rollit;

function RollDice(){
    rollit=val.value;
    let result=[];
    let images=[];

    for(let i=0; i<rollit; i++){
        let randomNum=Math.floor(Math.random()*6)+1;
        result.push(randomNum);
        images.push(`<img src = "Dice_images/${randomNum}.png">`);
    }

    dice.textContent = `Dice : ${result.join(', ')}`;
    image.innerHTML = images.join('');

}