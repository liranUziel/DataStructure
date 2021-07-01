import Queue from "./StackQueue/Queue.js";
import Stack from "./StackQueue/Stack.js";


function ScoreClear(){

    let winner = document.getElementsByClassName('vbw-mu__score--home winner');
    let away = document.getElementsByClassName('vbw-mu__score--away');
    let result = document.getElementsByClassName('vbw-mu__sets--result');
    let home = document.getElementsByClassName('vbw-mu__score--home');

    for(let i = 0;i < winner.length;i++){
        winner[i].setAttribute('hidden',true);
    }

    for(let i = 0;i < away.length;i++){
        away[i].setAttribute('hidden',true);
    }
    for(let i = 0;i < result.length;i++){
        result[i].setAttribute('hidden',true);
    }
    for(let i = 0;i < home.length;i++){
        home[i].setAttribute('hidden',true);
    }
    getMatchs();
}
function getMatchs(){
    let teams = document.getElementsByClassName('vbw-mu-finished vbw-mu__data');
    for(let i = 0;i < teams.length;i++){
        let match = teams[i].innerText.split(':');
        console.log(`${match[0].replace('\n','')} vs ${match[1].replace('\n','')}`);
    }
}
