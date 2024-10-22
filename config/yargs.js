const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    }).option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Hasta donde quiero que llegue la tabla'
    }).option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Mostrar la impresion de la tabla'
    })
    .check( (argv, options ) => {
        if( isNaN( argv.b ) ) {
            throw 'La base debe ser un numero'
        }
        if( isNaN( argv.h ) ) {
            throw 'La hasta debe ser un numero'
        }
        return true;
    })
    .argv;

    module.exports = argv;