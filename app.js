const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        addItem();
    }
});

function addItem(){
    var div = document.createElement("div");
    var subDiv = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    div.className = "item";
    div.innerHTML = '<div>'+ input.value +'</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", ()=>{
        checkIcon.style.color = "limegreen";
    });

    subDiv.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", ()=>{
        div.remove();
    });

    subDiv.appendChild(trashIcon);

    div.appendChild(subDiv);

    toDoItems.appendChild(div);

    input.value = "";
}