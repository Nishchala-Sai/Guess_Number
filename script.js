const guess=document.getElementById('guess');
const submitGuess=document.getElementById('submitGuess');
const result=document.getElementById('result');
let no= Math.floor(Math.random()*100)+1;
let attempts=0;
submitGuess.onclick=function(){
    let n=Number(guess.value);
    result.textContent="";
    let p=document.createElement('p');
    if(!n || n<1 || n>100){
        p.innerHTML="Please enter a valid number between 1 and 100.";
        result.appendChild(p);
        return;
    }
    attempts++;
    if(n===no){
        p.innerHTML=`Congratulations! You guessed the number in ${attempts} attempts.`;
        no= Math.floor(Math.random()*100)+1;
        attempts=0;
        // Generate a new number for the next game
    }else if(n<no){
        p.innerHTML=`Too low! Try again. Attempts: ${attempts}`;
    }else{
        p.innerHTML=`Too high! Try again. Attempts: ${attempts}`;
    }
    result.appendChild(p);
}