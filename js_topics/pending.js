// 1 = regexp  perhna ha 
/*
// proxy

let obj = {
  name:"waiz",
  last_name:"ansari",
  age:20

}

let proxy_obj= new Proxy(obj,{
  get:function(target,prop,receiver) {
    //   console.log(prop+' is being accessed');
      if(target.age >=18){
        //   console.log(receiver)
    }
    return Reflect.get(target , prop, receiver)
    
    
}, 

  set:function(target,prop,value){
      if(prop === 'age' && value > 25){
          throw new Error('invalid age')
        }
    // console.log(value)
    return Reflect.set(target , prop, value)

  }

})


console.log(proxy_obj.age);
// change the prop (if you are putting invalid age . >20 .you will receive the error)
proxy_obj.age = 23;

console.log(obj);
console.log(proxy_obj);*/

// =====Object.define property

/*
let waiz ={
   name:"waiz",
   last:"ansari",
   tab:"samsung"
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
console.log(waiz.mobile)
*/