/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/airplane.js ***!
  \**********************************/
var countdownNumber = 0;
window.Livewire.emit('sendTime');
var air = document.getElementById('airplaneDiv').querySelectorAll('.air');
var airplaneDivBg = document.getElementById('airplaneDivBg');
var countdown = document.getElementById('countdown');
var countdownSec = document.getElementById('countdownSec');
var gameLoading = document.getElementById('gameLoading');
var airTopThree = document.getElementById('airTopThree');
var airTopTen = document.getElementById('airTopTen');
var fiveNumber = document.getElementById('fiveNumber');
var answer = [];
var reverseanswer = [];
var nowAnswer = [];
var secondsArr = [[10, '1'], [10.1, '2'], [10.11, '3'], [10.12, '4'], [10.13, '5'], [10.14, '6'], [10.15, '7'], [10.16, '8'], [10.17, '9'], [10.18, '10']];
var initSecondsArr = function initSecondsArr() {
  secondsArr = [[10, '1'], [10.1, '2'], [10.11, '3'], [10.12, '4'], [10.13, '5'], [10.14, '6'], [10.15, '7'], [10.16, '8'], [10.17, '9'], [10.18, '10']];
};
window.addEventListener('sendAnswer', function (e) {
  answer = e.detail.answer;
  console.log(answer);
  nowAnswer = answer[4].ranking.split(',');
  console.log("now:", nowAnswer);
  initSecondsArr();
  secondsArr.forEach(function (item, key) {
    item[1] = nowAnswer[key];
  });
});
function sortFn() {
  secondsArr.sort(function (a, b) {
    return a[1] - b[1];
  });
  console.log(secondsArr);
}
var fiveHtml = '';
fiveNumberFn();
timeRun();
function timeRun() {
  countdownNumber = 60 - new Date().getSeconds();
  if (countdownNumber < 10) {
    countdownSec.innerHTML = "00:0" + countdownNumber;
  } else {
    countdownSec.innerHTML = "00:" + countdownNumber;
  }
  if (countdownNumber == 60) {
    countdownSec.innerHTML = "00:00";
  }
  if (new Date().getSeconds() == 0) {
    window.Livewire.emit('sendTime');
  }
  if (new Date().getSeconds() == 1) {
    sortFn();
    airplaneDivBg.classList.add('start');
    var _loop = function _loop(i) {
      air[i].style.animation = "airNo1 ".concat(secondsArr[i][0], "s linear");
      setTimeout(function () {
        air[i].style.opacity = '0';
      }, secondsArr[i][0] * 1000);
    };
    for (var i = 0; i < air.length; i++) {
      _loop(i);
    }
  }
  if (new Date().getSeconds() == 11) {
    window.Livewire.emit('noneLoad');
  }
  if (new Date().getSeconds() == 12) {
    airTopTen.innerHTML = nowAnswer.join(',');
    airTopTen.style.opacity = "1";
  }
  if (new Date().getSeconds() == 15) {
    airTopThree.innerHTML = "<p>\u7B2C\u4E00\u540D:".concat(nowAnswer[0], "</p>\n        <p>\u7B2C\u4E8C\u540D:").concat(nowAnswer[1], "</p>\n        <p>\u7B2C\u4E09\u540D:").concat(nowAnswer[2], "</p>");
    airTopThree.style.opacity = "1";
  }
  if (new Date().getSeconds() <= 19 || new Date().getSeconds() == 60) {
    countdown.style.opacity = "0";
  } else {
    countdown.style.opacity = "1";
    fiveNumberFn();
  }
  if (new Date().getSeconds() == 20) {
    airplaneDivBg.classList.remove('start');
    airTopThree.style.opacity = "0";
    airTopTen.style.opacity = "0";
    for (var a = 0; a <= air.length; a++) {
      air[a].style.opacity = '1';
    }
  }
}
function fiveNumberFn() {
  fiveHtml = "";
  fiveNumber.innerHTML = "";
  answer.forEach(function (item) {
    fiveHtml += "<small> \u8D70\u52E2: ".concat(item.ranking, " </small>");
  });
  fiveNumber.innerHTML = fiveHtml;
}
setInterval(function () {
  timeRun();
}, 1000);
/******/ })()
;