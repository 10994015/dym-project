/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/airplane.js ***!
  \**********************************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
window.Livewire.emit('sendTime');
var countdownNumber = 0;
var air = document.getElementById('airplaneDiv').querySelectorAll('.air');
var airplaneDivBg = document.getElementById('airplaneDivBg');
var bar = document.getElementById('bar');
var menuList = document.getElementById('menuList');
var isMenuOpen = false;
var countdown = document.getElementById('countdown');
var countdownSec = document.getElementById('countdownSec');
var countdownSec_md = document.getElementById('countdownSec_md');
var gameLoading = document.getElementById('gameLoading');
var airTopThree = document.getElementById('airTopThree');
var airTopTen = document.getElementById('airTopTen');
var fiveNumber = document.getElementById('fiveNumber');
var gameBtn1 = document.getElementById('gameBtn1');
var gameBtn2 = document.getElementById('gameBtn2');
var gameBtn3 = document.getElementById('gameBtn3');
var gameBtn4 = document.getElementById('gameBtn4');
var gameBtn5 = document.getElementById('gameBtn5');
var betMoney = document.getElementById('betMoney');
var totalBet = 0;
var playBox = document.getElementById('playBox');
var diamondBtn = document.querySelectorAll('.diamondBtn');
var diamondBoxLeft = document.getElementById('diamondBoxLeft');
var diamondBoxRight = document.getElementById('diamondBoxRight');
var dimondListNum = 0;
var doubleBtn = document.getElementById('doubleBtn');
var reBtn = document.getElementById('reBtn');
var chkBtn = document.getElementById('chkBtn');
var rank = document.getElementsByClassName('rank');
var beyMoney = document.getElementById('beyMoney');
var cycleNumber = document.getElementById('cycleNumber');
var betListIssue = document.getElementById('betListIssue');
var loadingDiv = document.getElementById('loading-div');
var answer = [];
var riskAnswerArr = [];
var reverseanswer = [];
var nowAnswer = [];
var secondsArr = [[10, '1'], [10.1, '2'], [10.11, '3'], [10.12, '4'], [10.13, '5'], [10.14, '6'], [10.15, '7'], [10.16, '8'], [10.17, '9'], [10.18, '10']];
var game_name_arr = ['定位膽', '冠亞二星', '大小單雙', '冠亞和', '龍虎'];
var game_name_num = 0;
var myDoller = document.getElementById('myDoller');
var rankingImg = document.getElementsByClassName('rankingImg');
var chkBetBool = true;
var isBetTime = true;
var isBeted = false;
var guessAirArray = {
  no1: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no2: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no3: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no4: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no5: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no6: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no7: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no8: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no9: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  },
  no10: {
    air1: {
      money: 0
    },
    air2: {
      money: 0
    },
    air3: {
      money: 0
    },
    air4: {
      money: 0
    },
    air5: {
      money: 0
    },
    air6: {
      money: 0
    },
    air7: {
      money: 0
    },
    air8: {
      money: 0
    },
    air9: {
      money: 0
    },
    air10: {
      money: 0
    },
    air11: {
      money: 0
    },
    air12: {
      money: 0
    },
    air13: {
      money: 0
    },
    air14: {
      money: 0
    }
  }
};
var listIdx = 0;
var deleteBet = null;
var totalBetNmuber = document.getElementById('totalBetNmuber');
var totalBetMoney = document.getElementById('totalBetMoney');
var totalBetNumberCalc = 0;
var listAll = document.getElementById('listAll');
var listAllHtml = '';
var airNum = document.getElementsByClassName('airNum');
var topThreeAir = document.getElementsByClassName('topThreeAir');
var chooseRank = 1;
var bsChooseRank = 1;
var setOdds = 0;
var setBsOdds = 0;
var openGameBtn = document.getElementById('openGameBtn');
var playBoxisOpen = false;
var bethtmlArr = [];
var trendModal = document.getElementById('trendModal');
var closeTrendModalBtn = document.getElementById('closeTrendModalBtn');
var openTrendModalBtn = document.getElementById('openTrendModalBtn');
var trendModalList = document.getElementById('trendModalList');
var openRuleModalBtn = document.getElementById('openRuleModalBtn');
var openRecordModalBtn = document.getElementById('openRecordModalBtn');
var recordModal = document.getElementById('recordModal');
var closeRecordModalBtn = document.getElementById('closeRecordModalBtn');
var ruleModal = document.getElementById('ruleModal');
var closeRuleModalBtn = document.getElementById('closeRuleModalBtn');
var bigBtn = document.getElementById('bigBtn');
var smallBtn = document.getElementById('smallBtn');
var oddBtn = document.getElementById('oddBtn');
var evenBtn = document.getElementById('evenBtn');
var bsBtn = document.getElementsByClassName('bsBtn');
var bsChoose = 1;
var rankingImgBs = document.getElementsByClassName('rankingImg-bs');
document.getElementById("rankingImg".concat(chooseRank)).src = "/images/airplane/no".concat(chooseRank, "chk.png");
document.getElementById("rankingImg".concat(bsChooseRank, "-bs")).src = "/images/airplane/no".concat(chooseRank, "chk.png");
window.addEventListener('setOdds', function (e) {
  setOdds = e.detail.odds;
  setBsOdds = e.detail.bsOdds;
});
var initSecondsArr = function initSecondsArr() {
  secondsArr = [[12, '1'], [12.1, '2'], [12.11, '3'], [12.12, '4'], [12.13, '5'], [12.14, '6'], [12.15, '7'], [12.16, '8'], [12.17, '9'], [12.18, '10']];
};
window.addEventListener('sendAnswer', function (e) {
  answer = e.detail.answer;
  nowAnswer = answer[4].ranking.split(',');
  riskAnswerArr = e.detail.riskAnswer[0].ranking.split(',');
  cycleNumber.innerHTML = "\u671F\u865F: ".concat(e.detail.riskAnswer[0].number);
  betListIssue.innerHTML = "\u671F\u865F: ".concat(e.detail.riskAnswer[0].number);
  initSecondsArr();
  secondsArr.forEach(function (item, key) {
    item[1] = nowAnswer[key];
  });
  setTimeout(function () {
    fiveNumberFn();
  }, 1000);
});
function sortFn() {
  secondsArr.sort(function (a, b) {
    return a[1] - b[1];
  });
}
var fiveHtml = '';
window.addEventListener('startRun', function (e) {
  answer = e.detail.answer;
  nowAnswer = answer[4].ranking.split(',');
  riskAnswerArr = e.detail.riskAnswer[0].ranking.split(',');
  initSecondsArr();
  secondsArr.forEach(function (item, key) {
    item[1] = nowAnswer[key];
  });
  if (screen.width <= 1000) {
    if (new Date().getSeconds() <= 20) {
      countdownSec_md.innerHTML = "<img src='/images/airplane/lottery.png' width='200' />";
      openGameBtn.style.display = "block";
      playBox.style.display = 'block';
      playBoxisOpen = true;
      playBox.style.opacity = 1;
      openGameBtn.classList.remove('fa-circle-up');
    }
  }
  if (new Date().getSeconds() < 11) {
    // countdown.style.opacity = '0';
    airTopThree.style.opacity = '0';
    airTopTen.style.opacity = '0';
    for (var i = 0; i < airNum.length; i++) {
      airNum[i].style.animation = 'none';
      airNum[i].style.animationDelay = '0s';
    }
    sortFn();
    airplaneDiv.style.opacity = "1";
    airplaneDivBg.classList.add('start');
    airplaneDivBg.style.animationDelay = "-".concat(new Date().getSeconds(), "s");
    var startSec = (10 - new Date().getSeconds()) * 1000;
    var _loop = function _loop(_i) {
      air[_i].style.animation = "airNo1 ".concat(secondsArr[_i][0], "s linear");
      air[_i].style.animationDelay = "-".concat(new Date().getSeconds(), "s");
      setTimeout(function () {
        air[_i].style.animationDelay = '0s';
        air[_i].style.opacity = '0';
      }, secondsArr[_i][0] * 1000 - new Date().getSeconds() * 1000);
    };
    for (var _i = 0; _i < air.length; _i++) {
      _loop(_i);
    }
    setTimeout(function () {
      // airTopTen.innerHTML = nowAnswer.join(',');
      airTopTenHTML(nowAnswer);
      airTopTen.style.opacity = "1";
      for (var _i2 = 0; _i2 < airNum.length; _i2++) {
        airNum[_i2].style.animation = 'airRankIn .1s linear';
        airNum[_i2].style.animationDelay = ".".concat(_i2, "s");
      }
      // countdown.style.opacity = '1';
      airplaneDivBg.style.animationDelay = '0s';
      var id = setInterval(timeRun, 1000, id);
    }, startSec);
  } else {
    if (new Date().getSeconds() >= 11 && new Date().getSeconds() < 15) {
      airTopTenHTML(nowAnswer);
      airTopTen.style.opacity = "1";
      for (var _i3 = 0; _i3 < airNum.length; _i3++) {
        airNum[_i3].style.animation = 'airRankIn .1s linear';
        airNum[_i3].style.animationDelay = ".".concat(_i3, "s");
      }
    }
    if (new Date().getSeconds() >= 15 && new Date().getSeconds() < 19) {
      airTopTenHTML(nowAnswer);
      airTopTen.style.opacity = "1";
      for (var _i4 = 0; _i4 < airNum.length; _i4++) {
        airNum[_i4].style.animation = 'airRankIn .1s linear';
        airNum[_i4].style.animationDelay = ".".concat(_i4, "s");
      }
      // countdown.style.opacity = '1';
      airTopThreeHTML(nowAnswer);
      airTopThree.style.opacity = "1";
    }
    var id = setInterval(timeRun, 1000, id);
  }
  if (new Date().getSeconds() < 12) {
    chkBtn.src = '/images/airplane/chkdisable.png';
    reBtn.src = '/images/airplane/redisable.png';
    doubleBtn.src = '/images/airplane/doubledisable.png';
  }
});
window.Livewire.emit('updateTrend');
function timeRun() {
  countdownNumber = 60 - new Date().getSeconds();
  if (countdownNumber < 10) {
    countdownSec.innerHTML = "<p>00:0" + countdownNumber + "</p>";
    countdownSec_md.innerHTML = "<p>00:0" + countdownNumber + "</p>";
  } else {
    if (countdownNumber > 40 && countdownNumber != 60) {
      countdownSec_md.innerHTML = "<img src='/images/airplane/lottery.png' width='200' />";
      openGameBtn.style.display = "block";
      if (screen.width <= 1000) {
        playBox.style.display = 'block';
      }
    } else {
      countdownSec.innerHTML = "<p>00:" + countdownNumber + "</p>";
      countdownSec_md.innerHTML = "<p>00:" + countdownNumber + "</p>";
      openGameBtn.style.display = "none";
      if (screen.width <= 1000) {
        playBox.style.display = 'none';
      }
    }
  }
  if (countdownNumber == 60) {
    countdownSec.innerHTML = "<p>00:00" + "</p>";
    countdownSec_md.innerHTML = "<p>00:00" + "</p>";
  }
  if (new Date().getSeconds() == 0) {
    window.Livewire.emit('sendTime');
    isBetTime = false;
    chkBtn.src = '/images/airplane/chkdisable.png';
    reBtn.src = '/images/airplane/redisable.png';
    doubleBtn.src = '/images/airplane/doubledisable.png';
    listIdx = 0;
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
  if (new Date().getSeconds() == 1) {
    sortFn();
    airplaneDiv.style.opacity = "1";
    airplaneDivBg.classList.add('start');
    var _loop2 = function _loop2(i) {
      air[i].style.animation = "airNo1 ".concat(secondsArr[i][0], "s linear");
      setTimeout(function () {
        air[i].style.opacity = '0';
      }, secondsArr[i][0] * 1000);
    };
    for (var i = 0; i < air.length; i++) {
      _loop2(i);
    }
  }
  if (new Date().getSeconds() == 11) {
    airTopTenHTML(nowAnswer);
    airTopTen.style.opacity = "1";
    for (var _i5 = 0; _i5 < airNum.length; _i5++) {
      airNum[_i5].style.animation = 'airRankIn .1s linear';
      airNum[_i5].style.animationDelay = ".".concat(_i5, "s");
    }
  }
  if (new Date().getSeconds() == 12) {
    if (!chkBetBool) {
      calcBetFn();
      window.Livewire.emit('updateMyMoney');
    }
    isBetTime = true;
    chkBetBool = true;
    isBeted = false;
    chkBtn.src = '/images/airplane/chk.png';
    reBtn.src = '/images/airplane/re.png';
    doubleBtn.src = '/images/airplane/double.png';
  }
  if (new Date().getSeconds() > 12) {
    window.Livewire.emit('watchStatu');
  }
  if (new Date().getSeconds() == 15) {
    airTopThreeHTML(nowAnswer);
    airTopThree.style.opacity = "1";
  }
  if (new Date().getSeconds() <= 19) {
    if (screen.width <= 1000) {
      countdown.style.opacity = "0";
    } else {
      if (new Date().getSeconds() == 0) {
        countdown.style.opacity = "1";
        // fiveNumberFn();
      } else {
        countdown.style.opacity = "0";
      }
    }
  } else {
    if (screen.width <= 1000) {
      countdown.style.opacity = "0";
    } else {
      countdown.style.opacity = "1";
    }
    // fiveNumberFn();
  }

  if (new Date().getSeconds() == 20) {
    window.Livewire.emit('updateTrend');
    airplaneDiv.style.opacity = "0";
    airplaneDivBg.classList.remove('start');
    airTopThree.style.opacity = "0";
    airTopTen.style.opacity = "0";
    for (var _i6 = 0; _i6 < airNum.length; _i6++) {
      airNum[_i6].style.animation = 'none';
      airNum[_i6].style.animationDelay = '0s';
    }
    for (var a = 0; a < air.length; a++) {
      air[a].style.opacity = '1';
      air[a].style.animation = 'none';
    }
  }
  if (new Date().getSeconds() == 58) {
    if (!chkBetBool) {
      window.Livewire.emit('isRiskFn');
    }
  }
}
window.addEventListener('updateTrendFn', function (e) {
  var trendhtml = '';
  for (var i = 0; i < e.detail.answer.length; i++) {
    var _rank = e.detail.answer[i].ranking.split(',');
    trendhtml += "<div class=\"item\"><div class=\"number\">".concat(e.detail.answer[i].number, "</div><div class=\"imgList\">");
    for (var j = 0; j < _rank.length; j++) {
      trendhtml += "<img src='/images/airplane/air".concat(_rank[j], ".png'>");
    }
    trendhtml += '</div></div>';
  }
  trendModalList.innerHTML = trendhtml;
});
window.addEventListener('watchStatu', function (e) {
  if (e.detail.statu == 0) {
    loadingDiv.style.display = "flex";
    setTimeout(function () {
      document.getElementById('exitModal').style.display = "block";
    }, 3000);
    setTimeout(function () {
      document.getElementById('loaing-logout').submit();
    }, 4000);
  } else {
    loadingDiv.style.display = "none";
  }
});
function fiveNumberFn() {
  fiveHtml = "";
  fiveNumber.innerHTML = "";
  answer.forEach(function (item) {
    fiveHtml += "\n            <div class=\"item\">\n                <p class=\"num\">".concat(item.number, "</p>\n                <div class=\"rankBox\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[0], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[1], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[2], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[3], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[4], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[5], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[6], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[7], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[8], ".png\" class=\"number\">\n                    <img src=\"/images/airplane/num").concat(item.ranking.split(',')[9], ".png\" class=\"number\">\n                </div>\n              </div>\n        ");
  });
  fiveNumber.innerHTML = fiveHtml;
}
function chengGameFn(e) {
  var id = "";
  initGameFn();
  id = e.target.id.split('Btn')[1];
  e.target.src = e.target.src.replace('btn', 'btnchk');
  game_name_num = Number(id) - 1;
  if (id == 1 || id == 3) {
    document.getElementById("game".concat(id)).style.display = "block";
  } else {
    document.getElementById("game".concat(id)).style.display = "flex";
  }
}
function initGameFn() {
  for (var i = 1; i <= 5; i++) {
    document.getElementById("game".concat(i)).style.display = "none";
    document.getElementById("gameBtn".concat(i)).src = "images/airplane/btn".concat(i, ".png");
  }
}
gameBtn1.addEventListener('click', chengGameFn);
gameBtn2.addEventListener('click', chengGameFn);
gameBtn3.addEventListener('click', chengGameFn);
gameBtn4.addEventListener('click', chengGameFn);
gameBtn5.addEventListener('click', chengGameFn);
var notloginFn = function notloginFn() {
  Swal.fire({
    icon: 'error',
    title: '請先登入！',
    text: '您無權限進入，請先登入！',
    footer: '<a href="/register">沒有帳號嗎？點擊註冊</a>',
    confirmButtonText: '前往登入',
    confirmButtonColor: '#3085d6'
  }).then(function (result) {
    if (result.isConfirmed) {
      window.location.href = "/login";
    }
  });
};
var logoutFn = function logoutFn() {
  Swal.fire({
    title: '確定要登出嗎？',
    text: "Are you sure you want to log out?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#aaa',
    confirmButtonText: 'Yes!'
  }).then(function (chk) {
    if (chk.isConfirmed) {
      Swal.fire('登出成功！', 'Logout succeeded!', 'success').then(function (result) {
        if (result.isConfirmed) {
          document.getElementById('logoutForm').submit();
        }
      });
    }
  });
};
bar.addEventListener('mousedown', function () {
  bar.style.transform = 'scale(.9)';
});
bar.addEventListener('mouseup', function () {
  bar.style.transform = 'scale(1)';
});
bar.addEventListener('click', function () {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});
for (var i = 0; i < diamondBtn.length; i++) {
  diamondBtn[i].addEventListener('click', setBetMoney);
}
function setBetMoney(e) {
  beyMoney.value = Number(e.target.alt);
}
diamondBoxRight.addEventListener('click', function () {
  if (dimondListNum < 3) {
    dimondListNum++;
  }
  for (var _i7 = 0; _i7 < diamondBtn.length; _i7++) {
    diamondBtn[_i7].style.transform = "translateX(-".concat(dimondListNum * 100, "%)");
  }
});
diamondBoxLeft.addEventListener('click', function () {
  if (dimondListNum > 0) {
    dimondListNum--;
  }
  for (var _i8 = 0; _i8 < diamondBtn.length; _i8++) {
    diamondBtn[_i8].style.transform = "translateX(-".concat(dimondListNum * 100, "%)");
  }
});
beyMoney.addEventListener('blur', function () {
  if (beyMoney.value == "" || beyMoney.value < 0) {
    beyMoney.value = Number(0);
  }
});
function initRankFn() {
  for (var _i9 = 0; _i9 < rankingImg.length; _i9++) {
    rankingImg[_i9].src = "/images/airplane/no".concat(_i9 + 1, ".png");
  }
}
function chengRankFn(e) {
  initRankFn();
  e.target.src = "/images/airplane/no".concat(e.target.alt, "chk.png");
  chooseRank = e.target.alt;
}
for (var _i10 = 0; _i10 < rankingImg.length; _i10++) {
  rankingImg[_i10].addEventListener('click', chengRankFn);
}
function notMoneyFn() {
  Swal.fire('警告', '餘額不足', 'error');
}
for (var _i11 = 0; _i11 < rank.length; _i11++) {
  rank[_i11].addEventListener('click', guessFn);
}
function guessFn(e) {
  if (Number(beyMoney.value) <= 0) {
    Swal.fire('警告', '請選擇下注金額', 'error');
    return;
  }
  var remain = Number(myDoller.innerHTML) - Number(beyMoney.value);
  if (remain < 0) {
    notMoneyFn();
    return;
  }
  var rankGuessArr = ['無', '冠軍', '亞軍', '季軍', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
  var airGuessArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '大', '小', '單', '雙'];
  totalBetNumberCalc++;
  myDoller.innerHTML = Number(myDoller.innerHTML) - Number(beyMoney.value);
  totalBet += Number(beyMoney.value);
  var sd = document.getElementsByClassName("smallair".concat(e.target.alt))[0];
  sd.style.display = "none";
  sd.src = "/images/airplane/diamond".concat(beyMoney.value, ".png");
  sd.style.display = "block";
  setTimeout(function () {
    sd.style.display = "none";
  }, 200);
  guessAirArray["no".concat(chooseRank)]["air".concat(e.target.alt)]['money'] += Number(beyMoney.value);
  totalBetNmuber.innerHTML = totalBetNumberCalc;
  totalBetMoney.innerHTML = totalBet;
  bethtmlArr.push([]);
  if (game_name_num == 0) {
    bethtmlArr[bethtmlArr.length - 1].push(game_name_arr[game_name_num], "".concat(rankGuessArr[chooseRank], " - ").concat(airGuessArr[Number(e.target.alt)]), setOdds, beyMoney.value);
  } else if (game_name_num == 2) {
    bethtmlArr[bethtmlArr.length - 1].push(game_name_arr[game_name_num], "".concat(rankGuessArr[bsChooseRank], " - ").concat(airGuessArr[Number(e.target.alt)]), setBsOdds, beyMoney.value);
  }
  listAllHtml += "<div class=\"item\">\n                    <i class=\"fas fa-times deleteBet\"></i>\n                    <input type=\"hidden\" value=\"".concat(game_name_arr.indexOf(bethtmlArr[bethtmlArr.length - 1][0]), "\" class='gametype'>\n                    <input type='hidden' value='").concat(bethtmlArr[bethtmlArr.length - 1][1], "' class='isrank'>\n                    <input type='hidden' value='").concat(bethtmlArr[bethtmlArr.length - 1][3], "' class='money'>\n                    <input type='hidden' value='").concat(bethtmlArr[bethtmlArr.length - 1][1], "' class='bet'>\n                    <input type='hidden' value='").concat(listIdx, "' class='idx'>\n                    <span>\u4E0B\u6CE8\u9805\u76EE:</span><br>\n                    ").concat(bethtmlArr[bethtmlArr.length - 1][0], "<br>\n                    <span>\u4E0B\u6CE8\u5167\u5BB9:</span><br>\n                    ").concat(bethtmlArr[bethtmlArr.length - 1][1], "<br>\n                    <span>\u8CE0\u7387:</span>\n                    ").concat(bethtmlArr[bethtmlArr.length - 1][2], "<br>\n                    <span>\u6295\u6CE8\u91D1\u984D:</span>\n                    ").concat(bethtmlArr[bethtmlArr.length - 1][3], "<br>\n                    </div>");
  listIdx++;
  listAll.innerHTML = listAllHtml;
  if (document.getElementsByClassName('deleteBet').length > 0) {
    for (var b = 0; b < document.getElementsByClassName('deleteBet').length; b++) {
      document.getElementsByClassName('deleteBet')[b].addEventListener('click', removeBetArr);
    }
  }
}
function removeBetArr(e) {
  var idx = e.target.parentNode.querySelector('.idx').value;
  var rankGuessArr = {
    '冠軍': 1,
    '亞軍': 2,
    '季軍': 3,
    '第四名': 4,
    '第五名': 5,
    '第六名': 6,
    '第七名': 7,
    '第八名': 8,
    '第九名': 9,
    '第十名': 10
  };
  var removeRank = Number(rankGuessArr[e.target.parentNode.querySelector('.isrank').value.split('-')[0].trim()]); //名次
  var whatGame = e.target.parentNode.querySelector('.gametype').value;
  if (whatGame == 0) {
    var removeAir = Number(e.target.parentNode.querySelector('.bet').value.split('-')[1].trim()); //飛機
    guessAirArray["no".concat(removeRank)]["air".concat(removeAir)]['money'] -= Number(e.target.parentNode.querySelector('.money').value);
  } else if (whatGame == 2) {
    var _removeAir = e.target.parentNode.querySelector('.bet').value.split('-')[1].trim();
    var sbsObj = {
      '大': 11,
      '小': 12,
      '單': 13,
      '雙': 14
    };
    var bs = sbsObj["".concat(_removeAir)];
    guessAirArray["no".concat(removeRank)]["air".concat(bs)]['money'] -= Number(e.target.parentNode.querySelector('.money').value);
  }
  myDoller.innerHTML = Number(myDoller.innerHTML) + Number(e.target.parentNode.querySelector('.money').value);
  totalBetNumberCalc = totalBetNumberCalc - 1;
  totalBet = totalBet - Number(e.target.parentNode.querySelector('.money').value);
  totalBetNmuber.innerHTML = totalBetNumberCalc;
  totalBetMoney.innerHTML = totalBet;
  var arrIndex = Array.from(listAll.querySelectorAll('.item')).indexOf(e.target.parentNode);
  bethtmlArr.splice(arrIndex, 1);
  e.target.parentNode.remove();
  listAllHtml = listAll.innerHTML;
  if (document.getElementsByClassName('deleteBet').length > 0) {
    for (var b = 0; b < document.getElementsByClassName('deleteBet').length; b++) {
      document.getElementsByClassName('deleteBet')[b].addEventListener('click', removeBetArr);
    }
  }
}
chkBtn.addEventListener('click', chkBtnFn);
function chkBtnFn() {
  if (isBeted) {
    Swal.fire('警告', '請勿重複下注！', 'error');
    return;
  }
  if (!isBetTime) {
    Swal.fire('警告', '現在非下注時間', 'error');
    return;
  }
  if (!chkBetBool) {
    Swal.fire('警告', '請勿重複下注！', 'error');
    return;
  }
  if (totalBet <= 0) {
    Swal.fire('警告', '您尚未下注！', 'error');
    return;
  }
  Swal.fire('下注成功！', '等待整點開獎', 'success');
  chkBetBool = false;
  chkBtn.src = '/images/airplane/chkdisable.png';
  reBtn.src = '/images/airplane/redisable.png';
  doubleBtn.src = '/images/airplane/doubledisable.png';
  window.Livewire.emit('chkBet', totalBet, totalBetNumberCalc); //totalBetNumberCalc
  riskCalcBetFn(totalBet);
  totalBet = 0;
  for (var _i12 = 0; _i12 < document.getElementsByClassName('deleteBet').length; _i12++) {
    document.getElementsByClassName('deleteBet')[_i12].removeEventListener('click', removeBetArr);
    document.getElementsByClassName('deleteBet')[_i12].style.display = "none";
  }
}
function calcBetFn() {
  var winMoney = 0;
  //賠率
  var odds = setOdds;
  var bsOdds = setBsOdds;
  for (var _i13 = 1; _i13 <= 10; _i13++) {
    for (var j = 1; j <= 14; j++) {
      if (guessAirArray["no".concat(_i13)]["air".concat(j)]['money'] > 0) {
        if (j <= 10) {
          if (j == nowAnswer[_i13 - 1]) {
            winMoney = winMoney + guessAirArray["no".concat(_i13)]["air".concat(j)]['money'] * odds;
          }
        } else if (j <= 14) {
          if (j == 11) {
            if (Number(nowAnswer[_i13 - 1]) > 5) {
              winMoney = winMoney + guessAirArray["no".concat(_i13)]["air".concat(j)]['money'] * bsOdds;
            }
          }
          if (j == 12) {
            if (Number(nowAnswer[_i13 - 1] < 6)) {
              winMoney = winMoney + guessAirArray["no".concat(_i13)]["air".concat(j)]['money'] * bsOdds;
            }
          }
          if (j == 13) {
            if (Number(nowAnswer[_i13 - 1] % 2 == 1)) {
              winMoney = winMoney + guessAirArray["no".concat(_i13)]["air".concat(j)]['money'] * bsOdds;
            }
          }
          if (j == 14) {
            if (Number(nowAnswer[_i13 - 1] % 2 == 0)) {
              winMoney = winMoney + guessAirArray["no".concat(_i13)]["air".concat(j)]['money'] * bsOdds;
            }
          }
        }
      }
    }
  }
  window.Livewire.emit('calcMoney', winMoney);
  guessAirArray = {
    no1: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no2: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no3: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no4: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no5: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no6: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no7: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no8: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no9: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    },
    no10: {
      air1: {
        money: 0
      },
      air2: {
        money: 0
      },
      air3: {
        money: 0
      },
      air4: {
        money: 0
      },
      air5: {
        money: 0
      },
      air6: {
        money: 0
      },
      air7: {
        money: 0
      },
      air8: {
        money: 0
      },
      air9: {
        money: 0
      },
      air10: {
        money: 0
      },
      air11: {
        money: 0
      },
      air12: {
        money: 0
      },
      air13: {
        money: 0
      },
      air14: {
        money: 0
      }
    }
  };
}
function riskCalcBetFn(totalBet) {
  var riskWinMoney = 0;
  var max_bet = 0;
  var max_airplane = 0;
  var max_rank = 0;
  //賠率
  var riskodds = setOdds;
  var riskBsOdds = setBsOdds;
  for (var _i14 = 1; _i14 <= 10; _i14++) {
    for (var j = 1; j <= 14; j++) {
      if (guessAirArray["no".concat(_i14)]["air".concat(j)]['money'] > 0) {
        if (guessAirArray["no".concat(_i14)]["air".concat(j)]['money'] > max_bet) {
          max_bet = guessAirArray["no".concat(_i14)]["air".concat(j)]['money'];
          max_rank = _i14;
          max_airplane = j;
        }
        if (j <= 10) {
          if (j == riskAnswerArr[_i14 - 1]) {
            riskWinMoney = riskWinMoney + guessAirArray["no".concat(_i14)]["air".concat(j)]['money'] * riskodds;
          }
        } else if (j <= 14) {
          if (j == 11) {
            if (riskAnswerArr[_i14 - 1] > 5) {
              riskWinMoney = riskWinMoney + guessAirArray["no".concat(_i14)]["air".concat(j)]['money'] * riskBsOdds;
            }
          }
          if (j == 12) {
            if (riskAnswerArr[_i14 - 1] < 6) {
              riskWinMoney = riskWinMoney + guessAirArray["no".concat(_i14)]["air".concat(j)]['money'] * riskBsOdds;
            }
          }
          if (j == 13) {
            if (riskAnswerArr[_i14 - 1] % 2 == 1) {
              riskWinMoney = riskWinMoney + guessAirArray["no".concat(_i14)]["air".concat(j)]['money'] * riskBsOdds;
            }
          }
          if (j == 14) {
            if (riskAnswerArr[_i14 - 1] % 2 == 0) {
              riskWinMoney = riskWinMoney + guessAirArray["no".concat(_i14)]["air".concat(j)]['money'] * riskBsOdds;
            }
          }
        }
      }
    }
  }
  window.Livewire.emit('riskCalcMoney', riskWinMoney, totalBet, guessAirArray, max_bet, max_rank, max_airplane);
}
window.addEventListener('updateMyMoneyHtml', function (e) {
  myDoller.innerHTML = e.detail.money;
  winMessage.innerHTML = "\u606D\u559C\u60A8\u8D0F\u5F97\u4E86".concat(Math.round(e.detail.win), "\u5143");
});
reBtn.addEventListener('click', function () {
  if (isBeted) {
    Swal.fire('警告', '您已下注！請等待下次下注', 'error');
  }
  if (chkBetBool) {
    guessAirArray = {
      no1: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no2: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no3: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no4: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no5: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no6: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no7: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no8: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no9: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      },
      no10: {
        air1: {
          money: 0
        },
        air2: {
          money: 0
        },
        air3: {
          money: 0
        },
        air4: {
          money: 0
        },
        air5: {
          money: 0
        },
        air6: {
          money: 0
        },
        air7: {
          money: 0
        },
        air8: {
          money: 0
        },
        air9: {
          money: 0
        },
        air10: {
          money: 0
        },
        air11: {
          money: 0
        },
        air12: {
          money: 0
        },
        air13: {
          money: 0
        },
        air14: {
          money: 0
        }
      }
    };
    myDoller.innerHTML = Number(myDoller.innerHTML) + Number(totalBet);
    totalBet = 0;
    beyMoney.value = 0;
    totalBetNumberCalc = 0;
    totalBetNmuber.innerHTML = totalBetNumberCalc;
    totalBetMoney.innerHTML = totalBet;
    listAllHtml = "";
    listAll.innerHTML = "";
    bethtmlArr = [];
  } else {
    Swal.fire('警告', '您已下注！請等待下次下注', 'error');
  }
});
doubleBtn.addEventListener('click', function () {
  if (isBeted) {
    Swal.fire('警告', '您已下注！請等待下次下注', 'error');
    return;
  }
  if (!isBetTime) {
    Swal.fire('警告', '現在非下注時間', 'error');
    return;
  }
  if (!chkBetBool) {
    Swal.fire('警告', '您已下注！請等待下次下注', 'error');
    return;
  }
  if (totalBet <= 0) {
    Swal.fire('警告', '您尚未下注', 'error');
    return;
  }
  var newMoney = Number(myDoller.innerHTML) - totalBet;
  if (newMoney < 0) {
    Swal.fire('警告', '餘額不足', 'error');
    return;
  }
  myDoller.innerHTML = Number(myDoller.innerHTML) - Number(totalBet);
  totalBet = totalBet * 2;
  totalBetNumberCalc = totalBetNumberCalc * 2;
  totalBetMoney.innerHTML = totalBet;
  totalBetNmuber.innerHTML = totalBetNumberCalc;
  bethtmlArr = [].concat(_toConsumableArray(bethtmlArr), _toConsumableArray(bethtmlArr));
  listAllHtml += listAllHtml;
  listAll.innerHTML = listAllHtml;
  if (document.getElementsByClassName('deleteBet').length > 0) {
    for (var b = 0; b < document.getElementsByClassName('deleteBet').length; b++) {
      document.getElementsByClassName('deleteBet')[b].addEventListener('click', removeBetArr);
    }
  }
  for (var _i15 = 1; _i15 <= 10; _i15++) {
    guessAirArray["no".concat(_i15)];
    for (var j = 1; j <= 14; j++) {
      if (guessAirArray["no".concat(_i15)]["air".concat(j)]['money'] > 0) {
        guessAirArray["no".concat(_i15)]["air".concat(j)]['money'] = guessAirArray["no".concat(_i15)]["air".concat(j)]['money'] * 2;
      }
    }
  }
  Swal.fire('下注成功！', '下注金額雙倍', 'success');
});
function airTopTenHTML(nowAnswer) {
  for (var _i16 = 0; _i16 < airNum.length; _i16++) {
    airNum[_i16].src = "/images/airplane/airRank".concat(nowAnswer[_i16], ".png");
  }
}
var threeArr = [1, 0, 2];
function airTopThreeHTML(nowAnswer) {
  for (var _i17 = 0; _i17 < topThreeAir.length; _i17++) {
    topThreeAir[_i17].src = "/images/airplane/airRank".concat(nowAnswer[threeArr[_i17]], ".png");
  }
}
openTrendModalBtn.addEventListener('click', function () {
  trendModal.style.display = "flex";
});
closeTrendModalBtn.addEventListener('click', function () {
  trendModal.style.display = "none";
});
openGameBtn.addEventListener('click', function () {
  playBoxisOpen = !playBoxisOpen;
  if (playBoxisOpen) {
    playBox.style.opacity = '1';
    openGameBtn.classList.remove('fa-circle-up');
  } else {
    playBox.style.opacity = '0';
    openGameBtn.classList.add('fa-circle-up');
  }
});
openRuleModalBtn.addEventListener('click', function () {
  ruleModal.style.display = "flex";
});
closeRuleModalBtn.addEventListener('click', function () {
  ruleModal.style.display = "none";
});
for (var _i18 = 0; _i18 < bsBtn.length; _i18++) {
  bsBtn[_i18].addEventListener('mousedown', downBsBtnFn);
}
for (var _i19 = 0; _i19 < bsBtn.length; _i19++) {
  bsBtn[_i19].addEventListener('mouseup', upBsBtnFn);
}
for (var _i20 = 0; _i20 < bsBtn.length; _i20++) {
  bsBtn[_i20].addEventListener('click', guessFn);
}
function downBsBtnFn(e) {
  if (e.target.alt == 11) {
    bigBtn.src = '/images/airplane/big-chk.png';
    return;
  }
  if (e.target.alt == 12) {
    smallBtn.src = '/images/airplane/small-chk.png';
    return;
  }
  if (e.target.alt == 13) {
    oddBtn.src = '/images/airplane/odd-chk.png';
    return;
  }
  if (e.target.alt == 14) {
    evenBtn.src = '/images/airplane/even-chk.png';
    return;
  }
}
function upBsBtnFn(e) {
  var bsArr = ['big', 'small', 'odd', 'even'];
  // guessBsFn(bsArr[Number(e.target.alt)-1]);

  if (e.target.alt == 11) {
    bigBtn.src = '/images/airplane/big.png';
    return;
  }
  if (e.target.alt == 12) {
    smallBtn.src = '/images/airplane/small.png';
    return;
  }
  if (e.target.alt == 13) {
    oddBtn.src = '/images/airplane/odd.png';
    return;
  }
  if (e.target.alt == 14) {
    evenBtn.src = '/images/airplane/even.png';
    return;
  }
}
function clickBsBtnFn(e) {
  bsChoose = Number(e.target.alt);
  changeBsBtnFn();
}
function changeBsBtnFn() {
  if (bsChoose == 1) {
    bigBtn.src = bigBtn.src.replace('.png', '-chk.png');
    return;
  }
  if (bsChoose == 2) {
    smallBtn.src = smallBtn.src.replace('.png', '-chk.png');
    return;
  }
  if (bsChoose == 3) {
    oddBtn.src = oddBtn.src.replace('.png', '-chk.png');
    return;
  }
  if (bsChoose == 4) {
    evenBtn.src = evenBtn.src.replace('.png', '-chk.png');
    return;
  }
}
for (var _i21 = 0; _i21 < rankingImgBs.length; _i21++) {
  rankingImgBs[_i21].addEventListener('click', chengBsRankFn);
}
function chengBsRankFn(e) {
  initBsRankFn();
  e.target.src = "/images/airplane/no".concat(e.target.alt, "chk.png");
  bsChooseRank = e.target.alt;
}
function initBsRankFn() {
  for (var _i22 = 0; _i22 < rankingImgBs.length; _i22++) {
    rankingImgBs[_i22].src = "/images/airplane/no".concat(_i22 + 1, ".png");
  }
}
openRecordModalBtn.addEventListener('click', function (e) {
  recordModal.style.display = "flex";
});
closeRecordModalBtn.addEventListener('click', function (e) {
  recordModal.style.display = "none";
});
window.Livewire.emit('isBeted');
window.addEventListener('isbetedFn', function (e) {
  if (e.detail.is_bet) {
    isBeted = true;
    chkBetBool = false;
    chkBtn.src = '/images/airplane/chkdisable.png';
    reBtn.src = '/images/airplane/redisable.png';
    doubleBtn.src = '/images/airplane/doubledisable.png';
    console.log("guess=>", JSON.parse(e.detail.is_beted_guess));
    guessAirArray = JSON.parse(e.detail.is_beted_guess);
    var rankGuessArr = ['無', '冠軍', '亞軍', '季軍', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
    var airGuessArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '大', '小', '單', '雙'];
    var idx = 0;
    var g_type = '';
    var g_type_name = '';
    var g_odd = '';
    for (var _i23 = 1; _i23 <= 10; _i23++) {
      for (var j = 1; j <= 14; j++) {
        if (Number(guessAirArray["no".concat(_i23)]["air".concat(j)]['money']) > 0) {
          var g_money = Number(guessAirArray["no".concat(_i23)]["air".concat(j)]['money']);
          if (j <= 10) {
            g_type = 0;
            g_type_name = '定位膽';
            g_odd = e.detail.odds;
          } else if (j <= 14) {
            g_type = 2;
            g_type_name = '大小單雙';
            g_odd = e.detail.bs_odds;
            ;
          }
          listAllHtml += "<div class=\"item\">\n                        <input type=\"hidden\" value=\"".concat(g_type_name, "\" class='gametype'>\n                        <input type='hidden' value='").concat(rankGuessArr[j], " - ").concat(airGuessArr[j], "' class='isrank'>\n                        <input type='hidden' value='").concat(g_money, "' class='money'>\n                        <input type='hidden' value='").concat(rankGuessArr[j], " - ").concat(airGuessArr[j], "' class='bet'>\n                        <input type='hidden' value='").concat(idx, "' class='idx'>\n                        <span>\u4E0B\u6CE8\u9805\u76EE:</span><br>\n                        ").concat(g_type_name, "<br>\n                        <span>\u4E0B\u6CE8\u5167\u5BB9:</span><br>\n                        ").concat(rankGuessArr[j], " - ").concat(airGuessArr[j], "<br>\n                        <span>\u8CE0\u7387:</span>\n                        ").concat(g_odd, "<br>\n                        <span>\u6295\u6CE8\u91D1\u984D:</span>\n                        ").concat(g_money, "<br>\n                        </div>");
          idx++;
        }
      }
    }
    listAll.innerHTML = listAllHtml;
  } else {
    isBeted = false;
  }
});
window.onload = function () {
  setTimeout(function () {
    document.getElementById('loading').style.display = "none";
  }, 1000);
};
/******/ })()
;