//Variables
let CounterID=0;
let Pendientes;
let Realizadas=0;
let Totales;


//Variables Captura
const Task=document.querySelector('input[type="text"]');


userInput.addEventListener('submit',(event)=>{
    event.preventDefault();
    addTask();
    console.log('Se ha disparado el evento submit');

});

let addTask= ()=>{
    CounterID++;
    console.log('Mensaje de funcion flecha');
    let TaskShow=Task.value;
    List.innerHTML+=`
    <div class="Task-Container" id="${CounterID}">
        <label>
            <input type="checkbox" id="Check">
            ${TaskShow}
            
        </label>
        <img  src="./images/trash.png" alt="" class="btnTrash">
    </div>
    `; 
    Task.value="";
    
    UpdateStats();
   

};



List.addEventListener('click',(event)=>{
     console.log(event);
     if(event.srcElement.nodeName=="INPUT")
     {
        UpdateStats();
     }
     else if (event.srcElement.nodeName=="IMG")
     {
        console.log(event.srcElement.parentNode.id);
        DeleteTask(event.srcElement.parentNode.id);
     }
});



let UpdateStats=()=>{
    Totales=List.querySelectorAll('div');
    Realizadas=List.querySelectorAll('input[type="checkbox"]:checked')
    Pendientes=Totales.length-Realizadas.length;
    Stats.innerHTML=`<p>Tareas Pendientes: ${Pendientes} - 
    Tareas Realizadas: ${Realizadas.length} -
    Tareas Totales: ${Totales.length}
    </p>`;
    
};

let DeleteTask=(id)=>{
    let TasktoDelete=document.getElementById(id);
    List.removeChild(TasktoDelete);
    //CounterID--;
    UpdateStats();
    
};