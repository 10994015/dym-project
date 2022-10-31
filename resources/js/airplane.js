
window.Livewire.emit('sendTime');
let countdownNumber = 0;
const air = document.getElementById('airplaneDiv').querySelectorAll('.air');
const airplaneDivBg = document.getElementById('airplaneDivBg');
const bar = document.getElementById('bar');
const menuList = document.getElementById('menuList');
let isMenuOpen = false;
const countdown = document.getElementById('countdown');
const countdownSec = document.getElementById('countdownSec');
const gameLoading = document.getElementById('gameLoading');
const airTopThree = document.getElementById('airTopThree');
const airTopTen = document.getElementById('airTopTen');
const fiveNumber = document.getElementById('fiveNumber');
const gameBtn1 = document.getElementById('gameBtn1');
const gameBtn2 = document.getElementById('gameBtn2');
const gameBtn3 = document.getElementById('gameBtn3');
const gameBtn4 = document.getElementById('gameBtn4');
const gameBtn5 = document.getElementById('gameBtn5');
const betMoney = document.getElementById('betMoney');
let betDollar = 0;
const diamondBtn = document.querySelectorAll('.diamondBtn');
const diamondBoxLeft = document.getElementById('diamondBoxLeft');
const diamondBoxRight = document.getElementById('diamondBoxRight');
let dimondListNum = 0;
const doubleBtn = document.getElementById('doubleBtn');
const reBtn = document.getElementById('reBtn');
const chkBtn = document.getElementById('chkBtn');
let answer = [];
let reverseanswer = [];
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
const myDoller = document.getElementById('myDoller');
const rankingImg = document.getElementsByClassName('rankingImg');
let chooseRank = 1;
document.getElementById(`rankingImg${chooseRank}`).src = `/images/airplane/no${chooseRank}chk.png`;


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
    fiveNumberFn();
});
function sortFn(){
    
    secondsArr.sort((a, b)=>{
        return a[1] - b[1];
    })
    console.log(secondsArr);
}
let fiveHtml = '';

window.addEventListener('startRun', e=>{
    answer = e.detail.answer;
    nowAnswer = answer[4].ranking.split(',');
    initSecondsArr();
    secondsArr.forEach((item, key)=>{
        item[1] = nowAnswer[key];
    })
    if(new Date().getSeconds() < 11){
        countdown.style.opacity = '0';
        airTopThree.style.opacity = '0';
        airTopTen.style.opacity = '0';
        sortFn();
        airplaneDivBg.classList.add('start');
        airplaneDivBg.style.animationDelay =  `-${ new Date().getSeconds()}s`;
        let startSec = (10-new Date().getSeconds())*1000;
        for(let i=0;i<air.length;i++){
            air[i].style.animation = `airNo1 ${secondsArr[i][0]}s linear`;
            air[i].style.animationDelay = `-${ new Date().getSeconds()}s`;
            setTimeout(()=>{
                air[i].style.animationDelay = '0s';
                air[i].style.opacity = '0';
            },secondsArr[i][0]*1000 - (new Date().getSeconds() * 1000))
        }
        setTimeout(()=>{
            airTopTen.innerHTML = nowAnswer.join(',');
            airTopTen.style.opacity = "1";
            countdown.style.opacity = '1';
            airplaneDivBg.style.animationDelay = '0s';
            var id =setInterval(timeRun,1000,id);
        }, startSec)
    }else{
        if(new Date().getSeconds() >=11 && new Date().getSeconds() < 15){
            airTopTen.innerHTML = nowAnswer.join(',');
            airTopTen.style.opacity = "1";
        }
        if(new Date().getSeconds() >=15 && new Date().getSeconds() < 19){
            airTopTen.innerHTML = nowAnswer.join(',');
            airTopTen.style.opacity = "1";
            countdown.style.opacity = '1';
            airTopThree.innerHTML = `<p>第一名:${nowAnswer[0]}</p>
            <p>第二名:${nowAnswer[1]}</p>
            <p>第三名:${nowAnswer[2]}</p>`;
            airTopThree.style.opacity = "1";
        }
        var id =setInterval(timeRun,1000,id);
        
    }
})

function timeRun(){
    countdownNumber = 60 - new Date().getSeconds();
    
    if(countdownNumber < 10){
        countdownSec.innerHTML = "00:0"+countdownNumber;
    }else{
        countdownSec.innerHTML = "00:" + countdownNumber;
    }
    if(countdownNumber==60){
        countdownSec.innerHTML = "00:00";
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
    // if(new Date().getSeconds() == 11){
    //     window.Livewire.emit('noneLoad');
    // }
    if(new Date().getSeconds() == 11){
        airTopTen.innerHTML = nowAnswer.join(',');
        airTopTen.style.opacity = "1";
    }
    if(new Date().getSeconds() == 15){
        airTopThree.innerHTML = `<p>第一名:${nowAnswer[0]}</p>
        <p>第二名:${nowAnswer[1]}</p>
        <p>第三名:${nowAnswer[2]}</p>`;
        airTopThree.style.opacity = "1";
    }
    if(new Date().getSeconds()<=19 ){
        if(new Date().getSeconds() == 0){
            countdown.style.opacity = "1";
            // fiveNumberFn();
        }
        countdown.style.opacity = "0";
    }else{
        
        countdown.style.opacity = "1";
        // fiveNumberFn();
    }
   
    if(new Date().getSeconds() == 20){
        airplaneDivBg.classList.remove('start');
        airTopThree.style.opacity = "0";
        airTopTen.style.opacity = "0";
        for(let a=0;a<air.length;a++){
            air[a].style.opacity = '1';
            air[a].style.animation = 'none';
        }
    }
}

function fiveNumberFn(){
    fiveHtml = "";
    fiveNumber.innerHTML = ""
    answer.forEach(item=>{
        fiveHtml += `<small> 走勢: ${item.ranking} </small>`
    })
    fiveNumber.innerHTML = fiveHtml;
}

function chengGameFn(e){
    let id = "";
    initGameFn();
    id = e.target.id.split('Btn')[1]
    e.target.src = e.target.src.replace('btn', 'btnchk');
    console.log(id);
    document.getElementById(`game${id}`).style.display = "block";
}
function initGameFn(){
    for(let i=1;i<=5;i++){
        document.getElementById(`game${i}`).style.display = "none";
        document.getElementById(`gameBtn${i}`).src = `images/airplane/btn${i}.png`;
    }
}
gameBtn1.addEventListener('click', chengGameFn);
gameBtn2.addEventListener('click', chengGameFn);
gameBtn3.addEventListener('click', chengGameFn);
gameBtn4.addEventListener('click', chengGameFn);
gameBtn5.addEventListener('click', chengGameFn);

const notloginFn = ()=>{
    Swal.fire({
        icon: 'error',
        title: '請先登入！',
        text: '您無權限進入，請先登入！',
        footer: '<a href="/register">沒有帳號嗎？點擊註冊</a>',
        confirmButtonText: '前往登入',
        confirmButtonColor: '#3085d6',


    }).then(result=>{
        if(result.isConfirmed){
            window.location.href="/login";
        }
    })
};
const logoutFn = ()=>{
    Swal.fire({
        title: '確定要登出嗎？',
        text: "Are you sure you want to log out?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#aaa',
        confirmButtonText: 'Yes!'
    }).then(chk=>{
        if(chk.isConfirmed){
            Swal.fire(
                '登出成功！',
                'Logout succeeded!',
                'success'
            ).then(result=>{
                if(result.isConfirmed){
                    document.getElementById('logoutForm').submit();
                }
            })
        }
    })
};
document.getElementById('logout').addEventListener('click',logoutFn);

bar.addEventListener('click',()=>{
    isMenuOpen = !isMenuOpen;
    if(isMenuOpen){
        menuList.style.display = "block";
    }else{
        menuList.style.display = "none";
    }
})

diamondBoxRight.addEventListener('click', function(){
    if(dimondListNum<3){
        dimondListNum++;
    }
    for(let i=0;i<diamondBtn.length;i++){
        diamondBtn[i].style.transform = `translateX(-${dimondListNum}00px)`;
    }
});
diamondBoxLeft.addEventListener('click', function(){
    if(dimondListNum>0){
        dimondListNum--;
    }
    for(let i=0;i<diamondBtn.length;i++){
        diamondBtn[i].style.transform = `translateX(-${dimondListNum}00px)`;
    }
});
beyMoney.addEventListener('blur',()=>{
    if(beyMoney.value == ""){
        window.Livewire.emit('setBetMoney',0);
    }
})
chkBtn.addEventListener('click',()=>{

})
function initRankFn(){
    for(let i=0;i<rankingImg.length;i++){
        rankingImg[i].src =  `/images/airplane/no${i+1}.png`
    }
}
function chengRankFn(e){
    initRankFn();
    e.target.src = `/images/airplane/no${e.target.alt}chk.png`;
    chooseRank = e.target.alt;
}
for(let i=0;i<rankingImg.length;i++){
    rankingImg[i].addEventListener('click', chengRankFn);
}

window.addEventListener('dollerDebit', e=>{
    let remain =  Number(myDoller.innerHTML) -  Number(e.detail.betMoney);
    if(remain < 0){
        notMoneyFn();
        return;
    }
    window.Livewire.emit('okGuess');
    myDoller.innerHTML = Number(myDoller.innerHTML) -  Number(e.detail.betMoney);
    // let sd = e.target.parentNode.getElementsByClassName('smallDiamond')[0];
    console.log(e.detail.air);
    let sd = document.getElementsByClassName(`smallair${e.detail.air}`)[0];
    sd.style.display = "none";
    sd.src = `/images/airplane/diamond${e.detail.betMoney}.png`
    sd.style.display = "block";
    setTimeout(()=>{
        sd.style.display = "none";
    },200)
    
})
window.addEventListener('chooseBetMoneyFn', e=>{
    Swal.fire(
        '警告',
        '請選擇下注金額',
        'error'
    );
})
function notMoneyFn(){
    Swal.fire(
        '警告',
        '餘額不足',
        'error'
    );
}
// window.addEventListener('notMoneyFn',e=>{
//     Swal.fire(
//         '警告',
//         '餘額不足',
//         'error'
//     );
// })