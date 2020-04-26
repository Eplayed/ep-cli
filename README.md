<!--
 * @Author: Eplayed
 * @Date: 2020-04-26 10:45:51
 * @LastEditTime: 2020-04-26 16:36:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ep-cli/README.md
 -->

# ep-cli

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

## 注意事项

**_ 当你完成脚手架开发时，你想本地测试是否成功运作，会出现这种情况 _**

```
command not found: ep-cli
```

因为你本地找不到命令执行的路径，没有映射到 bin 中去

那就是用 npm link ep-cli

或者将文件夹拷贝至全局 node_modules ，配置全局 PATH，指向全局 node_modules/ep-cli/bin
