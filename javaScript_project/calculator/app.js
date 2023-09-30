
//// let a = document.getElementsByTagName('div')[0];
//// let span = document.createElement('span');
//// span.innerHTML = '<h1>osudhf</h1>';
//// a.append(span);//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ka bottom ma bhej dety ha 
//// // a.prepend(div)//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ka top ma bhej dety ha 
//// // a.before(div)//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ka top bahir bhej dety ha 
//// // a.after(div)//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ka bottom k bahir bhej dety ha 
//// // a.replaceWith()//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ko replace kerny k kaam ati ha 








// -----calculator


// let main_div = document.createElement('div');
// main_div.setAttribute("id", "Div1");
// main_div.appen


// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }






















let a = document.getElementsByTagName('div')[0];//html div
// let a = document.createElement("div");//html div

let div = document.createElement('div');//main js div
div.setAttribute("class", "container flex flex-col item-center");



// ====input
let div_row0 =  document.createElement('div')//main/div ye div her button se phely creat hoga
div_row0.setAttribute("id", "row");

let input =  document.createElement('input')// main/input
input.setAttribute("class", "input");
input.setAttribute("type", "text");


// -------first btn row
let div_row1 =  document.createElement('div')//main/div ye div her button se phely creat hoga
div_row1.setAttribute("id", "row");

let button1 = document.createElement('button')//div/btn
button1.setAttribute("class", "button btn b-t");
button1.innerHTML="c"
let button2 = document.createElement('button')//div/btn
button2.setAttribute("class", "button btn b-t");
button2.innerHTML="m1"
let button3 = document.createElement('button')//div/btn
button3.setAttribute("class", "button btn b-t");
button3.innerHTML= "00"
let button4 = document.createElement('button')//div/btn
button4.setAttribute("class", "button btn b-t");
button4.innerHTML="100"

// -------2nd btn row
let div_row2 =  document.createElement('div')//main/div ye div her button se phely creat hoga
div_row2.setAttribute("id", "row");

let button5 = document.createElement('button')//div/btn
button5.setAttribute("class", "button col");
button5.innerHTML=7
let button6 = document.createElement('button')//div/btn
button6.setAttribute("class", "button col");
button6.innerHTML=8
let button7 = document.createElement('button')//div/btn
button7.setAttribute("class", "button col");
button7.innerHTML=9
let button8 = document.createElement('button')//div/btn
button8.setAttribute("class", "button col");
button8.innerHTML="*"


// -------3rd btn row
let div_row3 =  document.createElement('div')//main/div ye div her button se phely creat hoga
div_row3.setAttribute("id", "row");

let button9 = document.createElement('button')//div/btn
button9.setAttribute("class", "button col");
button9.innerHTML= 4
let button10 = document.createElement('button')//div/btn
button10.setAttribute("class", "button col");
button10.innerHTML=5
let button11 = document.createElement('button')//div/btn
button11.setAttribute("class", "button col");
button11.innerHTML=6
let button12 = document.createElement('button')//div/btn
button12.setAttribute("class", "button col");
button12.innerHTML= "/"


// -------4th btn row
let div_row4 =  document.createElement('div')//main/div ye div her button se phely creat hoga
div_row4.setAttribute("id", "row");

let button13 = document.createElement('button')//div/btn
button13.setAttribute("class", "button col");
button13.innerHTML=3
let button14 = document.createElement('button')//div/btn
button14.setAttribute("class", "button col");
button14.innerHTML=2
let button15 = document.createElement('button')//div/btn
button15.setAttribute("class", "button col");
button15.innerHTML=1
let button16 = document.createElement('button')//div/btn
button16.setAttribute("class", "button col");
button16.innerHTML= "+"


// -------5th btn row
let div_row5 =  document.createElement('div')//main/div ye div her button se phely creat hoga
div_row5.setAttribute("id", "row");

let button17 = document.createElement('button')//div/btn
button17.setAttribute("class", "button col");
button17.innerHTML="."
let button18 = document.createElement('button')//div/btn
button18.setAttribute("class", "button col");
button18.innerHTML= 0
let button19 = document.createElement('button')//div/btn
button19.setAttribute("class", "button col");
button19.innerHTML= "="
let button20 = document.createElement('button')//div/btn
button20.setAttribute("class", "button col");
button20.innerHTML= "-"







// div.inner = input
a.append(div)
div.append(input)
// div_row0.append(input)

// -----first btn row
div.append(div_row1)
div_row1.append(button1)
div_row1.append(button2)
div_row1.append(button3)
div_row1.append(button4)

// -----2nd btn row
div.append(div_row2)
div_row2.append(button5)
div_row2.append(button6)
div_row2.append(button7)
div_row2.append(button8)

// -----3rd btn row
div.append(div_row3)
div_row3.append(button9)
div_row3.append(button10)
div_row3.append(button11)
div_row3.append(button12)


// -----4th btn row
div.append(div_row4)
div_row4.append(button13)
div_row4.append(button14)
div_row4.append(button15)
div_row4.append(button16)


// -----5th btn row
div.append(div_row5)
div_row5.append(button17)
div_row5.append(button18)
div_row5.append(button19)
div_row5.append(button20)






// -----loop
// for(let i = 0; i<4;i++){
//     let button21 = document.createElement('button')//div/btn
//     button21.setAttribute("class", "button col");
//     if(i==0)
//         button21.innerHTML='.';
//     else
//         button21.innerHTML=i;
    
// div_row5.append(button21)
// }





let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{

            // ===operators
            if(e.target.innerHTML == '='){
                string = eval (string);
                // console.log('string',string);
                document.querySelector('.input').value =string;
            }
            else if(e.target.innerHTML == 'c'){
                string = "";
                document.querySelector('.input').value =string;
    }
    // ===
    else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        // console.log("srting",string)
        document.querySelector('.input').value =string;
    }
}
catch{
    console.log("error occured")
}
})

})