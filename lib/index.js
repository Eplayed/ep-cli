"use strict";
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const commander = require("commander");
const inquirer = require("inquirer");
const { exec } = require("child_process");
const { version } = require("../package.json");
const { promptTypeList } = require("./config");
function resolve(dir) {
    return path.join(__dirname, "..", dir);
}
function handleErr(gitName, projectName, err) {
    if (err) {
        exec(`rm -rf ${gitName}`, function () { });
        console.info(chalk.red(`The ${projectName} project template already exist`));
    }
    else {
        console.info(chalk.green(`The ${projectName} project template successfully create(项目模版创建成功)`));
    }
}
function checkDire(dir, name) {
    const isExists = fs.existsSync(dir);
    if (isExists) {
        console.log(chalk.red(`The ${name} project already exists in  directory. Please try to use another projectName`));
        process.exit(1);
    }
}
function rename(gitName, projectName) {
    fs.rename(gitName, projectName, (err) => {
        if (err) {
            console.info(chalk.red(err));
            exec(`rm -rf ${gitName}`, function () { });
            console.info(chalk.red(`The ${projectName} project template already exist`));
        }
        else {
            console.info(chalk.green(`The ${projectName} project template successfully create(项目模版创建成功)`));
        }
    });
}
commander
    .version(version, "-v, --version")
    .command("init <projectName>")
    .alias("i")
    .description("输入项目名称，初始化项目模版")
    .action((projectName) => {
    checkDire(path.join(process.cwd(), projectName), projectName);
    inquirer.prompt(promptTypeList).then((result) => {
        const { url, gitName, val } = result.type;
        console.info(`您选择的模版类型信息如下：${val}`);
        console.info("项目初始化拷贝获取中...");
        if (!url) {
            console.info(chalk.red(`${val} 该类型暂不支持...`));
            process.exit(1);
        }
        exec(`git clone ${url}`, function (error, stdout, stderr) {
            if (error !== null) {
                console.info(chalk.red(`clone fail,${error}`));
                return;
            }
            rename(gitName, projectName);
        });
    });
});
commander.parse(process.argv);
//# sourceMappingURL=index.js.map