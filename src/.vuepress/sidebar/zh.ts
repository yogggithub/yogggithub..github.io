import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        "",
        // {
        //   text: "如何使用",
        //   icon: "creative",
        //   prefix: "guide/",
        //   link: "guide/",
        //   children: "structure",
        // },
        {
            text: "影视评分",
            icon: "exercise",
            link: "posts/review/", 
            prefix: "posts/review/",
            collapsible: true,
            children: [
                "movie/",
                "tvseries",
                "tvshow"
            ],
        },
        {
            text: "旅行散记",
            icon: "activity",
            link: "/posts/travel",
            prefix: "posts/travel/",
            collapsible: true,
            children: [
                "can/",
            ],
        },
        "intro",
    ],

});
