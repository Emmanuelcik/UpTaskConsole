const Tarea = require("./Tarea")
require("colors");
class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    };

    cargarTareas(tareas = []){
        tareas.forEach(  tarea =>{
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea( desc = "") {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(tareas) {
        console.log("\n ****Lista de Tareas****\n".magenta);
        tareas.forEach( (tarea, i) => {
            const {desc, completado} = tarea;
            const idx = `${i + 1}`.green;
            const estado = completado ? "Completado".green : "Pendiente".red;
            console.log(`${idx}.- ${desc} :: ${estado}`);
        })
    }
}

module.exports = Tareas;