let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let copyCode = document.getElementById('copy-code');
let codeBox = document.getElementById('code-box');

let hexCodes = "0123456789abcdef";

function hexValues(){
    let colorWithHash = "#";
    
    for( let i=0; i<6; i++){
        colorWithHash = colorWithHash + hexCodes[Math.floor ( Math.random()*16 ) ];
    }
    return colorWithHash;
};

let color1 = "#090979";
let color2 = "#00d4ff";

function btn1Func(){

    color1 = hexValues();
    document.body.style.background = `linear-gradient(90deg, ${color1} 35%, ${color2} 100%)`;
    btn1.textContent = color1;

    copyCode.textContent = `background: linear-gradient(90deg, ${color1} 35%, ${color2} 100%);`;
}
function btn2Func(){
    
    color2 = hexValues();
    document.body.style.background = `linear-gradient(90deg, ${color1} 35%, ${color2} 100%)`;
    btn2.textContent = color2;

    copyCode.textContent = `background: linear-gradient(90deg, ${color1} 35%, ${color2} 100%);`;
}

function copyColor(){
    navigator.clipboard.writeText(copyCode.innerText);
    alert("This Background Gradient is copied!");
}

btn1.addEventListener("click", btn1Func);
btn2.addEventListener("click", btn2Func);
codeBox.addEventListener("click", copyColor);