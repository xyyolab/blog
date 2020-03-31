(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{382:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"如何在-github-actions-时使用-secretkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何在-github-actions-时使用-secretkey"}},[t._v("#")]),t._v(" 如何在 GitHub Actions 时使用 secretKey")]),t._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("当我参考"),a("a",{attrs:{href:"https://www.lasy.site/views/%E5%89%8D%E7%AB%AF/%E4%BD%BF%E7%94%A8%20GitHub%20Actions%20%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇"),a("OutboundLink")],1),t._v("，使用 "),a("code",[t._v("Github Action")]),t._v(" 自动部署的时候发现要使用 Secret Key 去使用 "),a("code",[t._v("VSSUE")]),t._v(" 评论功能，我就犯愁了。")]),t._v(" "),a("p",[t._v("直接写在 "),a("code",[t._v("config")]),t._v(" 里虽说并没有谁会盗用（吧 😃），但显然不太安全。这是原 workflow 文件中下面这段启发了我。其他的变量难道也可以这样传到服务器上？")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("p",[t._v("果然 "),a("code",[t._v("Github")]),t._v(" 早就帮我们想好了解决办法。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating and storing encrypted secrets"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("简单说就是在对应 repo 的 "),a("code",[t._v("Secrets")]),t._v(" 区域里输入。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/6d81c510-7f25-a039-5087-f07854d6d75e.png",alt:"Screenshot 2020-03-23 13.08.05.png"}})]),t._v(" "),a("p",[a("strong",[t._v("注意 ⚠️")]),t._v("：上图中画圈的位置的 "),a("code",[t._v("A")]),t._v(", 正确的英语语法是 "),a("code",[t._v("AN")]),t._v(", 不过这篇教程统一用 "),a("code",[t._v("A")]),t._v(", 和下面的")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("${{ secrets.THIS_IS_A_EXAMPLE }}")])]),a("p",[t._v("也得一致!")]),t._v(" "),a("p",[a("s",[t._v("英语好的朋友别嘲讽在下 😵")])]),t._v(" "),a("p",[t._v("再在 "),a("code",[t._v("actions")]),t._v(" 里用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("${{ secrets.YOURKEY }}\n")])])]),a("p",[t._v("去取，通过 "),a("code",[t._v("env")]),t._v(" 存入服务器的环境变量。就可以用啦 👻。")]),t._v(" "),a("p",[t._v("做个实验。"),a("code",[t._v("main.yaml")]),t._v(" 里加上这样一段。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pass Variables\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("EXAMPLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.THIS_IS_A_EXAMPLE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("NOTEXIST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.NOT_EXIST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo 'try to show secret 😉' && echo $EXAMPLE && echo $NOT_EXIST\n")])])]),a("p",[t._v("输出下图这样的结果。github 把结果加密了，不过可以发现，有设置的 "),a("code",[t._v("THIS_IS_A_EXAMPLE")]),t._v(" 和没有设置的 "),a("code",[t._v("NOT_EXIST")]),t._v("，"),a("code",[t._v("echo")]),t._v(" 出来是不一样的。由此可见，已经设置成功了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/e72b8478-89cb-6f45-f406-e6938f81e1c7.png",alt:"Screenshot 2020-03-23 13.11.39.png"}})]),t._v(" "),a("h3",{attrs:{id:"实施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实施"}},[t._v("#")]),t._v(" 实施")]),t._v(" "),a("p",[t._v("直接试试吧。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("VSSUEID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.VSSUEID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("VSSUESECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.VSSUESECRET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install && npm run build\n")])])]),a("p",[t._v("在 "),a("code",[t._v("npm run build")]),t._v(" 之前加上环境参数那一段。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  vssueConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xyyolab'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VSSUEID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    clientSecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VSSUESECRET")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("再在 "),a("code",[t._v("config")]),t._v(" 内用 node 的语法去环境参数取就 OK 啦！")]),t._v(" "),a("p",[t._v("结果是评论功能可以使用了呀 😍。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/0a508150-59e8-948c-4601-b57012db2ed6.png",alt:"Screenshot 2020-03-23 13.36.35.png"}})]),t._v(" "),a("ul",[a("li",[t._v("完整的 "),a("code",[t._v("main.yaml")]),t._v(" 请参考我的 "),a("a",{attrs:{href:"https://github.com/xyyolab/blog/blob/master/.github/workflows/main.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("看起来一个小步骤但解决了大问题呢 💃。")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/xyyolab",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.xyyolab.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog"),a("OutboundLink")],1),t._v("。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);