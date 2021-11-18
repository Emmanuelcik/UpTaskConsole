require("colors");

const mostrarMenu = () => {
    return new Promise ( resolve => {

        console.log("=======================".green);
        console.log(" Seleccione una opcion ".green);
        console.log("=======================\n".green);

        console.log(`${ "1.-".green } Crear una tarea`);
        console.log(`${ "2.-".green } Listar tareas`);
        console.log(`${ "3.-".green } Listar tareas completadas`);
        console.log(`${ "4.- ".green } Listar tareas pendientes`);
        console.log(`${ "5.-".green } Completar tarea(s)`);
        console.log(`${ "6.-".green } Borrar una tarea`);
        console.log(`${ "0.-".green } Salir \n`);

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question("Seleccione una opcion: ", (opc)=>{
            readline.close();
            resolve(opc);
        });
    });
    
}

const pausa = () =>{
    return new Promise(resolve => {

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readline.question(`\nPresione ${"Enter".green} para continuar: \n`, (opc)=>{
            readline.close();
            resolve();
        });
    })
}

module.exports = {
    mostrarMenu,
    pausa,
}