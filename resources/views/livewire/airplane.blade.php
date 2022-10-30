<div id="airplane" wire:ignore.self>
    <div class="header">
      <div class="left">
        <div class="userBox">
          <img src="/images/airplane/w644.jpg">
          <div class="userNameBox">{{Auth::user()->name}}</div>
        </div>
        <div class="moneyBox">
          <img src="/images/airplane/money-icon.png">
          <div class="dollerBox">$ {{Auth::user()->money}}</div>
        </div>
      </div>
      <div class="right">
        <div class="fpsBox">90ms</div>
        <i class="fas fa-bars" id="bar"></i>
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
            <p id="countdownSec"> <img src="/images/airplane/loading.gif"> </p>
            <div id="fiveNumber">
            
            </div>
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
      @if($isLoad)
        <div class="gameLoading" id="gameLoading" >
          <p>LOADING...</p>
        </div>
      @endif
    </div>
    <div class="betBox"></div>
    <div class="betList"></div>
  </div>

  <script>
    
    
  </script>
</div>
