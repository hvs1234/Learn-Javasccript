// 4 ways to write a events in javascript 1- By alert(), 2- By calling function, 3- Using inline events, 4- using event listeners.

// By calling function.
f1 = ()=>
{
    alert("You have clicked on this link by using function");
}

// By inline events.
const link = document.getElementById('link');
link.onclick = function() {
    alert("you clicked on inline event");
}

// By event listener.
const link2 = document.querySelector('#link2');
link2.addEventListener('click',()=>{
    alert("You clicked on event listener")
})
