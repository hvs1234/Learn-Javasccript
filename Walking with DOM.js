<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>Javascript Logic</title>
    <script src="DOM Walking.js"></script>
</head>

<script>
    f = ()=> {
        let s1 = document.getElementById('btn');
        s1.style.background = "lightgreen";
        s1.style.color = "darkblue";
        s1.style.fontWeight = "bold";
        s1.style.borderRadius = "30px";
        s1.style.fontSize = "2em";
        s1.style.padding= "40px 40px";
        s1.style.width = "20%";
    }
</script>

<body>
    <div class="container-1">
        <h1>Welcome to my website</h1>
        <button id="btn" onclick="f()">Click</button>
    </div>
</body>
</html>
