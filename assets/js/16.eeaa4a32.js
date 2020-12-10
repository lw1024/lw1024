(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"终端打印"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终端打印"}},[s._v("#")]),s._v(" 终端打印")]),s._v(" "),t("h2",{attrs:{id:"echo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#echo"}},[s._v("#")]),s._v(" echo")]),s._v(" "),t("p",[s._v("echo 是用于终端打印的基本命令。")]),s._v(" "),t("p",[s._v("默认情况下，echo 在每次调用后会添加一个换行符。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello world !abc'")]),s._v("\nHello world "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("abc\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world !abc"')]),s._v("\n-bash: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("abc: event not found\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Hello world "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("abc\n-bash: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("abc: event not found\n")])])]),t("p",[s._v("上面三种使用方式只有使用单引号才能正常打印，各种打印方式会存在如下限制：")]),s._v(" "),t("ol",[t("li",[s._v("单引号：不能使用变量替换；")]),s._v(" "),t("li",[s._v("双引号：打印感叹号（"),t("code",[s._v("!")]),s._v("）会有问题；")]),s._v(" "),t("li",[s._v("无引号：不能打印分号（ "),t("strong",[s._v(";")]),s._v(" ），因为分号在 Bash shell 中被用作命令定界符；不能使用转义字符；")])]),s._v(" "),t("h3",{attrs:{id:"命令选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令选项"}},[s._v("#")]),s._v(" 命令选项")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-n")]),s._v(": 用于忽略结尾的换行符；")]),s._v(" "),t("li",[t("code",[s._v("-e")]),s._v(": 用于引号内的字符串中使用转义字符；")])]),s._v(" "),t("h3",{attrs:{id:"打印彩色输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打印彩色输出"}},[s._v("#")]),s._v(" 打印彩色输出")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[1;31m This is red text "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[0m"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# `\\e[1;31m`将颜色设置为红色，`\\e[0m`将颜色重新值回。要设置成别的颜色，只要将 31 替换成想要的颜色码就行了。")]),s._v("\n")])])]),t("p",[s._v("常用颜色码：")]),s._v(" "),t("ul",[t("li",[s._v("重置 0")]),s._v(" "),t("li",[s._v("黑色 30")]),s._v(" "),t("li",[s._v("红色 31")]),s._v(" "),t("li",[s._v("绿色 32")]),s._v(" "),t("li",[s._v("黄色 33")]),s._v(" "),t("li",[s._v("蓝色 34")]),s._v(" "),t("li",[s._v("洋红 35")]),s._v(" "),t("li",[s._v("青色 36")]),s._v(" "),t("li",[s._v("白色 37")])]),s._v(" "),t("h2",{attrs:{id:"printf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#printf"}},[s._v("#")]),s._v(" printf")]),s._v(" "),t("p",[s._v("printf 是另一个终端打印命令。printf 使用的参数和 C 语言中的 printf 函数一样。")]),s._v(" "),t("p",[s._v("默认情况下，printf 并不像 echo 命令一样会自动添加换行符，我们必须在需要的时候手动添加，比如在下面的脚本中：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%-5s %-10s %-4s'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" No Name Mark\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%-5s %-10s %-4.2f'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Sarath "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80.3456")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%-5s %-10s %-4.2f'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" James "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90.9989")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%-5s %-10s %-4.2f'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" Jeff "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77.564")]),s._v("\n")])])]),t("p",[s._v("执行后输出如下：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("No    Name       Mark\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     Sarath     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80.35")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     James      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("91.00")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("     Jeff       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77.56")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"补充内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充内容"}},[s._v("#")]),s._v(" 补充内容")]),s._v(" "),t("p",[s._v("在 echo 和 printf 中使用命令选项时，要确保选项出现在所有字符串之前，否则会被视为字符串。")])])}),[],!1,null,null,null);a.default=n.exports}}]);