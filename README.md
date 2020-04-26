<!--
 * @Author: your name
 * @Date: 2020-04-26 10:45:51
 * @LastEditTime: 2020-04-26 16:26:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /quick-cli/README.md
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
eq-cli init <projectName>
或者
eq-cli i <projectName>
```

## 注意事项

**_ 当你完成脚手架开发时，你想本地测试是否成功运作，会出现这种情况 _**

```
command not found: eq-cli
```

因为你本地找不到命令执行的路径，没有映射到 bin 中去

那就是用 npm link eq-cli

或者将文件夹拷贝至全局 node_modules ，配置全局 PATH，指向全局 node_modules/eq-cli/bin
