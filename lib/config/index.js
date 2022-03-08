"use strict";
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
                        gitName: "react-admin-pc",
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
//# sourceMappingURL=index.js.map