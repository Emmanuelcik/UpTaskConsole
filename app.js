require("colors");
const { 
    inquirerMenu, 
    pausa,
    leerInput,
    listadoBorrar,
    confirmar,    
} = require("./helpers/inquirer");

const { saveData, readData } = require("./helpers/saveFile");

const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");



const main = async () =>{
    let opc = "";
    const tareas = new Tareas();
    const tasks = readData();
    if(tasks){
        tareas.cargarTareas(tasks);
    }

    do {
        opc = await inquirerMenu();

        switch(opc) {
            case "1":
                const desc = await leerInput("Descripcion:");
                tareas.crearTarea( desc );
                break;
            case "2":
                // console.log(tareas.listadoArr);
                tareas.listadoCompleto(tareas.listadoArr);
                break;

            case "3":
                tareas.listarPendingCompleted();
                break;
            case "4":
                tareas.listarPendingCompleted(false);
                break;
            case "5":
                break;
            case "6":
                const id = await listadoBorrar(tareas.listadoArr);
                if(id !== "0"){
                    const ok = await confirmar("¿Estas seguro?");
                    if( ok ){
                        tareas.borrarTarea(id);
                        console.log("Tarea Borrada Correctamente".green);
                    }
                }

                break;
        }
        saveData( tareas.listadoArr );

        await pausa();
    } while (opc !== "0");
}

main();