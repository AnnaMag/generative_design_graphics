module.exports = {
  devtool: "eval-source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist/'
  },
  devServer: {
    contentBase: "public/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + "/src/",
        loader: "babel-loader"
      },
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader?this=>window,fix=>module.exports=0'
      }
    ]
  }
}
