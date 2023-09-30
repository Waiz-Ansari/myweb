//===Object.defineProperty(object,"property",{value:"vlaue"})

// const { Console, log, timeLog } = require("console");

// const { run } = require("node:test")


// this is object.define property
/*let waiz ={
    sajodc:"aljdbkcn",
    ansjkld:"akjsdbhcdajkhbck",
    akhdjb:"sa"
}
// 3 ways to access properties in java script

// Dot property accessor: object.property
// Square brackets property access: object['property']
// Object destructuring: const { property } = object

Object.defineProperty(waiz,"mobile",{ // value , writable , amutable
value:"infinx",
writable:false
})
waiz.mobile = "samsung"
console.log(waiz)
console.log(waiz.mobile)*/

// -----------yr ni dekhna 
/*let friend = {
    friend1:"affan",
    friend2:"umer",
    friend3:"afnan"
    }
    
    Object.defineProperty(friend,"friend3",{value:"abdulllah"})
    Object.defineProperty(friend,"friend2",{value:"abdulsdfcsdc"})
    Object.defineProperty(friend,"friend1",{value:"asdcsdcsd"})
    
    console.log("1"+friend.friend1)
    console.log("2"+friend.friend2)
    console.log("3"+friend.friend3)
        
        
    document.getElementById("demo").innerHTML =  "1"+friend.friend1;
    document.getElementById("demo2").innerHTML = "2"+friend.friend2;
    document.getElementById("demo3").innerHTML = "3"+friend.friend3;
        
        
        
    console.log(friend)*/

// same kaam horha ha as above
/*let copyFriend = Object.assign({}, friend)
copyFriend.friend3 = "Hamza"
 
console.log(friend);
console.log(copyFriend);*/

// (((((((((((((Object Destructuring)))))))))))))


/*let waizz=[23,45,67,78,89,90]
let [b,c,d ] =waizz

console.log(b,c,d)*/


/*let x,y,z
const rest1 = [2,3,5]
let [a,v ,...rest]=rest1
// const rest2 = ["ali", 21,"khan"]
//     [x,y,z]=[1,2,3];
console.log(...rest);
// [x,y,z, ...rest]


/* //------------------ye ni dekhna --------
// let a=["waiz","ali","sdajklb"]
// let [b , c, ...rest] = a
// console.log(rest)

// [b,c, ...waizz]
// console.log(waiz) 

// let e, f, rest;
// [a, b] = [10, 20];

// console.log(a);

// console.log(b);

// [e, f, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);*/












// (((((((((((((   cunstructor  )))))))))))))
// let obj ={
//     Name:"waiz",
//     lastName:"ansari",
//     address:"karachi"
// }
// function obj1(givenName) {
// this.Name=givenName
// }

// let obj2 = new obj1("ansari");
// console.log(obj.hasOwnProperty())
// (((((((((((((   cunstructor  )))))))))))))

//  ---class
/*
 class railway_form{
    submit(){
        alert(this.name + " : your form submitted for train number: "+this.train)
    }
    cancel(){
        alert(this.name+" : this form is cancelled for train number: "+this.train)
    }
    fill(givenName , trainNum){
        this.name = givenName
        this.train = trainNum
    }

 }
 //  creat a form for waiz
 let waizForm = new railway_form()
 //  fill the form with waiz's details
 waizForm.fill("waiz", 1111)
 

//  creat a form for ali
let aliForm = new railway_form()
let aliForm1 = new railway_form()
//  fill the form with ali's details
 aliForm.fill("ali",2222)
 aliForm1.fill("ali1",222233)


 waizForm.submit()
 aliForm.submit()
 aliForm1.submit()
 aliForm.cancel()
*/



//  --------cunstructor
// --1st cunstructor define
/*class railway_form{
    constructor(givenName , trainNum){
        console.log("cunstructor called....."+ givenName +" "+ trainNum)
        this.name = givenName
        this.train = trainNum
    }
    submit(){
        alert(this.name + " : your form submitted for train number: "+this.train)
    }
    cancel(){
        alert(this.name+" : this form is cancelled for train number: "+this.train)
    }
    // fill(givenName , trainNum){
    //     this.name = givenName
    //     this.train = trainNum
    // }

 }
//  creat and fill a form for waiz
let waizForm = new railway_form("waiz", 1111)
//  fill the form with waiz's details
// waizForm.fill("waiz", 1111)


//  creat and fill a form for ali
let aliForm = new railway_form("ali",2222)
let aliForm1 = new railway_form("ali1",222233)
//  fill the form with ali's details
//  aliForm.fill("ali",2222)
//  aliForm1.fill("ali1",222233)


 waizForm.submit()
 aliForm.submit()
 aliForm1.submit()
 aliForm.cancel()*/






//  ----2nd cunstructor define
/*

class railway_form{
    constructor(givenName , trainNum,address){
        // console.log("cunstructor called....."+ givenName +" "+ trainNum + " "+ address)
        this.name = givenName
        this.train = trainNum
        this.address = address
    }
  
  
    preview(){
        alert(`${this.name} : your form is sumitted for train number ${this.train} and youor address is ${this.address}`)
        // alert(this.name + " : your form submitted for train number: "+this.train + "and your address is " + this.address)
    }
    submit(){
        alert(this.name + " : your form submitted for train number: "+this.train)
    }
    cancel(){
        alert(this.name+" : this form is cancelled for train number: "+this.train)
        this.train = 0
    }
  
  }
  
  let waiz = new railway_form("waiz",1111,"karachi")
  console.log(waiz)
  waiz.preview()
  waiz.submit()
  waiz.cancel()
  waiz.preview()
  //  let junaid = new railway_form("junaid",2222,"lahor")
  
*/



// ===========inheritance
/*
class animal{
    constructor(human,name,color){
        this.human_name = human
        this.animal_name = name
        this.animal_color = color
    }

    run(){
    console.log(`${this.human_name} your ${this.animal_name} is running`)
    }
    shout(){
        console.log(`${this.animal_name} is shouting`)
        }
        // cancel(){
        //     console.log(`${this.animal_name} is not avilabe`)
        //     }
}

// let waiz = new animal( "waiz","loin",)
// waiz.run()

 class monkey extends animal{

    constructor(human,eat,name,color,){
        super(human,name,color);
        this.eating =eat;
        }


    eting(){
        console.log(`${this.animal_name} is eating banana  `);
    }
 }


 let affnan = new monkey("waiz","banana","monkey","yelow")
 affnan.eting()
 let waiz = new monkey("waiz","","tiger","")
 waiz.run();
//  waiz.eating()

*/

// ============prototype



/*class friend{
    constructor(friend1,friend2,friend3){
    this.f=friend1;
    this.r=friend2;
    this.d=friend3;
    
    }
    vew(){
     console.log(`${this.r}  where is my freind `)
    }
  }
  let waiz = new friend ("affan","umer","afffnan");
  console.log(waiz.vew())
  console.log(waiz)

*/


// const myObject = {
//     city: "Madrid",
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };

//   myObject.greet( myObject);
// //   console.log(Object.prototype)


//   let object1 ={
//     qeidfkn:"wllak"
//   };
//   object1.salkb=">LKSdjcn"

// //  object1.wrcdf = 34


// // console.log(object1)
//   console.log(object1.protoype.isPrototypeOf('salkb'))
//   console.log(object1)

// // const object1 = {};
// // object1.property1 = 42;

// // console.log(object1.hasOwnProperty('property1'));



/*
let obj = {
    mobile: "infinx",
    book: "english",
    pen: "signature"
}

function waiz(gavenname) {
    this.name = gavenname
}

function view() {
    return  this.name + " its your name?" ;
} 

waiz.prototype.view = view

let obj2 = new waiz("waiz")
console.log(obj2)
console.log(obj2.view())
*/










