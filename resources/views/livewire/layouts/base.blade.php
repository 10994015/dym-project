<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=3.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DYM</title>
    <link rel="stylesheet" href="/scss/app.css">
    <link rel="stylesheet" href="/css/style.css">
    @livewireStyles
</head>
<body>
    @include('livewire.layouts.header')
    @include('livewire.layouts.nav')
    <main>
        {{$slot}}
    </main>
    

    @livewireScripts
    <script src="/js/app.js"></script>
</body>
</html>