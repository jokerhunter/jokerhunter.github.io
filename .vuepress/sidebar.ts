import {SidebarConfig4Multiple} from "vuepress/config";

import programmingNotes from "./sidebars/programmingNotes";
import resume from './sidebars/resume';

// @ts-ignore
export default {
    '/编程笔记/': programmingNotes,
    '/个人介绍/': resume,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
