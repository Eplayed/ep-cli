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
                        url: "",
                        gitName: "vue-mobile-template",
                        val: "移动端模版",
                    },
                },
                {
                    name: "pc-vue",
                    value: {
                        url: "https://github.com/littleTreeme/vue-web-template.git",
                        gitName: "vue-web-template",
                        val: "PC端模版",
                    },
                },
                {
                    name: "react",
                    value: {
                        url: " https://github.com/Eplayed/public_react_ts.git",
                        gitName: "public_react_ts",
                        val: "react模版",
                    },
                },
                {
                    name: "react-admin",
                    value: {
                        url: "https://github.com/Eplayed/react-admin-ant.git",
                        gitName: "react-admin-ant",
                        val: "react管理模板",
                    },
                },
                {
                    name: "mini",
                    value: {
                        url: "https://github.com/Eplayed/factorynike-mini.git",
                        gitName: "factorynike-mini",
                        val: "小程序工厂",
                    },
                },
            ],
        },
    ],
};
//# sourceMappingURL=index.js.map