使用babel将ES6转换为ES5
1、npm install babel-cli -g，不全局安装的话，需要配置环境变量 程序路径,npx可以将下载下来的包临时添加到环境变量
2、npm install --save-dev babel-preset-es2015
3、建立一个.babelrc的文件
{
	'presets':'es2015'
}
4、babel a.js --out-file b.js
	注意可以通过npm init -y 初始化项目，然后更改package.json
	添加命令 配置将src目录中的包含es6的文件转码
		babel src --out-dir dist
	npm run build 即可转换


使用webpack打包
1、下载webpack、webpack-cli
	npm install webpack webpack-cli -D
2、添加一个webpack配置到项目根目录
	webpack.config.js
3、打包 npx webpack,使用npx 不用添加环境变量

// http://xxpromise.gitee.io/webpack5-docs/











































