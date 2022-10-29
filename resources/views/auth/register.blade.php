
<x-guest-layout>
    <div class="container-fluid" id="registerPage">
        <img src="/images/addmember.png" class="registertitle">
        <form method="post" action="{{route('register')}}" class="registerForm">
            @csrf
            <div class="mb-3">
                <label for="name" class="form-label text-light" >Name</label>
                <input type="text" name="name" placeholder="Name..." class="form-control text-light bg-transparent" id="name" >
            </div>
            <div class="mb-3">
                <label for="email" class="form-label text-light" >Email</label>
                <input type="email" name="email" placeholder="Email..." class="form-control text-light bg-transparent" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label text-light">Password</label>
                <input type="password" name="password" placeholder="Password..." class="form-control text-light bg-transparent" id="password">
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="form-label text-light">Confirm Password</label>
                <input type="password" name="password_confirmation" placeholder="Password..." class="form-control text-light bg-transparent" id="password_confirmation">
            </div>
            <x-jet-validation-errors class="mb-4 text-danger" />
            <button type="submit" class="btn btn-warning  registerBtn">REGISTER</button>
        </form>
    </div>
</x-guest-layout>

