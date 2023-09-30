// window.location.reload()
console.log("this is a java script")
const data = [
    {
        name:"Waiz",
        age:"20",
        city:"Karachi",
        language:"JavaScript",
        Image:"https://randomuser.me/api/portraits/men/75.jpg"
        
    },
    {
        name:"affan",
        age:"19",
        city:"lhr",
        language:"html",
        Image:"https://randomuser.me/api/portraits/men/76.jpg"
        
    },
    {
        name:"umer",
        age:"18",
        city:"islamabad",
        language:"Css",
        Image:"https://randomuser.me/api/portraits/men/77.jpg"
        
    },
    {
        name:"hamza",
        age:"17",
        city:"punjab",
        language:"bootstarp",
        Image:"https://randomuser.me/api/portraits/men/78.jpg"
        
    },
    {
        name:"ali",
        age:"16",
        city:"qoita",
        language:"python",
        Image:"https://randomuser.me/api/portraits/men/79.jpg"
        
    },
    {
        name:"huzaifa",
        age:"15",
        city:"pishawer",
        language:"flutter",
        Image:"https://randomuser.me/api/portraits/men/80.jpg"
        
    }
]

// ==Cv iterator
function cviterator(profiles){
    let nextIndex = 0;
    return {
        next:function(){
            return nextIndex < profiles.length?
            {value: profiles[nextIndex++], done : false}:{done:true}
        }
    };
}

const candidates = cviterator(data)
nextCV()
// button
const b_next = document.getElementById('next');
b_next.addEventListener('click' ,nextCV);


function nextCV(){
    const crunt_candidates = candidates.next().value;
    let Img = document.getElementById('image');
    let Prof = document.getElementById('profile');
    if(crunt_candidates != undefined){
        
        Img.innerHTML = `<img src = '${crunt_candidates.Image}' >`
        Prof.innerHTML = `<ul class = "list_group">
        <li class = "list-group-item">Name ${crunt_candidates.name}</li>
        <li class = "list-group-item">${crunt_candidates.age} years old</li>
        <li class = "list-group-item">Lives in ${crunt_candidates.city}</li>
        <li class = "list-group-item">primarly works on  ${crunt_candidates.language}</li>
        
        </ul>`
        
        
    }else{ 
        alert("End")
        window.location.reload()
    }
}



//console.log(crunt_candidates.next().value)











// // // // // // // // // // // // // ====iterator function
// function iterator(fruit){
    //     let nextIndex = 0
    //     // we will return an object
    //     return {
//         next:function(){
//             if(nextIndex < fruit.length){
//                 return { value : fruit[nextIndex++], done:false }
//             }else{
//                 return { done:true }
//             }
//         }
//         }
//     }




// const arr = ['apple', 'grapes' , 'mango']
// console.log(arr)

// // using the iterator

// const use = iterator (arr)
// console.log(use.next())
// console.log(use.next())
// console.log(use.next())

