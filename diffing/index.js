// const fs = require('fs');

// // Read the contents of the custom JSON files
// const file1 = fs.readFileSync('custom1.json', 'utf8');
// const file2 = fs.readFileSync('custom2.json', 'utf8');

// // Parse the JSON data
// const data1 = JSON.parse(file1);
// const data2 = JSON.parse(file2);

// // Compare the JSON data using a custom diffing algorithm
// const diff = compareObjects(data1, data2);

// // Display the result
// console.log(diff);

// // Custom diffing algorithm
// function compareObjects(obj1, obj2) {
//   const diff = {};

//   for (let key in obj1) {
//     if (typeof obj2[key] === 'undefined') {
//       diff[key] = {
//         oldValue: obj1[key],
//         newValue: undefined
//       };
//     } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
//       const nestedDiff = compareObjects(obj1[key], obj2[key]);
//       if (Object.keys(nestedDiff).length > 0) {
//         diff[key] = nestedDiff;
//       }
//     } else if (obj1[key] !== obj2[key]) {
//       diff[key] = {
//         oldValue: obj1[key],
//         newValue: obj2[key]
//       };
//     }
//   }

//   for (let key in obj2) {
//     if (typeof obj1[key] === 'undefined') {
//       diff[key] = {
//         oldValue: undefined,
//         newValue: obj2[key]
//       };
//     }
//   }

//   return diff;
// }





// var a = { a: 1, b: 3 };
// var b = { c: 2, d: 3 };

// var rest = {};

// for (var key in a) {
//   if (a.hasOwnProperty(key) && !b.hasOwnProperty(key)) {
//     rest[key] = a[key];
//   }
// }

// console.log(rest);









// var a = { a: 1, b: 3 };
// var b = { c: 2, d: 3 };

// var rest = {};

// for (var key in a) {
//   if (!(key in b)) {
//     rest[key] = a[key];
//   }
// }

// console.log(rest);  // Output: { a: 1 }
// var a = { a: 1, b: 3 };
// var b = { c: 2, d: 3 };

// var rest = {};

// for (var key in a) {
//   if (!(key in b)) {
//     rest[key] = a[key];
//   }
// }

// console.log(rest);




























//completed
// var a = [1, 3];
// var b = [2, 3];

// var rest = [];

// for (var i = 0; i < a.length; i++) {
//   var found = true;

//   for (var l = 0; l < b.length; l++) {
//     if (a[i] != b[l]) {
//       found = false;
//         break
//     }
//   }

//   if (!found) {
//     rest.push(a[i]);
//   }
// }

// console.log(rest);  // Output: [1]



// var obj1 = {a:1}
// var obj2 = {b:{obj1}}

// for (var key in obj1) {
//     console.log(obj1[key]);
    // if(obj1 == obj2){
    //     console.log(key)
    // }
    // else{
    //     console.log(obj1[key] + "waiz")
    // }
// }
// for(var i=0; i <= obj1.length; i++){
//     console.log(obj2[i])
// }




// =========================================================
// question no 1
// for (let row = 1; row <= 4; row++) {
//     let rowPattern = '';
    
//     for (let i = 1; i <= row; i++) {
//         rowPattern += 'X';
//     }
  
//     console.log(rowPattern);
//   }


// for(var i=4 ; i>=1 ; i--){
//   let row="";

//   for (var j=0; j<i ; j++){
//      row += "X"
//   }
//   console.log(row)
// }


// ==========================================================
// // question no 2
// var a ={a:1,b:3}
// var b ={a:2,b:3}

// var result = null;


// for (var key in a,b){
//   let arr1 = a[key]
//   let arr2 = b[key]

//   // console.log(arr1)
// if (arr1 !== arr2){
//   result = arr1
// }

// }
// console.log(result)


var a ={a:1,b:3}
var b ={a:2,b:3}

var wait = null;
for (var key in a,b){
  let val = a[key]
  let val1 = b[key]

  // console.log(val,val1)

  if(val !== val1){
    wait=val
  }
}
console.log(wait)



// var a = {a: 1, b: 3};
// var b = {a: 2, b: 3};

// var result = null;

// Object.keys(a).forEach(function(key) {
//   if (a[key] !== b[key]) {
//     result = a[key];
//   }
//   // else{
//   //   result = b[key]
//   // }
// });

// console.log(result);
// ===============================================================

// var a = {a: 1, b: 3};
// var b = {a: 2, b: 3};

// var result = null;

// for (var key in a) {
//   if (a[key] !== b[key]) {
//     result = a[key];
//     break;
//   }
// }

// console.log(result);

// //qestion no 3
// var a ={a:1}
// var b = {c:{a:1}}

// var value1=  Object.values(a)
// console.log(value1)
// var value2=  Object.values(b.c)
// console.log(value2)

// var result = null;


// for (var key in value1,value2){
//   let values1 = value1[key]
//   let values2 = value2[key]

//   // console.log(arr1)
// if (values1 == values2){
//   result = values1
// }

// }
// console.log(result)




