var Name= document.querySelector("#name");
var content= document.querySelector("#content");
var btn=document.querySelector("#btn");
var task=document.querySelector("#task");

btn.addEventListener("click",function(){
    var newTask= document.createElement("li");
    newTask.setAttribute('class','list-group-item d-flex justify-content-between align-items-center');
    newTask.innerHTML= Name.value+' : '+content.value+' <i id="trash'+'" class="fas fa-trash"></i>';
    task.appendChild(newTask);
    Name.value = "";
    content.value= "";  

    document.querySelectorAll('#trash').forEach(item =>{
        item.addEventListener('click',function(e){
            item.parentNode.remove();
        });
    });
    
});
   

