const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        // ここでvue関連のファイルをexcludeしないとエラーになります。
        // ts-loaderのappendToSuffixオプションとほぼ同じ理由です。
        exclude: /node_modules|\vue\/dist|\vue-loader/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'esnext',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
  },
}
