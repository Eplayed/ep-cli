"use strict";
module.exports = {
    npmUrl: "https://registry.npmjs.org/shc-cli/latest",
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
                    name: "pc",
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
                        gitName: "react-ts-template",
                        val: "react模版",
                    },
                },
            ],
        },
    ],
};
//# sourceMappingURL=index.js.map