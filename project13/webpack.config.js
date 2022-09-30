const path = require('path');
// https://www.cnblogs.com/mrlin/articles/16448837.html
module.exports = {
  // development, production
  // 注意在开发模式下 不会转换es语法
  mode: 'development',
  entry: {
    demo1: './src/js/public/demo1.js',
    demo2: './src/js/public/demo2.js',
    webpack: './src/js/public/webpack.js'
  },
  output: {
    // libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    environment: {
      // 是否使用箭头函数
      arrowFunction: false,
    },
  },
  module: {
    rules: [ //设置loader
      {
        test: /\.js$/, //已作为js扩展名这样类型的文件
        exclude: /node_modules/, //排除node_modules文件夹
        use: {
          loader: 'babel-loader', //转换成es5
          options: {
            presets: ['@babel/preset-env'], //设置编译的规则
          }
        }
      },
      {
        // 打包css
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              // 注意命名冲突问题
              // modules: true,
              // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // getLocalIdent: (context, localIdentName, localName, options) => {
              //   return localName
              // }
            }
          },
          // { loader: 'sass-loader' }
        ]
      }
    ]
  },
  // webpack 将生成 web 平台的运行时代码，并且只使用 ES5 相关的特性。
  target: ['web', 'es5'],
};