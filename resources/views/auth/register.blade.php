
<x-guest-layout>
    @php
        $r_number = NULL;
        if(isset(request()->rn)){
            $r_number = request()->rn;
        }
    @endphp
    <div class="container-fluid" id="registerPage">
        <img src="/images/addmember.png" class="registertitle">
        <form method="post" action="{{route('register')}}" class="registerForm">
            @csrf
            <div class="mb-3">
                <label for="username" class="form-label text-light" >帳號</label>
                <input type="text" name="username" placeholder="請輸入帳號..." class="form-control text-light bg-transparent" id="username" >
            </div>
            <div class="mb-3">
                <label for="name" class="form-label text-light" >姓名</label>
                <input type="text" name="name" placeholder="請輸入姓名..." class="form-control text-light bg-transparent" id="name" >
            </div>
            {{-- <div class="mb-3">
                <label for="email" class="form-label text-light" >電子郵件</label>
                <input type="email" name="email" placeholder="請輸入您的電子郵件..." class="form-control text-light bg-transparent" id="email" aria-describedby="emailHelp">
            </div> --}}
            <div class="mb-3">
                <label for="phone" class="form-label text-light" >手機號碼</label>
                <input type="text" name="phone" placeholder="請輸入手機號碼..." class="form-control text-light bg-transparent" id="phone" >
            </div>
            <div class="mb-3">
                <label for="password" class="form-label text-light">密碼</label>
                <input type="password" name="password" placeholder="請輸入密碼..." class="form-control text-light bg-transparent" id="password">
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="form-label text-light">再次確認密碼</label>
                <input type="password" name="password_confirmation" placeholder="再次確認密碼..." class="form-control text-light bg-transparent" id="password_confirmation">
            </div>
            <x-jet-validation-errors class="mb-4 text-danger" />
            <input type="hidden" value="{{$r_number}}" name="r_number">
            <button type="submit" class="btn btn-warning mt-3 registerBtn">註冊</button>
        </form>
    </div>
    @include('livewire.layouts.alert')
</x-guest-layout>

