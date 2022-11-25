
<x-guest-layout>
    <div class="container-fluid" id="loginPage">
        <img src="/images/logintitle.png" class="logintitle">
        <form method="post" action="{{route('login')}}" class="loginForm">
            @csrf
            <div class="mb-3">
                <label for="username" class="form-label text-light" >帳號</label>
                <input type="text" name="username" placeholder="請輸入帳號..." class="form-control text-light bg-transparent" id="username" aria-describedby="emailHelp" :value="old('username')" autofocus>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label text-light">密碼</label>
                <input type="password" name="password" placeholder="請輸入密碼..." class="form-control text-light bg-transparent" id="password">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" name="remember" class="form-check-input" id="remember">
                <label class="form-check-label text-light" for="remember">記住我</label>
            </div>
            <x-jet-validation-errors class="mb-4 text-danger" />
            <button type="submit" class="btn btn-warning  loginBtn">登入</button>
        </form>
    </div>
    @include('livewire.layouts.alert')
</x-guest-layout>

