const path = require('path');


module.exports = {
    //cual es el punto de entrada de la aplicacion
    entry:'./src/index.js',
    //a donde enviara webpack lo que saldra
    output:{
        //Nos permite saber la carpeta de nuesto proyecto
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js',
    },
    resolve:{
        extensions:['.js']
    }
}