let inputs=document.getElementById("inp");
let text1=document.querySelector(".text1");
function Add(){
    if(inputs.value == ""){
       alert("please enter task") 
    } 
    else{
        let li=document.createElement("li");
        li.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text1.appendChild(li);
        inputs.value="";
        li.querySelector("i").addEventListener("click", remove);
        function remove(){
            li.remove()
        }
    }
}