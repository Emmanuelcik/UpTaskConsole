const { mostrarMenu, pausa } = require("./helpers/mensajes");

require("colors");
console.clear();

const main = async () =>{
    let opc = ""
    do {
        opc = await mostrarMenu();
        await pausa();
    } while (opc !== "0");
}

main();