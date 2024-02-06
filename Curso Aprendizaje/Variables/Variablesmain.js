let pepe;
pepe=guardarValor();




function guardarValor(){
    let userName, password, result;
    userName= document.getElementById("userName");
    password= document.getElementById("password");
    
    result=document.getElementById("userNameShow");
    result.textContent="Su nombre de usuario es: "+userName.value;
    /* document.write(userName.value); */
} 


