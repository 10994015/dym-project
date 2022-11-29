
window.Livewire.emit('sendTime');
let countdownNumber = 0;
const air = document.getElementById('airplaneDiv').querySelectorAll('.air');
const airplaneDivBg = document.getElementById('airplaneDivBg');
const bar = document.getElementById('bar');
const menuList = document.getElementById('menuList');
let isMenuOpen = false;
const countdown = document.getElementById('countdown');
const countdownSec = document.getElementById('countdownSec');
const countdownSec_md = document.getElementById('countdownSec_md');
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
let totalBet = 0;
const playBox = document.getElementById('playBox');
const diamondBtn = document.querySelectorAll('.diamondBtn');
const diamondBoxLeft = document.getElementById('diamondBoxLeft');
const diamondBoxRight = document.getElementById('diamondBoxRight');
let dimondListNum = 0;
const doubleBtn = document.getElementById('doubleBtn');
const reBtn = document.getElementById('reBtn');
const chkBtn = document.getElementById('chkBtn');
const rank = document.getElementsByClassName('rank');
const beyMoney = document.getElementById('beyMoney');
const cycleNumber = document.getElementById('cycleNumber');
const betListIssue = document.getElementById('betListIssue');
let answer = [];
let riskAnswerArr = [];
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
let game_name_arr = ['定位膽', '冠亞二星', '大小單雙', '冠亞和', '龍虎'];
let game_name_num = 0;
const myDoller = document.getElementById('myDoller');
const rankingImg = document.getElementsByClassName('rankingImg');
let chkBetBool = true;
let isBetTime = true;
let guessAirArray = {
    no1:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no2:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no3:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no4:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no5:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no6:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no7:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no8:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no9:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no10:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
}
let deleteBet = null;
const totalBetNmuber = document.getElementById('totalBetNmuber');
const totalBetMoney = document.getElementById('totalBetMoney');
let totalBetNumberCalc = 0;
const listAll = document.getElementById('listAll');
let listAllHtml = '';
const airNum = document.getElementsByClassName('airNum');
const topThreeAir = document.getElementsByClassName('topThreeAir');
let chooseRank = 1;
let setOdds = 0;
const openGameBtn = document.getElementById('openGameBtn');
let playBoxisOpen = false;
let bethtmlArr = [];
const trendModal = document.getElementById('trendModal');
const closeTrendModalBtn = document.getElementById('closeTrendModalBtn');
const openTrendModalBtn = document.getElementById('openTrendModalBtn');
const trendModalList = document.getElementById('trendModalList');
const openRuleModalBtn = document.getElementById('openRuleModalBtn');
const ruleModal = document.getElementById('ruleModal');
const closeRuleModalBtn = document.getElementById('closeRuleModalBtn');
document.getElementById(`rankingImg${chooseRank}`).src = `/images/airplane/no${chooseRank}chk.png`;
window.addEventListener('setOdds', e=>{
    setOdds = e.detail.odds;
});

const initSecondsArr = ()=>{
    secondsArr = [
        [12,'1'],
        [12.1,'2'],
        [12.11,'3'],
        [12.12,'4'],
        [12.13,'5'],
        [12.14,'6'],
        [12.15,'7'],
        [12.16,'8'],
        [12.17,'9'],
        [12.18,'10']
    ];
}
window.addEventListener('sendAnswer', e=>{
    answer = e.detail.answer;
    // console.log(answer);
    nowAnswer = answer[4].ranking.split(',');
    // console.log(e.detail.riskAnswer[0].ranking);
    
    riskAnswerArr = e.detail.riskAnswer[0].ranking.split(',');
    // console.log(riskAnswerArr);
    // console.log(e.detail.riskAnswer[0].number);
    cycleNumber.innerHTML = `期號: ${e.detail.riskAnswer[0].number}`;
    betListIssue.innerHTML = `期號: ${e.detail.riskAnswer[0].number}`;
    // console.log("now:", nowAnswer);
    initSecondsArr();
    secondsArr.forEach((item, key)=>{
        item[1] = nowAnswer[key];
    })
    setTimeout(()=>{
        fiveNumberFn();
    },1000)
});
function sortFn(){
    
    secondsArr.sort((a, b)=>{
        return a[1] - b[1];
    })
    // console.log(secondsArr);
}
let fiveHtml = '';

window.addEventListener('startRun', e=>{
    answer = e.detail.answer;
    nowAnswer = answer[4].ranking.split(',');
    riskAnswerArr = e.detail.riskAnswer[0].ranking.split(',');
    initSecondsArr();
    secondsArr.forEach((item, key)=>{
        item[1] = nowAnswer[key];
    })
    if(screen.width <= 1000){
        if(new Date().getSeconds() <= 20){
            countdownSec_md.innerHTML =   "<p>開獎中</p>";
            openGameBtn.style.display = "block";
            playBox.style.display = 'block';
            playBoxisOpen = true;
            playBox.style.opacity = 1;
            openGameBtn.classList.remove('fa-circle-up');
        }
    }
    if(new Date().getSeconds() < 11){
        // countdown.style.opacity = '0';
        airTopThree.style.opacity = '0';
        airTopTen.style.opacity = '0';
        for(let i=0;i<airNum.length;i++){
            airNum[i].style.animation = 'none';
            airNum[i].style.animationDelay = '0s';
        }
        
        sortFn();
        airplaneDiv.style.opacity = "1";
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
            // airTopTen.innerHTML = nowAnswer.join(',');
            airTopTenHTML(nowAnswer);
            airTopTen.style.opacity = "1";
            for(let i=0;i<airNum.length;i++){
                airNum[i].style.animation = 'airRankIn .1s linear';
                airNum[i].style.animationDelay = `.${i}s`;
            }
            // countdown.style.opacity = '1';
            airplaneDivBg.style.animationDelay = '0s';
            var id =setInterval(timeRun,1000,id);
        }, startSec)
    }else{
        if(new Date().getSeconds() >=11 && new Date().getSeconds() < 15){
            airTopTenHTML(nowAnswer);
            airTopTen.style.opacity = "1";
            for(let i=0;i<airNum.length;i++){
                airNum[i].style.animation = 'airRankIn .1s linear';
                airNum[i].style.animationDelay = `.${i}s`;
            }
        }
        if(new Date().getSeconds() >=15 && new Date().getSeconds() < 19){
            airTopTenHTML(nowAnswer);
            airTopTen.style.opacity = "1";
            for(let i=0;i<airNum.length;i++){
                airNum[i].style.animation = 'airRankIn .1s linear';
                airNum[i].style.animationDelay = `.${i}s`;
            }
            // countdown.style.opacity = '1';
            airTopThreeHTML(nowAnswer);
            airTopThree.style.opacity = "1";
        }
        var id =setInterval(timeRun,1000,id);
        
    }
    if(new Date().getSeconds() < 12){
        chkBtn.src = '/images/airplane/chkdisable.png';
        reBtn.src = '/images/airplane/redisable.png';
        doubleBtn.src = '/images/airplane/doubledisable.png';
    }
    
})

window.Livewire.emit('updateTrend');
function timeRun(){
    countdownNumber = 60 - new Date().getSeconds();
    
    if(countdownNumber < 10){
        countdownSec.innerHTML =  "<p>00:0"+countdownNumber + "</p>";
        countdownSec_md.innerHTML =  "<p>00:0"+countdownNumber + "</p>";
    }else{
        if(countdownNumber > 40 && countdownNumber!=60){
            countdownSec_md.innerHTML =   "<p>開獎中</p>";
            openGameBtn.style.display = "block";
            if(screen.width <= 1000){
                playBox.style.display = 'block';
            }
        }else{
            countdownSec.innerHTML =   "<p>00:" + countdownNumber + "</p>";
            countdownSec_md.innerHTML =   "<p>00:" + countdownNumber + "</p>";
            openGameBtn.style.display = "none";
            if(screen.width <= 1000){
                playBox.style.display = 'none';
            }
        }
        
    }
    if(countdownNumber==60){
        countdownSec.innerHTML =  "<p>00:00" + "</p>";
        countdownSec_md.innerHTML =  "<p>00:00" + "</p>";
    }
    
    if(new Date().getSeconds() == 0){
        window.Livewire.emit('sendTime');
        isBetTime = false;
        chkBtn.src = '/images/airplane/chkdisable.png';
        reBtn.src = '/images/airplane/redisable.png';
        doubleBtn.src = '/images/airplane/doubledisable.png';

        totalBet = 0;
        
        totalBetNumberCalc = 0;
        totalBetNmuber.innerHTML = totalBetNumberCalc;
        totalBetMoney.innerHTML = totalBet;

        listAllHtml = "";
        listAll.innerHTML = "";
        bethtmlArr = [];

        playBoxisOpen = true;
        playBox.style.opacity = 1;
        openGameBtn.classList.remove('fa-circle-up');
    }
    if(new Date().getSeconds() == 1){
        sortFn();
        airplaneDiv.style.opacity = "1";
        airplaneDivBg.classList.add('start');
        for(let i=0;i<air.length;i++){
            air[i].style.animation = `airNo1 ${secondsArr[i][0]}s linear`;
            setTimeout(()=>{
                air[i].style.opacity = '0';
            },secondsArr[i][0]*1000)
        }
    }
    if(new Date().getSeconds() == 11){
        airTopTenHTML(nowAnswer);
        airTopTen.style.opacity = "1";
        for(let i=0;i<airNum.length;i++){
            airNum[i].style.animation = 'airRankIn .1s linear';
            airNum[i].style.animationDelay = `.${i}s`;
        }
    }
    if(new Date().getSeconds() == 12){
        if(!chkBetBool){
            calcBetFn();
            window.Livewire.emit('updateMyMoney');
        }
        isBetTime = true;
        chkBetBool = true;
        chkBtn.src = '/images/airplane/chk.png';
        reBtn.src = '/images/airplane/re.png';
        doubleBtn.src = '/images/airplane/double.png';
    }
    if(new Date().getSeconds() == 15){
        airTopThreeHTML(nowAnswer);
        airTopThree.style.opacity = "1";
    }
    if(new Date().getSeconds()<=19 ){
       if(screen.width <=1000){
            countdown.style.opacity = "0";
       }else{
            if(new Date().getSeconds() ==0 ){
                countdown.style.opacity = "1";
                // fiveNumberFn();
            }else{
                countdown.style.opacity = "0";
            }
       }
        
    }else{
        if(screen.width <=1000){
            countdown.style.opacity = "0";
        }else{
            countdown.style.opacity = "1";
        }
        // fiveNumberFn();
    }
    
    if(new Date().getSeconds() == 20){
        window.Livewire.emit('updateTrend');
        airplaneDiv.style.opacity = "0";
        airplaneDivBg.classList.remove('start');
        airTopThree.style.opacity = "0";
        airTopTen.style.opacity = "0";
        for(let i=0;i<airNum.length;i++){
            airNum[i].style.animation = 'none';
            airNum[i].style.animationDelay = '0s';
        }
        for(let a=0;a<air.length;a++){
            air[a].style.opacity = '1';
            air[a].style.animation = 'none';
        }
    }
    if(new Date().getSeconds() == 57){
        if(!chkBetBool){
            window.Livewire.emit('isRiskFn');
        }
    }
}
window.addEventListener('updateTrendFn', e=>{
    let trendhtml = '';
    // console.log(e.detail.answer);
    for(let i=0;i<e.detail.answer.length;i++){
        let rank = e.detail.answer[i].ranking.split(',');
        trendhtml += `<div class="item"><div class="number">${e.detail.answer[i].number}</div><div class="imgList">`
        for(let j=0;j<rank.length;j++){
            trendhtml += `<img src='/images/airplane/air${rank[j]}.png'>`
        }
        trendhtml += '</div></div>';
        
    }
    trendModalList.innerHTML = trendhtml;
})
function fiveNumberFn(){
    fiveHtml = "";
    fiveNumber.innerHTML = ""
    answer.forEach(item=>{
        fiveHtml += `
            <div class="item">
                <p class="num">${item.number}</p>
                <div class="rankBox">
                    <img src="/images/airplane/num${item.ranking.split(',')[0]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[1]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[2]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[3]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[4]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[5]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[6]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[7]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[8]}.png" class="number">
                    <img src="/images/airplane/num${item.ranking.split(',')[9]}.png" class="number">
                </div>
              </div>
        `
        // console.log(item.ranking.split(','));
        
    })
    fiveNumber.innerHTML = fiveHtml;
}

function chengGameFn(e){
    let id = "";
    initGameFn();
    id = e.target.id.split('Btn')[1]
    e.target.src = e.target.src.replace('btn', 'btnchk');
    game_name_num = Number(id) -1;
    
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
// document.getElementById('logout').addEventListener('click',logoutFn);
bar.addEventListener('mousedown', ()=>{
    bar.style.transform = 'scale(.9)';
})
bar.addEventListener('mouseup', ()=>{
    bar.style.transform = 'scale(1)';
})
bar.addEventListener('click',()=>{
    isMenuOpen = !isMenuOpen;
    if(isMenuOpen){
        menuList.style.display = "block";
    }else{
        menuList.style.display = "none";
    }
})

for(let i=0;i<diamondBtn.length;i++){
    diamondBtn[i].addEventListener('click', setBetMoney);
}

function setBetMoney(e){
    beyMoney.value = Number(e.target.alt);
}
diamondBoxRight.addEventListener('click', function(){
    if(dimondListNum<3){
        dimondListNum++;
    }
    for(let i=0;i<diamondBtn.length;i++){
        diamondBtn[i].style.transform = `translateX(-${dimondListNum*100}%)`;
    }
});
diamondBoxLeft.addEventListener('click', function(){
    if(dimondListNum>0){
        dimondListNum--;
    }
    for(let i=0;i<diamondBtn.length;i++){
        diamondBtn[i].style.transform = `translateX(-${dimondListNum*100}%)`;
    }
});
beyMoney.addEventListener('blur',()=>{
    if(beyMoney.value == "" || beyMoney.value < 0){
        beyMoney.value = Number(0);
    }
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
function notMoneyFn(){
    Swal.fire(
        '警告',
        '餘額不足',
        'error'
    );
}
for(let i=0;i<rank.length;i++){
    rank[i].addEventListener('click', guessFn);
}

function guessFn(e){
    if(Number(beyMoney.value) <= 0){
        Swal.fire(
            '警告',
            '請選擇下注金額',
            'error'
        );
        return;
    }
    let remain =  Number(myDoller.innerHTML) -  Number(beyMoney.value);
    
    if(remain < 0 ){
        notMoneyFn();
        return;
    }
    let rankGuessArr = ['無', '冠軍', '亞軍', '季軍', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
    let airGuessArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

    totalBetNumberCalc++;
    myDoller.innerHTML = Number(myDoller.innerHTML)  -Number(beyMoney.value);
    // console.log(e.target.alt);
    totalBet += Number(beyMoney.value);
    
    let sd = document.getElementsByClassName(`smallair${e.target.alt}`)[0];
    sd.style.display = "none";
    sd.src = `/images/airplane/diamond${beyMoney.value}.png`
    sd.style.display = "block";
    setTimeout(()=>{
        sd.style.display = "none";
    },200)
    guessAirArray[`no${chooseRank}`][`air${e.target.alt}`]['money'] += Number(beyMoney.value);

    totalBetNmuber.innerHTML = totalBetNumberCalc;
    totalBetMoney.innerHTML = totalBet;
    bethtmlArr.push([])
    bethtmlArr[bethtmlArr.length -1].push( game_name_arr[game_name_num], `${rankGuessArr[chooseRank]} - ${airGuessArr[Number(e.target.alt)]}`, setOdds, beyMoney.value);
    listAllHtml = "";
    for(let i=0;i<bethtmlArr.length;i++){
        listAllHtml += `<div class="item">
                    <i class="fas fa-times deleteBet"></i>
                    <input type="hidden" value="${i}">
                    <span>下注項目:</span><br>
                    ${bethtmlArr[i][0]}<br>
                    <span>下注內容:</span><br>
                    ${bethtmlArr[i][1]}<br>
                    <span>賠率:</span>
                    ${bethtmlArr[i][2]}<br>
                    <span>投注金額:</span>
                    ${bethtmlArr[i][3]}<br>
                </div>`;
    }
    listAll.innerHTML = listAllHtml;
    if(document.getElementsByClassName('deleteBet').length > 0){
        for(let b=0;b<document.getElementsByClassName('deleteBet').length;b++){
            document.getElementsByClassName('deleteBet')[b].addEventListener('click', removeBetArr);
        }
    }
    
}

function removeBetArr(e){
    let idx = Number(e.target.parentNode.querySelector('input').value);
    let rankGuessArr = ['無', '冠軍', '亞軍', '季軍', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
    let removeRank = rankGuessArr.indexOf(bethtmlArr[idx][1].split('-')[0].trim());
    let removeAir = Number(bethtmlArr[idx][1].split('-')[1].trim());
    guessAirArray[`no${removeRank}`][`air${removeAir}`]['money'] -= Number(bethtmlArr[idx][3]);
    myDoller.innerHTML = Number(myDoller.innerHTML) + Number(bethtmlArr[idx][3]);

    totalBetNumberCalc = totalBetNumberCalc-1;
    totalBet = totalBet - bethtmlArr[idx][3]
    totalBetNmuber.innerHTML = totalBetNumberCalc;
    totalBetMoney.innerHTML = totalBet;
    bethtmlArr.splice(idx, 1);
    listAllHtml = "";
    for(let i=0;i<bethtmlArr.length;i++){
        listAllHtml += `<div class="item">
                    <i class="fas fa-times deleteBet"></i>
                    <input type="hidden" value="${i}">
                    <span>下注項目:</span><br>
                    ${bethtmlArr[i][0]}<br>
                    <span>下注內容:</span><br>
                    ${bethtmlArr[i][1]}<br>
                    <span>賠率:</span>
                    ${bethtmlArr[i][2]}<br>
                    <span>投注金額:</span>
                    ${bethtmlArr[i][3]}<br>
                </div>`;
    }
    listAll.innerHTML = listAllHtml;


    if(document.getElementsByClassName('deleteBet').length > 0){
        for(let b=0;b<document.getElementsByClassName('deleteBet').length;b++){
            document.getElementsByClassName('deleteBet')[b].addEventListener('click', removeBetArr);
        }
    }
}
chkBtn.addEventListener('click',chkBtnFn);
function chkBtnFn(){
    if(!isBetTime){
        Swal.fire(
            '警告',
            '現在非下注時間',
            'error'
        );
        return;
    }
    if(!chkBetBool){
        Swal.fire(
            '警告',
            '請勿重複下注！',
            'error'
        );
        return;
    }
    if(totalBet <=0){
        Swal.fire(
            '警告',
            '您尚未下注！',
            'error'
        );
        return;
    }
    Swal.fire(
        '下注成功！',
        '等待整點開獎',
        'success'
    );
    chkBetBool = false;
    chkBtn.src = '/images/airplane/chkdisable.png';
    reBtn.src = '/images/airplane/redisable.png';
    doubleBtn.src = '/images/airplane/doubledisable.png';
    window.Livewire.emit('chkBet' ,totalBet);
    riskCalcBetFn(totalBet);
    totalBet = 0;
    for(let i=0;i<document.getElementsByClassName('deleteBet').length;i++){
        document.getElementsByClassName('deleteBet')[i].removeEventListener('click', removeBetArr);
        document.getElementsByClassName('deleteBet')[i].style.display = "none";
    }
}
function calcBetFn(){
    let winMoney = 0;
    //賠率
    let odds = setOdds;
    for(let i=1;i<=10;i++){
        // console.log(guessAirArray[`no${i}`]);
        for(let j=1;j<=10;j++){
            if(guessAirArray[`no${i}`][`air${j}`]['money'] > 0){
                // console.log(guessAirArray[`no${i}`][`air${nowAnswer[i-1]}`]);
                if(j == nowAnswer[i-1]){
                    winMoney = winMoney + (guessAirArray[`no${i}`][`air${j}`]['money']*odds);
                }
            }
        }
    }
    // console.log(winMoney);
    window.Livewire.emit('calcMoney', winMoney);

    guessAirArray = {
        no1:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no2:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no3:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no4:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no5:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no6:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no7:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no8:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no9:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no10:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    }
}
function riskCalcBetFn(totalBet){
    let riskWinMoney = 0;
    let max_bet = 0;
    let max_airplane = 0;
    let max_rank = 0;
    //賠率
    let riskodds = setOdds;
    for(let i=1;i<=10;i++){
        // console.log(guessAirArray[`no${i}`]);
        for(let j=1;j<=10;j++){
            if(guessAirArray[`no${i}`][`air${j}`]['money'] > 0){
                if(guessAirArray[`no${i}`][`air${j}`]['money'] > max_bet){
                    max_bet = guessAirArray[`no${i}`][`air${j}`]['money'];
                    max_rank = i;
                    max_airplane = j;
                }
                // console.log(guessAirArray[`no${i}`][`air${nowAnswer[i-1]}`]);
                if(j == riskAnswerArr[i-1]){
                    riskWinMoney = riskWinMoney + (guessAirArray[`no${i}`][`air${j}`]['money']*riskodds);
                }
            }
        }
    }
    console.log(max_bet);
    
    
    window.Livewire.emit('riskCalcMoney', riskWinMoney, totalBet, guessAirArray, max_bet, max_rank, max_airplane );

    
}
window.addEventListener('updateMyMoneyHtml', e=>{
    myDoller.innerHTML = e.detail.money;
    winMessage.innerHTML = `恭喜您贏得了${Math.round(e.detail.win)}元`
});
reBtn.addEventListener('click',()=>{
    if(chkBetBool){
        guessAirArray = {
            no1:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no2:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no3:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no4:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no5:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no6:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no7:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no8:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no9:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
            no10:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        }
        myDoller.innerHTML = Number(myDoller.innerHTML) + Number(totalBet);
        totalBet = 0;
        beyMoney.value = 0;

        totalBetNumberCalc = 0;
        totalBetNmuber.innerHTML = totalBetNumberCalc;
        totalBetMoney.innerHTML = totalBet;

        listAllHtml = "";
        listAll.innerHTML = "";
        bethtmlArr = [];

    }else{
        Swal.fire(
            '警告',
            '您已下注！請等待下次下注',
            'error'
        );
    }
    

})
doubleBtn.addEventListener('click',()=>{
    if(!isBetTime){
        Swal.fire(
            '警告',
            '現在非下注時間',
            'error'
        );
        return;
    }
    if(!chkBetBool){
        Swal.fire(
            '警告',
            '您已下注！請等待下次下注',
            'error'
        );
        return;
    }
    if(totalBet <= 0){
        Swal.fire(
            '警告',
            '您尚未下注',
            'error'
        );
        return;
    }
    let newMoney = Number(myDoller.innerHTML) - totalBet;
    if(newMoney < 0){
        Swal.fire(
            '警告',
            '餘額不足',
            'error'
        );
        return;
    }
    myDoller.innerHTML = Number(myDoller.innerHTML) - Number(totalBet);
    totalBet = totalBet*2;
    totalBetMoney.innerHTML = totalBet;
    
    listAllHtml = "";
    for(let j=0;j<bethtmlArr.length;j++){
        bethtmlArr[j][3] = Number(bethtmlArr[j][3])*2;
        listAllHtml += `<div class="item">
                    <i class="fas fa-times deleteBet"></i>
                    <input type="hidden" value="${j}">
                    <span>下注項目:</span><br>
                    ${bethtmlArr[j][0]}<br>
                    <span>下注內容:</span><br>
                    ${bethtmlArr[j][1]}<br>
                    <span>賠率:</span>
                    ${bethtmlArr[j][2]}<br>
                    <span>投注金額:</span>
                    ${bethtmlArr[j][3]}<br>
                </div>`;
    }
    listAll.innerHTML = listAllHtml;
    if(document.getElementsByClassName('deleteBet').length > 0){
        for(let b=0;b<document.getElementsByClassName('deleteBet').length;b++){
            document.getElementsByClassName('deleteBet')[b].addEventListener('click', removeBetArr);
        }
    }
    for(let i=1;i<=10;i++){
        guessAirArray[`no${i}`]
        for(let j=1;j<=10;j++){
            if(guessAirArray[`no${i}`][`air${j}`]['money'] > 0){
                guessAirArray[`no${i}`][`air${j}`]['money'] = guessAirArray[`no${i}`][`air${j}`]['money'] *2 
            }
        }
    }

    Swal.fire(
        '下注成功！',
        '下注金額雙倍',
        'success'
    );
})


function airTopTenHTML(nowAnswer){
   for(let i=0;i<airNum.length;i++){
    airNum[i].src = `/images/airplane/airRank${nowAnswer[i]}.png`;
   }
}
let threeArr = [1,0,2];
function airTopThreeHTML(nowAnswer){
    for(let i=0;i<topThreeAir.length;i++){
        topThreeAir[i].src = `/images/airplane/airRank${nowAnswer[threeArr[i]]}.png`
    }
}
openTrendModalBtn.addEventListener('click', ()=>{
    trendModal.style.display = "flex";
})
closeTrendModalBtn.addEventListener('click', ()=>{
    trendModal.style.display = "none";
})
openGameBtn.addEventListener('click', ()=>{
    playBoxisOpen = !playBoxisOpen;
    
    if(playBoxisOpen){
        playBox.style.opacity = '1';
        openGameBtn.classList.remove('fa-circle-up');
    }else{
        playBox.style.opacity = '0';
        openGameBtn.classList.add('fa-circle-up');
    }
    
})
openRuleModalBtn.addEventListener('click', ()=>{
    ruleModal.style.display = "flex";
})
closeRuleModalBtn.addEventListener('click', ()=>{
    ruleModal.style.display = "none";
})