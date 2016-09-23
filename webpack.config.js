module.exports = {
     entry: './src/index.js',
     output: {
         path: './bin',
         filename: 'index.min.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         },
        {
             test: /\.css$/,
             loader: 'style!css',
         }]
     }
 }
 