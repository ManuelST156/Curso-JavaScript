btnSave.addEventListener('click',Save)


userInput.addEventListener('keypress',(event)=>{
    if(event.keyCode==13)
    {
        console.log(userInput.value);
    }
});



function Save()
{
    console.log(userInput.value);
}

