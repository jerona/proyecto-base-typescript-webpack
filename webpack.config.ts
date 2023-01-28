const path = require('path'); // ruta absoluta dependencia nativa de node.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// especificando hash (module export is function with params)
module.exports = (env: any, argv: any) => {
    const {mode} = argv; // webpack-dev-server --mode=production
    const isProduction = mode === 'production';
    
    return {
        // entry value default entry: './src/index.js'
        entry: ['./src/index.ts'],
        output: {
            filename: isProduction 
                ? '[name].[contenthash].js' 
                : 'main.js', // value default file output: main.js
                path: path.resolve(__dirname,'dist'), // value default directory output: dist
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, // ficheros que terminan en .ts o .tsx aplicar loader.
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        devtool: isProduction ? false : 'inline-source-map', // source-map codigo construido mas legible,
        devServer: {
            open: true, // abrimos navegador al lanzar servidor
            port: isProduction ? 3001 : 3000,
            compress: true
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },
        
        // si no se le agrega el plugin la ruta por defecto del webpack será public/index.html 
        // y el renombrado de fichero hash no va a actualizar el import en produccion por lo que
        // no trabajara correctamente en ese entorno si no se ha instalado el plugin en cuestion.
        // y se debera importar el script main.js
        plugins: [
            new HtmlWebpackPlugin({template: './src/index.html'}) // file path to generate script main.js.
        ]
    }
}

// sin especificar hash (module export is object)
/*
module.exports = {
    // entry value default entry: './src/index.js'
    entry: ['./src/index.ts'],
    output: {
        path: path.resolve(__dirname,'dist'), // value default directory output: dist
        filename: 'main.js', // value default file output: main.js
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // ficheros que terminan en .ts o .tsx aplicar loader.
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'inline-source-map', // source-map codigo construido mas legible,
    devServer: {
        open: true, // abrimos navegador al lanzar servidor
        port: 3001,
        compress: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}
*/