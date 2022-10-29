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
      
    </div>
    <div class="betBox"></div>
    <div class="betList"></div>
  </div>
</div>
