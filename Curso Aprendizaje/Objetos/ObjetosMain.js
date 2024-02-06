let UsuarioAdmin={};

function Guardar(){
/* Usuario.name=document.getElementById("name").value;
Usuario.lastName=document.getElementById("lastName").value;
Usuario.age=document.getElementById("age").value;
Usuario.email=document.getElementById("email").value;
Usuario.password=document.getElementById("password").value;
Usuario.checkPassword=document.getElementById("checkPassword").value;
Usuario.check=document.getElementById("accept").value; */

UsuarioAdmin= new Usuario(document.getElementById("name").value,document.getElementById("lastName").value,
document.getElementById("age").value,document.getElementById("email").value,document.getElementById("password").value,
document.getElementById("checkPassword").value,document.getElementById("accept").value

)

console.log(UsuarioAdmin);

}

function Validacion(){
    if(document.getElementById("password").value==document.getElementById("checkPassword").value){
        Guardar();
        
    }
    else{
        alert("La contraseña y su validacion son incorrectas")
    }
}

function Usuario(name, lastName,age,email,password,checkPassword,check){
this.name=name;
this.lastName=lastName;
this.age=age;
this.email=email;
this.password=password;
this.checkPassword=checkPassword;
this.check=check;
}

