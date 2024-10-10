//digital clock
function displayTime(){
     let dateTime = new Date()
     let hour = dateTime.getHours();
     let minute=dateTime.getMinutes();
     let second =dateTime.getSeconds();
   document.getElementById('hours').innerHTML =  hour 
   document.getElementById('minutes').innerHTML = padzero( minute)
   document.getElementById('seconds').innerHTML = padzero(second) 
    
}
{
    function padzero(num){
        // return num<10?"0"+num:num
        if (num<10){
            return "0"+num
        }
        else{
            return num
        }
    }
}
setInterval(displayTime,1000)
 
//timer
const  time=document.querySelector(".time");
const start = document.getElementById("startTimer");
const stop = document.getElementById("stopTimer");
const Reset = document.getElementById("resetTimer");
  let mins =0;
  let secs =0;
  let millis=0;
  let timer;
  time.innerHTML ="0"+mins+":"+"0"+secs+":"+"0"+millis;
  if(millis<10){
    millis ="0"+millis;
}
if(secs<10){
    secs="0"+secs;
}
if(mins<10){
    mins="0"+mins;
}
start.addEventListener("click",function(){
    timer=setInterval(()=>{
        if (millis >=99){
            secs++;
            millis = 0;
            millis ="0"+millis;
            if(secs<10){
                secs ="0"+secs;  
              }
            
        }
        else if (secs >= 59){ 
            mins++;
            millis =0;
            millis ="0"+millis;
            secs =0;
            secs="0"+secs;
            if(mins<10){
                mins="0"+mins;
            }
        }
        else{
            millis++;
            if(millis<10)
{
    millis ="0"+millis;
}        }
time.innerHTML =mins+":"+secs+":"+millis;
    },10) ;
   
    Reset.addEventListener("click",function(){
        clearTimeout(timer);
        time.innerHTML ="00:00:00";
        millis=secs=mins="00";
    }); 
    stop.addEventListener("click",function(){
        clearInterval(timer);  
       });
       document.getElementById('clockButton').addEventListener('click', () => {
        document.getElementById('clock').classList.remove('hidden');
        document.getElementById('timer').classList.add('hidden');
    });
    
    document.getElementById('timerButton').addEventListener('click', () => {
        document.getElementById('timer').classList.remove('hidden');
        document.getElementById('clock').classList.add('hidden');
    });
});