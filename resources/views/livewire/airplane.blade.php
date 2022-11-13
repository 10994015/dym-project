<div id="airplane" wire:ignore>
  <!-- <div id="loading" wire:loading><p>DYM Loading...</p></div> -->
  <div class="header" >
      <div class="left">
        <div class="userBox">
          <img src="/images/airplane/w644.jpg">
          <div class="userNameBox">{{Auth::user()->name}}</div>
        </div>
        <div class="moneyBox">
          <img src="/images/airplane/money-icon.png">
          <div class="dollerBox" id="myDoller">{{$myDoller}}</div>
          <div class="winMessage" id="winMessage"></div>
        </div>
      </div>
      <div class="right">
        <div class="fpsBox">90ms</div>
        <div class="menu">
          <i class="fas fa-bars" id="bar"></i>
          <ul class="menuList" id="menuList">
            <li>
            <form action="/logout" method="post" id="logoutForm">
                @csrf
                <input type="submit" hidden>
                <a href="javascript:;" class="logout" id="logout">Logout</a>
            </form>
            </li>
          </ul>
        </div>
      </div>
  </div>
  <div class="content" >
    <div class="playBox">
      <img src="/images/airplane/loading.gif" class="loading" >
      <div class="airplaneDiv" id="airplaneDiv" >
        <img src="/images/airplane/bg2.png" class="bg" id="airplaneDivBg">
        @for($i=1;$i<=10;$i++)
          <div class="air">
              <img src="/images/airplane/air{{$i}}.png" class="airImg">
              <img src="/images/airplane/injection.png" class="injection">
          </div>
        @endfor
      </div>
      <div class="countdown" id="countdown" >
        <div>
          <div class="timer">
            <div id="countdownSec"> 
              <p></p>
            </div>
          </div>
            <img src="/images/airplane/trend.png" class="trend">
            <div id="fiveNumber">
            </div>
        </div>
      </div>
     
      <div class="airTopTen" id="airTopTen" >
          <div class="list top">
            <div class="airBox">
              <img src="/images/airplane/airbox1.png" class="airBoxBg">
              <img src="/images/airplane/airRank1.png" class="airNum airNum1">
            </div>
          </div>
          <div class="list">
            <div class="airBox">
              <img src="/images/airplane/airbox2.png" class="airBoxBg">
              <img src="/images/airplane/airRank2.png" class="airNum airNum2">
            </div>
            <div class="airBox">
              <img src="/images/airplane/airbox3.png" class="airBoxBg">
              <img src="/images/airplane/airRank3.png" class="airNum airNum3">
            </div>
            <div class="airBox">
              <img src="/images/airplane/airbox4.png" class="airBoxBg">
              <img src="/images/airplane/airRank4.png" class="airNum airNum4">
            </div>
          </div>
          <div class="list">
            <div class="airBox">
              <img src="/images/airplane/airbox5.png" class="airBoxBg">
              <img src="/images/airplane/airRank5.png" class="airNum airNum5">
            </div>
            <div class="airBox">
              <img src="/images/airplane/airbox6.png" class="airBoxBg">
              <img src="/images/airplane/airRank6.png" class="airNum airNum6">
            </div>
            <div class="airBox">
              <img src="/images/airplane/airbox7.png" class="airBoxBg">
              <img src="/images/airplane/airRank7.png" class="airNum airNum7">
            </div>
          </div>
          <div class="list">
            <div class="airBox">
              <img src="/images/airplane/airbox8.png" class="airBoxBg">
              <img src="/images/airplane/airRank8.png" class="airNum airNum8">
            </div>
            <div class="airBox">
              <img src="/images/airplane/airbox9.png" class="airBoxBg">
              <img src="/images/airplane/airRank9.png" class="airNum airNum9">
            </div>
            <div class="airBox">
              <img src="/images/airplane/airbox10.png" class="airBoxBg">
              <img src="/images/airplane/airRank10.png" class="airNum airNum10">
            </div>
          </div>
      </div>
      <div class="airTopThree" id="airTopThree" >
         <img src="/images/airplane/champion.png" class="championTitle">
         <img src="/images/airplane/streamer.png" class="streamer">
         <div class="airList">
           <div class="airBox">
             <img src="/images/airplane/airbt.png" class="airbt">
             <img src="/images/airplane/rake2.png" class="rake">
             <img src="/images/airplane/airRank1.png" class="air topThreeAir">
           </div>
           <div class="airBox top1">
             <img src="/images/airplane/airbt.png" class="airbt">
             <img src="/images/airplane/rake1.png" class="rake">
             <img src="/images/airplane/airRank3.png" class="air topThreeAir">
           </div>
           <div class="airBox">
             <img src="/images/airplane/airbt.png" class="airbt">
             <img src="/images/airplane/rake3.png" class="rake">
             <img src="/images/airplane/airRank6.png" class="air topThreeAir">
           </div>
         </div>
      </div>
     
    </div>
    <div class="betBox">
      <nav class="nav">
          <img src="/images/airplane/btnchk1.png" id="gameBtn1" class="gameBtn" >
          <img src="/images/airplane/btn2.png" id="gameBtn2" class="gameBtn" >
          <img src="/images/airplane/btn3.png" id="gameBtn3" class="gameBtn" >
          <img src="/images/airplane/btn4.png" id="gameBtn4" class="gameBtn" >
          <img src="/images/airplane/btn5.png" id="gameBtn5" class="gameBtn" >
      </nav>
      <div class="content" id="game1">
          <span class="odds">猜每一個名次的稱號 賠率9.8</span>
          <div class="rankBtnBox" id="rankBtnBox">
            @for($i=1;$i<=10;$i++)
            <img src="/images/airplane/no{{$i}}.png" id="rankingImg{{$i}}" class="rankingImg clickAudio" alt="{{$i}}">
            @endfor
          </div>
          <div class="airplaneRankBox" id="airplaneRankBox">
            @for($i=1;$i<=10;$i++)
              <div class="rank no{{$i}}" >
                  <img src="" class="smallDiamond smallair{{$i}}">
                  <img src="/images/airplane/air{{$i}}.png" class="air betAir clickAudio" alt="{{$i}}">
              </div>
            @endfor
          </div>
      </div>
      <div class="content" id="game2">冠亞二星</div>
      <div class="content" id="game3">大小單雙</div>
      <div class="content" id="game4">冠亞和</div>
      <div class="content" id="game5">龍虎</div>
    </div>
    <div class="betList">
        <div class="header">注單列表</div>
        <div class="list-title">
              <div class="title"><p>下注<br>期號</p></div>
              <div class="issue">SR9359202211130349</div>
          </div>
        <div class="listAll" id="listAll">
        </div>
       

        <div class="total">
            <p>總注數: <span id="totalBetNmuber">0</span></p>
            <p>總投注金額: <span id="totalBetMoney">0</span></p>
        </div>
    </div>
  </div>
  <div class="footer" >
    <div class="diamondList">
      <i class="fa-solid fa-chevron-left" id="diamondBoxLeft"></i>
      <div class="diamondBox">
        <img src="/images/airplane/diamond10.png"  class="diamondBtn" alt="10" >
        <img src="/images/airplane/diamond50.png"  class="diamondBtn" alt="50" >
        <img src="/images/airplane/diamond100.png"  class="diamondBtn" alt="100" >
        <img src="/images/airplane/diamond1000.png"  class="diamondBtn" alt="1000" >
        <img src="/images/airplane/diamond5000.png"  class="diamondBtn" alt="5000" >
        <img src="/images/airplane/diamond10000.png"  class="diamondBtn" alt="10000" >
      </div>
      <i class="fa-solid fa-chevron-right" id="diamondBoxRight"></i>
    </div>
    <div class="betMoneyBox">
      <p>每注/元</p>
      <div class="betMoney"> <input type="number" id="beyMoney" value="0"> </div>
    </div>
    <div class="btnList">
      <img src="/images/airplane/double.png" id="doubleBtn">
      <img src="/images/airplane/re.png" id="reBtn">
      <img src="/images/airplane/chk.png" id="chkBtn">
    </div>
  </div>
  <script>
    
    
  </script>
</div>
