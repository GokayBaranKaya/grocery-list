const input = document.querySelector("#note")
const addBtn = document.querySelector(".add-btn")
const list = document.querySelector("#list")
const deleteAllBtn = document.querySelector(".delete-all-btn")
let content = []
let firstTime = true

newLi()
deleteAll()


window.addEventListener("DOMContentLoaded", function(){
    for (i = 0; i < localStorage.length ; i++){
        content.push(localStorage.getItem(i))
        addLi()
    }
    firstTime = false
})



function newLi(){
    addBtn.addEventListener("click", () =>{
        addLi()
    })
}
function addLi(){
    if(!firstTime){
        value = input.value
        content.push(value)
        addLocalStorage(content)
    }
    const node = document.createElement("li")
    const nodeText = document.createTextNode(content[content.length-1])
    input.value = null
    node.appendChild(nodeText)
    node.innerHTML += `<span><a href="#" class="edit-note"></span>`
    list.appendChild(node)
}



function addLocalStorage(anyArray = []){
    anyArray.forEach((element, index) =>{
        localStorage.setItem(index,element)
    })
}

function deleteAll(){
    deleteAllBtn.addEventListener("click", () =>{
        localStorage.clear()
        content = []
        list.innerHTML = null
    })
}
