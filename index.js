console.log("Hi");

let body=document.querySelector("body");

let firstRowUp=["~", "!","@","#","$","%","^","&","*","(",")","_","+"];
let firstRowDown=["`", "1","2","3","4","5","6","7","8","9","0","-","="];
let secondRow=["Q","W","E","R","T","Y","U","I","O","P","[","]","\\", "DEL"];
let thirdRow=["A","S","D","F","G","H","J","K","L",";","'",];
let fourRow=["/","Z","X","C","V","B","N","M",".",",","/","cn", "Shift"];

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



window.addEventListener("keydown", (event)=>{
console.log(field.value)
field.innerText=field.value+event.key;
//    textArea.innerHTML=textArea.value+event.key;
    // console.log(event);
})

