<nav>
    <a href="/">遊戲大廳</a>
    <a href="/">真人視訊</a>
    @if(Auth::check())
        <a href="/airplane">飛機競速</a>
    @else
        <a href="javascript:;" onclick="notloginFn()">飛機競速</a>
    @endif
    <a href="/">體育賽事</a>
    <a href="/">優惠活動</a>
</nav>