const path = require('path');

const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname,
  entry: './src/app.ts',
  devtool: 'source-map',
  mode: 'production',

  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'commonjs'
  },

  target: 'node',
  externals: [nodeExternals()],

  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [new TsConfigPathsPlugin()]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [
          path.resolve(__dirname, '*bak*'),
          path.resolve(__dirname, '**/*bak*/**'),
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '**/node_module*/**')
        ],
        loader: 'ts-loader'
      }
    ]
  }
};
