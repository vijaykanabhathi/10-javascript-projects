const notescontainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".inputbox");

function shownotes(){
    notescontainer.innerHTML=localStorage.getItem("notes");      //displaying the notes after refreshing also
}
shownotes();

function updatestorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);  //updating the storage with each new note added or deleted
}


createbtn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="inputbox";
    inputbox.setAttribute("contenteditable","true");
    img.src="assets/delete.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})

notescontainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".inputbox");
        notes.forEach(nt =>{                                      //for storing locally
            nt.onkeyup=function(){
                updatestorage();
            }
        })
    }else if(e.target===notescontainer) {
        alert("Please click on the note area to edit or delete!");
    }
})

