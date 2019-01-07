const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'index.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        include: path.resolve(__dirname, 'src/data/')
      }
    ]
  },
  "mode": "development"
}
 