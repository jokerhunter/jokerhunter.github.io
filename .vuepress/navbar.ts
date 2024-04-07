
import {NavItem} from "vuepress/config";

export default [
    {
        text: '编程笔记',
        link: '/编程笔记/',
        items: [
          {
            text: "开发组件", link: '/编程笔记/开发组件/Nifi.md'
          },
          {
            text: "前端FrontSide", link: '/编程笔记/前端FrontSide/FrontSide.md'
          },
          {
            text: "PythonSeries", link: '/编程笔记/PythonSeries/'
          },
        ]
    },
    {
        text: '个人介绍',
        link: '/个人介绍/',
        items: [
          {
            text: "resume", link: '/个人介绍/#resume'
          },
        ]
    },
] as NavItem[];
