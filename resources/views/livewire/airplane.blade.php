<div id="airplane">
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
      <div class="airplaneDiv">
        <img src="/images/airplane/bg2.png" class="bg start" id="airplaneDivBg">
        @for($i=1;$i<=10;$i++)
          <div class="air air{{$i}}">
              <img src="/images/airplane/air{{$i}}.png" class="airImg">
              <img src="/images/airplane/injection.png" class="injection">
          </div>
        @endfor
      </div>
      <div class="countdown">
        <div>
            <p>00:<span id="countdown">00</span></p>
        </div>
      </div>
      <div class="airTopThree" id="airTopThree">
          <p>第一名:</p>
          <p>第二名:</p>
          <p>第三名:</p>
      </div>
      <div class="airTopTen" id="airTopTen">
          前十名
      </div>
    </div>
    <div class="betBox"></div>
    <div class="betList"></div>
  </div>

  <script>
    window.addEventListener('sendAnswer', e=>{
      console.log(e.detail.answer);
      
    });
    
  </script>
</div>
