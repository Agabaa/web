//single line comment in js
/**
 * multi line comment
 */


/**VARIABLE DECLARATION
 * var
 * const constants(PI)
 * let
 */
var name= "John";
let numberTwo=3;
const PI=3.14;

/**
 * DataTypes
 */
//int
let number=3;
let number1=4;
console.log(number*number1)

//strings
let name1="John"; 

let welcome = `Welcome back ${name1} `;
console.log(welcome);
console.log("welcome back"+""+ name1);
console.log(name1.toUpperCase())
console.log(name1.length);

let isStudent =true;
let isInHall = false;

//logical Operators

console.log(isStudent && isInHall);
console.log(isStudent || isInHall);

//Arrays
let fruits =['mangoes','oranges','grapes']
console.log(fruits)
fruits.push('banana')
console.log(fruits)
fruits.pop()//removes the last element in array
console.log(fruits)

//objects
let credentials = {
    "email": "john@gmail.com",
    "password": "123456",
}
let signUp={
    "name": "John",
    "age": 25,
    "city": "Lagos",
    "email": "john@gmail.com",
    "password": "123456",
    
}
console.log(signUp);
// comparision operators
 
signUp["confirmPassword"]= "123456"
console.log(signUp.password==signUp.confirmPassword)
console.log(signUp.name===signUp.confirmPassword)


let code = 3
let code1 ='3'

if(code == code1){
    console.log('equal')
}else{
    console.log('not equal')
}

let obj ={
    fname:"james"
}
//if statments
let age=20
if (age>18){
    console.log('you are an adult')
}else{
    console.log('you are a child')
}
/**loops

for(initialization,condition,increment){
    results

    while loop
    initialization
    while(condition){
    results
    increment
    }
*/
let i=1
/**while(i<100){
    console.log(i)
    i++
}*/
for(let i=1;i<100;i++){
    console.log(i)
}

for(i in fruits){
    console.log(fruits[i])
}
for(i of fruits){
    console.log(i)
}
/**switch(param){
 * case;
 * break;
 * 
 * case;
 * break;
 * 
 * default;
}*/
let day="monday"
switch(day){
    case "monday":
        console.log("today is monday")
        break;
        case "tuesday":
            console.log("today is tuesday")
            break;
            case "wednesday":
                console.log("today is wednesday")
                break;
                case "thursday":
                    console.log("today is thursday")
                    break;
                    case "friday":
                        console.log("today is friday")
                        break;
                        case "saturday":
                            console.log("today is saturday")
                            break;
                            case "sunday":
                                console.log("today is sunday")
                                break;
                                default:
                                    console.log("invalid day")
                                    }
