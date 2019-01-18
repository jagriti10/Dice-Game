 /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score ,RoundScore,ActivePlayer,dice,GamePlaying;

document.querySelector('.btn-new').addEventListener('click',init);
 
function init(){

score = [0,0];
RoundScore = 0;
ActivePlayer =0;

document.querySelector('.dice').style.display='none';

 document.getElementById('score-0').textContent='0';
 document.getElementById('score-1').textContent='0';
 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';
 document.getElementById('name-0').textContent='Player 1';
 document.getElementById('name-1').textContent='Player 2';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.add('winner');
};



 init();
 /* 0 will be player 1 , 1 will be player 2*/

/* dice =Math.floor(Math.random()*6)+2;
 console.log(dice); */
 //console.log(dice)
 
// document.querySelector('#current-'+ ActivePlayer).textContent= dice;
//var x = document.querySelector('#score-0').textContent;
//console.log(x); 



document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(GamePlaying){
      
    
    var dice = Math.floor(Math.random()*6)+1;
    var diceDom= document.querySelector('.dice');
    diceDom.style.display= "block";
    diceDom.src ='dice-'+dice+'.png';
    console.log(dice);

        if(dice!==1){

            RoundScore += dice;
            document.querySelector('#current-'+ActivePlayer).textContent=RoundScore;
            }
        else         {
             NextPlayer();
            }

}});

    
    
document.querySelector('.btn-hold').addEventListener('click',function(){
        
    score[ActivePlayer] += RoundScore;
    document.querySelector('#score-'+ActivePlayer).textContent= score[ActivePlayer];
    document.querySelector('.player-'+ActivePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+ActivePlayer+'-panel').classList.add('active');
  
    if(GamePlaying){
    if(score[ActivePlayer]>=30)
        {
         document.querySelector('#name-'+ActivePlayer).textContent="winner !!";
         document.querySelector('.dice').style.display='none';
         GamePlaying=false;
        }
        else{
            NextPlayer();
        }
    }
});

function NextPlayer()
{   
    ActivePlayer === 0?ActivePlayer =1:ActivePlayer =0 ;
    RoundScore= 0;
    
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none'; 
};



/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


