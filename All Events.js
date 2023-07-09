// Event object - It is the parent object of event object. Mouseevents, keyboardevents, foucsevents.
// 1- Mouseevents:-

down = ()=> { document.getElementById('btn').style.color = 'darkblue'; }
up = ()=> { document.getElementById('btn').style.color = 'darkmagenta'; }
f1 = ()=> { 
    let s1 = document.getElementById('btn').style; s1.backgroundColor = 'lightyellow'; 
    s1.fontSize = '1.5em'; s1.fontFamily = 'monospace';
}
f2 = ()=> { 
    let s2 = document.getElementById('btn').style;
    s2.backgroundColor = 'lightblue';
    s2.fontSize = '2em'; s2.fontFamily = 'arial';
}

// Keyboardevents:-

const keypress = ()=>
{
    document.getElementById('key1').innerHTML = `You pressed ${event.key} where its code is: ${event.code}`;
}

const keydown = ()=> 
{
    document.getElementById('key2').innerHTML = `Key is down`;
}
const keyup = ()=> 
{
    document.getElementById('key2').innerHTML = `Key is up`;
}

// Inputevents:-

const select_element = ()=>
{
    let s1 = document.getElementById('ice').value;
    let s2 = document.getElementById('icecream').value;
    document.getElementById('get').innerHTML = `Mr. ${s1} select ${s2} icecream flavour.`;
}
