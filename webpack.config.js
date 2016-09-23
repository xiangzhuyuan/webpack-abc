module.exports = {
     entry: './src/index.js',
     output: {
         path: './bundle',
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
         },
        {
             test: /\.json$/,
             loader: 'json-loader',
             include: './src/data/'
         }]
     }
 }
 