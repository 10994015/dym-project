
let countdownNumber = 0;
window.Livewire.emit('sendTime');
const air = document.getElementById('airplaneDiv').querySelectorAll('.air');
const airplaneDivBg = document.getElementById('airplaneDivBg');
const countdown = document.getElementById('countdown');
const countdownSec = document.getElementById('countdownSec');
const gameLoading = document.getElementById('gameLoading');
let answer = [];
let nowAnswer = [];
let secondsArr = [
    [10,'1'],
    [10.1,'2'],
    [10.11,'3'],
    [10.12,'4'],
    [10.13,'5'],
    [10.14,'6'],
    [10.15,'7'],
    [10.16,'8'],
    [10.17,'9'],
    [10.18,'10']
];

const initSecondsArr = ()=>{
    secondsArr = [
        [10,'1'],
        [10.1,'2'],
        [10.11,'3'],
        [10.12,'4'],
        [10.13,'5'],
        [10.14,'6'],
        [10.15,'7'],
        [10.16,'8'],
        [10.17,'9'],
        [10.18,'10']
    ];
}
window.addEventListener('sendAnswer', e=>{
    answer = e.detail.answer;
    console.log(answer);
    
    nowAnswer = answer[4].ranking.split(',');
    console.log("now:", nowAnswer);
    initSecondsArr();
    secondsArr.forEach((item, key)=>{
        item[1] = nowAnswer[key];
        
    })
    // console.log(secondsArr);
    
    
});
const sortFn = ()=>{
    
    secondsArr.sort((a, b)=>{
        return a[1] - b[1];
    })
    console.log(secondsArr);
}


timeRun();

function timeRun(){
    countdownNumber = 60 - new Date().getSeconds();
    if(countdownNumber < 10){
        countdownSec.innerHTML = "0"+countdownNumber;
    }else{
        countdownSec.innerHTML = countdownNumber;
    }
    if(countdownNumber==60){
        countdownSec.innerHTML = "00";
    }
    
    if(new Date().getSeconds() == 0){
        window.Livewire.emit('sendTime');
        
    }
    if(new Date().getSeconds() == 1){
        sortFn();
        airplaneDivBg.classList.add('start');
        for(let i=0;i<air.length;i++){
            air[i].style.animation = `airNo1 ${secondsArr[i][0]}s linear`;
            setTimeout(()=>{
                air[i].style.opacity = '0';
            },secondsArr[i][0]*1000)
        }
        
    }
    if(new Date().getSeconds() == 11){
        gameLoading.style.display = "none";
    }
    if(new Date().getSeconds() == 20){
        airplaneDivBg.classList.remove('start');
        for(let a=0;a<=air.length;a++){
            air[a].style.opacity = '1';
        }
    }
    
    if(new Date().getSeconds()<=11 ||new Date().getSeconds()==60){
        countdown.style.opacity = "0";
    }else{
        countdown.style.opacity = "1";
    }

    
}

setInterval(()=>{
    timeRun();
},1000)