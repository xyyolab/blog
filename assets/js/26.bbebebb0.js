(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{378:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"import-vue-from-vue-はなぜ使えるか？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-vue-from-vue-はなぜ使えるか？"}},[s._v("#")]),s._v(" import Vue from 'vue'はなぜ使えるか？")]),s._v(" "),e("p",[s._v("Vuejs の開発の際、よく最初に出てくるこれ")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("下のような相対パスなどはまだわかりやすいけど、")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Example "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Example.vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("vue")]),s._v("はなず"),e("code",[s._v("import")]),s._v("できるのか、みんな様こんな疑問はないのか。\nもしかして俺一人の疑問かも 😣")]),s._v(" "),e("p",[s._v("少し研究してきたことをまとめてみた。")]),s._v(" "),e("h2",{attrs:{id:"import-とは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-とは"}},[s._v("#")]),s._v(" import とは")]),s._v(" "),e("p",[s._v("Javascript のモジュールシステムです。他のファイルを使いたい時、"),e("code",[s._v("require")]),s._v(" function で他のファイルの内容を引用する。\n"),e("code",[s._v("es6")]),s._v("を使っている時、"),e("code",[s._v("import")]),s._v("を"),e("code",[s._v("require")]),s._v("にコンパイルする。\nだから、実際に実行するコードは以下。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n⬇️\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Vue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"nodejs-引用ルール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-引用ルール"}},[s._v("#")]),s._v(" nodejs 引用ルール")]),s._v(" "),e("p",[s._v("実は、nodejs の中に、"),e("code",[s._v("require")]),s._v("を使う時に、"),e("code",[s._v("require.reslove")]),s._v(" function を使ってファイルのパスを探している。この function は優先順位は以下になる。\n"),e("code",[s._v("require(X) from module at path Y")]),s._v(" 1.もし"),e("code",[s._v("X")]),s._v("はコアのパッケージかどうか、普段の"),e("code",[s._v("path")]),s._v("などみたいは直接引用される。ではなければ、次へ。 2.もし"),e("code",[s._v("X")]),s._v("は"),e("code",[s._v("/")]),s._v("から始めれば、"),e("code",[s._v("Y")]),s._v("のパスは OS の"),e("code",[s._v("root")]),s._v("と設定。ではなければ、次へ。 3.もし"),e("code",[s._v("X")]),s._v("は"),e("code",[s._v("./")]),s._v(","),e("code",[s._v("/")]),s._v(","),e("code",[s._v("../")]),s._v("から始めれば、"),e("code",[s._v("(Y + X)")]),s._v("ファイルかディレクトリ引用。ではなければ、次へ。 4."),e("code",[s._v("node_modules")]),s._v("フォルダの中に、見つかる！")]),s._v(" "),e("h2",{attrs:{id:"node-modules-にある-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-modules-にある-vue"}},[s._v("#")]),s._v(" node_modules にある vue")]),s._v(" "),e("p",[e("code",[s._v("node_modules")]),s._v("に確かに"),e("code",[s._v("vue")]),s._v("というフォルダは存在しているが、"),e("code",[s._v("new Vue()")]),s._v("などの操作の時は、Js の Object として使っている。では、なぜか！\n真の犯人まではもう少し 🎭❗️\n"),e("code",[s._v("npm")]),s._v("のパッケージとして、内部の出力はまたルールがある！\nまずは、"),e("code",[s._v("node_modules/vue")]),s._v("のディレクトリツリーを見てみる。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("├── LICENSE\n├── README.md\n├── dist\n├── package.json\n├── src\n└── types\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("ルールは以下になる。 1."),e("code",[s._v("package.json")]),s._v("に"),e("code",[s._v("main")]),s._v("が定義されたら、"),e("code",[s._v("main")]),s._v("に入り口を探す。 2."),e("code",[s._v("package.json")]),s._v("がなければ、"),e("code",[s._v("index.js")]),s._v("か"),e("code",[s._v("index.node")]),s._v("を読む。 3.どちらもなければ、"),e("code",[s._v("Error: Cannot find module 'some-library'")]),s._v("を投げる。")]),s._v(" "),e("p",[s._v("では、"),e("code",[s._v("node_modules/vue/packeage.json")]),s._v("こう書いてある ❗️")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/vue.runtime.common.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("ではでは、だんだん明らかになってきた ❗️")]),s._v(" "),e("h2",{attrs:{id:"本当にいつもimportしたものは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本当にいつもimportしたものは"}},[s._v("#")]),s._v(" 本当にいつも"),e("code",[s._v("import")]),s._v("したものは...")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 実は、これに変換する")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./node_modules/vue/dist/vue.runtime.common.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("その内容は")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./vue.runtime.common.prod.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./vue.runtime.common.dev.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("これは普段"),e("code",[s._v("npm")]),s._v("のスクリプトにある"),e("code",[s._v("NODE_ENV=development")]),s._v("を読んで、実行環境に応じて違う"),e("code",[s._v("vue")]),s._v("インスタンスの"),e("code",[s._v("export")]),s._v("ができるようになった 💥")]),s._v(" "),e("p",[s._v("今回の"),e("code",[s._v("import")]),s._v("ルールや他にも今回出てなかったルールの詳細は"),e("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_all_together",target:"_blank",rel:"noopener noreferrer"}},[s._v("nodejs"),e("OutboundLink")],1),s._v("のドキュメントに 🤓")])])}),[],!1,null,null,null);t.default=n.exports}}]);