const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const commander = require("commander");
const inquirer = require("inquirer");
const { exec } = require("child_process");
const { version } = require("../package.json");
const { promptTypeList } = require("./config");

function resolve(dir: any) {
  return path.join(__dirname, "..", dir);
}

function handleErr(gitName: any, projectName: any, err: any) {
  if (err) {
    exec(`rm -rf ${gitName}`, function () {});
    console.info(
      chalk.red(`The ${projectName} project template already exist`),
    );
  } else {
    console.info(
      chalk.green(
        `The ${projectName} project template successfully create(项目模版创建成功)`,
      ),
    );
  }
}

function checkDire(dir: any, name: any) {
  const isExists = fs.existsSync(dir);
  if (isExists) {
    console.log(
      chalk.red(
        `The ${name} project already exists in  directory. Please try to use another projectName`,
      ),
    );
    process.exit(1);
  }
}
function rename(gitName: any, projectName: any) {
  fs.rename(gitName, projectName, (err: any) => {
    if (err) {
      console.info(chalk.red(err));
      exec(`rm -rf ${gitName}`, function () {});
      console.info(
        chalk.red(`The ${projectName} project template already exist`),
      );
    } else {
      console.info(
        chalk.green(
          `The ${projectName} project template successfully create(项目模版创建成功)`,
        ),
      );
    }
  });
}
//version 版本号
// command – 定义命令行指令，后面可跟上一个name，用空格隔开
// alias – 定义一个更短的命令行指令
// description – 描述，它会在help里面展示
// option – 定义参数
// action – 注册一个callback函数
// parse - 解析命令行

commander
  .version(version, "-v, --version")
  .command("init <projectName>")
  .alias("i")
  .description("输入项目名称，初始化项目模版")
  .action((projectName: any) => {
    checkDire(path.join(process.cwd(), projectName), projectName); // 检测创建项目文件夹是否存在
    inquirer.prompt(promptTypeList).then((result: any) => {
      const { url, gitName, val } = result.type;
      console.info(`您选择的模版类型信息如下：${val}`);
      console.info("项目初始化拷贝获取中...");
      if (!url) {
        console.info(chalk.red(`${val} 该类型暂不支持...`));
        process.exit(1);
      }
      exec(`git clone ${url}`, function (error: any, stdout: any, stderr: any) {
        if (error !== null) {
          console.info(chalk.red(`clone fail,${error}`));
          return;
        }
        try {
          rename(gitName, projectName);
        } catch (error) {
          rename(gitName, projectName);
        }
      });
    });
  });
commander.parse(process.argv);
