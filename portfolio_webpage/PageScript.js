var list = [];
var counter = 0;
var input;
var checkForKey = function ()
{
    if (event.keyCode == 13)
    {
        input = document.getElementById("userInput").value;
        list.push(input);
        addToList();
        document.getElementById('textBarLabel').innerHTML = counter + " Items left.";
    }
}
var addToList = function()
{
    //remember to add the class for selected or not :D
    var liCreate = document.createElement("li");
    liCreate.innerHTML = input;
    liCreate.id = counter;
    liCreate.onclick = removeElementFunction;
    document.getElementById('list').appendChild(liCreate);
    counter++;
}
var clearFromList = function()
{
    document.getElementById('list').innerHTML = "";
    list = [];
    counter = 0;
    document.getElementById('textBarLabel').innerHTML = counter + " Items left.";
}
var removeElementFunction = function(event)
{
    var liId = event.target.id;
    document.getElementById(liId).outerHTML = "";
    counter = counter - 1;
    document.getElementById('textBarLabel').innerHTML = counter + " Items left.";

}