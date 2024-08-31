// define variables
var player=document.querySelector('.player');
var computer=document.querySelector('.computer');
var winner=document.querySelector('.winner');
var pPoint=document.querySelector('.pPoint');
var cPoint=document.querySelector('.cPoint');
var pCount=0, cCount=0;
var random, computerChoice;
// ++, --
// check
console.log(player);
console.log(computer);
console.log(winner);
console.log(pPoint);
console.log(cPoint);
// action
function play(playerChoice){
    // alert("test")
    player.innerText="Player choice: " + playerChoice;
    // computer -> random->0==rock,1==papar,2==scissors
    random = Math.floor(Math.random()*3);
    console.log(random);
    if(random==0){
        computerChoice="rock"
        computer.innerText="Computer choice: rock";
    }else if(random==1){ 
        computerChoice="paper";
        computer.innerText="Computer choice: paper";
    }else if(random==2){
        computerChoice="scissors";
        computer.innerText="Computer choic: scissors";
    }
    // player -> rock == scissors , papar==rock, scissors==papar
    if(
    (playerChoice=="rock" && computerChoice=="scissors")
    ||(playerChoice=="papar" && computerChoice=="rock")
    ||(playerChoice=="rock" && computerChoice=="scissors")
    ){
        winner.innerText="winner : player";
        pCount++;
        pPoint.innerText = "player: "+pCount;
    }else if(playerChoice==computer){
        winner.innerText="winner : tie";
    }else{
        winner.innerText="winner : computer";
        cCount++;
        cPoint.innerText = "computer: "+cCount;
    }
    }
function restart(){
    cPoint.innerText="Computer: 0";
    cCount=0;
    player.innerText="Player choice:";
    computer.innerText="computer choice";
    winner.innerText="winnner";
    pPoint.innerText="player: 0";
    pCount=0;
}
console.log("hello");
