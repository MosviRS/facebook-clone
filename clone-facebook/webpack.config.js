const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/app/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
        port:3000
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: {
                    loader:"url-loader",
                    options :{
                        name: '[name].[ext]', // 100KB Al establecer el atributo de publicPath, se recomienda establecerlo en 1--10kb		
                        outputPath: 'img/',
                        publicPath: './src/assets/img/', // Cuando la imagen es grande, el directorio de salida es img
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};