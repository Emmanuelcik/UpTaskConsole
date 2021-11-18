const fs =require('fs');

const saveData = (data )=>{

    const archivo = "./db/data.json"; 
    fs.writeFileSync(archivo, JSON.stringify(data) );
}

module.exports = {
    saveData,
}