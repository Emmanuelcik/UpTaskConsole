require("colors");

const mostrarMenu = () => {
    console.log("=======================".green);
    console.log(" Seleccione una opcion ".green);
    console.log("=======================\n".green);

    console.log(`1.- Crear una tarea`);
    console.log(`2.- Listar tareas`);
    console.log(`3.- Listar tareas completadas`);
    console.log(`4.- Listar tareas pendientes`);
    console.log(`5.- Completar tarea(s)`);
    console.log(`6.- Borrar una tarea`);
    console.log(`0.- Salir \n`);
}

module.exports = {
    mostrarMenu,
}