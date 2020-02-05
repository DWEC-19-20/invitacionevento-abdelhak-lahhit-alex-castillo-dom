
function añadir(){

    
    var invitado=document.getElementById("invitar").value;
    
    for(var c=0 ;c < document.getElementsByTagName("span").length;c++){
        
        if(invitado == document.getElementsByTagName("span")[c].innerHTML){
             
        document.getElementById("mensaje").style.display="block";
       document.getElementById("mensaje").innerHTML="Esta persona ya esta en la lista de invitados...";
       document.getElementById("mensaje").className="error";
            return false;
        }
    }
    if(document.getElementById("invitar").value==""){
        
        document.getElementById("mensaje").style.display="block";
       document.getElementById("mensaje").innerHTML="No se ha introducido ningún invitado...";
       document.getElementById("mensaje").className="error";
        
    }else{
        
         document.getElementById("mensaje").style.display="none";
        var li=document.createElement("li");
        var span=document.createElement("span");
        span.textContent=document.getElementById("invitar").value;
        var label=document.createElement("label");
        label.textContent="Confirmed";
        var input=document.createElement("input");
        input.type="checkbox";
        input.id="checkbox1";
        
        var edit=document.createElement("button");
        edit.textContent="edit";
        var remove=document.createElement("button");
        remove.textContent="remove";
        document.getElementById("invitedList").appendChild(li);
        li.appendChild(span);
        li.appendChild(label);
        label.appendChild(input);
        li.appendChild(edit);
        li.appendChild(remove);
        label.parentElement.className="not-responded";
        
        input.addEventListener("change",function(){
            if(this.checked){
                label.parentElement.className="responded";
           
        }
            else{
                 label.parentElement.className="not-responded";
            }
        });
        edit.addEventListener("click",function(){
           var ventana=window.prompt("AÑADE NOMBRE");
            if(ventana==""||ventana==null){
                document.getElementById("mensaje").style.display="block";
                document.getElementById("mensaje").innerHTML="Introduzca un nombre válido...";
                document.getElementById("mensaje").className="change";
                 
            }else{
                 for(var c=0 ;c < document.getElementsByTagName("span").length;c++){
                     
                    if(ventana === document.getElementsByTagName("span")[c].innerHTML){
                        
                        document.getElementById("mensaje").style.display="block";   document.getElementById("mensaje").innerHTML="Este nombre ya se encuentra en la lista...";    
                        document.getElementById("mensaje").className="error";
                        return false;
                    }
                     
                }
                
                document.getElementById("mensaje").style.display="none";
                span.textContent=ventana;
            
                //li.appendChild(edit).parentElement.firstChild.innerHTML=ventana;
                
        
            }
             
            document.getElementById("mensaje").style.display="none";
            
            });
        
        remove.addEventListener("click",function(){
            var m=window.confirm("¿Está Seguro que quiere Borrar al Invitado?");
            if(m===true){
                li.remove();
            }else{
                //No se hace nada
            }
            
        });
        
        
        //alert("Esta todo en orden...");
        
    }
   
    
}

 document.getElementById("confirm").addEventListener("change",function(){
        var lista=document.getElementById("invitedList");
        var confirm=lista.getElementsByClassName("not-responded");
       
            if(this.checked){
                for(var i=0;confirm;i++){
                    confirm.item(i).setAttribute("style","display:none;");
                   
                }
            } else{
                    for(var i=0;confirm;i++){
                        confirm.item(i).setAttribute("style","display:block;");
                    
                    
                }
                }
            
        });