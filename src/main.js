
//Para recibir el elemento html por "class" 
//(si no tuviesemos class, pondriamos el nombre del elemento "h1, input, button...")
//y sería sin el punto. El id sería con # en lugar de .
const button = document.querySelector(".button1");

const titulo = document.querySelector(".title");

const input = document.querySelector(".input");

const emptyTitle = document.querySelector(".empty-title");

const taskList = document.querySelector(".task-list");

//const items = document.querySelectorALL("li")
//foreach items



function addItem(){
    const item = document.createElement("li");
    item.innerText = input.value;
    taskList.append(item);

    clearInput();
   
}

function clearInput(){
    input.value = "";
    input.focus();
}



//Los elementos tienen eventos y podemos programar 
//cosas cuando suceda un evento en ese elemento
button.addEventListener("click", () => addItem());


input.addEventListener("input", () => {

    console.log(input.value);
    emptyTitle.innerText = input.value;
});


input.addEventListener("keypress", (event) => {
    if(event.key == 'Enter'){
        addItem();
    }
    console.log(input.value);
    emptyTitle.innerText = input.value;
});



//DEBERES

// CREAR UNA LISTA DE TAREAD QUE PUEDA:
// 1. AÑADIR TAREAS A TRAVES DEL BOTON ADD
// 2. AÑADIR TAREAS PULSANDO ENTER
// 3. DESPUES DE AÑADIR UNA TAREA, LIMPIAR EL INPUT Y HACERLE FOCUS
// 4. AL HACER CLICK EN UNA TAREA, DEBERÍA BORRARSE
// 5. SI SE INTENTA AÑADIR UNA TAREA VACÍA, MOSTRAR MENSAJE DE ERROR
// 6. QUE LAS TAREAS SE GUARDEN EN LOCAL STORAGE