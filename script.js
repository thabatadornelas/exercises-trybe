var ol = document.getElementById("lista-tarefas");
var li;
var itemId;
var item;

addTask = function () {
    if(document.getElementById("texto-tarefa").value != ""){
    item = document.getElementById("texto-tarefa");
    itemId = ol.childElementCount;
    li = createItemEl(item.value, itemId);
    /*li.appendChild(createRemoveBtn(itemId));*/
    ol.appendChild(li);
    item.value = "";
    }
}

removeTask = function (itemId) {
    for (i = 0; i < ol.children.length; i++){
        if (ol.children[i].getAttribute ("index") == itemId) {
            ol.children[i].remove();
        }
    }
}

createItemEl = function (itemValue, itemId) {
    let li = document.createElement("li");
    li.addEventListener("click", function () {
        if(li.classList.contains("selected") == false) {
        li.classList.add("selected")
        }
        else {
        li.classList.remove("selected")
        }
    })
    li.addEventListener("dblclick", function () {
        if(li.classList.contains("completed") == false) {
        li.classList.add("completed")
        }
        else {
            li.classList.remove("completed")
        }
    })
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

clearAll = function () {
    document.querySelector("#lista-tarefas").innerHTML = "";
}

rmvFinal = function () {
    let todosItens = document.querySelectorAll("li");
    for (let i = 0; i < todosItens.length; i++) {
        if (todosItens[i].classList.contains("completed") == true) {
            todosItens[i].remove()}
        }
    }

/*createRemoveBtn = function (itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.innerHTML = "X";
    return btn;
}*/