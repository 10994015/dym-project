
<header>
    <a href="/"><img src="/images/logo.png" alt=""></a>
    <div class="action">
        @if(Auth::check())
        <div class="text-light">Hello {{Auth::user()->name}}</div>
        <form action="/logout" method="post" id="logoutForm">
            @csrf
            <input type="submit" hidden>
            <a href="javascript:;" class="logout" onclick="logoutFn()">登出</a>
        </form>
        <!-- <a href="/logout" class="logout" onclick="logoutFn()">Logout</a> -->
        @else
        <a href="/login" class="login">登入</a>
        <a href="/register" class="register">註冊</a>
        @endif
    </div>
</header>