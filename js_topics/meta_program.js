// function decorator(prototypeClass){
//     const ref = Reflect.ownKeys(prototypeClass).filter(item => item !== "constructor")
//     // console.log(ref)
//     for (const rf of ref){
//         prototypeClass[rf] = new Proxy(prototypeClass[rf],{
//             __proto__:null,
//             apply(rf,thisArg,argList){
//                 console.log(`[${rf.name}] was called with: [${JSON.stringify(argList)}] args` )
//                 console.time('speeed')
//                 const result = rf.apply(thisArg,argList)
//                 console.timeEnd('speeed')
//                 return result
//             }
//         })
//     }
// }

// class Database{
//     person = new Proxy({name:""},{
//         set(currentContext , propertyKey, newValue){
//             // console.log({ 
//             //     propertyKey,
//             //     newValue
//             // })
//             currentContext[propertyKey] = newValue
//             return true
//         }
// })
// constructor(){
//     decorator(Database.prototype);
// }

//     creat(){
//         console.log('creating....')
//         let counter = 10e4
//         for (let i=0; i<=counter; i++);
//         this.person.name = 'test' 
//         return ' created'
//     }
// }
// const detabase = new Database()
// console.log('creat response',detabase.creat({name:'waiz'})) 
// console.log("person",detabase.person)


