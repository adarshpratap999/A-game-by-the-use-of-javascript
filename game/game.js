let userscore=0;
let computerscore=0;
const userscore_span = document.getElementById('user-score');
const computerscore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');




function getComputerChoice(){
      const choices=["r","p","s"];
      const randomnumber = Math.floor(Math.random() *3 );
      return choices[randomnumber];
}



 function converttoward(letter){
         if(letter === 'r') return "Rock";
         if(letter === 'p') return "paper";
         return "scissor";

 }


function win(userchoice,computerchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const smalluser = "user".fontsize (3).sub();
    const smallcomp = "compt".fontsize (3).sub();
    result_div.innerHTML = converttoward(userchoice) + (smalluser) + "Beats" + converttoward(computerchoice)+
    (smallcomp) + ".you won!";

}

function lose(userchoice,computerchoice){
    computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const smalluser = "user".fontsize (3).sub();
    const smallcomp = "compt".fontsize (3).sub();
    result_div.innerHTML = converttoward(computerchoice) + (smalluser) + "Beats" + converttoward(userchoice)+ (smalluser) + ".you lose!";

}


function draw(userchoice,computerchoice){
    computerscore++;
    const smalluser = "user".fontsize (3).sub();
    const smallcomp = "compt".fontsize (3).sub();
    result_div.innerHTML = converttoward(computerchoice) + (smalluser) + "equals" + converttoward(userchoice)+(smalluser) + ".its a draw";

}

main();



function game(userChoice){
         const ComputerChoice=getComputerChoice();
          switch(userChoice + ComputerChoice){
              case 'rs':
              case 'sp':
              case 'pr':
                  win(userChoice, ComputerChoice);
                  break;

                  case 'rp':
                    case 'sr':
                    case 'ps':
                        lose(userChoice, ComputerChoice);
                        break;

                            case 'rr':
                            case 'ss':
                            case 'pp':
                                draw(userChoice, ComputerChoice);
                                break;
          }

}

function main() {
      rock_div.addEventListener('click',function(){
       game('r');

 })

    paper_div.addEventListener('click',function(){
     game('p');

 })


    scissor_div.addEventListener('click',function(){
     game('s');

 })


}