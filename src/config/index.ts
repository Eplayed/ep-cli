/*
 * @Author: zyj
 * @Date: 2020-04-26 14:20:19
 * @LastEditors: zyj
 * @LastEditTime: 2020-12-15 15:30:49
 * @Description: file content
 * @FilePath: /ep-cli/src/config/index.ts
 */
module.exports = {
  npmUrl: "https://registry.npmjs.org/ep-cli/latest",
  promptTypeList: [
    {
      type: "list",
      message: "请选择拉取的模版类型:",
      name: "type",
      choices: [
        {
          name: "mobile",
          value: {
            url: "https://gitee.com/Eplayer/mobile-h5-temp.git",
            gitName: "mobile-h5-react-template",
            val: "移动端模版(react)",
          },
        },
        {
          name: "pc-vue",
          value: {
            url: "https://github.com/littleTreeme/vue-web-template.git",
            gitName: "vue-web-template",
            val: "PC端模版(vue)",
          },
        },
        {
          name: "sdk",
          value: {
            url: "https://gitee.com/Eplayer/demo-sdk.git",
            gitName: "demoSdk",
            val: "sdk模版",
          },
        },
        {
          name: "react-admin",
          value: {
            url: "https://gitee.com/Eplayer/admin-pc-temp.git",
            gitName: "admin-pc-temp",
            val: "react运营管理模板",
          },
        },
        {
          name: "mini",
          value: {
            url: "https://gitee.com/Eplayer/miniprogram-temp.git",
            gitName: "miniprogram-temp",
            val: "taro小程序模板",
          },
        },
      ],
    },
  ],
};
