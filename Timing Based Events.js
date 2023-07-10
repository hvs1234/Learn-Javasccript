<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Logic</title>
</head>

<style>
    body{font-size:1.2em; font-family: monospace; font-weight: bold; background-color: black; color: white;}
    .container, .container2{display:flex; flex-direction:column; align-items: center; margin-top: 40px;}
    p{font-size: 1.5em; font-weight: bold;}
    #btn1,#btn2,#btn3,#btn4{padding:20px 40px; font-size:1.5em; font-weight: bold; font-family: monospace; border-radius: 20px; box-shadow: 2px 2px 2px rgb(255, 255, 255);}
    #btn2,#btn4{margin-top: 40px;}
    .btn:hover{background-color:lightblue; cursor: pointer;}
</style>

<body>
    <div class="container">
        <h1>setTimeout And clearTimeout</h1>
        <h2>Want to know my name ?</h2>
        <p id="show1"></p>
        <button class="btn" id="btn1">Click Me</button>
        <button class="btn" id="btn2">Stop Me</button>
    </div> <br><br><br><br>
    <hr>
    <div class="container2">
        <h1>setInterval And clearInterval</h1>
        <h2>It will be Start after 1 sec ...</h2>
        <p id="show2"></p>
        <button class="btn" id="btn3">Start CountDown</button>
        <button class="btn" id="btn4">Stop CountDown</button>
    </div> <br>
</body>
<script>
// Window object allows execution of code at specified time intervals. These time intervals are called time events. Two key methods used in js are:- setTimeout, setInterval.

// 1- setTimeout and clearTimeout:-

const name1 = document.querySelector("#show1");
const click1 = document.querySelector("#btn1");
const click2 = document.querySelector("#btn2");

click1.addEventListener('click',()=>{
    name1.innerHTML = "Loading ... "
    let s1 = setTimeout(()=>{
        name1.innerHTML = "Harshvardhan Sharma";
    },2000);
    click2.addEventListener('click',()=>{
        clearTimeout(s1);
        name1.innerHTML = "";
    });
});

// 2- setInterval and clearInterval:- 

const name2 = document.querySelector("#show2");
const click3 = document.querySelector("#btn3");
const click4 = document.querySelector("#btn4");
let num = 0;

click3.addEventListener('click',()=>{
    name2.innerHTML = 'Loading ...';
    let s3 = setInterval(()=>{
        name2.innerHTML = `${num}`;
        num++;
    },1000);
    click4.addEventListener('click',()=>{
        clearInterval(s3);
    });
});
</script>
</html>
