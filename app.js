// const { mostrarMenu, pausa } = require("./helpers/mensajes");
require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");


console.clear();

const main = async () =>{
    let opc = ""
    do {
        opc = await inquirerMenu();
        
        await pausa();
    } while (opc !== "0");
}

main();