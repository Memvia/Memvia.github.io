// 全局音乐播放器配置
// 你可以在这里添加你的自定义音乐列表
// 音乐格式：{ name: '歌曲名', artist: '歌手', url: '音乐URL', cover: '封面URL' }

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,           // 固定在页面底部
    autoplay: false,       // 不自动播放
    theme: '#9583DE',      // 主题色（与博客主题一致）
    loop: 'all',           // 循环播放：all-全部循环 / one-单曲循环 / none-不循环
    preload: 'auto',       // 预加载：auto / none
    volume: 0.7,           // 默认音量：0-1
    mutex: true,           // 阻止多个播放器同时播放
    listFolded: false,     // 列表默认折叠
    listMaxHeight: '250px',// 列表最大高度
    lrcType: 0,            // 不显示歌词（如需显示歌词，设为 3）
    audio: [
        // 在这里添加你的音乐
        // 示例格式：
        // {
        //     name: '歌曲名称',
        //     artist: '歌手名称',
        //     url: '音乐文件URL',
        //     cover: '封面图片URL'
        // },
        
        // 示例音乐（你可以删除这些示例，添加自己的音乐）
        {
            name: '锦上',
            artist: '洛天依',
            url: '/music/锦上洛天依.mp3',
            cover: 'https://i.mituw.com/imgs/2026/02/09/561837690095bb1c.png'
        },
        {
            name: '除夜思',
            artist: '洛天依',
            url: '/music/除夜思洛天依.mp3',
            cover: 'https://i.mituw.com/imgs/2026/02/09/29b7565b122bdd1a.png'
        },
    ]
});

// 添加播放器样式
ap.on('play', function () {
    console.log('开始播放');
});

ap.on('pause', function () {
    console.log('暂停播放');
});

ap.on('ended', function () {
    console.log('播放结束');
});