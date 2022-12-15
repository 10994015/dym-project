<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'username' => ['required', 'string', 'min:5', 'max:20', 'unique:users'],
            'phone' => ['required', 'string', 'size:10', 'unique:users'],
            'name' => ['required', 'string', 'max:255'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();
        $user_id = NULL;
        if($input['r_number'] != NULL){
            $user_id = User::where('register_number', $input['r_number'])->first()->id;
        }
        return User::create([
            'name' => $input['name'],
            'username' => $input['username'],
            'phone' => $input['phone'],
            'toponline'=>$user_id,
            'password' => Hash::make($input['password']),
        ]);
    }
}
