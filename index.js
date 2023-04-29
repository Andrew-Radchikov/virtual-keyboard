let body=document.querySelector("body");
let language;
let pressKey=new Set();
let textFocus=0;
let caps=0;

let firstRowUp=["~", "!","@","#","$","%","^","&","*","(",")","_","+"];
let firstRowDown=["`", "1","2","3","4","5","6","7","8","9","0","-","="];
let secondRow=["Q","W","E","R","T","Y","U","I","O","P","[","]","\\", "DEL"];
let secondRowRu=["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","\\", "DEL"];
let thirdRow=["A","S","D","F","G","H","J","K","L",";","'",];
let thirdRowRu=["Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э",];
let fourRow=["En","Z","X","C","V","B","N","M",".",",","/","\u25B2", "Shift"];
let fourRowRu=["Ru","Я","Ч","С","М","И","Т","Ь","Б","Ю",".","\u25B2", "Shift"];

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
comments.innerText="Comments:\nOperating system - Windows\nSwitch language - Cntr+Shift or Shift+Cntr (left buttons)"
keyboard.appendChild(comments);


let buttonField=document.createElement("div");
buttonField.classList.add("keyboard__button-field");
keyboard.appendChild(buttonField);



//Local Storage for Name
function setLocalStorage() {
  localStorage.setItem('language', language);
  
}


function getLocalStorage() {
  
  if(localStorage.getItem('language')) {
      language = localStorage.getItem('language');
    }
    else{
    language="En";
    }
    addButtons(language);

    }
  

  
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);  






function addButtons(lang){

// First row

  for(let i=0; i<13;i++){
    createDubbleButton(firstRowDown[i],firstRowUp[i],0,i*(6.7), "normal");
  }
  createButton("Backspace",0,13*(6.7), "big");

// Second row

  createButton("Tab",20,0, "medium");

  if(lang=="En"){
    for(let i=0; i<12;i++){
      createButton(secondRow[i],20,i*(6.6)+8.5, "normal");
    }
   
  }
  else{
    for(let i=0; i<12;i++){
      createButton(secondRowRu[i],20,i*(6.6)+8.5, "normal");
    }
  }

  createDubbleButton(secondRow[12],"/",20,13*(6.8)-0.7, "normal");
  createButton(secondRow[13],20,14*(6.8)-1, "normal");
  

// Third row

  createButton("Caps Lock",40,0, "big");
  if(lang=="En"){
    for(let i=0; i<11;i++){
      createButton(thirdRow[i],40,i*(6.6)+14, "normal");
    }
  }
  else{
    for(let i=0; i<11;i++){
      createButton(thirdRowRu[i],40,i*(6.6)+14, "normal");
    }
  }

  createButton("Enter",40,11*(6.6)+14.5, "big");

// Four row

  createButton("Shift",60,0, "big");
  if(lang=="En"){
    for(let i=0; i<13;i++){
      createButton(fourRow[i],60,i*(6.7)+14, "normal");
    }
  }
  else{
    for(let i=0; i<13;i++){
      createButton(fourRowRu[i],60,i*(6.7)+14, "normal");
    }
  }

// Fifth row

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


function deleteKeyboard(){
    let normButton=document.querySelectorAll(".keyboard__button");
  for (let i=0; i<normButton.length; i++){
    buttonField.removeChild(normButton[i]);
  }
  let mediumButton=document.querySelectorAll(".keyboard__medium-button");
  for (let i=0; i<mediumButton.length; i++){
    buttonField.removeChild(mediumButton[i]);
  }
  let bigButton=document.querySelectorAll(".keyboard__big-button");
  for (let i=0; i<bigButton.length; i++){
    buttonField.removeChild(bigButton[i]);
  }
 
  buttonField.removeChild(document.querySelector(".keyboard__space"));



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


function showSecondLanguageKey(code){
 switch(code){
  case "KeyQ": showPressButton("Q");showPressButton("Й");break;
  case "KeyW": showPressButton("W");showPressButton("Ц");break;
  case "KeyE": showPressButton("E");showPressButton("У");break;
  case "KeyR": showPressButton("R");showPressButton("К");break;
  case "KeyT": showPressButton("T");showPressButton("Е");break;
  case "KeyY": showPressButton("Y");showPressButton("Н");break;
  case "KeyU": showPressButton("U");showPressButton("Г");break;
  case "KeyI": showPressButton("I");showPressButton("Ш");break;
  case "KeyO": showPressButton("O");showPressButton("Ш");break;
  case "KeyP": showPressButton("P");showPressButton("З");break;
  case "BracketLeft": showPressButton("[");showPressButton("Х");break;
  case "BracketRight": showPressButton("]");showPressButton("Ъ");break;

  case "KeyA": showPressButton("A");showPressButton("Ф");break;
  case "KeyS": showPressButton("S");showPressButton("Ы");break;
  case "KeyD": showPressButton("D");showPressButton("В");break;
  case "KeyF": showPressButton("F");showPressButton("А");break;
  case "KeyG": showPressButton("G");showPressButton("П");break;
  case "KeyH": showPressButton("H");showPressButton("Р");break;
  case "KeyJ": showPressButton("J");showPressButton("О");break;
  case "KeyK": showPressButton("K");showPressButton("Л");break;
  case "KeyL": showPressButton("L");showPressButton("Д");break;
  case "Semicolon": showPressButton(";");showPressButton("Ж");break;
  case "Quote": showPressButton("'");showPressButton("Э");break;

  case "KeyZ": showPressButton("Z");showPressButton("Я");break;
  case "KeyX": showPressButton("X");showPressButton("Ч");break;
  case "KeyC": showPressButton("C");showPressButton("С");break;
  case "KeyV": showPressButton("V");showPressButton("М");break;
  case "KeyB": showPressButton("B");showPressButton("И");break;
  case "KeyN": showPressButton("N");showPressButton("Т");break;
  case "KeyM": showPressButton("M");showPressButton("Ь");break;
  case "Comma": {
      if(language== "En"){
        showPressButton(".")
      } 
      else{showPressButton("Б");}
  };break;
  case "Period": showPressButton(",");showPressButton("Ю");break;
  case "Slash": {
    if(language== "En"){
      showPressButton("/")
    } 
    else{showPressButton(".");}
    };break;
  case "Tab": showPressButton("Tab");break;

  default: {

  }


}



};


function removeSecondLanguageKey(code){
  switch(code){
   case "KeyQ": removePressButton("Q");removePressButton("Й");break;
   case "KeyW": removePressButton("W");removePressButton("Ц");break;
   case "KeyE": removePressButton("E");removePressButton("У");break;
   case "KeyR": removePressButton("R");removePressButton("К");break;
   case "KeyT": removePressButton("T");removePressButton("Е");break;
   case "KeyY": removePressButton("Y");removePressButton("Н");break;
   case "KeyU": removePressButton("U");removePressButton("Г");break;
   case "KeyI": removePressButton("I");removePressButton("Ш");break;
   case "KeyO": removePressButton("O");removePressButton("Ш");break;
   case "KeyP": removePressButton("P");removePressButton("З");break;
   case "BracketLeft": removePressButton("[");removePressButton("Х");break;
   case "BracketRight": removePressButton("]");removePressButton("Ъ");break;
 
   case "KeyA": removePressButton("A");removePressButton("Ф");break;
   case "KeyS": removePressButton("S");removePressButton("Ы");break;
   case "KeyD": removePressButton("D");removePressButton("В");break;
   case "KeyF": removePressButton("F");removePressButton("А");break;
   case "KeyG": removePressButton("G");removePressButton("П");break;
   case "KeyH": removePressButton("H");removePressButton("Р");break;
   case "KeyJ": removePressButton("J");removePressButton("О");break;
   case "KeyK": removePressButton("K");removePressButton("Л");break;
   case "KeyL": removePressButton("L");removePressButton("Д");break;
   case "Semicolon": removePressButton(";");removePressButton("Ж");break;
   case "Quote": removePressButton("'");removePressButton("Э");break;
 
   case "KeyZ": removePressButton("Z");removePressButton("Я");break;
   case "KeyX": removePressButton("X");removePressButton("Ч");break;
   case "KeyC": removePressButton("C");removePressButton("С");break;
   case "KeyV": removePressButton("V");removePressButton("М");break;
   case "KeyB": removePressButton("B");removePressButton("И");break;
   case "KeyN": removePressButton("N");removePressButton("Т");break;
   case "KeyM": removePressButton("M");removePressButton("Ь");break;
   case "Comma": {
    if (language== "En"){
      removePressButton(".");
    } 
    else{
      removePressButton("Б");
    }}
    break;
   case "Period": removePressButton(",");removePressButton("Ю");break;
   case "Slash": {
    if(language== "En"){
      removePressButton("/")
    } 
    else{removePressButton(".");}
    };break;
   case "Tab": removePressButton("Tab");break;
   
 
   default: {
 
   }
 
 
 }
 
 
 
 };





window.addEventListener("keydown", (event)=>{
  if(event.code == "AltLeft" || event.code == "AltRight" || event.key == "Meta" || event.code == "Tab" || event.code == "Control"){ 
    event.preventDefault();
     
  
    if(event.code == "Tab"){
      field.value = field.value + "\t";
    } 
   
  }
 
 


  if(["Shift", "Alt", "Control"].includes(event.key)){
      switch(event.key){
        case "Shift":showSpetialButton("Shift",event.location);pressKey=pressKey.add("Shift");break;
        case "Alt":showSpetialButton("Alt",event.location);break;
        case "Control":showSpetialButton("Cntr",event.location);pressKey=pressKey.add("Control");break;
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
      case "Enter":showPressButton("Enter");break;
      case "Backspace":showPressButton("Backspace");break;
      case "Delete":showPressButton("DEL");break;
      case "\\":showPressButton("\\/");break;
      case "CapsLock":showPressButton("Caps Lock");break;
      case " ":showPressButton(" "); break;
      case "Meta":showPressButton("Win"); break;
      case "ArrowLeft":showPressButton("\u25C0");break;
      case "ArrowUp":showPressButton("\u25B2");break;
      case "ArrowDown":showPressButton("\u25BC");break;
      case "ArrowRight":showPressButton("\u25B6");break;

      

      
      default:{
        showSecondLanguageKey(event.code);
        // showPressButton(event.key);
        // showPressButton(event.key.toUpperCase());
        break;
      }
    }



  }


  if(textFocus == 0){
    
    addSymbolTo(event.key);
  }

// console.log(event)
 
  if(pressKey.has("Control") && pressKey.has("Shift")){
    if(language=="En"){
      language="Ru";
    
    }
    else{
      language="En";
    }


    pressKey.delete("Shift");
    deleteKeyboard();
    addButtons(language);
    showSpetialButton("Shift", 1);
    showSpetialButton("Cntr", 1)


  }


 
})



window.addEventListener("keyup", (event)=>{

  if(["Shift", "Alt", "Control"].includes(event.key)){
      switch(event.key){
        case "Shift":removeSpetialButton("Shift",event.location);pressKey.delete("Shift");break;
        case "Alt":removeSpetialButton("Alt",event.location);break;
        case "Control":removeSpetialButton("Cntr",event.location);pressKey.delete("Control");break;
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
      case "Enter":removePressButton("Enter");break;
      case "Backspace":removePressButton("Backspace");break;
      case "Delete":removePressButton("DEL");break;
      case "\\":removePressButton("\\/");break;
      case "CapsLock":removePressButton("Caps Lock");caps=(caps+1)%2;break;
      case " ":removePressButton(" ");break;
      case "Meta":removePressButton("Win");break;
      case "ArrowLeft":removePressButton("\u25C0");break;
      case "ArrowUp":removePressButton("\u25B2");break;
      case "ArrowDown":removePressButton("\u25BC");break;
      case "ArrowRight":removePressButton("\u25B6");break;

      
      default:{
        removeSecondLanguageKey(event.code);
        break;
      }
    }

  }

})




field.addEventListener("focusin", () => textFocus=1);
field.addEventListener("focusout", () => textFocus=0);
field.addEventListener("blur",(event)=>{
  event.preventDefault();
  removePressButton("Cntr");
  removePressButton("Alt");
  removePressButton("Win");
  removePressButton("D");
})


function addSymbolTo(symbol){
  switch(symbol){
    case "Shift":break;
    case "Backspace":field.value = field.value.slice(0,field.value.length-1);break;
    case "Tab":break;
    case "CapsLock":break;
    case "Enter":field.value = field.value+ "\n";break;
    case "Control":break;
    case "Meta":break;
    case "Alt":break;
    case "NumLock":break;
    case "Delete":break;
    case "End":break;
    case "Insert":break;
    case "PageDown":break;
    case "PageUp":break;
    case "ArrowLeft":field.value = field.value+ "\u25C0";break;
    case "ArrowUp":field.value = field.value+ "\u25B2";break;
    case "ArrowDown":field.value = field.value+ "\u25BC";break;
    case "ArrowRight":field.value = field.value+ "\u25B6";break;
    
    

    default:{
      field.value = field.value + symbol;
    }
    }
  }



function putText(text){
  let x=field.selectionStart;
  field.value = field.value.slice(0,field.selectionStart) + text + field.value.slice(field.selectionStart,field.value.length);
  field.selectionStart=x+1;
  field.selectionEnd=x+1;
}

function backText(){
  let x=field.selectionStart;
  field.value = field.value.slice(0,field.selectionStart-1) + field.value.slice(field.selectionStart,field.value.length);
  field.selectionStart=x-1;
  field.selectionEnd=x-1;
}

function delText(){
  let x=field.selectionStart;
  field.value = field.value.slice(0,field.selectionStart) + field.value.slice(field.selectionStart+1,field.value.length);
  field.selectionStart=x;
  field.selectionEnd=x;
}


  buttonField.addEventListener("mousedown",(event)=>{

    event.preventDefault();
  if(!event.target.classList.contains("keyboard__button-field")){
    field.focus();

    // console.log(event.target.innerText)
    let situation=0;
    if(caps == 1){
      situation+=1;
    }
    if(pressKey.has("Shift")){
      situation += 1;
    }
    situation=situation % 2;
   

    


      switch(event.target.innerText){
        case "Ru":break;
        case "En":break;
        case "Backspace": backText();break;
        case "Tab": putText("\t");
        case "DEL":delText(); break;
        case "Enter":putText("\n"); break;
        case "Shift":break;
        case "Cntr":break;
        case "Alt":break;
        case "":putText(" ");break;
        case "Win":break;
        case "Caps Lock":caps=(caps+1) % 2; break;


        default:{
          if(situation == 0){
          putText(event.target.innerText[0].toLowerCase());
          }
          else{
            if(event.target.innerText.length>1){
              putText(event.target.innerText[2].toUpperCase());
            }
            else{
              putText(event.target.innerText[0].toUpperCase());
            }
          }
        }
      }
     
  }

  


  })
