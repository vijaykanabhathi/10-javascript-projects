const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="&#10799;";
        li.appendChild(span);
        // adding click event to remove the task from the list
        span.onclick = function () {
            listcontainer.removeChild(li)
        };
        inputbox.value='';//clearing the box after adding a new item
        savedata();
    }
}

listcontainer.addEventListener('click', function (e) {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

},false);

function savedata() {
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtasks() {
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtasks();