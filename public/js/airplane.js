/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/airplane.js ***!
  \**********************************/
window.Livewire.emit('sendTime');
var countdownNumber = 0;
var air = document.getElementById('airplaneDiv').querySelectorAll('.air');
var airplaneDivBg = document.getElementById('airplaneDivBg');
var bar = document.getElementById('bar');
var menuList = document.getElementById('menuList');
var isMenuOpen = false;
var countdown = document.getElementById('countdown');
var countdownSec = document.getElementById('countdownSec');
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
var diamondBtn = document.querySelectorAll('.diamondBtn');
var diamondBoxLeft = document.getElementById('diamondBoxLeft');
var diamondBoxRight = document.getElementById('diamondBoxRight');
var dimondListNum = 0;
var doubleBtn = document.getElementById('doubleBtn');
var reBtn = document.getElementById('reBtn');
var chkBtn = document.getElementById('chkBtn');
var rank = document.getElementsByClassName('rank');
var beyMoney = document.getElementById('beyMoney');
var answer = [];
var reverseanswer = [];
var nowAnswer = [];
var secondsArr = [[10, '1'], [10.1, '2'], [10.11, '3'], [10.12, '4'], [10.13, '5'], [10.14, '6'], [10.15, '7'], [10.16, '8'], [10.17, '9'], [10.18, '10']];
var myDoller = document.getElementById('myDoller');
var rankingImg = document.getElementsByClassName('rankingImg');
var chkBetBool = true;
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
    }
  }
};
var chooseRank = 1;
document.getElementById("rankingImg".concat(chooseRank)).src = "/images/airplane/no".concat(chooseRank, "chk.png");
var initSecondsArr = function initSecondsArr() {
  secondsArr = [[10, '1'], [10.1, '2'], [10.11, '3'], [10.12, '4'], [10.13, '5'], [10.14, '6'], [10.15, '7'], [10.16, '8'], [10.17, '9'], [10.18, '10']];
};
window.addEventListener('sendAnswer', function (e) {
  answer = e.detail.answer;
  // console.log(answer);
  nowAnswer = answer[4].ranking.split(',');
  // console.log("now:", nowAnswer);
  initSecondsArr();
  secondsArr.forEach(function (item, key) {
    item[1] = nowAnswer[key];
  });
  fiveNumberFn();
});
function sortFn() {
  secondsArr.sort(function (a, b) {
    return a[1] - b[1];
  });
  // console.log(secondsArr);
}

var fiveHtml = '';
window.addEventListener('startRun', function (e) {
  answer = e.detail.answer;
  nowAnswer = answer[4].ranking.split(',');
  initSecondsArr();
  secondsArr.forEach(function (item, key) {
    item[1] = nowAnswer[key];
  });
  if (new Date().getSeconds() < 11) {
    countdown.style.opacity = '0';
    airTopThree.style.opacity = '0';
    airTopTen.style.opacity = '0';
    sortFn();
    airplaneDivBg.classList.add('start');
    airplaneDivBg.style.animationDelay = "-".concat(new Date().getSeconds(), "s");
    var startSec = (10 - new Date().getSeconds()) * 1000;
    var _loop = function _loop(i) {
      air[i].style.animation = "airNo1 ".concat(secondsArr[i][0], "s linear");
      air[i].style.animationDelay = "-".concat(new Date().getSeconds(), "s");
      setTimeout(function () {
        air[i].style.animationDelay = '0s';
        air[i].style.opacity = '0';
      }, secondsArr[i][0] * 1000 - new Date().getSeconds() * 1000);
    };
    for (var i = 0; i < air.length; i++) {
      _loop(i);
    }
    setTimeout(function () {
      airTopTen.innerHTML = nowAnswer.join(',');
      airTopTen.style.opacity = "1";
      countdown.style.opacity = '1';
      airplaneDivBg.style.animationDelay = '0s';
      var id = setInterval(timeRun, 1000, id);
    }, startSec);
  } else {
    if (new Date().getSeconds() >= 11 && new Date().getSeconds() < 15) {
      airTopTen.innerHTML = nowAnswer.join(',');
      airTopTen.style.opacity = "1";
    }
    if (new Date().getSeconds() >= 15 && new Date().getSeconds() < 19) {
      airTopTen.innerHTML = nowAnswer.join(',');
      airTopTen.style.opacity = "1";
      countdown.style.opacity = '1';
      airTopThree.innerHTML = "<p>\u7B2C\u4E00\u540D:".concat(nowAnswer[0], "</p>\n            <p>\u7B2C\u4E8C\u540D:").concat(nowAnswer[1], "</p>\n            <p>\u7B2C\u4E09\u540D:").concat(nowAnswer[2], "</p>");
      airTopThree.style.opacity = "1";
    }
    var id = setInterval(timeRun, 1000, id);
  }
});
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
    airTopTen.innerHTML = nowAnswer.join(',');
    airTopTen.style.opacity = "1";
  }
  if (new Date().getSeconds() == 12) {
    if (!chkBetBool) {
      calcBetFn();
      window.Livewire.emit('updateMyMoney');
    }
    chkBetBool = true;
    chkBtn.style.opacity = '1';
    reBtn.style.opacity = '1';
    doubleBtn.style.opacity = '1';
  }
  if (new Date().getSeconds() == 15) {
    airTopThree.innerHTML = "<p>\u7B2C\u4E00\u540D:".concat(nowAnswer[0], "</p>\n        <p>\u7B2C\u4E8C\u540D:").concat(nowAnswer[1], "</p>\n        <p>\u7B2C\u4E09\u540D:").concat(nowAnswer[2], "</p>");
    airTopThree.style.opacity = "1";
  }
  if (new Date().getSeconds() <= 19) {
    if (new Date().getSeconds() == 0) {
      countdown.style.opacity = "1";
      // fiveNumberFn();
    }

    countdown.style.opacity = "0";
  } else {
    countdown.style.opacity = "1";
    // fiveNumberFn();
  }

  if (new Date().getSeconds() == 20) {
    airplaneDivBg.classList.remove('start');
    airTopThree.style.opacity = "0";
    airTopTen.style.opacity = "0";
    for (var a = 0; a < air.length; a++) {
      air[a].style.opacity = '1';
      air[a].style.animation = 'none';
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
function chengGameFn(e) {
  var id = "";
  initGameFn();
  id = e.target.id.split('Btn')[1];
  e.target.src = e.target.src.replace('btn', 'btnchk');
  // console.log(id);
  document.getElementById("game".concat(id)).style.display = "block";
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
document.getElementById('logout').addEventListener('click', logoutFn);
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
  for (var _i = 0; _i < diamondBtn.length; _i++) {
    diamondBtn[_i].style.transform = "translateX(-".concat(dimondListNum, "00px)");
  }
});
diamondBoxLeft.addEventListener('click', function () {
  if (dimondListNum > 0) {
    dimondListNum--;
  }
  for (var _i2 = 0; _i2 < diamondBtn.length; _i2++) {
    diamondBtn[_i2].style.transform = "translateX(-".concat(dimondListNum, "00px)");
  }
});
beyMoney.addEventListener('blur', function () {
  if (beyMoney.value == "" || beyMoney.value < 0) {
    beyMoney.value = Number(0);
  }
});
function initRankFn() {
  for (var _i3 = 0; _i3 < rankingImg.length; _i3++) {
    rankingImg[_i3].src = "/images/airplane/no".concat(_i3 + 1, ".png");
  }
}
function chengRankFn(e) {
  initRankFn();
  e.target.src = "/images/airplane/no".concat(e.target.alt, "chk.png");
  chooseRank = e.target.alt;
}
for (var _i4 = 0; _i4 < rankingImg.length; _i4++) {
  rankingImg[_i4].addEventListener('click', chengRankFn);
}
function notMoneyFn() {
  Swal.fire('警告', '餘額不足', 'error');
}
for (var _i5 = 0; _i5 < rank.length; _i5++) {
  rank[_i5].addEventListener('click', guessFn);
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
  myDoller.innerHTML = Number(myDoller.innerHTML) - Number(beyMoney.value);
  // console.log(e.target.alt);
  totalBet += Number(beyMoney.value);
  var sd = document.getElementsByClassName("smallair".concat(e.target.alt))[0];
  sd.style.display = "none";
  sd.src = "/images/airplane/diamond".concat(beyMoney.value, ".png");
  sd.style.display = "block";
  setTimeout(function () {
    sd.style.display = "none";
  }, 200);
  guessAirArray["no".concat(chooseRank)]["air".concat(e.target.alt)]['money'] += Number(beyMoney.value);
  // console.log(guessAirArray[`no${chooseRank}`][`air${e.target.alt}`]);
}

chkBtn.addEventListener('click', chkBtnFn);
function chkBtnFn() {
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
  chkBtn.style.opacity = '.6';
  reBtn.style.opacity = '.6';
  doubleBtn.style.opacity = '.6';
  window.Livewire.emit('chkBet', totalBet);
  totalBet = 0;
}
function calcBetFn() {
  var winMoney = 0;
  //賠率
  var odds = 2;
  for (var _i6 = 1; _i6 <= 10; _i6++) {
    // console.log(guessAirArray[`no${i}`]);
    for (var j = 1; j <= 10; j++) {
      if (guessAirArray["no".concat(_i6)]["air".concat(j)]['money'] > 0) {
        // console.log(guessAirArray[`no${i}`][`air${nowAnswer[i-1]}`]);
        if (j == nowAnswer[_i6 - 1]) {
          winMoney = winMoney + guessAirArray["no".concat(_i6)]["air".concat(j)]['money'] * odds;
        }
      }
    }
  }
  // console.log(winMoney);
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
      }
    }
  };
}
window.addEventListener('updateMyMoneyHtml', function (e) {
  myDoller.innerHTML = e.detail.money;
  winMessage.innerHTML = "\u606D\u559C\u60A8\u8D0F\u5F97\u4E86".concat(e.detail.win, "\u5143");
});
reBtn.addEventListener('click', function () {
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
        }
      }
    };
    myDoller.innerHTML = Number(myDoller.innerHTML) + Number(totalBet);
    totalBet = 0;
    beyMoney.value = 0;
  } else {
    Swal.fire('警告', '您已下注！請等待下次下注', 'error');
  }
});
doubleBtn.addEventListener('click', function () {
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
  for (var _i7 = 1; _i7 <= 10; _i7++) {
    guessAirArray["no".concat(_i7)];
    for (var j = 1; j <= 10; j++) {
      if (guessAirArray["no".concat(_i7)]["air".concat(j)]['money'] > 0) {
        guessAirArray["no".concat(_i7)]["air".concat(j)]['money'] = guessAirArray["no".concat(_i7)]["air".concat(j)]['money'] * 2;
      }
    }
  }
  Swal.fire('下注成功！', '下注金額雙倍', 'success');
});
/******/ })()
;