// const { mostrarMenu, pausa } = require("./helpers/mensajes");
require("colors");
const { 
    inquirerMenu, 
    pausa,
    leerInput,    
} = require("./helpers/inquirer");

const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");



const main = async () =>{
    let opc = "";
    const tareas = new Tareas();

    do {
        opc = await inquirerMenu();

        switch(opc) {
            case "1":
                const desc = await leerInput("Descripcion:");
                tareas.crearTarea( desc );
                break;
            case "2":
                console.log( tareas.listadoArr() ); 
                break;

            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
        }

        await pausa();
    } while (opc !== "0");
}

main();