let hexNumbers = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
let hex1 = "000000";
let hex2 = "000000";

document.querySelector("#generate").addEventListener("click", ()=>{
    RandomHexGenerator();
});

document.querySelector("#copy").addEventListener("click", ()=>{
    copyToClipboard();
    console.log("copy")
});

function RandomHexGenerator(){
    hex1 = '';
    hex2 = '';
    for(let i = 0; i<6; i++){
        hex1 += hexNumbers[Math.floor(Math.random() * 16)];
        hex2 += hexNumbers[Math.floor(Math.random() * 16)];
    }
    console.log(hex1, hex2);
    document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`;
    document.querySelector("#hex1").innerHTML = hex1;
    document.querySelector("#hex2").innerHTML = hex2;
}

function copyToClipboard(){
    navigator.clipboard.writeText(`background: linear-gradient(45deg, #${hex1}, #${hex2});`)
}