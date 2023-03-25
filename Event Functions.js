function togglehide() {
    let c1 = document.getElementById('btn');
    let c2 = document.getElementById('para');
    let c3 = document.getElementById('change');
    c3.style.color = 'darkblue';
    c1.style.color="red";
    if(c2.style.display!='none') {
        c2.style.display='none';
        c1.style.color='indigo';
    }  
    else {
        c2.style.display='block';
    }
}

function fontset() {
    let f1 = document.getElementById('font');
    let f2 = document.getElementById('para');
    f1.style.color='darkgreen';
    f2.style.fontSize='1em'
    if(f2.style.fontSize='1em') f2.style.fontSize="2em";
}
