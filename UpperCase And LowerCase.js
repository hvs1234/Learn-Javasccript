upper = ()=>
{
    var name = document.getElementById("str").value
    document.getElementById('set').innerHTML = `To Upper Case: ${name.toUpperCase()}`;
}
lower = ()=>
{
    var name = document.getElementById("str").value
    document.getElementById('set').innerHTML = `To Upper Case: ${name.toLowerCase()}`;
}
