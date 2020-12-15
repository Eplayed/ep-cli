<!--
 * @Author: Eplayed
 * @Date: 2020-04-26 10:45:51
 * @LastEditTime: 2020-12-15 15:42:14
 * @LastEditors: zyj
 * @Description: In User Settings Edit
 * @FilePath: /ep-cli/README.md
 -->

# ep-cli

## 需求

在日常开发中，项目启动时，大多情况都会从上次成熟的项目中，删减出最小项目架构，新项目框架不同，语言不同，又没有维护标准项目脚手架，会让人很抓狂，每次都要删减出最小项目架构，难以维护

## 解决

通过一次删减出最小架构，作为标准项目脚手架，单独维护，并使用当前工具，配置已提交代码库，通过当前工具直接拉取已维护已提交标准项目脚手架，一劳永逸，下次新项目开启，也不用 git 库中到处找合适的成熟项目中删减库了。任何语言都可配置在 config/index.ts 文件中

## 程序运行

npm install -g typescript

npm run start

npm run build

## 使用方法

```
npm install eq-cli -g

```

### 初始化命令

```
ep-cli init <projectName>
或者
ep-cli i <projectName>
```

### 工具选择

- 可用于控制台选择的工具：inquirer [使用文档](https://github.com/SBoudrias/Inquirer.js)
- 可处理控制台命令的工具：commander [使用文档](https://github.com/tj/commander.js)
- 可改变输出 log 颜色的工具：chalk [使用文档](https://github.com/chalk/chalk)
- 可执行 shell 命令的工具: child_process

## 注意事项

**_ 当你完成脚手架开发时，你想本地测试是否成功运作，会出现这种情况 _**

```
command not found: ep-cli
```

因为你本地找不到命令执行的路径，没有映射到 bin 中去

那就是用 npm link ep-cli

或者将文件夹拷贝至全局 node_modules ，配置全局 PATH，指向全局 node_modules/ep-cli/bin

## 发布

npm run build
更改 package 版本号
npm publish 更新到 npm

## 更新 npm 包

npm update ep-cli -g
或者
npm uninstall ep-cli -g
在 npm install ep-cli -g
