
const fs = require('fs');
require('colors');

const crearArchivo = async ( base = 5, hasta = 10, listar = false) => {

    try {
        
        let salida = '\n';
        let consola = '\n';
        
        for( let i = 1; i<=hasta; i++ ){
            
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
            
        }

        fs.writeFileSync(`./tablas/tabla del ${base}.txt`, salida );

        if( listar )
        {
            console.log('====================================='.green);
            console.log(`Tabla del ${base} `.underline.bgWhite);
            console.log('====================================='.green);
            console.log( consola );
            console.log('====================================='.green);
        }
            
        return `tabla del ${base}`;
    
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}
