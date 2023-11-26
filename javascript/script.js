// Homework

//1.  Ստեղծել աջ քլիքով մենյու

const body = document.body;
let menu = document.createElement('div');
menu.innerHTML = "<ul><li>Refresh</li><li>Option</li><li>Inspect</li><li>Back</li></ul>"
menu.setAttribute('class', "contextMenu")
body.addEventListener("contextmenu", (x)=> {
  x.preventDefault();
  menu.style.display = "none";
  menu.style.top = x.pageY + "px"
  menu.style.left = x.pageX + "px"
  menu.style.display = "flex";
  body.appendChild(menu);
})
body.addEventListener("click", () => {
  menu.style.display = "none"
})

//2.  ստեղծել պարզագույն հաշվիչ

const buttons = [1,2,3,'+',4,5,6,"-",7,8,9,"*","Del",0,"=","/"];
const btnList = document.getElementById('buttons');
const result = document.getElementById('result');

buttons.forEach((x) => {
  let btn = document.createElement("button");
  btn.innerText = x;
  body.addEventListener("keyup", (e) => {
    if(e.key == x && e.key != '='){
     result.innerText += e.key;
    } else if (e.key == "Enter" || e.key == "=") {
      result.innerText = eval(result.innerText);
    } else if (e.key == "Backspace" || e.key == "Delete") {
      result.innerText = ""
    }
  })
  btn.addEventListener("click", (e)=> {
    if(e.target.innerText == "="){
      result.innerText = eval(result.innerText);
    }else if(e.target.innerText == "Del"){
      result.innerText = ""
    }
    else{
     result.innerText += e.target.innerText;
    }
  })
  btnList.appendChild(btn)
})

//3*.  ստեղծել համակարգչի ստեղնաշար

const keyboard = document.getElementById('keyboard');
const codeList = ["Backquote", "Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7",
"Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT",
"KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash", "CapsLock","KeyA",
"KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ",
"KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","ControlLeft",
"MetaLeft","AltLeft","Space","AltRight","MetaRight","ContextMenu","ControlRight"];
const keyList = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
"Tab","Q","W","E","R","T","Y","U","I","O","P","[","]",'|',
"CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter",
"Shift","Z","X","C","V","B","N","M",",",".","/","Shift",
"Ctrl","Meta","Alt","","Alt","Meta","Menu","Ctrl"]


codeList.forEach((item, index) => {
  let button = document.createElement('button');
  button.innerText = keyList[index];
  keyboard.appendChild(button);
  button.id = item
  button.className = "KeyboardBtns"
  body.addEventListener("keydown", (e)=> {
    if (e.code == item) {
      button.style.backgroundColor = "white"
    }
  })
  body.addEventListener("keyup", (e)=> {
    if (e.code == item) {
      button.style.backgroundColor = ""
    }
  })
  button.addEventListener("mousedown", (e)=> {
    if (e.target.innerText == keyList[index]) {
      button.style.backgroundColor = "white"
    }
  })
  button.addEventListener("mouseup", (e)=> {
    if (e.target.innerText == keyList[index]) {
      button.style.backgroundColor = ""
    }
  })
})