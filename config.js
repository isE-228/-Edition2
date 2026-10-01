/*
 * ==================== 可修改内容总表 ====================
 * 不用改 game.js：可以直接改下方文字、主题色、七个角色、音效、动画速度、碰撞特效等。
 * 改完保存并刷新网页。此套七头像素材对应七级合成；扩展级数需同时增加本地头像素材。
 */
window.GAME_CONFIG = {
  // [网页文字] 页面标题、说明、按钮、提示语等都集中在这里。
  text: {
    title: '小猫家园', pageSuffix: '喵喵合成乐', subtitle: '放下小猫，收获一团软萌', eyebrow: '欢迎回到猫咪小窝', welcome: '让小猫咪们团团相遇',
    score: '本局鱼干', best: '最高鱼干', next: '下一只', restart: '重新开局', guideTitle: '猫咪成长手册',
    guide: '让两只相同的小猫咪碰在一起，它们就会合成更大、更萌的猫咪伙伴！',
    recordTitle: '猫窝小记录', current: '本局鱼干', personalBest: '最多鱼干', privacy: '🔒 记录只保存在这台设备，不联网、不上传。',
    tip: '小秘诀：轻轻调整投放位置，让相同花色的小猫靠在一起吧！',
    controls: '点击 / 轻触投放 · A D 或 ← → 移动 · 空格投放 · R 重开',
    hint: '移动鼠标 / 手指选择投放位置', canvasLabel: '游戏区域。点击或轻触投放，合并相同小猫。', footer: '一个安静的离线小游戏 · 没有广告，没有排行榜', offline: '离线也能玩',
    endEyebrow: '喵呜，玩得真棒', endTitle: '再陪小猫玩一局吗？', result: '本局鱼干', again: '🐾 再玩一次', install: '安装小猫家园',
    toastMerge: '喵呜！猫咪合体啦！', toastMax: '😻 猫咪家园大团圆！', toastBest: '喵！鱼干纪录刷新啦！', toastStart: '喵喵！新的一局开始啦！', specialCollision: '💫 开心奶猫与粉粉小猪：喵力共鸣！'
  },

  // [主题] 调整颜色即可更换整页观感；light / dark 会由顶部太阳按钮切换。
  theme: {
    page: '#fff3f3', ink: '#59434b', muted: '#a18a91', accent: '#dc829c', accentDark: '#b95f7a',
    board: '#fffaf7', boardBottom: '#f6e2df', line: '#f0dadd', card: '#fffdfc', highlight: '#f4bdc8',
    darkPage: '#30262d', darkInk: '#fff0f2', darkMuted: '#c9aeb7', darkBoard: '#493943', darkCard: '#3d3039'
  },

  // [游戏物品] 顺序决定七个头像的成长链；相同角色碰撞就会合成。radius 控制碰撞/显示大小，mascot 对应 assets/cat-1.png 至 cat-7.png。
  items: [
    { name: '蓝星小猫', emoji: '🐱', mascot: 0, color: '#9bcafa', points: 1, radius: 20 },
    { name: '蓝泡泡猫', emoji: '🐱', mascot: 1, color: '#92d5e8', points: 3, radius: 23 },
    { name: '暖棕熊猫', emoji: '🐻', mascot: 2, color: '#c57d4a', points: 6, radius: 26 },
    { name: '白云猫猫', emoji: '🐱', mascot: 3, color: '#fff8ed', points: 10, radius: 29 },
    { name: '星星兔兔', emoji: '🐰', mascot: 4, color: '#fff8fb', points: 15, radius: 32 },
    { name: '开心奶猫', emoji: '😺', mascot: 5, color: '#fff0d6', points: 22, radius: 35 },
    { name: '粉粉小猪', emoji: '🐷', mascot: 6, color: '#ffb8cf', points: 32, radius: 38 }
  ],

  // [玩法] 可调场地尺寸、投放速度和危险线高度 (0.1 = 距顶部 10%，可容纳空间更大)。
  play: { width: 420, height: 760, wallPadding: 12, dangerLine: 0.1, dangerSeconds: 3, dropDelay: 240, maxItemIndex: 4 },

  // [动画] 可调重力、碰撞弹性、表面摩擦、黏附、粒子数；specialPair 是相遇触发特效的角色序号 (从 0 开始)。
  animation: { gravity: 1250, bounce: 0.34, floorBounce: 0.3, wallBounce: 0.48, surfaceFriction: 1.15, adhesion: 430, stickyRange: 10, mergeScale: 1.2, mergeDuration: 180, shake: 5, particles: 12, particleLife: 650, stickerOutline: 3.2, specialPair: [5, 6], specialColor: '#8cecf2' },

  // [音效] Web Audio 合成音，无需下载音频文件；enabled 默认开启。
  sound: { enabled: true, volume: 0.12, dropHz: 320, mergeHz: 660, duration: 0.12, meowDuration: 0.34, meowPitch: 620 },
  vocabulary: window.WORD_BANK || []
};
