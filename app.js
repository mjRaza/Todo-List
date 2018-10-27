

var clearButton =document.getElementById("clearBtn");
var data =document.getElementById("data");

var items =document.getElementById("items");
var savedData =document.getElementById("saved-data");







document.getElementById("btn").addEventListener("click",onClick)


clearButton.addEventListener("click",clearing)



function onClick(event)
{
if(data.value ==="")
{
    alert("Please Enter Somthing");
}

else
{

var li = document.createElement("li");
li.appendChild(document.createTextNode(data.value));

var link = document.createElement("a");
link.className="remove"
link.id="remove"
link.innerHTML="<i class='fa fa-remove '></i>"
li.appendChild(link);

items.appendChild(li);



data.value="";

}
event.preventDefault();

}






items.addEventListener("click",removing);





function removing(e)
{
    if(e.target.parentElement.classList.contains("remove"))
{
   e.target.parentElement.parentElement.remove();
}
}




function clearing(e)
{

items.innerHTML="";
e.preventDefault();
}