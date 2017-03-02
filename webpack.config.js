const path = require('path')
let webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // target: 'web',
  entry: {
    app: path.join(__dirname, 'src/app.js'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8088
  },
  devtool: 'inline-source-map',
  module: {
    // noParse: [
    //   /[\/\\]node_modules[\/\\]jquery[\/\\]jquery\.js$/
    // ],
    loaders: [
      {
        test: /.js$/,
        loaders: 'buble-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      { test: /\.html$/, use: ['file-loader?name=[name].[ext]'] },
      // { test: /\.html$/, use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader?name=[path][name].[ext]'] },
      // { test: /node_modules[\/\\](.*)jquery\.js$/, use: ['file-loader?name=[name].[ext]']}
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      config: path.join(__dirname, 'src/config')
    })
  ]
}
