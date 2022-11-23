<script>
        const notloginFn = ()=>{
            Swal.fire({
                icon: 'error',
                title: '請先登入！',
                text: '您無權限進入，請先登入！',
                footer: '<a href="/register">沒有帳號嗎？點擊註冊</a>',
                confirmButtonText: '前往登入',
                confirmButtonColor: '#3085d6',


            }).then(result=>{
                if(result.isConfirmed){
                    window.location.href="/login";
                }
            })
        };
        const logoutFn = ()=>{
            Swal.fire({
                title: '確定要登出嗎？',
                text: "Are you sure you want to log out?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#aaa',
                confirmButtonText: 'Yes!'
            }).then(chk=>{
                if(chk.isConfirmed){
                    Swal.fire(
                        '登出成功！',
                        'Logout succeeded!',
                        'success'
                    ).then(result=>{
                        if(result.isConfirmed){
                            document.getElementById('logoutForm').submit();
                        }
                    })
                }
            })



            

        };
    </script>