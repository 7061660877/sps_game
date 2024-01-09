let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#com-score");

//function for count score
/*const count=(userWin)=>
{
let c=0;
c++;
return c;
}*/

//function for game draw
const drawGame=()=>
{
    console.log("Game is Draw!");
    msg.innerText="Game Draw"
    msg.style.backgroundColor="blue";
    msg.style.color="red";
}
const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        console.log("You win !");
        userScorePara.innerText=userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="yellow";
    }
    else{
        compScore++;
        comScorePara.innerText=compScore;
        console.log("You lose");
        
        msg.innerText= `You lost! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="yellow";
    }

}

//function for computer choice
const genCompChoice=()=>
{
    const options=["rock","paper","scissor"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];

}


//function for user choice
const playGame=(userChoice)=>
{
console.log("user choice=",userChoice);
//Generate computer choice
const compChoice=genCompChoice();
console.log("comp choice=", compChoice);

if(userChoice===compChoice)
{
    drawGame();
}
else
{
    let userWin=true;
    if(userChoice==="rock")
    //scissors,paper
    {
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
//rock,scissor
userWin=compChoice==="scissor"?false:true;

    }
    else
    {
        //rock,paper
       userWin= compChoice==="rock"? false:true;
    }
    showWinner(userWin,userChoice,compChoice)
    //Count(c);
}
}


// function  choice for each choice
choices.forEach((choice)=>
{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
console.log("choice was clicked",userChoice);
playGame(userChoice);
    })
})