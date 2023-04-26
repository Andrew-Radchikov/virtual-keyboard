console.log("Hi");

let body=document.querySelector("body");


let firstRowUp=["`", "1","2","3","4","5","6","7","8","9","0","-","="];


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


for(let i=0; i<13;i++){
    
    let button=document.createElement("div");
    button.classList.add("keyboard__button");
    button.style.top="0px";
    button.style.left= i*(6.8)+"%";
    button.innerText=`${firstRowUp[i]}`;
    buttonField.appendChild(button);
}

let button=document.createElement("div");
button.classList.add("keyboard__big-button");
button.style.top="0px";
button.style.left= 13*(6.8)+"%";
button.innerText="Backspace";
buttonField.appendChild(button);



