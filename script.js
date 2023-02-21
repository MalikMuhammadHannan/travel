// let arr =[1,2,3,4,5,6]
// let a ;
// do {
//     a= prompt ("enter a num")
//     a = Number.parseInt(a)
//     arr.push(a)
// }while (a != 0);
// console.log(arr)

// let arr =[1,2,3,4,5,6]
// let ab= arr.reduce((e1,e2)=>{
//     return (e1*e2)
// })
// console.log(ab)








// let a = Math.round(Math.random() * 10)
// a = Number.parseInt(a)
// let ask;
// score = 100

// while (ask !== a) {
//     score -= 1
//     let ask = prompt("num")


//     if (ask == a) {
//         alert("correct")
//         console.log(`you guess actual in ${100 - score} chances `)
//         break

//     }
//     else if (ask < a) {
//         console.log(`the number is greater than ${ask} `)
       

//     }
//     else if (ask > a) {

//         console.log(`the number is lesser than ${ask} `)
       
//     }
//     else{
//         console.log("enter b/w 1 to 100")
//     }
// }
// console.log(a)

age = prompt("enter age")
const canDrive = (age)=>{
    return age >=18 ? true : false
}
if (canDrive(age)){
    alert("can drive")
}
if(age>0){
    console.error("put right value")
}
else{
    alert("can't drive")

}


// let a = Math.floor((Math.random() * 10))
// let input = prompt('Guess the number')

// while (a !== input) {
//     if (a == input) {
//         break;
//     }
//     else if (input > a) {
//         alert("You have guessed greater number")
//         input = prompt('Guess the number')
//     }
//     else {
//         alert("You have guessed lower number")
//         input = prompt('Guess the number')
//     }


// }
// alert("Guessed Number is correct")



