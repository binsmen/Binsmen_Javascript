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
