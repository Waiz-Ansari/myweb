
console.log('this is modules.js')
function average(arr){
    let sum = 0 ;
    arr.forEach(elemen => {
        sum+=elemen
    });
    return sum/arr.length
}
// module.exports={
//     avg:average,
//     name:"harry",
//     repo:"gitlab"  
// }
mod1={
    avg:average,
    name:"harry",
    repo:"gitlab"  
}
exports.input=mod1