
// const myObject = {
//   city: "Madrid",
//   greet() {
//   console.log(`Greetings from ${this.city}`);
//   console.log("Asslam o Alikum");
//   },
// };

// const { log } = require("console");

// const { receiveMessageOnPort } = require("worker_threads")

// const { time } = require("console")

// const { Console } = require("console");

// // const { generateKey } = require("crypto");



// myObject.greet(); // Greetings from Madrid
// console.log(myObject.toString());
// console.log(myObject)





// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// }
//  while (object);

// Date.prototype
// Object { }
// null





/*
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");

};

myDate.getYear(); // 'something else!'





const personPrototype = {
  greet(){
    console.log(`function called ${this.name}`); //get
  },
};
// personPrototype.greet()
// const carl = Object.create(personPrototype);
// carl.greet(); // hello!
let a = Object.create(personPrototype)

a.name = "muzammil" //set
a.greet();
*/

// =====ye inheritance ha 

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   method() {
//     return 'I have a ' + this.carname;
//   }
// }

// // console.log(car.name)

// class waiz  extends Car {// extends above class ko conect kerny k liye use hota ha
//   constructor(brand, mod) {
//     super(brand);
//     this.mode = mod;
//   }
//   show() {
//   return this.mode + ', it is a ' + this.carname;
//   }
// }

// let myCar = new waiz("Ford", "Mustang");
// console.log(myCar.show());


// =================OVERRIDDE PROPERTIES
// const waiz = { 
//   a: 1,
//   b: 2 
// };
// const ali = { 
//   b: 4, 
//   c: 5 
// };

// // console.log(ali)
// // console.log(waiz);
// Object.assign(ali, waiz);

// console.log(waiz);
// // expected output: Object { a: 1, b: 4, c: 5 }
// console.log(ali)
// // console.log(returnedTarget)
// // console.log(returnedTarget === target);
// // expected output: truenode



// let friend = {
//     friend1:"afmhcgfan",
//     friend2:"umer",
//     friend3:"afnan"
//     }
//     friend.friend4="waiz"
// // let copyFriend = Object.assign({} ,friend)
// // copyFriend.friend3="waiz"
  
// console.log(friend);
// // console.log(copyFriend);




// ================clone and deep clone

// Create an object with a value and a circular reference to itself.
// const original = { 
//   name: "MDN" 
// };
// original.waiz = original;

// // Clone it
// const clone = structuredClone(original);

// console.assert(clone !== original); // the objects are not the same (not same identity)
// console.assert(clone.name === "MDN"); // they do have the same values
// console.assert(clone.itself === clone); // and the circular reference is preserved
// console.log(original)


// function loadScr(callback){
//   let script = document.createElement('script')
//   script.src=src
//   script.onload = ()=>callback(script)
//   document.body.oppend(script)
// }


/*
function loadScript(src , callback){
    let script = document.createElement('script')
    script.src=src;
    script.onload = function(){
        console.log("loaded src " + src)
        callback(src)
    }
script.onerror = function(){
    console.log("error: " + src)
}


    document.body.appendChild(script);

}
function name(src){
    alert("waiz" + src)
}
function Sir_name(src){
    alert("afaz" + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",name)

*/


// ------------generator function


/*
function* generator() {
let i = 0;


while(true){
yield i++
}
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
*/






 /*
function* generator(){
 let i = 100
 while(true){
   
  i++
  yield i 
}
}

let gen = generator()

  function Get_id(){
  `${  document.getElementById("new_id").innerText=gen.next().value }`
  
  }
*/






// ==================proxy trap
//proxy object enables you to intercept and customize the operations performed on object

// let person = {
//   first:"waiz",
//   last:"ansari",
//   // country:"Pakistan"
//   age:20
// }
// console.log(person)
// console.log(person.last)



// console.log("----__----__----__----__----__----__----")

// let proxy_person = new Proxy (person,{
//   get:function(target,prop,receiver) {
//     console.log(prop+' is being accessed');
    
//      if(prop === 'allowedtovote'){
//       if(target.age >= 18){
//         return true
//       }else {
//         return false
//        }
//     }else if(prop === 'full_name'){
//         return target.first + '' + targ et.last
//     }else if(!(prop in target)){
//       throw new ReferenceError('unknown propertys:-'+prop)
//     }
//      return Reflect.get(target , prop, receiver)

//     // return target[prop]
//   },
//   set:function(target,prop,value){
//     if(prop === 'age' && value > 200){
//       throw new Error('invalid age')
//     }
  
//     return Reflect.get(target , prop, value)


//     // target[prop]=value;
//     // return true;
//   }
  
// });
   
// console.log(proxy_person.hello)

// console.log("----__----__----__----__----__----__----")

// console.log(proxy_person.allowedtovote)
// console.log(proxy_person.full_name)
// console.log(person)


// console.log("----__----__----__----__----__----__----")
// proxy_person.age=22

// console.log(proxy_person)
// console.log(proxy_person.allowedtovote)



// console.log(proxy_person)
// console.log(proxy_person.first)
// console.log(proxy_person.last)
// console.log(proxy_person.age)

// console.log("----__----__----__----__----__----__----")

// proxy_person.age = 20;
// console.log(proxy_person);
// console.log(proxy_person.age);


/*

let waiz = {
 waiz1:11,
 waiz2:"waiz22",
 waiz3:"waiz33"
}
// console.log(waiz)
// console.log(waiz.waiz1)

let proxy_waiz = new Proxy (waiz,{
    get:function(target,prop,receiver) {
      console.log(prop+' is being accessed');
      
       if(prop === 'allowedtovote'){
        if(target.waiz1 <= 11){
          return true
        }else {
          return false
         }
      }else if(prop === 'full_name'){
          return target.waiz2 + '' + target.waiz3
      }else (!(prop in target))

       return Reflect.get(target , prop, receiver)
  
      // return target[prop]
    },
    set:function(target,prop,value){
      if(prop === 'waiz1' && value > 20){
        throw new Error('invalid num')
      }
    
      return Reflect.get(target , prop, value)
  
  
      // target[prop]=value;
      // return true;
    }
    
  });
  console.log(proxy_waiz.waiz1)
  waiz.waiz1 = 18
  console.log(proxy_waiz.allowedtovote)
  console.log(waiz.waiz1)
  
  console.log(proxy_waiz.waiz1)
  console.log(proxy_waiz)
*/
 

// let city = {
//  karachi:"malir",
//  lahor:"abc",
//  islamabad:"xyz"
// };

// const proxy_city = {};

// const proxy2 = new Proxy(city,proxy_city)

// console.log(proxy2.karachi);
// console.log(proxy2.lahor);


















/*
let obj = {
  name:"waiz",
  last_name:"ansari",
  age:20

}
let proxy_obj= new Proxy(obj,{
  get:function(target,prop,receiver) {
    console.log(prop+' is being accessed');
    if(prop === "allowedtochange"){
    if(target.age >=18){
      return true
     }else {
          return false
        }
  }else if(prop === 'full_name'){
    return target.name + '' + target.last_name
}else if(!(prop in target)){
  throw new ReferenceError('unknown property:- ' + prop)
}

 return Reflect.get(target , prop, receiver)

  }, 
  
  set:function(target,prop,value){
    if(prop === 'age' && value > 25){
      throw new Error('invalid age')
    }
  
    return Reflect.set(target , prop, value)


    // target[prop]=value;
    // return true;
  }

})


console.log(proxy_obj.age);
proxy_obj.age = 26;
console.log(proxy_obj.age);
console.log(proxy_obj.allowedtochange);

console.log(proxy_obj);
// console.log(goodPerson.firstname);
// console.log(goodPerson.lastname);
// console.log(goodPerson.age);
// ===========================
// console.log(proxy_obj.age)
//   obj.age = 35
//   console.log(proxy_obj.allowedtovote)
  // console.log(proxy_obj.age)


  
  // console.log(proxy_waiz.waiz1)
  // console.log(proxy_obj)
*/


/*
  
let person = {
  firstname: 'Richard',
  lastname: 'Hendricks',
  age: 25
};

console.log(person);
console.log(person.firstname);

// person.age = 300;
// console.log(person);

console.log('---------------------');

let goodPerson = new Proxy(person, {

  get: function(target, prop, receiver) {
      console.log(prop + ' is being accessed');
      if(prop === 'allowedtovote') {
          if(target.age >= 18) {
              return true;
          } else {
              return false;
          }
      } else if(prop === 'fullname') {
          return target.firstname + ' ' + target.lastname;
      } else if(!(prop in target)) {
          throw new ReferenceError('Unknown property:- ' + prop);
      }
      return Reflect.get(target, prop, receiver);
      // return target[prop];
  },

  set: function(target, prop, value) {
      if(prop === 'age' && value > 200) {
          throw new Error('Age is not valid');
      }
      return Reflect.set(target, prop, value);
      // target[prop] = value;
      // return true;
  }
});

// console.log(goodPerson.hello);

console.log('-------------------');

console.log(goodPerson.allowedtovote);
console.log(goodPerson.fullname);

console.log('-------------------------');

goodPerson.age = 35;
console.log(goodPerson);
console.log(goodPerson.allowedtovote);

console.log(goodPerson);
console.log(goodPerson.firstname);
console.log(goodPerson.lastname);
console.log(goodPerson.age);

console.log('---------------------');

try {
  goodPerson.age = 250;
} catch(e) {
  console.log(e.message);
}

console.log(goodPerson);
console.log(goodPerson.age);
*/


