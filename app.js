const textEffect= document.getElementById('text')
const speedEffect = document.getElementById("speed");
const text='Any fool can write code that a computer can understand. Good programmers write code that humans can understand.';

let idx=1
let speed= 300/speedEffect.value;

writeText()

//to write the text
function writeText(){
    textEffect.innerText= text.slice(0,idx)

    idx++;
    if(idx >text.length){
        idx=1
    }

//Increasing the speed for text
    setTimeout(writeText , speed);
}

speedEffect.addEventListener('input',(e)=>{
    speed=300/e.target.value;
})
document.getElementById("effect").style.position='absolute';
document.getElementById("effect").style.bottom='0px';


