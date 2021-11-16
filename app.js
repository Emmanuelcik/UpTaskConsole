// const { mostrarMenu, pausa } = require("./helpers/mensajes");
require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");



const main = async () =>{
    let opc = ""
    do {
        // opc = await inquirerMenu();
        // const tarea = new Tarea("Es una tarea mas");
        const tareas = new Tareas();

        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);
        await pausa();
    } while (opc !== "0");
}

main();