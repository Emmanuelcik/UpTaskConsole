const fs =require('fs');

const archivo = "./db/data.json";

const saveData = (data )=>{
    
    fs.writeFileSync(archivo, JSON.stringify(data) );
}
const readData = () =>{
    if(!fs.existsSync(archivo) ){
        return null;
    }
    const info = fs.readFileSync(archivo, {
        encoding: "utf-8",
    });
    const data = JSON.parse(info);
    return data;
}

module.exports = {
    saveData,
    readData,
}