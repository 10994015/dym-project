<div id="airplane" wire:ignore>
    <div class="header">
      <div class="left">
        <div class="userBox">
          <img src="/images/airplane/w644.jpg">
          <div class="userNameBox">{{Auth::user()->name}}</div>
        </div>
        <div class="moneyBox">
          <img src="/images/airplane/money-icon.png">
          <div class="dollerBox" id="myDoller">{{Auth::user()->money}} </div>
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
  <div class="content">
    <div class="playBox">
      <div class="airplaneDiv" id="airplaneDiv">
        <img src="/images/airplane/bg2.png" class="bg" id="airplaneDivBg">
        @for($i=1;$i<=10;$i++)
          <div class="air">
              <img src="/images/airplane/air{{$i}}.png" class="airImg">
              <img src="/images/airplane/injection.png" class="injection">
          </div>
        @endfor
      </div>
      <div class="countdown" id="countdown">
        <div>
            <p id="countdownSec"> 
              <img src="/images/airplane/loading.gif">
            </p>
            <div id="fiveNumber"></div>
        </div>
      </div>
      
      <div class="airTopTen" id="airTopTen">
          前十名
      </div>
      <div class="airTopThree" id="airTopThree">
          <p>第一名:</p>
          <p>第二名:</p>
          <p>第三名:</p>
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
            <img src="/images/airplane/no{{$i}}.png" id="rankingImg{{$i}}" class="rankingImg clickAudio" alt="{{$i}}" wire:click.prevent="setRank({{$i}})">
            @endfor
          </div>
          <div class="airplaneRankBox" id="airplaneRankBox">
            <?php for($i=1;$i<=10;$i++){ ?>
              <div class="rank no{{$i}}" wire:click.prevent="guessFn({{$i}})">
                  <img src="" class="smallDiamond smallair{{$i}}">
                  <img src="/images/airplane/air{{$i}}.png" class="air betAir clickAudio" alt="{{$i}}">
              </div>
            <?php } ?>
          </div>
      </div>
      <div class="content" id="game2">冠亞二星</div>
      <div class="content" id="game3">大小單雙</div>
      <div class="content" id="game4">冠亞和</div>
      <div class="content" id="game5">龍虎</div>
    </div>
    <div class="betList">
        <div class="header">注單列表</div>
        <div class="list">
            <div class="title"><p>下注<br>期號</p></div>
            <div class="issue">SR17082208161906</div>
        </div>

        <div class="total">
            <p>總注數</p>
            <p>總投注金額</p>
        </div>
    </div>
  </div>
  <div class="footer">
    <div class="diamondList">
      <i class="fa-solid fa-chevron-left" id="diamondBoxLeft"></i>
      <div class="diamondBox">
        <img src="/images/airplane/diamond10.png"  class="diamondBtn" alt="10" wire:click.prevent="setBetMoney(10)">
        <img src="/images/airplane/diamond50.png"  class="diamondBtn" alt="50" wire:click.prevent="setBetMoney(50)">
        <img src="/images/airplane/diamond100.png"  class="diamondBtn" alt="100" wire:click.prevent="setBetMoney(100)">
        <img src="/images/airplane/diamond1000.png"  class="diamondBtn" alt="1000" wire:click.prevent="setBetMoney(1000)">
        <img src="/images/airplane/diamond5000.png"  class="diamondBtn" alt="5000" wire:click.prevent="setBetMoney(5000)">
        <img src="/images/airplane/diamond10000.png"  class="diamondBtn" alt="10000" wire:click.prevent="setBetMoney(10000)">
      </div>
      <i class="fa-solid fa-chevron-right" id="diamondBoxRight"></i>
    </div>
    <div class="betMoneyBox">
      <p>每注/元</p>
      <div class="betMoney"> <input type="number" id="beyMoney" wire:model="betMoney"> </div>
    </div>
    <div class="btnList">
      <img src="/images/airplane/duble.png" id="doubleBtn">
      <img src="/images/airplane/re.png" id="reBtn">
      <img src="/images/airplane/chk.png" id="chkBtn">
    </div>
  </div>
  <script>
    
    
  </script>
</div>
