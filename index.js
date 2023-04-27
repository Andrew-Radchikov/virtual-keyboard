let body=document.querySelector("body");

let firstRowUp=["~", "!","@","#","$","%","^","&","*","(",")","_","+"];
let firstRowDown=["`", "1","2","3","4","5","6","7","8","9","0","-","="];
let secondRow=["Q","W","E","R","T","Y","U","I","O","P","[","]","\\", "DEL"];
let thirdRow=["A","S","D","F","G","H","J","K","L",";","'",];
let fourRow=["/","Z","X","C","V","B","N","M",".",",","/","\u25B2", "Shift"];

let keyboard=document.createElement("div");
keyboard.classList.add("keyboard");
body.appendChild(keyboard);

let nameOfProject=document.createElement("h1");
nameOfProject.classList.add("keyboard__name");
nameOfProject.innerText="Virtual-keyboard";
keyboard.appendChild(nameOfProject);




let field=document.createElement("textarea");
field.classList.add("keyboard__text-field");
keyboard.appendChild(field);


let comments=document.createElement("div");
comments.classList.add("keyboard__comments");
keyboard.appendChild(comments);


let buttonField=document.createElement("div");
buttonField.classList.add("keyboard__button-field");
keyboard.appendChild(buttonField);


function addButtons(){
  for(let i=0; i<13;i++){
    createDubbleButton(firstRowDown[i],firstRowUp[i],0,i*(6.7), "normal");
  }
  createButton("Backspace",0,13*(6.7), "big");

  createButton("Tab",20,0, "medium");
  for(let i=0; i<12;i++){
    createButton(secondRow[i],20,i*(6.6)+8.5, "normal");
  }
  createDubbleButton(secondRow[12],"/",20,13*(6.8)-0.7, "normal");
  createButton(secondRow[13],20,14*(6.8)-1, "normal");

  createButton("Caps Lock",40,0, "big");
  for(let i=0; i<11;i++){
    createButton(thirdRow[i],40,i*(6.6)+14, "normal");
  }
  createButton("Enter",40,11*(6.6)+14.5, "big");

  createButton("Shift",60,0, "big");
  for(let i=0; i<13;i++){
    createButton(fourRow[i],60,i*(6.7)+14, "normal");
  }

  createButton("Cntr",80,0, "medium");
  createButton("Win",80,8.5, "normal");
  createButton("Alt",80,15, "normal");

  let button=document.createElement("div");
    button.classList.add("keyboard__space");
    button.style.top="80%";
    button.style.left= "21.5%";
    buttonField.appendChild(button);

    createButton("Alt",80,66, "normal");
    createButton("Cntr",80,72.5, "medium");

    createButton("\u25C0",80,81, "normal");
    createButton("\u25BC",80,88, "normal");
    createButton("\u25B6",80,94.5, "normal");
}


function createButton(text, x,y,type){

    let button=document.createElement("div");
    switch(type){
        case "normal":button.classList.add("keyboard__button");break;
        case "big":button.classList.add("keyboard__big-button");break;
        case "medium":button.classList.add("keyboard__medium-button");break;
    }
    button.style.top=x+"%";
    button.style.left= y+"%";
    button.innerText=text;
    buttonField.appendChild(button);
}


function createDubbleButton(text1, text2, x,y,type){

    let button=document.createElement("div");
    
    button.classList.add("keyboard__button");
    button.style.top=x+"%";
    button.style.left= y+"%";
    button.innerText=text1;

let button2=document.createElement("div");
button2.classList.add("button__include");
button2.innerText=text2;
button.appendChild(button2);

    buttonField.appendChild(button);
}


addButtons();

// Show button


function showPressButton(text){
  let normButton=document.querySelectorAll(".keyboard__button");
  for (let i=0; i<normButton.length; i++){
    if(normButton[i].textContent == text){
       normButton[i].classList.add("keyboard__button__active");
     }
  }
  let mediumButton=document.querySelectorAll(".keyboard__medium-button");
  for (let i=0; i<mediumButton.length; i++){
    if(mediumButton[i].textContent == text){
      mediumButton[i].classList.add("keyboard__medium-button__active");
     }
  }
  let bigButton=document.querySelectorAll(".keyboard__big-button");
  for (let i=0; i<bigButton.length; i++){
    if(bigButton[i].textContent == text){
      bigButton[i].classList.add("keyboard__big-button__active");
     }
  }
  if(text == " "){
    document.querySelector(".keyboard__space").classList.add("keyboard__space__active");
  }
}


function removePressButton(text){
  let normButton=document.querySelectorAll(".keyboard__button");
  for (let i=0; i<normButton.length; i++){
    if(normButton[i].textContent == text){
       normButton[i].classList.remove("keyboard__button__active");
     }
  }
  let mediumButton=document.querySelectorAll(".keyboard__medium-button");
  for (let i=0; i<mediumButton.length; i++){
    if(mediumButton[i].textContent == text){
      mediumButton[i].classList.remove("keyboard__medium-button__active");
     }
  }
  let bigButton=document.querySelectorAll(".keyboard__big-button");
  for (let i=0; i<bigButton.length; i++){
    if(bigButton[i].textContent == text){
      bigButton[i].classList.remove("keyboard__big-button__active");
     }
  }
  if(text == " "){
    document.querySelector(".keyboard__space").classList.remove("keyboard__space__active");
  }
}




function showSpetialButton(name, location){
  
  if(name == "Shift"){
    if(location == 1){
      let bigButton=document.querySelectorAll(".keyboard__big-button");
      for (let i=0; i<bigButton.length; i++){
        if(bigButton[i].style.top == "60%" && bigButton[i].style.left == "0%"){
          bigButton[i].classList.add("keyboard__big-button__active");
         }
        
      }
    }
    else{
      let button=document.querySelectorAll(".keyboard__button");
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "60%" && button[i].style.left == "94.4%"){
          button[i].classList.add("keyboard__button__active");
         }
      }
    }
  }


  
  if(name == "Alt"){
    let button=document.querySelectorAll(".keyboard__button");
    if(location == 1){
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "80%" && button[i].style.left == "15%"){
          button[i].classList.add("keyboard__button__active");
         }
        
      }
    }
    else{
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "80%" && button[i].style.left == "66%"){
          button[i].classList.add("keyboard__button__active");
         }
        
      }
    }
  }
  if(name == "Cntr"){
    let button=document.querySelectorAll(".keyboard__medium-button");
    if(location == 1){
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "80%" && button[i].style.left == "0%"){
          button[i].classList.add("keyboard__medium-button__active");
         }
        
      }
    }
    else{
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "80%" && button[i].style.left == "72.5%"){
          button[i].classList.add("keyboard__medium-button__active");
         }
        
      }
    }
  }


}



function removeSpetialButton(name, location){
  
  if(name == "Shift"){
    if(location == 1){
      let bigButton=document.querySelectorAll(".keyboard__big-button");
      for (let i=0; i<bigButton.length; i++){
        if(bigButton[i].style.top == "60%" && bigButton[i].style.left == "0%"){
          bigButton[i].classList.remove("keyboard__big-button__active");
         }
        
      }
    }
    else{
      let button=document.querySelectorAll(".keyboard__button");
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "60%" && button[i].style.left == "94.4%"){
          button[i].classList.remove("keyboard__button__active");
         }
      }
    }
  }


  
  if(name == "Alt"){
    let button=document.querySelectorAll(".keyboard__button");
    if(location == 1){
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "80%" && button[i].style.left == "15%"){
          button[i].classList.remove("keyboard__button__active");
         }
        
      }
    }
    else{
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "80%" && button[i].style.left == "66%"){
          button[i].classList.remove("keyboard__button__active");
         }
        
      }
    }
  }
  if(name == "Cntr"){
    let button=document.querySelectorAll(".keyboard__medium-button");
    if(location == 1){
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "80%" && button[i].style.left == "0%"){
          button[i].classList.remove("keyboard__medium-button__active");
         }
        
      }
    }
    else{
      for (let i=0; i<button.length; i++){
        if(button[i].style.top == "80%" && button[i].style.left == "72.5%"){
          button[i].classList.remove("keyboard__medium-button__active");
         }
        
      }
    }
  }


}



window.addEventListener("keydown", (event)=>{

  if(["Shift", "Alt", "Control"].includes(event.key)){
      switch(event.key){
        case "Shift":showSpetialButton("Shift",event.location);break;
        case "Alt":showSpetialButton("Alt",event.location);break;
        case "Control":showSpetialButton("Cntr",event.location);break;
      }
  }
  else{

    switch(event.key){
      case "`":showPressButton("`~");break;
      case "1":showPressButton("1!");break;
      case "2":showPressButton("2@");break;
      case "3":showPressButton("3#");break;
      case "4":showPressButton("4$");break;
      case "5":showPressButton("5%");break;
      case "6":showPressButton("6^");break;
      case "7":showPressButton("7&");break;
      case "8":showPressButton("8*");break;
      case "9":showPressButton("9(");break;
      case "0":showPressButton("0)");break;
      case "-":showPressButton("-_");break;
      case "=":showPressButton("=+");break;
      case "~":showPressButton("`~");break;
      case "!":showPressButton("1!");break;
      case "@":showPressButton("2@");break;
      case "#":showPressButton("3#");break;
      case "$":showPressButton("4$");break;
      case "%":showPressButton("5%");break;
      case "^":showPressButton("6^");break;
      case "&":showPressButton("7&");break;
      case "*":showPressButton("8*");break;
      case "(":showPressButton("9(");break;
      case ")":showPressButton("0)");break;
      case "_":showPressButton("-_");break;
      case "+":showPressButton("=+");break;
      case "Backspace":showPressButton("Backspace");break;
      case "Delete":showPressButton("DEL");break;
      case "\\":showPressButton("\\/");break;
      case "CapsLock":showPressButton("Caps Lock");break;
      case " ":showPressButton(" ");break;
      case "Meta":showPressButton("Win");break;
      case "ArrowLeft":showPressButton("\u25C0");break;
      case "ArrowUp":showPressButton("\u25B2");break;
      case "ArrowDown":showPressButton("\u25BC");break;
      case "ArrowRight":showPressButton("\u25B6");break;

      
      default:{
        showPressButton(event.key);
        showPressButton(event.key.toUpperCase());
        break;
      }
    }

  }
})



window.addEventListener("keyup", (event)=>{

  if(["Shift", "Alt", "Control"].includes(event.key)){
      switch(event.key){
        case "Shift":removeSpetialButton("Shift",event.location);break;
        case "Alt":removeSpetialButton("Alt",event.location);break;
        case "Control":removeSpetialButton("Cntr",event.location);break;
      }
  }
  else{

    switch(event.key){
      case "`":removePressButton("`~");break;
      case "1":removePressButton("1!");break;
      case "2":removePressButton("2@");break;
      case "3":removePressButton("3#");break;
      case "4":removePressButton("4$");break;
      case "5":removePressButton("5%");break;
      case "6":removePressButton("6^");break;
      case "7":removePressButton("7&");break;
      case "8":removePressButton("8*");break;
      case "9":removePressButton("9(");break;
      case "0":removePressButton("0)");break;
      case "-":removePressButton("-_");break;
      case "=":removePressButton("=+");break;
      case "~":removePressButton("`~");break;
      case "!":removePressButton("1!");break;
      case "@":removePressButton("2@");break;
      case "#":removePressButton("3#");break;
      case "$":removePressButton("4$");break;
      case "%":removePressButton("5%");break;
      case "^":removePressButton("6^");break;
      case "&":removePressButton("7&");break;
      case "*":removePressButton("8*");break;
      case "(":removePressButton("9(");break;
      case ")":removePressButton("0)");break;
      case "_":removePressButton("-_");break;
      case "+":removePressButton("=+");break;
      case "Backspace":removePressButton("Backspace");break;
      case "Delete":removePressButton("DEL");break;
      case "\\":removePressButton("\\/");break;
      case "CapsLock":removePressButton("Caps Lock");break;
      case " ":removePressButton(" ");break;
      case "Meta":removePressButton("Win");break;
      case "ArrowLeft":removePressButton("\u25C0");break;
      case "ArrowUp":removePressButton("\u25B2");break;
      case "ArrowDown":removePressButton("\u25BC");break;
      case "ArrowRight":removePressButton("\u25B6");break;

      
      default:{
        removePressButton(event.key);
        removePressButton(event.key.toUpperCase());
        break;
      }
    }

  }
  console.log(event.key)
})

// console.log(field.value)
// field.innerText=field.value+event.key;
//    textArea.innerHTML=textArea.value+event.key;
//    console.log(event);