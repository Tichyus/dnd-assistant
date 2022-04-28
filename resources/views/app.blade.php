<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{mix('js/app.js')}}" defer></script>
    <title>DnD</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
