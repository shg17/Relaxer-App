const container=document.querySelector('.container');
const text=document.querySelector('#text');

const totalTime=7500
const breatheTime=(totalTime/5)*2;
const holdTime=totalTime/5;

breatheAnimation()

function breatheAnimation(){
    text.innerHTML='breathe in'
    container.className='container grow'


    //time is the time to wait untill we execute the function inside it 
    setTimeout(()=>{

        // chnge the inner text after this amount of time
        text.innerText='Hold'

        setTimeout(()=>{
            text.innerText='breathe-out!'
            container.className='container shrink'

        },holdTime)


    },breatheTime)
}

setInterval(breatheAnimation,totalTime)
    
