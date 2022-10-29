<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=3.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DYM</title>
    <link rel="stylesheet" href="/scss/app.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    @livewireStyles
</head>
<body>
    <main>
        {{$slot}}
    </main>
    

    @livewireScripts
    <script src="/js/app.js"></script>
    <script src="/js/airplane.js"></script>
    <script>
        window.Livewire.emit('sendTime');
        setInterval(()=>{
            window.Livewire.emit('sendTime');
        }, 60000);
    </script>
</body>
</html>