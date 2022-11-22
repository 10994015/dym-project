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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Ubuntu:ital,wght@1,300&family=Wallpoet&display=swap" rel="stylesheet">
    @livewireStyles
    <style>
        body{
            background-image: url('/images/airplane/bg.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        
    
        }
    </style>
</head>
<body>
    <main>
        {{$slot}}
    </main>
    

    @livewireScripts
    <script src="/js/app.js"></script>
    <script src="/js/airplane.js"></script>
    <script>
        
    </script>
</body>
</html>