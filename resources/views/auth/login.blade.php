
<x-guest-layout>
    <div class="container-fluid" id="loginPage">
        <img src="/images/logintitle.png" class="logintitle">
        <form method="post" action="{{route('login')}}" class="loginForm">
            @csrf
            <div class="mb-3">
                <label for="email" class="form-label text-light" >Email</label>
                <input type="email" name="email" placeholder="Email..." class="form-control text-light bg-transparent" id="email" aria-describedby="emailHelp" :value="old('email')" autofocus>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label text-light">Password</label>
                <input type="password" name="password" placeholder="Password..." class="form-control text-light bg-transparent" id="password">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" name="remember" class="form-check-input" id="remember">
                <label class="form-check-label text-light" for="remember">Remember me</label>
            </div>
            <x-jet-validation-errors class="mb-4 text-danger" />
            <button type="submit" class="btn btn-warning  loginBtn">LOGIN</button>
        </form>
    </div>
    @include('livewire.layouts.alert')
</x-guest-layout>

