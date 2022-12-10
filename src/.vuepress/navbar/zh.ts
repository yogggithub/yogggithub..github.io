import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    { 
    text: "影视评论", 
    icon: "exercise", 
    prefix: "/posts/review/",
    children: [
        {
            text: "电影",
            icon: "write",
            link: "movie/"
        },
        {
            text: "剧集",
            icon: "note",
            link: "tvseries"
        },
        {
            text: "综艺",
            icon: "repo",
            link: "tvshow"
        }
    ]
    },
    {
      text: "我的足迹",
        icon: "activity",
        prefix: "/posts/travel/",
        children: [
            {
                text: "Canada",
                icon: "autumn",
                link: "can",
            },
        
        ]
    },
    {
        text: "杂谈",
        icon: "write",
        children: [
            {
                text: "杂谈",
                icon: "safe",
                link: "/posts/other",
            },
            {
                text: "藏书阁",
                icon: "restrict",
                link: "/novels/"
            },
        ],
    },
]);
