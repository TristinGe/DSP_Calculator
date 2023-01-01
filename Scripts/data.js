//配方 ，如果数据改变时有可能需要重置配方
var data = [
/*
{
    s: [{				s ：产物一(可能多产物)
        name: "重氢",	name ：产物名称
        n: 0.01			n ：数量(如果不提供就是1)
    }, {					产物二(可能多产物)
        name: "氢",		name ：产物名称
        n: 0.99			n ：数量(如果不提供就是1)
    }, ],
    group: "组件",		group ：产物分组
    m: "分馏塔",		m ：生产设备
    q: [{				q ：需求产物
        name: "氢",		name ：需求产物名称
        n: 1			n ：需求产物数量
    }],
    t: 1,				t ：生产时间(秒)
    noExtra: true,		noExtra : 提供true增产剂只允许加速 (如果不提供就是false)
},
*/

{
    s: [{
        name: "宇宙矩阵"
    }],
    q: [{
        name: "蓝矩阵",
        n: 1
    }, {
        name: "红矩阵",
        n: 1
    }, {
        name: "黄矩阵",
        n: 1
    }, {
        name: "紫矩阵",
        n: 1
    }, {
        name: "绿矩阵",
        n: 1
    }, {
        name: "反物质",
        n: 1
    }, ],
    t: 15,
    m: "研究站",
    group: "产品",
}, {
    s: [{
        name: "铁矿"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "铜矿"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "煤矿"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "石矿"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "钛石"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "原油"
    }],
    q: [],
    m: "原油萃取站",
    t: 1,
}, {
    s: [{
        name: "水"
    }],
    q: [],
    m: "抽水机",
    t: 1,
}, {
    s: [{
        name: "硅石"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "蓄电池满"
    }],
    q: [{
        name: "蓄电池"
    }],
    m: "能量枢纽",
    t: 1,
}, {
    s: [{
        name: "蓝矩阵"
    }],
    q: [{
        name: "磁线圈",
        n: 1
    }, {
        name: "电路板",
        n: 1
    }, ],
    t: 3,
    m: "研究站",
    group: "产品",
}, {
    s: [{
        name: "红矩阵"
    }],
    q: [{
        name: "高级石墨",
        n: 2
    }, {
        name: "氢",
        n: 2
    }, ],
    t: 6,
    m: "研究站",
    group: "产品",
}, {
    s: [{
        name: "黄矩阵"
    }],
    q: [{
        name: "金刚石",
        n: 1
    }, {
        name: "钛晶石",
        n: 1
    }, ],
    t: 8,
    m: "研究站",
    group: "产品",
}, {
    s: [{
        name: "紫矩阵"
    }],
    q: [{
        name: "处理器",
        n: 2
    }, {
        name: "粒子带宽",
        n: 1
    }, ],
    t: 10,
    m: "研究站",
    group: "产品",
}, {
    s: [{
        name: "绿矩阵",
        n: 2
    }],
    q: [{
        name: "量子芯片",
        n: 1
    }, {
        name: "引力透镜",
        n: 1
    }, ],
    t: 24,
    m: "研究站",
    group: "产品",
}, {
    s: [{
        name: "空间翘曲器",
        n: 8
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "绿矩阵",
        n: 1
    }],
    t: 10,
}, {
    s: [{
        name: "空间翘曲器",
        n: 1
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "引力透镜",
        n: 1
    }],
    t: 10,
}, {
    s: [{
        name: "氘核燃料棒",
        n: 2
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "钛合金",
        n: 1
    }, {
        name: "重氢",
        n: 20
    }, {
        name: "超级磁场环",
        n: 1
    }, ],
    t: 12,
}, {
    s: [{
        name: "引力透镜",
        n: 1
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "金刚石",
        n: 4
    }, {
        name: "奇异物质",
        n: 1
    }, ],
    t: 6,
}, {
    s: [{
        name: "硅石"
    }],
    q: [{
        name: "石矿",
        n: 10
    }],
    m: "冶炼设备",
    t: 10,
}, {
    s: [{
        name: "铁块"
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "铁矿",
        n: 1
    }],
    t: 1,
}, {
    s: [{
        name: "钢材",
    }, ],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "铁块",
        n: 3
    }],
    t: 3,
}, {
    s: [{
        name: "钛块"
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "钛石",
        n: 2
    }],
    t: 2,
}, {
    s: [{
        name: "铜块",
    }, ],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "铜矿",
        n: 1
    }],
    t: 1,
}, {
    s: [{
        name: "磁铁"
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "铁矿",
        n: 1
    }],
    t: 1.5,
}, {
    s: [{
        name: "磁线圈",
        n: 2
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "磁铁",
        n: 2
    }, {
        name: "铜块",
        n: 1
    }, ],
    t: 1,
}, {
    s: [{
        name: "电路板",
        n: 2
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 2
    }, {
        name: "铜块",
        n: 1
    }, ],
    t: 1,
}, {
    s: [{
        name: "齿轮"
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 1
    }],
    t: 1,
}, {
    s: [{
        name: "高级石墨"
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "煤矿",
        n: 2
    }],
    t: 2,
    noExtra: true,
}, {
    s: [{
        name: "重氢"
    }],
    group: "组件",
    m: "轨道采集器2",
    q: [],
    t: 1,
    noExtra: true,
}, {
    s: [{
        name: "氢"
    }],
    group: "组件",
    m: "轨道采集器",
    q: [],
    t: 1,
    noExtra: true,
}, {
    s: [{
        name: "氢"
    }],
    group: "组件",
    m: "轨道采集器2",
    q: [],
    t: 1,
}, {
    s: [{
        name: "氢"
    }, {
        name: "精炼油",
        n: 2
    }],
    group: "组件",
    m: "原油精炼机",
    q: [{
        name: "原油",
        n: 2
    }],
    t: 4,
}, {
    s: [{
        name: "精炼油",
        n: 3
    }],
    group: "组件",
    m: "原油精炼机",
    q: [{
        name: "精炼油",
        n: 2
    }, {
        name: "氢",
        n: 1
    }, {
        name: "煤矿",
        n: 1
    }, ],
    t: 4,
    noExtra: true,
}, {
    s: [{
        name: "氢",
        n: 1
    }, {
        name: "石墨烯",
        n: 2
    }, ],
    group: "组件",
    m: "化工设备",
    q: [{
        name: "可燃冰",
        n: 2
    }],
    t: 2,
}, {
    s: [{
        name: "可燃冰"
    }],
    group: "组件",
    m: "轨道采集器",
    q: [],
    t: 1,
}, {
    s: [{
        name: "可燃冰"
    }],
    group: "组件",
    m: "采矿机",
    q: [],
    t: 1,
}, {
    s: [{
        name: "刺笋结晶"
    }],
    group: "组件",
    m: "采矿机",
    q: [],
    t: 1,
}, {
    s: [{
        name: "玻璃",
        n: 1
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "石矿",
        n: 2
    }],
    t: 2,
}, {
    s: [{
        name: "棱镜",
        n: 2
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "玻璃",
        n: 3
    }],
    t: 2,
}, {
    s: [{
        name: "高纯硅块",
        n: 1
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "硅石",
        n: 2
    }],
    t: 2,
}, {
    s: [{
        name: "微晶元件",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "高纯硅块",
        n: 2
    }, {
        name: "铜块",
        n: 1
    }, ],
    t: 2,
}, {
    s: [{
        name: "处理器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "电路板",
        n: 2
    }, {
        name: "微晶元件",
        n: 2
    }, ],
    t: 3,
}, {
    s: [{
        name: "金刚石",
        n: 1
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "高级石墨",
        n: 1
    }],
    t: 2,
}, {
    s: [{
        name: "塑料",
        n: 1
    }],
    group: "组件",
    m: "化工设备",
    q: [{
        name: "精炼油",
        n: 2
    }, {
        name: "高级石墨",
        n: 1
    }, ],
    t: 3,
}, {
    s: [{
        name: "有机晶体",
        n: 1
    }],
    group: "组件",
    m: "化工设备",
    q: [{
        name: "塑料",
        n: 2
    }, {
        name: "精炼油",
        n: 1
    }, {
        name: "水",
        n: 1
    }, ],
    t: 6,
}, {
    s: [{
        name: "有机晶体"
    }],
    group: "组件",
    m: "采矿机",
    q: [],
    t: 1,
}, {
    s: [{
        name: "钛晶石",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "有机晶体",
        n: 1
    }, {
        name: "钛块",
        n: 3
    }, ],
    t: 4,
}, {
    s: [{
        name: "晶格硅",
        n: 1
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "高纯硅块",
        n: 1
    }],
    t: 2,
}, {
    s: [{
        name: "石材",
        n: 1
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "石矿",
        n: 1
    }],
    t: 1,
}, {
    s: [{
        name: "电动机",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 2
    }, {
        name: "齿轮",
        n: 1
    }, {
        name: "磁线圈",
        n: 1
    }, ],
    t: 2,
}, {
    s: [{
        name: "电磁涡轮",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "电动机",
        n: 2
    }, {
        name: "磁线圈",
        n: 2
    }, ],
    t: 2,
}, {
    s: [{
        name: "硫酸",
        n: 4
    }],
    group: "组件",
    m: "化工设备",
    q: [{
        name: "精炼油",
        n: 6
    }, {
        name: "石矿",
        n: 8
    }, {
        name: "水",
        n: 4
    }, ],
    t: 6,
}, {
    s: [{
        name: "石墨烯",
        n: 2
    }],
    group: "组件",
    m: "化工设备",
    q: [{
        name: "硫酸",
        n: 1
    }, {
        name: "高级石墨",
        n: 3
    }, ],
    t: 3,
}, {
    s: [{
        name: "碳纳米管",
        n: 2
    }],
    group: "组件",
    m: "化工设备",
    q: [{
        name: "石墨烯",
        n: 3
    }, {
        name: "钛块",
        n: 1
    }, ],
    t: 4,
}, {
    s: [{
        name: "碳纳米管",
        n: 2
    }],
    group: "组件",
    m: "化工设备",
    q: [{
        name: "刺笋结晶",
        n: 6
    }],
    t: 4,
}, {
    s: [{
        name: "粒子带宽",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "碳纳米管",
        n: 2
    }, {
        name: "晶格硅",
        n: 2
    }, {
        name: "塑料",
        n: 1
    }, ],
    t: 8,
}, {
    s: [{
        name: "钛化玻璃",
        n: 2
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "玻璃",
        n: 2
    }, {
        name: "钛块",
        n: 2
    }, {
        name: "水",
        n: 2
    }, ],
    t: 5,
}, {
    s: [{
        name: "卡西米尔晶片",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "钛晶石",
        n: 1
    }, {
        name: "石墨烯",
        n: 2
    }, {
        name: "氢",
        n: 12
    }, ],
    t: 4,
}, {
    s: [{
        name: "位面过滤器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "卡西米尔晶片",
        n: 1
    }, {
        name: "钛化玻璃",
        n: 2
    }, ],
    t: 12,
}, {
    s: [{
        name: "量子芯片",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "处理器",
        n: 2
    }, {
        name: "位面过滤器",
        n: 2
    }, ],
    t: 6,
}, {
    s: [{
        name: "粒子容器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "电磁涡轮",
        n: 2
    }, {
        name: "铜块",
        n: 2
    }, {
        name: "石墨烯",
        n: 2
    }, ],
    t: 4,
}, {
    s: [{
        name: "重氢",
        n: 5
    }],
    group: "组件",
    m: "粒子对撞机",
    q: [{
        name: "氢",
        n: 10
    }],
    t: 2.5,
    noExtra: true,
}, {
    s: [{
        name: "奇异物质",
        n: 1
    }],
    group: "组件",
    m: "粒子对撞机",
    q: [{
        name: "粒子容器",
        n: 2
    }, {
        name: "铁块",
        n: 2
    }, {
        name: "重氢",
        n: 10
    }, ],
    t: 8,
}, {
    s: [{
        name: "临界光子",
        n: 1
    }],
    group: "组件",
    m: "射线接收塔",
    q: [],
    t: 10,
}, {
    s: [{
        name: "反物质",
        n: 2
    }, {
        name: "氢",
        n: 2
    }, ],
    group: "组件",
    m: "粒子对撞机",
    q: [{
        name: "临界光子",
        n: 2
    }],
    t: 2,
    noExtra: true,
}, {
    s: [{
        name: "超级磁场环",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "电磁涡轮",
        n: 2
    }, {
        name: "磁铁",
        n: 3
    }, {
        name: "高级石墨",
        n: 1
    }, ],
    t: 3,
}, {
    s: [{
        name: "钛合金",
        n: 4
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "钛块",
        n: 4
    }, {
        name: "钢材",
        n: 4
    }, {
        name: "硫酸",
        n: 8
    }, ],
    t: 12,
}, {
    s: [{
        name: "电浆激发器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "磁线圈",
        n: 4
    }, {
        name: "棱镜",
        n: 2
    }, ],
    t: 2,
}, {
    s: [{
        name: "框架材料",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "碳纳米管",
        n: 4
    }, {
        name: "钛合金",
        n: 1
    }, {
        name: "高纯硅块",
        n: 1
    }, ],
    t: 6,
}, {
    s: [{
        name: "光子合并器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "棱镜",
        n: 2
    }, {
        name: "电路板",
        n: 1
    }, ],
    t: 3,
}, {
    s: [{
        name: "太阳帆",
        n: 2
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "石墨烯",
        n: 1
    }, {
        name: "光子合并器",
        n: 1
    }, ],
    t: 4,
}, {
    s: [{
        name: "戴森球组件",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "框架材料",
        n: 3
    }, {
        name: "太阳帆",
        n: 3
    }, {
        name: "处理器",
        n: 3
    }, ],
    t: 8,
}, {
    s: [{
        name: "小型运载火箭",
        n: 1
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "戴森球组件",
        n: 2
    }, {
        name: "氘核燃料棒",
        n: 4
    }, {
        name: "量子芯片",
        n: 2
    }, ],
    t: 6,
}, {
    s: [{
        name: "增产剂Mk.Ⅰ",
        n: 1
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "煤矿",
        n: 1
    }],
    t: 0.5,
}, {
    s: [{
        name: "增产剂Mk.Ⅱ",
        n: 1
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "增产剂Mk.Ⅰ",
        n: 2
    }, {
        name: "金刚石",
        n: 1
    }, ],
    t: 1,
}, {
    s: [{
        name: "增产剂Mk.Ⅲ",
        n: 1
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "增产剂Mk.Ⅱ",
        n: 2
    }, {
        name: "碳纳米管",
        n: 1
    }, ],
    t: 2,
}, {
    s: [{
        name: "硫酸",
        n: 1
    }],
    group: "组件",
    m: "抽水机",
    q: [],
    t: 1,
}, {
    s: [{
        name: "光栅石"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "卡西米尔晶片",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "光栅石",
        n: 8
    }, {
        name: "石墨烯",
        n: 2
    }, {
        name: "氢",
        n: 12
    }, ],
    t: 4,
}, {
    s: [{
        name: "单极磁石"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "粒子容器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "单极磁石",
        n: 10
    }, {
        name: "铜块",
        n: 2
    }, ],
    t: 4,
}, {
    s: [{
        name: "金伯利矿石"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "金刚石",
        n: 2
    }],
    group: "组件",
    m: "冶炼设备",
    q: [{
        name: "金伯利矿石",
        n: 1
    }],
    t: 1.5,
}, {
    s: [{
        name: "分形硅石"
    }],
    q: [],
    m: "采矿机",
    t: 1,
}, {
    s: [{
        name: "晶格硅",
        n: 2
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "分形硅石",
        n: 1
    }],
    t: 1.5,
}, {
    s: [{
        name: "地基",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "石材",
        n: 3
    }, {
        name: "钢材",
        n: 1
    }, ],
    t: 1,
}, {
    s: [{
        name: "液氢燃料棒",
        n: 2
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "钛块",
        n: 1
    }, {
        name: "氢",
        n: 10
    }, ],
    t: 6,
}, {
    s: [{
        name: "电力感应塔",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 2
    }, {
        name: "磁线圈",
        n: 1
    }, ],
    t: 1,
}, {
    s: [{
        name: "无线输电塔",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "电力感应塔",
        n: 1
    }, {
        name: "电浆激发器",
        n: 3
    }, ],
    t: 3,
    noExtra: true,
}, {
    s: [{
        name: "卫星配电站",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "无线输电塔",
        n: 1
    }, {
        name: "超级磁场环",
        n: 10
    }, {
        name: "框架材料",
        n: 2
    }, ],
    t: 5,
    noExtra: true,
}, {
    s: [{
        name: "风力涡轮机",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 6
    }, {
        name: "齿轮",
        n: 1
    }, {
        name: "磁线圈",
        n: 3
    }, ],
    t: 4,
}, {
    s: [{
        name: "火力发电机",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 10
    }, {
        name: "石材",
        n: 4
    }, {
        name: "齿轮",
        n: 4
    }, {
        name: "磁线圈",
        n: 4
    }, ],
    t: 5,
}, {
    s: [{
        name: "传送带",
        n: 3
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 2
    }, {
        name: "齿轮",
        n: 1
    }, ],
    t: 1,
}, {
    s: [{
        name: "高速传送带",
        n: 3
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "传送带",
        n: 3
    }, {
        name: "电磁涡轮",
        n: 1
    }, ],
    t: 1,
    noExtra: true,
}, {
    s: [{
        name: "极速传送带",
        n: 3
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "高速传送带",
        n: 3
    }, {
        name: "超级磁场环",
        n: 1
    }, {
        name: "石墨烯",
        n: 1
    }, ],
    t: 1,
    noExtra: true,
}, {
    s: [{
        name: "小型储物仓",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 4
    }, {
        name: "石材",
        n: 4
    }, ],
    t: 2,
}, {
    s: [{
        name: "大型储物仓",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 8
    }, {
        name: "石材",
        n: 8
    }, ],
    t: 4,
}, {
    s: [{
        name: "太阳能板",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "高纯硅块",
        n: 10
    }, {
        name: "铜块",
        n: 10
    }, {
        name: "电路板",
        n: 5
    }, ],
    t: 6,
}, {
    s: [{
        name: "蓄电池",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 6
    }, {
        name: "超级磁场环",
        n: 1
    }, {
        name: "晶格硅",
        n: 6
    }, ],
    t: 5,
}, {
    s: [{
        name: "射线接收站",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 20
    }, {
        name: "高纯硅块",
        n: 20
    }, {
        name: "光子合并器",
        n: 10
    }, {
        name: "处理器",
        n: 5
    }, {
        name: "超级磁场环",
        n: 20
    }, ],
    t: 8,
}, {
    s: [{
        name: "微型聚变发电站",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钛合金",
        n: 12
    }, {
        name: "超级磁场环",
        n: 10
    }, {
        name: "碳纳米管",
        n: 8
    }, {
        name: "处理器",
        n: 4
    }, ],
    t: 10,
}, {
    s: [{
        name: "能量枢纽",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 40
    }, {
        name: "钛合金",
        n: 40
    }, {
        name: "处理器",
        n: 40
    }, {
        name: "粒子容器",
        n: 8
    }, ],
    t: 15,
}, {
    s: [{
        name: "储液灌",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 8
    }, {
        name: "石材",
        n: 4
    }, {
        name: "玻璃",
        n: 4
    }, ],
    t: 2,
}, {
    s: [{
        name: "分拣器"
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 1
    }, {
        name: "电路板",
        n: 1
    }, ],
    t: 1,
}, {
    s: [{
        name: "高速分拣器",
        n: 2
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "分拣器",
        n: 2
    }, {
        name: "电动机",
        n: 1
    }, ],
    t: 1,
    noExtra: true,
}, {
    s: [{
        name: "极速分拣器",
        n: 2
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "高速分拣器",
        n: 2
    }, {
        name: "电磁涡轮",
        n: 1
    }, ],
    t: 1,
    noExtra: true,
}, {
    s: [{
        name: "采矿机",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 4
    }, {
        name: "电路板",
        n: 2
    }, {
        name: "磁线圈",
        n: 2
    }, {
        name: "齿轮",
        n: 2
    }, ],
    t: 3,
}, {
    s: [{
        name: "抽水机",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 8
    }, {
        name: "石材",
        n: 4
    }, {
        name: "电动机",
        n: 4
    }, {
        name: "电路板",
        n: 2
    }, ],
    t: 4,
}, {
    s: [{
        name: "原油萃取站",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 12
    }, {
        name: "石材",
        n: 12
    }, {
        name: "电路板",
        n: 6
    }, {
        name: "电浆激发器",
        n: 4
    }, ],
    t: 8,
}, {
    s: [{
        name: "原油精炼厂",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 10
    }, {
        name: "石材",
        n: 10
    }, {
        name: "电路板",
        n: 6
    }, {
        name: "电浆激发器",
        n: 6
    }, ],
    t: 6,
}, {
    s: [{
        name: "垂直发射井",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钛合金",
        n: 80
    }, {
        name: "框架材料",
        n: 30
    }, {
        name: "引力透镜",
        n: 20
    }, {
        name: "量子芯片",
        n: 10
    }, ],
    t: 30,
}, {
    s: [{
        name: "四向分流器",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 3
    }, {
        name: "齿轮",
        n: 2
    }, {
        name: "电路板",
        n: 1
    }, ],
    t: 2,
}, {
    s: [{
        name: "流速监测器",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 3
    }, {
        name: "齿轮",
        n: 2
    }, {
        name: "玻璃",
        n: 1
    }, {
        name: "电路板",
        n: 2
    }, ],
    t: 2,
}, {
    s: [{
        name: "制作台Mk.Ⅰ",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 4
    }, {
        name: "齿轮",
        n: 8
    }, {
        name: "电路板",
        n: 4
    }, ],
    t: 2,
}, {
    s: [{
        name: "制作台Mk.Ⅱ",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "制作台Mk.Ⅰ",
        n: 1
    }, {
        name: "石墨烯",
        n: 8
    }, {
        name: "处理器",
        n: 4
    }, ],
    t: 3,
    noExtra: true,
}, {
    s: [{
        name: "制作台Mk.Ⅲ",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "制作台Mk.Ⅱ",
        n: 1
    }, {
        name: "粒子带宽",
        n: 8
    }, {
        name: "量子芯片",
        n: 2
    }, ],
    t: 4,
    noExtra: true,
}, {
    s: [{
        name: "电弧熔炉",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 4
    }, {
        name: "石材",
        n: 2
    }, {
        name: "电路板",
        n: 4
    }, {
        name: "磁线圈",
        n: 2
    }, ],
    t: 3,
}, {
    s: [{
        name: "位面熔炉",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "电弧熔炉",
        n: 1
    }, {
        name: "框架材料",
        n: 5
    }, {
        name: "位面过滤器",
        n: 4
    }, {
        name: "单极磁石",
        n: 15
    }, ],
    t: 5,
    noExtra: true,
}, {
    s: [{
        name: "分馏塔",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 8
    }, {
        name: "石材",
        n: 4
    }, {
        name: "玻璃",
        n: 4
    }, {
        name: "处理器",
        n: 1
    }, ],
    t: 3,
}, {
    s: [{
        name: "化工厂",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 8
    }, {
        name: "石材",
        n: 8
    }, {
        name: "玻璃",
        n: 8
    }, {
        name: "电路板",
        n: 2
    }, ],
    t: 5,
}, {
    s: [{
        name: "量子化工厂",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "化工厂",
        n: 1
    }, {
        name: "钛化玻璃",
        n: 10
    }, {
        name: "奇异物质",
        n: 3
    }, {
        name: "量子芯片",
        n: 3
    }, ],
    t: 10,
	noExtra: true,
}, {
    s: [{
        name: "矩阵研究站",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 8
    }, {
        name: "玻璃",
        n: 4
    }, {
        name: "电路板",
        n: 4
    }, {
        name: "磁线圈",
        n: 4
    }, ],
    t: 3,
}, {
    s: [{
        name: "电磁轨道弹射器",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 20
    }, {
        name: "齿轮",
        n: 20
    }, {
        name: "处理器",
        n: 5
    }, {
        name: "超级磁场环",
        n: 10
    }, ],
    t: 6,
}, {
    s: [{
        name: "行星内物流运输站",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 40
    }, {
        name: "钛块",
        n: 40
    }, {
        name: "处理器",
        n: 40
    }, {
        name: "粒子容器",
        n: 20
    }, ],
    t: 20,
}, {
    s: [{
        name: "物流配送器",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 8
    }, {
        name: "电浆激发器",
        n: 4
    }, {
        name: "处理器",
        n: 4
    }, ],
    t: 8,
}, {
    s: [{
        name: "微型粒子对撞机",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钛合金",
        n: 20
    }, {
        name: "框架材料",
        n: 20
    }, {
        name: "超级磁场环",
        n: 25
    }, {
        name: "石墨烯",
        n: 10
    }, {
        name: "处理器",
        n: 8
    }, ],
    t: 15,
}, {
    s: [{
        name: "星际物流运输站",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "行星内物流运输站",
        n: 1
    }, {
        name: "钛合金",
        n: 40
    }, {
        name: "粒子容器",
        n: 20
    }, ],
    t: 30,
    noExtra: true,
}, {
    s: [{
        name: "加力推进器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "钛合金",
        n: 5
    }, {
        name: "电磁涡轮",
        n: 5
    }, ],
    t: 6,
}, {
    s: [{
        name: "轨道采集器",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "星际物流运输站",
        n: 1
    }, {
        name: "超级磁场环",
        n: 50
    }, {
        name: "加力推进器",
        n: 20
    }, {
        name: "蓄电池满",
        n: 20
    }, ],
    t: 30,
    noExtra: true,
}, {
    s: [{
        name: "推进器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 2
    }, {
        name: "铜块",
        n: 3
    }, ],
    t: 4,
}, {
    s: [{
        name: "配送运输机",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 2
    }, {
        name: "电磁涡轮",
        n: 1
    }, {
        name: "处理器",
        n: 1
    }, ],
    t: 2,
}, {
    s: [{
        name: "物流运输机",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "铁块",
        n: 5
    }, {
        name: "处理器",
        n: 2
    }, {
        name: "推进器",
        n: 2
    }, ],
    t: 4,
    noExtra: true,
}, {
    s: [{
        name: "星际物流运输机",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "钛合金",
        n: 10
    }, {
        name: "处理器",
        n: 10
    }, {
        name: "加力推进器",
        n: 2
    }, ],
    t: 6,
    noExtra: true,
}, {
    s: [{
        name: "光子合并器",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "光栅石",
        n: 1
    }, {
        name: "电路板",
        n: 1
    }, ],
    t: 3,
}, {
    s: [{
        name: "湮灭约束球",
        n: 1
    }],
    group: "组件",
    m: "制作台",
    q: [{
        name: "粒子容器",
        n: 1
    }, {
        name: "处理器",
        n: 1
    }, ],
    t: 20,
}, {
    s: [{
        name: "反物质燃烧棒",
        n: 2
    }],
    group: "消耗品",
    m: "制作台",
    q: [{
        name: "反物质",
        n: 12
    }, {
        name: "氢",
        n: 12
    }, {
        name: "湮灭约束球",
        n: 1
    }, {
        name: "钛合金",
        n: 1
    }, ],
    t: 24,
    noExtra: true,
}, {
    s: [{
        name: "人造恒星",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钛合金",
        n: 20
    }, {
        name: "框架材料",
        n: 20
    }, {
        name: "湮灭约束球",
        n: 10
    }, {
        name: "量子芯片",
        n: 10
    }, ],
    t: 30,
}, {
    s: [{
        name: "地热发电站",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 15
    }, {
        name: "铜块",
        n: 20
    }, {
        name: "光子合并器",
        n: 4
    }, {
        name: "超级磁场环",
        n: 1
    }, ],
    t: 6,
}, {
    s: [{
        name: "自动集装机",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 3
    }, {
        name: "齿轮",
        n: 4
    }, {
        name: "超级磁场环",
        n: 1
    }, {
        name: "处理器",
        n: 2
    }, ],
    t: 4,
}, {
    s: [{
        name: "大型采矿机",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钛合金",
        n: 20
    }, {
        name: "框架材料",
        n: 10
    }, {
        name: "超级磁场环",
        n: 10
    }, {
        name: "量子芯片",
        n: 4
    }, {
        name: "光栅石",
        n: 40
    }, ],
    t: 20,
}, {
    s: [{
        name: "喷涂机",
        n: 1
    }],
    group: "建筑",
    m: "制作台",
    q: [{
        name: "钢材",
        n: 4
    }, {
        name: "电浆激发器",
        n: 2
    }, {
        name: "电路板",
        n: 2
    }, {
        name: "微晶元件",
        n: 2
    }, ],
    t: 3,
}, {
    s: [{
        name: "氢",
        n: 3
    }, {
        name: "高级石墨",
        n: 1
    }, ],
    group: "组件",
    m: "原油精炼机",
    q: [{
        name: "氢",
        n: 2
    }, {
        name: "精炼油",
        n: 1
    }, ],
    t: 4,
    noExtra: true,
}, {
    s: [{
        name: "临界光子",
        n: 1
    }],
    group: "组件",
    m: "射线接收塔",
    q: [{
        name: "引力透镜",
        n: 0.008333
    }],
    t: 5,
}, {
    s: [{
        name: "重氢",
        n: 0.01
    }, {
        name: "氢",
        n: 0.99
    }, ],
    group: "组件",
    m: "分馏塔",
    q: [{
        name: "氢",
        n: 1
    }],
    t: 1,
    noExtra: true,
},
{
    s: [{
        name: "物质解压器火箭"
    }],
    q: [{
        name: "谐振盘",
        n: 1
    }, {
        name: "引力钻头",
        n: 2
    }, {
        name: "氘核燃料棒",
        n: 2
    },],
    t: 8,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "谐振盘"
    }],
    q: [{
        name: "隧穿激发器",
        n: 3
    }, {
        name: "晶格硅",
        n: 2
    }, {
        name: "量子芯片",
        n: 1
    },],
    t: 4,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "引力钻头"
    }],
    q: [{
        name: "引力透镜",
        n: 3
    }, {
        name: "引力发生装置",
        n: 2
    }, {
        name: "位面约束环",
        n: 1
    },],
    t: 3,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "位面约束环",
        n: 2
    }],
    q: [{
        name: "超级磁场环",
        n: 2
    }, {
        name: "位面过滤器",
        n: 1
    },],
    t: 3,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "引力发生装置",
        n: 1
    }],
    q: [{
        name: "奇异物质",
        n: 1
    }, {
        name: "钛合金",
        n: 1
    },],
    t: 3,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "隧穿激发器",
        n: 6
    }],
    q: [{
        name: "粒子容器",
        n: 1
    }, {
        name: "光子合并器",
        n: 1
    },],
    t: 6,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "光子探针"
    }],
    q: [{
        name: "光子合并器",
        n: 2
    }, {
        name: "临界光子",
        n: 1
    },],
    t: 4,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "量子计算机"
    }],
    q: [{
        name: "量子芯片",
        n: 3
    }, {
        name: "粒子带宽",
        n: 2
    }, {
        name: "隧穿激发器",
        n: 1
    },],
    t: 12,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "星际组装厂组件"
    }],
    q: [{
        name: "框架材料",
        n: 3
    }, {
        name: "制作台Mk.Ⅲ",
        n: 3
    }, {
        name: "增产剂Mk.Ⅲ",
        n: 1
    },],
    t: 8,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "科学枢纽火箭"
    }],
    q: [{
        name: "位面约束环",
        n: 3
    }, {
        name: "量子计算机",
        n: 1
    }, {
        name: "氘核燃料棒",
        n: 2
    },],
    t: 8,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "谐振发射器火箭"
    }],
    q: [{
        name: "引力发生装置",
        n: 1
    }, {
        name: "谐振环",
        n: 4
    }, {
        name: "氘核燃料棒",
        n: 2
    },],
    t: 8,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "星际组装厂火箭"
    }],
    q: [{
        name: "星际组装厂组件",
        n: 2
    }, {
        name: "氘核燃料棒",
        n: 2
    },],
    t: 8,
    m: "制作台",
    group: "消耗品",
},
{
    s: [{
        name: "晶体重构器火箭"
    }],
    q: [{
        name: "光子探针",
        n: 1
    }, {
        name: "氘核燃料棒",
        n: 2
    }, {
        name: "量子芯片",
        n: 2
    },],
    t: 8,
    m: "制作台",
    group: "消耗品",
},
];

var energyData = {};
energyData["研究站"] = 0.48;
energyData["制作台Mk.Ⅰ"] = 0.27;
energyData["制作台Mk.Ⅱ"] = 0.54;
energyData["制作台Mk.Ⅲ"] = 1.08;
energyData["电弧熔炉"] = 0.36;
energyData["位面熔炉"] = 1.44;
energyData["矿脉"] = 0.42 / 6;
energyData["采矿机"] = 0.42;
energyData["大型采矿机"] = 2.94;
energyData["原油萃取站"] = 0.84;
energyData["抽水机"] = 0.3;
energyData["原油精炼机"] = 0.96;
energyData["化工厂"] = 0.72;
energyData["量子化工厂"] = 2.16;
energyData["粒子对撞机"] = 12;
energyData["轨道采集器"] = 0;
energyData["射线接收塔"] = 0;
energyData["能量枢纽"] = 0;
energyData["分馏塔"] = 0.72;

var spaceData = {}; //占用格子
spaceData["研究站"] = 36 / 15; // 可叠加
spaceData["制作台Mk.Ⅰ"] =
  spaceData["制作台Mk.Ⅱ"] =
  spaceData["制作台Mk.Ⅲ"] =
    16;
spaceData["电弧熔炉"] = spaceData["位面熔炉"] = 16;
spaceData["原油精炼机"] = 28;
spaceData["化工厂"] = 35;
spaceData["量子化工厂"] = 35;
spaceData["射线接收塔"] = 24;
spaceData["能量枢纽"] = 64;
spaceData["分馏塔"] = 16;
spaceData["粒子对撞机"] = 45;

var defaultAccType = "增产剂Mk.Ⅰ";
var defaultAccValue = "无";

var version = "081";

function f_initData() {
  $(data).each(function (i, item) {
    item.id = i; //配方的id，用index设置，data改变时应该重置配方

    var ms = [];
    if (item.m == "研究站") {
      ms = [{ name: "研究站", speed: 1 }];
    }
    if (item.m == "制作台") {
      ms = [
        { name: "制作台Mk.Ⅰ", speed: 0.75 },
        { name: "制作台Mk.Ⅱ", speed: 1 },
        { name: "制作台Mk.Ⅲ", speed: 1.5 },
      ];
    }

    if (item.m == "冶炼设备") {
      ms = [
        { name: "电弧熔炉", speed: 1 },
        { name: "位面熔炉", speed: 2 },
      ];
    }
    if (item.m == "采矿机") {
      ms = [
        { name: "采矿机", speed: 0.5 * 6 },
        { name: "大型采矿机", speed: 1 * 20 },
        { name: "矿脉", speed: 0.5 * 1 },
      ];
    }
    if (item.m == "能量枢纽") {
      ms = [{ name: "能量枢纽", speed: 1 }];
    }

    if (item.m == "原油萃取站") {
      ms = [{ name: "原油萃取站", speed: 4 }];
    }
    if (item.m == "抽水机") {
      ms = [{ name: "抽水机", speed: 50 / 60 }];
    }

    if (item.m == "原油精炼机") {
      ms = [{ name: "原油精炼机", speed: 1 }];
    }
    if (item.m == "化工设备") {
      ms = [
        { name: "化工厂", speed: 1 },
        { name: "量子化工厂", speed: 2 },
      ];
    }
    if (item.m == "粒子对撞机") {
      ms = [{ name: "粒子对撞机", speed: 1 }];
    }
    if (item.m == "轨道采集器") {
      ms = [{ name: "轨道采集器(巨冰)", speed: 1 }];
    }
    if (item.m == "轨道采集器2") {
      ms = [{ name: "轨道采集器(气态)", speed: 1 }];
    }

    if (item.m == "射线接收塔") {
      ms = [{ name: "射线接收塔", speed: 1 }];
    }

    if (item.m == "分馏塔") {
      ms = [{ name: "分馏塔", speed: 30 }];
    }

    item.mName = item.m;
    item.m = ms;
  });
  // console.log(data);
}
var pointLength = 1;
var settingsLocal = {}; //不存储cookie
var settings = {};
function saveData(key, value) {
  if (window.localStorage) {
    localStorage.setItem(key, value);
  } else {
    $.cookie(key, value);
  }
}
function getData(key) {
  if (window.localStorage) {
    return localStorage.getItem(key);
  } else {
    return $.cookie(key);
  }
}
function saveSetting() {
  saveData("machine_settings" + version, JSON.stringify(settings));
}
function loadSetting() {
  var json = getData("machine_settings" + version);
  if (json) {
    eval("settings = " + json);
  }
}
var settings_time = {};
function saveSettingTime() {
  saveData("machine_settings_time" + version, JSON.stringify(settings_time));
}
function loadSettingTime() {
  var json = getData("machine_settings_time" + version);
  if (json) {
    eval("settings_time = " + json);
  }
}
var settings_pf = {};
function saveSettingPf() {
  saveData("machine_settings_pf" + version, JSON.stringify(settings_pf));
}
function loadSettingPf() {
  var json = getData("machine_settings_pf" + version);
  if (json) {
    eval("settings_pf = " + json);
  }
}
var projects = [];
function saveSettingProjects() {
  saveData("settings_projects" + version, JSON.stringify(projects));
}
function loadSettingProjects() {
  var json = getData("settings_projects" + version);
  if (json) {
    eval("projects = " + json);
  }
}
//获取配方默认的机器
function getMachine(arg) {
  var item = typeof arg == "string" ? find(arg) : arg;
  if (!item) return null;
  var machine = (settings[item.id] || {}).m || null;
  if (machine != null) return machine;

  machine = (settingsLocal[item.id] || {}).m || null;
  if (machine != null) return machine;

  return item.m[0].name;
}
// 获取配方默认的增产剂等级
function getAccType(arg) {
  var item = typeof arg == "string" ? find(arg) : arg;
  if (!item) return null;
  var accType = (settings[item.id] || {}).accType || null;
  if (accType != null) return accType;

  accType = (settingsLocal[item.id] || {}).accType || null;
  if (accType != null) return accType;

  return null;
}
// 获取配方默认的增产剂效果
function getAccValue(arg) {
  var item = typeof arg == "string" ? find(arg) : arg;
  if (!item) return null;
  var accValue = (settings[item.id] || {}).accValue || null;
  if (accValue != null) return accValue;

  accValue = (settingsLocal[item.id] || {}).accValue || null;
  if (accValue != null) return accValue;

  return null;
}
//获取时间  参数
function getValue(arg) {
  var item = typeof arg == "string" ? find(arg) : arg;
  if (!item) return null;
  var machine = getMachine(item);
  var accType = getAccType(item),
    accValue = getAccValue(item);
  var speed = settings_time[machine];

  if (speed) {
    return {
      name: machine,
      t: item.t,
      speed: speed,
      time: item.t / speed,
      isChange: true,
      accType: accType,
      accValue: accValue,
    };
  }
  for (var i = 0; i < item.m.length; i++) {
    var m = item.m[i];
    if (m.name == machine) {
      return {
        name: m.name,
        t: item.t,
        speed: m.speed,
        time: item.t / m.speed,
        accType: accType,
        accValue: accValue,
      };
    }
  }
  m = item.m[0];
  return {
    name: m.name,
    t: item.t,
    speed: m.speed,
    time: item.t / m.speed,
    accType: accType,
    accValue: accValue,
  };
}

var currentItem = null;

//要计算的目标
var xqs = [];
//独立生产 [{ id :"配方id",number : 1 }] 配置了这个，将独立生产以后再计算其他
var singleMake = [];

var xqss = [];
var game_data = {};
var isDataLoaded = false;
$(function () {
  $.ajax({
    url: "./Scripts/data.json?v" + version,
    dataType: "json",
    timeout: 1000000,
    success: function (data) {
      game_data = data;
      isDataLoaded = true;
      f_initIcons();
    },
    error: function () {
      alert("游戏资源加载失败，图标将无法显示正常，请刷新再试");
    },
  });

  f_init();
});

function getGroup() {
  var groups = [];
  $(data).each(function (i, item) {
    if (!item.group) return;

    if ($.inArray(item.group, groups) == -1) {
      groups.push(item.group);
    }
  });
  return groups;
}

function f_fillData() {
  var names = [];

  $(getGroup()).each(function (i, group) {
    var jgroup = $("<optgroup label='" + group + "'></optgroup>");
    $(data).each(function (i, item) {
      var name = item.name;
      if (item.group == group) {
        for (var j = 0; j < item.s.length; j++) {
          if ($.inArray(item.s[j].name, names) == -1) {
            names.push(item.s[j].name);
            jgroup.append(
              "<option value='" +
                item.s[j].name +
                "'>" +
                item.s[j].name +
                "</option>"
            );
          }
        }
      }
    });
    $("#seldata").append(jgroup);
  });

  for (var i = 1; i < 200; i = i + 1) {
    $("#selmaince").append(
      "<option value='" + i + "'>需要" + i + "个设备</option>"
    );
  }
  //for (var i = 110; i < 1000; i = i + 10) {
  //    $("#selore").append("<option value='" + i / 100 + "'>" + i + "%</option>");
  //}
}
//找到这个物品的配方
function getPfs(name) {
  var pfs = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    for (var j = 0; j < item.s.length; j++) {
      if (item.s[j].name == name) {
        var pf = $.extend(true, {}, item);
        pfs.push(pf);
      }
    }
  }
  return pfs;
}
function getPfsByQ(name) {
  var pfs = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    for (var j = 0; item.q && j < item.q.length; j++) {
      if (item.q[j].name == name) {
        var pf = $.extend(true, {}, item);
        pfs.push(pf);
      }
    }
  }
  return pfs;
}
function getIconImg(name) {
  var title = [];
  if (name == "研究站") name = "矩阵研究站";
  if (name == "电弧熔炉") name = "电弧熔炉";
  if (name == "位面熔炉") name = "位面熔炉";
  if (name == "原油精炼机") name = "原油精炼厂";
  if (name == "粒子对撞机") name = "微型粒子对撞机";
  if (name == "射线接收塔") name = "射线接收站";
  if (name == "轨道采集器(气态)") name = "轨道采集器";
  if (name == "轨道采集器(巨冰)") name = "轨道采集器";

  if (icons[name]) {
    title.push(
      "<img class='sicon' src='data:image/png;base64," +
        icons[name] +
        "' title='" +
        name +
        "' />"
    );
  } else {
    title.push(name);
  }
  return title.join("");
}
function getIconShow(name, number) {
  var title = [];
  title.push(getIconImg(name));
  title.push("<sub>" + number + "</sub>");

  return title.join("");
}
// 获取加了加速剂后的实际速度
function getAccSpeed(type, value) {
  if (["增产", "加速"].indexOf(value) === -1) {
    return 1;
  }
  // 增产剂每种等级以及工作类型的增产效率，inc: 增产/acc: 加速
  var accSpeed = { inc: [1.125, 1.2, 1.25], acc: [1.25, 1.5, 2] };
  var type_index = ["增产剂Mk.Ⅰ", "增产剂Mk.Ⅱ", "增产剂Mk.Ⅲ"].indexOf(type);
  // 默认是Mk.Ⅰ（也是界面上默认的）
  type_index = type_index >= 0 ? type_index : 0;
  return value == "增产" ? accSpeed.inc[type_index] : accSpeed.acc[type_index];
}
function getPfTitle(item, info) {
  var title = [];
  var speed1_5 = parseFloat($("#speed1_5").val());

  for (var j = 0; j < item.q.length; j++) {
    title.push(getIconShow(item.q[j].name, item.q[j].n || 1));

    if (info && $("#showMaxOneBelt").get(0).checked) {
      var number =
        ((1800 / ((60 / (item.t || 1)) * info.speed * (item.q[j].n || 1))) *
          speed1_5) /
        getAccSpeed(info.accType, info.accValue);
      // console.log(1+' '+speed1_5);
      title.push("<sub class='maxOneBelt'>" + number.toFixed(pointLength));
      title.push("</sub>");
    }
  }

  if (item.q.length) {
    title.push('<img class="to" src="./img/to.png" />');
  }
  for (var j = 0; j < item.s.length; j++) {
    title.push(getIconShow(item.s[j].name, item.s[j].n || 1));

    if (info && $("#showMaxOneBelt").get(0).checked) {
      var number =
        ((1800 / ((60 / (item.t || 1)) * info.speed * (item.s[j].n || 1))) *
          speed1_5) /
        getAccSpeed(info.accType, info.accValue);
      // console.log(2+' '+speed1_5);
      title.push("<sub class='maxOneBelt'>" + number.toFixed(pointLength));
      title.push("</sub>");
    }
  }
  title.push("(" + (item.t || 1).toFixed(1) + "s)");

  return title.join(" ");
}

//找到这个物品的配方(同时赋值s[XX]里的 t 和 n )
function find(name) {
  function get(item) {
    for (var j = 0; j < item.s.length; j++) {
      if (item.s[j].name == name) {
        var o = $.extend(true, {}, item);
        $.extend(o, item.s[j]);
        return o;
      }
    }
  }

  var pf = settings_pf[name];
  if (pf) {
    return get(data[parseInt(pf)]);
  }

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    for (var j = 0; j < item.s.length; j++) {
      if (item.s[j].name == name) {
        return get(item);
      }
    }
  }
}

function f_add3(name) {
  currentItem = find(name);
  var number = parseInt($("#txtnumber").val());
  var v = $("#selmaince").val();
  if (v) {
    // 设备数量支持增产剂计算
    var accType = (settings[currentItem.id] || {}).accType || defaultAccType;
    var accValue = (settings[currentItem.id] || {}).accValue || defaultAccValue;
    if (accValue == "增产" && currentItem.noExtra) accValue = "无";
    if (currentItem.q.length == 0) accValue = "无";

    var info = getValue(currentItem);
    for (var i = 0; i < currentItem.s.length; i++) {
      if (currentItem.s[i].name == name) {
        number =
          ((parseInt(v) * 60) / (currentItem.t || 1)) *
          info.speed *
          (currentItem.s[i].n || 1);
      }
      number *= getAccSpeed(accType, accValue);
    }
  }

  addItem(currentItem, number);
}
function addItem(item, number) {
  xqs.push({
    item: item,
    number: number,
  });

  update_all();
}
// function removeItem(itemId) {
//     xqs = xqs.filter(function (one) { return one.item.id != itemId; });
//     update_all();
// }

var app = null;
function f_init() {
  app = new Vue({
    el: "#result",
    data: {
      totalEnergy: 0,
      totalSpace: 0,
      totalAcc: 0,
      total: [],
      xqs: [],
      icons: icons,
      items: [],
      items2: [],
      items0: [],
      ig_names: [],
      number_editor_index: -1,
      number_editor_number: 0,
    },
    methods: {
      speedChange: function (item) {
        settings_time[item.machineName] = parseFloat(item.speed);
        saveSettingTime();
        update_all();
      },

      onClickNumber: function (index) {
        if (this.xqs && this.xqs[index]) {
          this.number_editor_index = index;
          this.number_editor_number = this.xqs[index].number;
          Vue.nextTick(() => {
            if (this.$refs.input && this.$refs.input[0]) {
              let input = this.$refs.input[0];
              input.focus();
            }
          });
        }
      },

      submitEditorNumber: function () {
        if (this.xqs && this.xqs[this.number_editor_index]) {
          if (
            Number.isInteger(this.number_editor_number) &&
            this.number_editor_number > 0
          ) {
            this.xqs[this.number_editor_index].number =
              this.number_editor_number;
            update_all();
          }
          this.number_editor_index = -1;
        }
      },

      cancelEditorNumber: function () {
        this.number_editor_index = -1;
      },

      removeItem: function (index) {
        if (this.xqs && this.xqs[index]) {
          this.xqs.splice(index, 1);
          update_all();
        }
      },
    },
  });
  f_initData();
  f_fillData();
  doSpeed1();
  update_all();
  loadSetting();
  loadSettingTime();
  loadSettingPf();
  loadSettingProjects();

  projectsUpdate();
  $("#btnAdd3").click(function () {
    f_add3($("#seldata").val());
  });
  $("#btnReset2").click(function () {
    settings = {};
    saveSetting();
    update_all();
  });

  $("#btnReset3").click(function () {
    settings_time = {};
    saveSettingTime();
    update_all();
  });
  $("#speed1_6").change(function () {
    $(data).each(function () {
      if (this.m) {
        for (var i = 0; i < this.m.length; i++) {
          if (this.m[i].name == "大型采矿机") {
            this.m[i].speed =
              1 *
              20 *
              0.01 *
              parseFloat($("#selore").val()) *
              0.01 *
              parseFloat($("#speed1_6").val());
          }
        }
      }
    });
    doSpeed1();
    update_all();
  });
  $("#selore").change(function () {
    $(data).each(function () {
      if (this.m) {
        for (var i = 0; i < this.m.length; i++) {
          if (this.m[i].name == "矿脉") {
            this.m[i].speed = Math.min(
              0.5 * 1 * 0.01 * parseFloat($("#selore").val()),
              30
            );
          }
          if (this.m[i].name == "采矿机") {
            this.m[i].speed = Math.min(
              0.5 * 6 * 0.01 * parseFloat($("#selore").val()),
              30
            );
          }
          if (this.m[i].name == "大型采矿机") {
            this.m[i].speed =
              1 *
              20 *
              0.01 *
              parseFloat($("#selore").val()) *
              0.01 *
              parseFloat($("#speed1_6").val());
          }
          if (this.m[i].name == "抽水机") {
            this.m[i].speed = Math.min(
              (50 * 0.01 * parseFloat($("#selore").val())) / 60,
              30
            );
          }
        }
      }
    });
    doSpeed1();
    update_all();
  });
  $("#btnSetting").click(function () {
    $("#MoreSetting").toggle();
  });
  $("#showMaxOneBelt").change(function () {
    update_all();
  });
  $("#pointLength").change(function () {
    pointLength = parseInt($(this).val());
    update_all();
  });
  $("#fractionatorSpeed").change(function () {
    $(data).each(function () {
      if (this.m) {
        for (var i = 0; i < this.m.length; i++) {
          if (this.m[i].name == "分馏塔") {
            this.m[i].speed =
              parseFloat($("#fractionatorSpeed").val()) / (0.01 * 60);
          }
        }
      }
    });
    update_all();
  });
  $("#oilSpeed").change(function () {
    $(data).each(function () {
      if (this.m) {
        for (var i = 0; i < this.m.length; i++) {
          if (this.m[i].name == "原油萃取站") {
            this.m[i].speed = parseFloat($("#oilSpeed").val());
          }
        }
      }
    });
    update_all();
  });
  $("#gzSpeed").change(function () {
    $(data).each(function () {
      if (this.s && this.s[0].name == "临界光子") {
        if (this.m) {
          for (var i = 0; i < this.m.length; i++) {
            if (this.m[i].name == "射线接收塔") {
              this.t =
                (60 / parseFloat($("#gzSpeed").val())) *
                (this.q && this.q.length ? 0.5 : 1);
            }
          }
        }
      }
    });
    update_all();
  });

  /*产量：可燃冰 0.65/s 氢0.25/s
每分钟采集物=60*产量*采矿作业速度*8（这是大佬量化表的现状）
可燃冰 60*0.65*110%*8=343.2
氢气 60*0.25*110%*8=132
供电消耗是按产出物的总能量占比计算的
供电占比=产量*能量/总能量
可燃冰占比=0.65*4.8/（0.65*4.8+0.25*8）=60.9%
氢气占比=0.25*8/（0.65*4.8+0.25*8）=39.1%
每分钟供电消耗=60*采集器功率*供电占比/采集物能量
可燃冰供电消耗=60*30*60.9%/4.8=228.5
氢气供电消耗=60*30*39.1%/8=87.9
实际产出=每分钟采集-供电消耗
可燃冰=343.2-228.5=114.7
氢气=132-87.9=44.1*/

  function doSpeed1() {
    var speed1_1 = parseFloat($("#speed1_1").val());
    var speed1_2 = parseFloat($("#speed1_2").val());
    var speed1_3 = parseFloat($("#speed1_3").val());
    var speed1_4 = parseFloat($("#speed1_4").val());
    var ore = parseFloat($("#selore").val());

    function getSum(value1, value2, p1, p2) {
      var sum = 0;

      sum = 60 * value1 * 0.01 * ore * 8;
      var per = (value1 * p1) / (value1 * p1 + value2 * p2);
      sum -= (60 * 30 * per) / p1;

      return sum;
    }
    $(data).each(function () {
      if (
        this.s &&
        (this.s[0].name == "氢" ||
          this.s[0].name == "重氢" ||
          this.s[0].name == "可燃冰")
      ) {
        if (this.m) {
          for (var i = 0; i < this.m.length; i++) {
            if (this.m[i].name == "轨道采集器(气态)") {
              if (this.s[0].name == "氢") {
                this.t = 1 / (getSum(speed1_1, speed1_2, 8, 8) / 60);
                // console.log("T1:" + this.t);
              } else if (this.s[0].name == "重氢") {
                this.t = 1 / (getSum(speed1_2, speed1_1, 8, 8) / 60);
                // console.log("T2:" + this.t);
              }
            }
            if (this.m[i].name == "轨道采集器(巨冰)") {
              if (this.s[0].name == "氢") {
                this.t = 1 / (getSum(speed1_4, speed1_3, 8, 4.8) / 60);
                // console.log("T3:" + this.t);
              } else if (this.s[0].name == "可燃冰") {
                this.t = 1 / (getSum(speed1_3, speed1_4, 4.8, 8) / 60);
                // console.log("T4:" + this.t);
              }
            }
          }
        }
      }
    });
  }

  $(".speed1").change(function () {
    doSpeed1();
    update_all();
  });

  $("#btnReset4").click(function () {
    settings_pf = {};
    saveSettingPf();
    update_all();
  });
  $("#btnReset5").click(function () {
    projects = [];
    saveSettingProjects();
    projectsUpdate();
  });
  $("#btnLoadProject").click(function () {
    var value = $("#selprojects").val();
    if (!value) return;
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].name == value) {
        xqs = projects[i].value;
        singleMake = projects[i].singleMake || [];
        ig_names = projects[i].ig_names || [];
        settings = projects[i].settings || {};
        update_all();
        return;
      }
    }
  });
  $("#selmodein").change(function () {
    var value = $("#selmodein").val();
    $(data).each(function () {
      if (this.mName == "制作台") {
        // TODO: 下面的初始化代码还能优化一下
        settingsLocal[this.id] = settingsLocal[this.id] || {};
        settingsLocal[this.id].m = value;
      }
    });

    saveSetting();
    update_all();
  });
  $("#furnace").change(function () {
    var value = $("#furnace").val();
    $(data).each(function () {
      if (this.mName == "冶炼设备") {
        // TODO: 下面的初始化代码还能优化一下
        settingsLocal[this.id] = settingsLocal[this.id] || {};
        settingsLocal[this.id].m = value;
      }
    });

    saveSetting();
    update_all();
  });
  $("#chemical").change(function () {
    var value = $("#chemical").val();
    $(data).each(function () {
      if (this.mName == "化工设备") {
        // TODO: 下面的初始化代码还能优化一下
        settingsLocal[this.id] = settingsLocal[this.id] || {};
        settingsLocal[this.id].m = value;
      }
    });

    saveSetting();
    update_all();
  });
  $("#accType").change(function () {
    defaultAccType = $("#accType").val();
    // 不知道为啥要写这个for
    for (var i in settings) {
      delete settings[i].accType;
    }
    $(data).each(function () {
      // TODO: 下面的初始化代码还能优化一下
      settingsLocal[this.id] = settingsLocal[this.id] || {};
      settingsLocal[this.id].accType = defaultAccType;
    });
    saveSetting();
    update_all();
  });
  $("#accValue").change(function () {
    defaultAccValue = $("#accValue").val();
    for (var i in settings) {
      delete settings[i].accValue;
    }
    $(data).each(function () {
      // TODO: 下面的初始化代码还能优化一下
      settingsLocal[this.id] = settingsLocal[this.id] || {};
      settingsLocal[this.id].accValue = defaultAccValue;
    });
    saveSetting();
    update_all();
  });
  $("#isMerge").change(function () {
    update_all();
  });
  $("#hideSource").change(function () {
    update_all();
  });
  $("#selfAcc").change(update_all);
  $(document).click(function (e) {
    var jname = null;
    if ($(e.target).is(".cell-name")) {
      jname = $(e.target);
    }
    if ($(e.target).parent().is(".cell-name")) {
      jname = $(e.target).parent();
    }
    if ($(e.target).parent().parent().is(".cell-name")) {
      jname = $(e.target).parent().parent();
    }
    if (jname) {
      var msgs = [];
      var name = jname.attr("data-name");
      msgs.push("<p>" + name + "</p>");
      msgs.push("<p>生产于：</p>");
      var pfs = getPfs(name);
      for (var i = 0; i < pfs.length; i++) {
        var title = getPfTitle(pfs[i]);
        msgs.push("<p><a class='pf pf2'>" + title + "</a></p>");
      }
      pfs = getPfsByQ(name);
      if (pfs && pfs.length) {
        msgs.push("<p>作为原料可生产：</p>");

        for (var i = 0; i < pfs.length; i++) {
          var title = getPfTitle(pfs[i]);
          msgs.push("<p><a class='pf pf2'>" + title + "</a></p>");
        }
      }

      jname.tips({
        side: 3, //1,2,3,4 分别代表 上右下左
        msg: msgs.join(""),
        color: "#FFF", //文字颜色，默认为白色
        bg: "#4A5C72", //背景色，默认为红色
        time: 2,
        x: 0,
        y: 0,
      });
    }
  });
}

var single_list = []; //独立生产
var xh_list = [];
var out_list = [];

function addXH(name, value) {
  for (var i = 0; i < xh_list.length; i++) {
    var item = xh_list[i];
    if (item.name == name) {
      item.value += value; //需求
      return;
    }
  }
  xh_list.push({ name: name, value: value });
}
function addAccTotal(name, value) {
  for (var i = 0; i < xh_list.length; i++) {
    var item = xh_list[i];
    if (item.name == name) {
      item.accTotal = (item.accTotal || 0) + value; //需求
      return;
    }
  }
}
function addOut(name, value) {
  for (var i = 0; i < out_list.length; i++) {
    var item = out_list[i];
    if (item.name == name) {
      item.value += value; //需求
      return;
    }
  }
  out_list.push({ name: name, value: value });
}
function findOut(name) {
  for (var i = 0; i < out_list.length; i++) {
    var item = out_list[i];
    if (item.name == name) {
      return item.value;
    }
  }
  return null;
}
//其他产出是否包括在原料里面(如某配方 原料和产物都有氢)
function getSameNameWithSource(item, itemName) {
  for (var i = 0; i < item.s.length; i++) {
    if (item.s[i].name != itemName) {
      for (var j = 0; item.q && j < item.q.length; j++) {
        var q = item.q[j];
        if (q.name == item.s[i].name) {
          return q.name;
        }
      }
    }
  }
  return null;
}
var ig_names = []; //排除的物品
//加载需求
function loadNumber(itemName, n) {
  try {
    if ($.inArray(itemName, ig_names) != -1) {
      return;
    }
    if (
      (itemName == "增产剂Mk.Ⅰ" ||
        itemName == "增产剂Mk.Ⅱ" ||
        itemName == "增产剂Mk.Ⅲ") &&
      n < 0.1
    ) {
      return;
    }
    var item = find(itemName);
    var info = getValue(itemName);
    var sameName = getSameNameWithSource(item, itemName);
    if (sameName) {
      for (var i = 0; i < item.s.length; i++) {
        if (item.s[i].name == sameName) {
          for (var j = 0; item.q && j < item.q.length; j++) {
            var q = item.q[j];
            if (q.name == sameName) {
              var minNumber = Math.min(q.n || 1, item.s[i].n || 1);
              q.n = (q.n || 1) - minNumber;
              item.s[i].n = (item.s[i].n || 1) - minNumber; //抵消
            }
          }
        }
      }
    }

    addXH(itemName, n);
    for (var i = 0; i < item.s.length; i++) {
      if (item.s[i].name != itemName) {
        if (item.s[i].n === 0) continue;
        addOut(item.s[i].name, (-1 * n * (item.s[i].n || 1)) / (item.n || 1));
      }
    }
    var accType = (settings[item.id] || {}).accType || defaultAccType;
    var accValue = (settings[item.id] || {}).accValue || defaultAccValue;
    var accTotal = 0;
    for (var i = 0; item.q && i < item.q.length; i++) {
      var q = item.q[i];
      if ($.inArray(q.name, ig_names) != -1) {
        continue;
      }
      if (q.n === 0) continue;
      //如果配方产物和原料有相同的
      if (q.name == itemName) {
        //addXH(itemName, -1 * n * (q.n || 1) / (item.n || 1));
      } else {
        var r = (n * (q.n || 1)) / (item.n || 1);
        var v = 1,
          tm = 0;
        if (accType == "增产剂Mk.Ⅰ") (v = 1.125), (tm = 12);
        else if (accType == "增产剂Mk.Ⅱ") (v = 1.2), (tm = 24);
        else if (accType == "增产剂Mk.Ⅲ") (v = 1.25), (tm = 60);
        // 自喷涂
        if ($("#selfAcc")[0].checked) tm = tm * v - 1;
        if (accValue == "增产" && item.noExtra) accValue = "无";
        if (item.q.length == 0) accValue = "无";

        if (accValue == "加速") {
          accTotal += r / tm;
          loadNumber(accType, r / tm);
        } else if (accValue == "增产") {
          r /= v;
          accTotal += r / tm;
          loadNumber(accType, r / tm);
        }

        loadNumber(q.name, r);
      }
    }
    addAccTotal(itemName, accTotal);
  } catch (e) {
    // console.log(itemName);
    throw e;
  }
}
//处理多产出
function getXhs(itemId) {
  var xhs = [];
  for (var i = 0; i < xh_list.length; i++) {
    var xh = xh_list[i];
    if (!xh.value) continue;
    var itemName = xh.name;
    var item = find(itemName);
    if (item.id == itemId) xhs.push(xh);
  }
  return xhs;
}
function doMergeMul(xhs) {
  var maxValue2Index = -1;
  var max = 0;
  for (var i = 0; i < xhs.length; i++) {
    if (xhs[i].value2 > max) maxValue2Index = i;
  }

  for (var i = 0; i < xhs.length; i++) {
    if (i != maxValue2Index && xhs[i].value2 > 0) {
      var number = xhs[i].value;
      xhs[i].value2 = 0;
      var item = find(xhs[i].name);
      for (var j = 0; j < item.s.length; j++) {
        addOut(item.s[j].name, (number * (item.s[j].n || 1)) / (item.n || 1));
      }
    }
  }
}
function mergeMul() {
  var gs = [];
  var ids = [];
  for (var i = 0; i < xh_list.length; i++) {
    var xh = xh_list[i];
    if (!xh.value) continue;
    var itemName = xh.name;
    var item = find(itemName);
    if ($.inArray(item.id, ids) != -1) continue;
    var xhs = getXhs(item.id);

    if (xhs.length > 1) {
      gs.push(xhs);
      ids.push(item.id);
    }
  }
  // console.log(gs); //gs:分组
  for (var i = 0; i < gs.length; i++) {
    doMergeMul(gs[i]);
  }
}

function checkResult() {
  //当前设备数量是否会 出现几个产出都多余，比如氢-120 精炼油-120，那么应该把设备调整到合适数量
  function isOverflow(item, info, nn) {
    for (var j = 0; j < item.s.length; j++) {
      var x = findOut(item.s[j].name);
      if (x == null) return false;
      var mn = ((nn * 60) / item.t) * info.speed * (item.s[j].n || 1); //1分钟1个设备产量
      if (x > -1 * mn) return false;
    }
    return true;
  }

  for (var i = 0; i < xh_list.length; i++) {
    var number = xh_list[i].value;
    var item = find(xh_list[i].name);
    var info = getValue(item);
    var nn = 1;
    if (xh_list[i].value2 < 1) {
      nn = xh_list[i].value2;
    }

    while (isOverflow(item, info, nn) && xh_list[i].value2 > 0) {
      //直到满足条件

      if (xh_list[i].value2 < 1) {
        nn = xh_list[i].value2;
      }
      xh_list[i].value2 = xh_list[i].value2 - nn; //调整数量
      for (var j = 0; j < item.s.length; j++) {
        var mn = ((nn * 60) / item.t) * info.speed * (item.s[j].n || 1); //1分钟1个设备产量
        addOut(item.s[j].name, mn);
      }
      if (xh_list[i].value2 < 1) {
        nn = xh_list[i].value2;
      }
      //console.log(JSON.stringify(out_list));
    }
  }
}
function update_all() {
  var outResult = [];
  xh_list = [];
  out_list = [];
  single_list = [];

  for (var m = 0; m < singleMake.length; m++) {
    var item = data[singleMake[m].id]; //配方
    var info = getValue(item);
    var times =
      (60 * parseInt(singleMake[m].number) * info.speed) / (item.t || 1);

    for (var i = 0; i < item.s.length; i++) {
      single_list.push({
        id: singleMake[m].id,
        number: singleMake[m].number,
        name: item.s[i].name,
        mName: info.name,
        value: times * (item.s[i].n || 1),
      });
      loadNumber(item.s[i].name, -1 * times * (item.s[i].n || 1));
    }
    for (var j = 0; item.q && j < item.q.length; j++) {
      loadNumber(item.q[j].name, times * (item.q[j].n || 1));
    }
  }
  for (var m = 0; m < xqs.length; m++) {
    var currentItem = xqs[m].item;
    loadNumber(currentItem.name, xqs[m].number);
  }

  function isXqs(name) {
    for (var m = 0; m < xqs.length; m++) {
      if (xqs[m].item.name == name) return true;
    }
    return false;
  }
  var items0 = [];
  var items = [];
  var items2 = [];

  for (var i = 0; i < xh_list.length; i++) {
    var xh = xh_list[i];
    if (!xh.value) continue;
    var itemName = xh.name;
    var item = find(itemName);
    var info = getValue(itemName);
    if (xh.value > 0) {
      xh.value2 = xh.value / (1 / info.time) / 60 / (item.n || 1);
      var accType = (settings[item.id] || {}).accType || defaultAccType;
      var accValue = (settings[item.id] || {}).accValue || defaultAccValue;
      if (accValue == "增产" && item.noExtra) accValue = "无";
      if (item.q.length == 0) accValue = "无";

      xh.value2 /= getAccSpeed(accType, accValue);
    }
  }
  //mergeMul();//处理合并 多个产出使用了同一个配方 ,暂时弃用，checkResult会处理这种情况
  checkResult(); //优化当前结果，遍历配方，如果 出现几个产出都多余，比如氢-120 精炼油-120，那么应该把设备调整到合适数量

  for (var i = 0; i < single_list.length; i++) {
    if (!single_list[i].value) continue;
    var item = data[single_list[i].id];
    var info = getValue(single_list[i].name);
    var outitem = {
      name: single_list[i].name,
      number1: single_list[i].value,
      number2: single_list[i].number,
      time: info.time.toFixed(pointLength),
      t: info.t.toFixed(pointLength),
      speed: info.speed.toFixed(pointLength),
      pfTitle: getPfTitle(item, info),
      mName: single_list[i].mName,
    };
    items0.push(outitem);
  }

  //for (var i = 0; i < out_list.length; i++) {
  //    addXH(out_list[i].name, out_list[i].value);
  //    out_list[i].value = 0;
  //}
  for (var i = 0; i < xh_list.length; i++) {
    var xh = xh_list[i];
    if (!xh.value) continue;
    var itemName = xh.name;
    var item = find(itemName);
    var info = getValue(itemName);
    if (xh.value < 0) {
      xh.value2 = 0;
    }
  }
  var total = [];
  var totalAcc = 0;
  function addTotal(name, value, s) {
    var energy = energyData[name] || 0;
    var space = spaceData[name] || 0;

    var accType = (s || {}).accType || defaultAccType;
    var accValue = (s || {}).accValue || defaultAccValue;
    if (accValue != "无") {
      if (accType == "增产剂Mk.Ⅰ") energy *= 1.3;
      else if (accType == "增产剂Mk.Ⅱ") energy *= 1.7;
      else if (accType == "增产剂Mk.Ⅲ") energy *= 2.5;
    }

    for (var i = 0; i < total.length; i++) {
      var item = total[i];

      if (!item.energy) item.energy = 0;
      if (!item.space) item.space = 0;
      if (item.name == name) {
        item.value += value;
        item.energy += energy * (value || 0);
        item.space += space * (value || 0);
        return;
      }
    }

    total.push({
      name: name,
      value: value,
      energy: energy * (value || 0),
      space: space * (value || 0),
    });
  }

  for (var i = 0; i < xh_list.length; i++) {
    if (!xh_list[i].value) continue;

    var item = find(xh_list[i].name);
    var info = getValue(xh_list[i].name);
    if ($("#hideSource").get(0).checked) {
      if (!item.q || !item.q.length) {
        continue;
      }
    }
    var img = getIconImg(info.name);
    if (img.indexOf("<img") == -1) {
      img = "X" + img;
    }
    var outitem = {
      name: xh_list[i].name,
      number1: xh_list[i].value.toFixed(0),
      number2: xh_list[i].value2 ? xh_list[i].value2.toFixed(pointLength) : "",
      number2full:
        img + (xh_list[i].value2 ? xh_list[i].value2.toFixed(pointLength) : ""),
      time: info.time.toFixed(pointLength),
      t: info.t.toFixed(pointLength),
      speed: info.speed.toFixed(pointLength),
      speedClass: info.isChange ? "time time2" : "time",
      rowClass: isXqs(xh_list[i].name) ? "xqsrow" : "",
      machineName: info.name,
      m: [],
      pf: [],
      accType: [],
      accValue: [],
      accTotal: (xh_list[i].accTotal || 0).toFixed(2),
    };
    if (!outitem.number2) outitem.number2full = "";
    if (xh_list[i].name == "太阳帆") {
      outitem.numberOther =
        "(可供" + getIconShow("电磁轨道弹射器", outitem.number1 / 20) + ")";
    }
    if (xh_list[i].name == "小型运载火箭") {
      outitem.numberOther =
        "(可供" + getIconShow("垂直发射井", outitem.number1 / 5) + ")";
    }
    addTotal(info.name, Math.ceil(outitem.number2), settings[item.id]);
    // 增产剂总和
    if (info.accValue != "无") {
      // TODO: 这里调用Math.ceil未必合理，增产剂一般放在总线起始处，所以应该在最终算出的总和处调用Math.ceil
      totalAcc += xh_list[i].accTotal || 0;
    }
    var pfds = getPfs(xh_list[i].name);

    for (var j = 0; j < pfds.length; j++) {
      var pf = {
        class: item.id == pfds[j].id ? "pf selected" : "pf",
        href:
          item.id == pfds[j].id
            ? "javascript:void(0)"
            : 'javascript: selectPf("' + item.name + '","' + pfds[j].id + '")',
        title: getPfTitle(pfds[j], item.id == pfds[j].id ? info : null),
      };
      outitem.pf.push(pf);
    }
    for (var j = 0; j < item.m.length; j++) {
      var m = {
        class: info.name == item.m[j].name ? "m selected" : "m",
        itemName: item.name,
        href:
          info.name == item.m[j].name
            ? "javascript:void(0)"
            : 'javascript: selectM("' + item.id + '","' + item.m[j].name + '")',
        name: item.m[j].name,
        title: "设备速度:" + item.m[j].speed.toFixed(pointLength),
        showName: item.m[j].name.replace("制作台", ""),
      };
      if (m.showName == "采矿机") {
        m.title += " 采矿机按6个矿脉计算(因所限传送带速度最高30)";
      }
      if (m.showName == "大型采矿机") {
        m.title += " 大型采矿机按20个矿脉计算";
      }
      if (m.showName == "矿脉") {
        m.title += " (速度最高30)";
      }
      outitem.m.push(m);
    }
    var accType = (settings[item.id] || {}).accType || defaultAccType;
    var accValue = (settings[item.id] || {}).accValue || defaultAccValue;
    if (accValue == "增产" && item.noExtra) accValue = "无";
    if (item.q.length == 0) accValue = "无";

    ["增产剂Mk.Ⅰ", "增产剂Mk.Ⅱ", "增产剂Mk.Ⅲ"].forEach(function (one) {
      outitem.accType.push({
        class: one == accType ? "m selected" : "m",
        itemName: item.name,
        href:
          one == accType
            ? "javascript:void(0)"
            : 'javascript: selectAccType("' + item.id + '","' + one + '")',
        name: one,
        title: one,
        showName: one.replace("增产剂", ""),
      });
    });

    ["无", "加速", "增产"].forEach(function (one) {
      if (one != "无" && item.q.length == 0) return;
      if (one == "增产" && item.noExtra) return;
      outitem.accValue.push({
        class: one == accValue ? "m selected" : "m",
        itemName: item.name,
        href:
          one == accValue
            ? "javascript:void(0)"
            : 'javascript: selectAccValue("' + item.id + '","' + one + '")',
        name: one,
        title: one,
        showName: one,
      });
    });

    items.push(outitem);
  }

  for (var i = 0; i < out_list.length; i++) {
    if (!out_list[i].value) continue;
    var item = find(out_list[i].name);
    var info = getValue(out_list[i].name);
    var outitem = {
      name: out_list[i].name,
      number1: out_list[i].value.toFixed(pointLength),
      number2: out_list[i].value2
        ? out_list[i].value2.toFixed(pointLength)
        : "",
      time: info.time.toFixed(pointLength),
      t: info.t.toFixed(pointLength),
      speed: info.speed.toFixed(pointLength),
      speedClass: info.isChange ? "time time2" : "time",
      rowClass: "outrow",
      m: [],
      pf: [],
    };
    items2.push(outitem);
  }
  app.items0 = items0;
  app.xqs = xqs;
  app.items = items;
  app.items2 = items2;
  app.total = total;
  app.ig_names = ig_names;
  var energy = 0;
  for (var i = 0; i < total.length; i++) {
    energy += total[i].energy || 0;
  }
  app.totalEnergy = energy.toFixed(pointLength);
  var space = 0;
  for (var i = 0; i < total.length; ++i) {
    space += total[i].space || 0;
  }
  app.totalSpace = space;
  app.totalAcc = totalAcc.toFixed(2);
}
function selectM(id, m) {
  settings[id] = settings[id] || {};
  settings[id].m = m;
  saveSetting();
  update_all();
}
function selectAccType(id, accType) {
  settings[id] = settings[id] || {};
  settings[id].accType = accType;
  saveSetting();
  update_all();
}
function selectAccValue(id, accValue) {
  settings[id] = settings[id] || {};
  settings[id].accValue = accValue;
  saveSetting();
  update_all();
}
function selectPf(name, value) {
  settings_pf[name] = parseInt(value);
  saveSettingPf();
  update_all();
}
function f_tag(obj) {
  var jrow = $(obj).parents("tr:first");
  if (jrow.hasClass("row-tag")) {
    jrow.removeClass("row-tag");
  } else {
    jrow.addClass("row-tag");
  }
}
function f_ig(obj) {
  var name = $(obj).attr("data-name");
  ig_names.push(name);

  update_all();
}
function f_ig_acc() {
  ["增产剂Mk.Ⅰ", "增产剂Mk.Ⅱ", "增产剂Mk.Ⅲ"].forEach(function (one) {
    if (ig_names.indexOf(one) < 0) ig_names.push(one);
  });
  update_all();
}
function f_reset() {
  xqs = [];
  singleMake = [];
  app.number_editor_index = -1;
  update_all();
}
function f_reset_ig() {
  ig_names = [];

  update_all();
}
function f_remove_ig(name) {
  ig_names = ig_names.filter(function (one) {
    return one != name;
  });
  update_all();
}
function projectsUpdate() {
  $("#selprojects").html("");
  $(projects).each(function () {
    $("#selprojects").append(
      "<option value='" + this.name + "'>" + this.name + "</option>"
    );
  });
  if (projects.length) {
    $("#projectdiv").show();
  } else {
    $("#projectdiv").hide();
  }
}
function f_save() {
  let index = 0;
  let product_settings = {};
  var name = prompt("输入方案名");
  if (!name) return;
  for (index = 0; index < projects.length; index++) {
    // 存在相同名称的方案
    if (projects[index].name == name) {
      // 用户取消保存
      if (!confirm(`已存在名为${name}的方案，继续保存将覆盖原方案`)) {
        return;
      }
      break;
    }
  }
  // TODO: 优化处理方案
  for (let item of app.items) {
    let product_setting = {};
    for (let accType of item.accType) {
      if (accType.class === "m selected") {
        product_setting.accType = accType.name;
      }
    }
    for (let accValue of item.accValue) {
      if (accValue.class === "m selected") {
        product_setting.accValue = accValue.name;
      }
    }
    for (let m of item.m) {
      if (m.class === "m selected") {
        product_setting.m = m.name;
      }
    }
    product_settings[find(item.name).id] = product_setting;
  }
  projects[index] = {
    name: name,
    singleMake: singleMake,
    ig_names: ig_names || [],
    value: xqs,
    // 增产剂和工厂类型设置
    settings: product_settings,
  };
  saveSettingProjects();
  projectsUpdate();
}
function f_add() {
  if (!isDataLoaded) {
    alert("游戏资源尚未加载完毕");
  }
  $("#UIselector").show();
}
function actions(that) {
  // console.log(that.value)
  if (!that.value) {
    return false;
  } else {
    window.open(that.value);
  }
}
function f_split(obj) {
  var name = $(obj).attr("data-name");

  $("#Split").html("<p>选择配方：</p>");
  var pfs = getPfs(name);
  if (pfs.length == 1) {
    alert("不存在多配方");
    return;
  }
  var selected = null;
  for (var i = 0; i < pfs.length; i++) {
    (function (i) {
      var jlink = $("<div class='split-pf'></div>");
      jlink.html(getPfTitle(pfs[i]));
      jlink.appendTo($("#Split")).click(function () {
        selected = pfs[i];
        $("#Split .split-pf").removeClass("split-pf-selected");
        jlink.addClass("split-pf-selected");
      });
    })(i);
  }
  $("#Split").append("<p>设备数量：</p>");
  $("#Split").append(
    "<div><input type='text' value='1' class='split-number' /></div>"
  );
  $("#Split").append("<div><button>确定</button> </div>");
  $("#Split")
    .find("button")
    .click(function () {
      if (!selected) {
        alert("未选择配方");
        return;
      }
      singleMake.push({
        id: selected.id,
        number: parseFloat($("#Split").find(":text").val()),
      });
      update_all();
      $("#Split").hide();
    });

  setTimeout(function () {
    $("#Split").show();
  }, 50);
}
var icons_define = {
  氢: [-1, 3, 7, "氢"],
  可燃冰: [-1, 2, 7, "可燃冰"],
};
var icons = {};
function f_initIcons() {
  var reg = /^(\d)-(\d{1,2})-(.*)+/;
  for (var i = 0; i < game_data.icons1.length; i++) {
    var icon = game_data.icons1[i];
    if (reg.test(icon.name)) {
      var x = icon.name.match(reg);
      icons[x[3]] = icon.value;
    } else {
      icons[icon.name] = icon.value;
    }
  }
  for (var i = 0; i < game_data.icons2.length; i++) {
    var icon = game_data.icons2[i];
    if (reg.test(icon.name)) {
      var x = icon.name.match(reg);
      icons[x[3]] = icon.value;
    } else {
      icons[icon.name] = icon.value;
    }
  }
  app.icons = icons;
  $(document).click(function (e) {
    if (!$(e.target).closest("#UIselector").length) {
      $("#UIselector").hide();
    }
    if (!$(e.target).closest("#Split").length) {
      $("#Split").hide();
    }
  });
  $("#UIselector")
    .html(
      '<div id="selector" class="selector" style="width: ' +
        w +
        "px; height: " +
        h +
        'px"><div id="tabs"></div></div>'
    )
    .hide();
  var w = 900;
  var h = 700;

  var jimg1 = $(
    "<div class='tab selected'><img src='./img/component-icon.png'/></div>"
  ).appendTo("#tabs");
  var jimg2 = $(
    "<div class='tab'><img src='./img/factory-icon.png'/></div>"
  ).appendTo("#tabs");
  var jimg3 = $(
    "<div class='tab'><img src='./img/magestructure-icon.png'/></div>"
  ).appendTo("#tabs");

  jimg1.click(function () {
    jicons2.removeClass("icons-selected");
    jicons.addClass("icons-selected");
    jimg2.removeClass("selected");
    jimg1.addClass("selected");
  });
  jimg2.click(function () {
    jicons.removeClass("icons-selected");
    jicons2.addClass("icons-selected");
    jimg1.removeClass("selected");
    jimg2.addClass("selected");
  });

  var jicons = $('<div class="icons icons-selected"></div>').appendTo(
    "#selector"
  );
  addIcons(jicons, game_data.icons1);
  var jicons2 = $('<div class="icons"></div>').appendTo("#selector");
  addIcons(jicons2, game_data.icons2);

  function addIcons(jicons, icons) {
    jicons.width(w - 80).height(h - 220);

    for (var i = 0; i < 8; i++) {
      var jrow = $("<div class='iconrow'></div>").appendTo(jicons);
      for (var j = 0; j < 12; j++) {
        var jicon = $("<div class='icon'><div class='s'></div></div>").appendTo(
          jrow
        );
        jicon.click(function () {
          var name = $(this).attr("data-name");
          if (!name) return;
          f_add3(name);
          $("#UIselector").hide();
        });
      }
    }

    for (var i = 0; i < icons.length; i++) {
      var icon = icons[i];
      var reg = /^(\d)-(\d{1,2})-(.*)+/;
      var x = null;
      if (reg.test(icon.name)) {
        x = icon.name.match(reg);
      } else if (icons_define[icon.name]) {
        x = icons_define[icon.name];
      }
      if (x) {
        jicons
          .find(">.iconrow:eq(" + (parseInt(x[1]) - 1) + ")")
          .find(">.icon:eq(" + (parseInt(x[2]) - 1) + ")")
          .html("")
          .append("<img src='data:image/png;base64," + icon.value + "' />")
          .attr("data-name", x[3])
          .attr("title", x[3]);
      }
    }
  }
}

function getRecipe() {
  let recipeList = [];
  const itemNameList = [
    ["矩阵研究站", "lab"],
    ["配送运输机", "logisticsBot"],
    ["水", "water"],
    ["铁矿", "ironOre"],
    ["铜矿", "copperOre"],
    ["硅石", "siliconOre"],
    ["钛石", "titaniumOre"],
    ["煤矿", "coal"],
    ["铁块", "ironIngot"],
    ["钛块", "titaniumIngot"],
    ["高级石墨", "energeticGraphite"],
    ["金刚石", "diamond"],
    ["增产剂Mk.Ⅰ", "proliferatorMk1"],
    ["增产剂Mk.Ⅱ", "proliferatorMk2"],
    ["增产剂Mk.Ⅲ", "proliferatorMk3"],
    ["齿轮", "gear"],
    ["石矿", "stone"],
    ["原油", "oil"],
    ["精炼油", "refinedOil"],
    ["硫酸", "sulfuricAcid"],
    ["氢", "hydrogen"],
    ["可燃冰", "fireIce"],
    ["木材", "wood"],
    ["植物燃料", "plant_fuel"],
    ["金伯利矿石", "kimberliteOre"],
    ["分形硅石", "fractalSilicon"],
    ["光栅石", "opticalGratingCrystal"],
    ["刺笋结晶", "spiniformStalagmiteCrystal"],
    ["单极磁石", "unipolarMagnet"],
    ["铜块", "copperIngot"],
    ["高纯硅块", "highPuritySilicon"],
    ["石材", "stoneBrick"],
    ["钢材", "steel"],
    ["钛合金", "titaniumAlloy"],
    ["玻璃", "glass"],
    ["钛化玻璃", "titaniumGlass"],
    ["棱镜", "prism"],
    ["晶格硅", "crystalSilicon"],
    ["磁铁", "magnet"],
    ["磁线圈", "magneticCoil"],
    ["电动机", "electricMotor"],
    ["电磁涡轮", "electromagneticTurbine"],
    ["超级磁场环", "superMagneticRing"],
    ["粒子容器", "particleContainer"],
    ["奇异物质", "strangeMatter"],
    ["电路板", "circuitBoard"],
    ["处理器", "processor"],
    ["量子芯片", "quantumChip"],
    ["微晶元件", "microcrystallineComponent"],
    ["位面过滤器", "planeFilter"],
    ["粒子带宽", "particleBroadband"],
    ["电浆激发器", "plasmaExciter"],
    ["光子合并器", "photonCombiner"],
    ["太阳帆", "solarSail"],
    ["重氢", "deuterium"],
    ["反物质", "antimatter"],
    ["临界光子", "criticalPhoton"],
    ["液氢燃料棒", "hydrogenFuelRod"],
    ["氘核燃料棒", "deuteriumFuelRod"],
    ["反物质燃烧棒", "antimatterFuelRod"],
    ["塑料", "plastic"],
    ["石墨烯", "graphene"],
    ["碳纳米管", "carbonNanotube"],
    ["有机晶体", "organicCrystal"],
    ["钛晶石", "titaniumCrystal"],
    ["卡西米尔晶片", "casimirCrystal"],
    ["引力透镜", "gravitonLens"],
    ["空间翘曲器", "spaceWarper"],
    ["湮灭约束球", "annihilationConstraintSphere"],
    ["推进器", "thruster"],
    ["加力推进器", "reinforcedThruster"],
    ["物流运输机", "logisticDrone"],
    ["星际物流运输机", "logisticVessel"],
    ["框架材料", "frameMaterial"],
    ["戴森球组件", "dysonSphereComponent"],
    ["小型运载火箭", "smallCarrierRocket"],
    ["地基", "foundation"],
    ["传送带", "conveyorBeltMk1"],
    ["高速传送带", "conveyorBeltMk2"],
    ["极速传送带", "conveyorBeltMk3"],
    ["分拣器", "sorterMk1"],
    ["高速分拣器", "sorterMk2"],
    ["极速分拣器", "sorterMk3"],
    ["四向分流器", "splitter"],
    ["自动集装机", "autoPiler"],
    ["流速监测器", "trafficMonitor"],
    ["喷涂机", "sprayCoater"],
    ["小型储物仓", "storageMk1"],
    ["大型储物仓", "storageMk2"],
    ["储液灌", "storageTank"],
    ["制作台Mk.Ⅰ", "assemblingMachineMk1"],
    ["制作台Mk.Ⅱ", "assemblingMachineMk2"],
    ["制作台Mk.Ⅲ", "assemblingMachineMk3"],
    ["电力感应塔", "teslaTower"],
    ["无线输电塔", "wirelessPowerTower"],
    ["卫星配电站", "satelliteSubstation"],
    ["风力涡轮机", "windTurbine"],
    ["火力发电机", "thermalPowerPlant"],
    ["微型聚变发电站", "miniFusionPowerPlant"],
    ["地热发电站", "geothermalPowerStation"],
    ["采矿机", "miningMachine"],
    ["大型采矿机", "advancedMiningMachine"],
    ["抽水机", "waterPump"],
    ["电弧熔炉", "arcSmelter"],
    ["位面熔炉", "planeSmelter"],
    ["原油萃取站", "oilExtractor"],
    ["原油精炼厂", "oilRefinery"],
    ["化工厂", "chemicalPlant"],
    ["分馏塔", "fractionator"],
    ["量子化工厂", "quantumChemicalPlant"],
    ["太阳能板", "solarPanel"],
    ["蓄电池", "accumulator"],
    ["蓄电池满", "accumulatorFull"],
    ["电磁轨道弹射器", "emRailEjector"],
    ["射线接收站", "rayReceiver"],
    ["垂直发射井", "verticalLaunchingSilo"],
    ["能量枢纽", "energyExchanger"],
    ["微型粒子对撞机", "miniatureParticleCollider"],
    ["人造恒星", "artificialStar"],
    ["物流配送器", "logisticsDistributor"],
    ["行星内物流运输站", "planetaryLogisticStation"],
    ["星际物流运输站", "interstellarLogisticStation"],
    ["轨道采集器", "orbitalCollector"],
    ["蓝矩阵", "electromagneticMatrix"],
    ["红矩阵", "energyMatrix"],
    ["黄矩阵", "structureMatrix"],
    ["紫矩阵", "informationMatrix"],
    ["绿矩阵", "gravityMatrix"],
    ["宇宙矩阵", "universeMatrix"],
    ["谐振盘", "ResonantDisc"],
    ["引力钻头", "GravitonDrill"],
    ["隧穿激发器", "TunnelingExciter"],
    ["引力发生装置", "GravityGenerator"],
    ["位面约束环", "1"],
    ["光子探针", "2"],
    ["星际组装厂组件", "3"],
    ["量子计算机", "4"],
    ["物质解压器火箭", "5"],
    ["科学枢纽火箭", "6"],
    ["谐振发射器火箭", "7"],
    ["星际组装厂火箭", "8"],
    ["晶体重构器火箭", "9"],
    ["None", "None"],
  ];
  let outputHasHydrogen = false;
  let inputHasHydrogen = false;
  let proliferator = null;
  let blueprintTitle = "";
  let blueprintDesc = "";
  let blueprintIconIdx = [];
  for (let tr of document.getElementsByTagName("tbody")[0].childNodes) {
    if (tr.className === "header") {
      continue;
    }
    if (tr.className === "total") {
      break;
    }
    if (tr.childNodes.length === 0) {
      continue;
    }
    let nodeList = [];
    for (let node of tr.childNodes) {
      if (!node.tagName) {
        continue;
      }
      nodeList.push(node);
    }

    let buildingName = nodeList[3].getElementsByTagName("img")[0];
    if (!buildingName) {
      cocoMessage.warning("存在生产设施为空的配方，请检查配方列表", 4000);
      throw `unsupported recipe combination`;
    } else {
      buildingName = buildingName.getAttribute("title");
    }
    let building = {
      name: buildingName,
      // num: Math.ceil(parseFloat(nodeList[3].getElementsByTagName('span')[0].innerText))
      num: parseFloat(nodeList[3].getElementsByTagName("span")[0].innerText),
    };
    let success = false;
    for (let item of itemNameList) {
      if (item[0] !== building.name) {
        continue;
      }
      building.name = item[1];
      success = true;
      break;
    }
    if (!success) {
      alert(`item map error: ${building.name}`);
      return;
    }

    const recipeHtml = nodeList[4]
      .getElementsByTagName("div")[0]
      .getElementsByClassName("pf selected")[0];
    let input = [];
    let output = [];
    let recipeId = 0;
    let isInput = true;
    const t = parseFloat(recipeHtml.innerText.split("(")[1].split("s")[0]);
    for (let node of recipeHtml.childNodes) {
      if (!node.tagName) {
        continue;
      }
      if (node.tagName === "IMG") {
        if (node.className === "to") {
          isInput = false;
          continue;
        }
        let cnTitle = node.getAttribute("title");
        let title = "";
        for (let item of itemNameList) {
          if (item[0] !== cnTitle) {
            continue;
          }
          title = item[1];
          success = true;
          break;
        }
        if (!success) {
          // alert(`item map error: ${cnTitle}`)
          let msg = `item map error: ${cnTitle}`;
          cocoMessage.error(msg);
          throw msg;
        }
        if (isInput) {
          input.push({ name: title });
        } else {
          output.push({ name: title });
          if (title === "hydrogen") {
            outputHasHydrogen = true;
          }
        }
      } else if (node.tagName === "SUB") {
        if (isInput) {
          input[input.length - 1].rate = parseFloat(node.innerText) / t;
        } else {
          output[output.length - 1].rate = parseFloat(node.innerText) / t;
        }
      }
    }
    const acceleratorModeName = nodeList[6]
      .getElementsByClassName("m selected")[0]
      .getAttribute("data-modein");
    let acceleratorMode = -1; // 不使用增产剂
    if (acceleratorModeName === "加速") {
      acceleratorMode = 1;
    } else if (acceleratorModeName === "增产") {
      acceleratorMode = 0;
    }
    if (acceleratorMode !== -1) {
      let recipeProliferator = nodeList[5]
        .getElementsByTagName("div")[0]
        .getElementsByClassName("m selected")[0]
        .getAttribute("data-modein");
      if (proliferator) {
        if (proliferator !== recipeProliferator) {
          cocoMessage.warning(
            "检测到不同等级的增产剂选择，生成蓝图时所有配方必须采用同类型增产剂，请重新设置",
            4000
          );
          throw `unsupported proliferator config`;
        }
      } else {
        proliferator = recipeProliferator;
      }
    }

    if (isInput) {
      // 还是input就说明这个是原矿，蓝图不需要考虑原矿的生产建筑，且原矿的rate（每秒需求量）需重新计算
      output = input;
      output[0].rate =
        parseFloat(nodeList[2].getElementsByTagName("span")[0].innerText) / 60;
      building = null;
      input = null;
      if (output[0].name === "hydrogen") {
        inputHasHydrogen = true;
      }
    }

    if (!blueprintTitle) {
      // blueprint name and icon id
      let outputItemName = nodeList[1].getAttribute("data-name");
      let outputRate = nodeList[2].getElementsByTagName("span")[0].innerText;
      blueprintTitle = outputItemName + "-" + outputRate + "/min";
      let resultList = document.querySelectorAll("#result > div:nth-child(1) > span");
      let outputItemNameList = [];
      for (let i = 0; i < resultList.length -1; i++) {
        let result = resultList[i];
        let outputItemName = result.querySelector("img").title;
        outputItemNameList = [...outputItemNameList, outputItemName];
        let outputRate = result.querySelector("span > span").textContent;
        blueprintDesc += outputItemName + "-" + outputRate + "/min\n";
      }

      let mapItemMap = {};
      Object.keys(itemMap).map((v, _) => {
        mapItemMap[itemMap[v].remark] = itemMap[v]
      });
      for (const name of outputItemNameList) {
        let item = mapItemMap[name];
        if (item !== undefined) {
          blueprintIconIdx = [...blueprintIconIdx, item.iconId];
        }
      }
    }

    const recipe = {
      building: building,
      output: output,
      input: input,
      acceleratorMode: acceleratorMode,
      recipeID: recipeId,
    };

    recipeList.push(recipe);
  }
  switch (proliferator) {
    case "增产剂Mk.Ⅲ":
      proliferator = "proliferatorMk3";
      break;
    case "增产剂Mk.Ⅱ":
      proliferator = "proliferatorMk2";
      break;
    case "增产剂Mk.Ⅰ":
      proliferator = "proliferatorMk1";
      break;
    case null:
      proliferator = null;
      break;
    default:
      cocoMessage.error("未知的增产剂类型", 4000);
      throw `unknown proliferator`;
  }

  if (inputHasHydrogen && outputHasHydrogen) {
    // 输入和输出同时有氢时，把输出氢映射为新产物单独处理
    for (let recipe of recipeList) {
      if (!recipe.input) {
        // 略过原矿
        continue;
      }
      for (let item of recipe.output) {
        if (item.name === "hydrogen") {
          item.name = "hydrogenOutput";
        }
      }
    }
  }
  // console.log(recipeList)
  return {
    recipeList: recipeList,
    proliferator: proliferator,
    blueprintIcon: blueprintIconIdx,
    blueprintTitle: blueprintTitle,
    blueprintDesc: blueprintDesc,
  };
}

function generateBlueprint() {
  const recipe = getRecipe();
  const outputRecipe = {
    proliferator: recipe.proliferator,
    subRecipes: recipe.recipeList,
  };
  // console.log(JSON.stringify(outputRecipe))
  //{"subRecipes":[{"building":{"name":"assemblingMachineMk1","num":0.7},"output":[{"name":"magneticCoil","rate":2}],"input":[{"name":"magnet","rate":2},{"name":"copperIngot","rate":1}],"acceleratorMode":0,"recipeID":0},{"building":{"name":"arcSmelter","num":1.5},"output":[{"name":"magnet","rate":0.6666666666666666}],"input":[{"name":"ironOre","rate":0.6666666666666666}],"acceleratorMode":0,"recipeID":0},{"building":null,"output":[{"name":"ironOre","rate":1}],"input":null,"acceleratorMode":0,"recipeID":0},{"building":{"name":"arcSmelter","num":0.5},"output":[{"name":"copperIngot","rate":1}],"input":[{"name":"copperOre","rate":1}],"acceleratorMode":0,"recipeID":0},{"building":null,"output":[{"name":"copperOre","rate":0.5}],"input":null,"acceleratorMode":0,"recipeID":0}]}
  if (!outputRecipe.subRecipes) {
    return;
  }
  let config = {
    maxSorterNumOneBelt: 8, // 一个传送带节点连接的最大分拣器数量
    conveyorBeltStackLayer: parseInt(
      document.getElementById("conveyorBeltStackLayer").value
    ), // 传送带物品最大堆叠层数
    x_y_ratio: parseFloat(document.getElementById("x_y_ratio").value), // 长宽比
    // compactLayout: document.getElementById('compactLayout').checked,  // 是否采用紧凑布局（紧凑布局的蓝图中炼油厂、化工厂和对撞机在布局上会更紧凑，适合摆放在赤道带，在高纬度可能会出现碰撞问题）
    compactLayout: false,
    upgradeConveyorBelt: false, // 360/min的运力时使用3级传送带（无带流情况下，原料的需求和供应都是集中处理，1级传送带满运力情况下可能会有运送不及时问题导致产量低于预期
    onlyConveyorBeltMk3: document.getElementById("onlyConveyorBeltMk3").checked, // 是否只使用三级传送带
    onlySorterMk3: document.getElementById("onlySorterMk3").checked, // 是否只使用三级传送带
    maxLabLayers: parseInt(document.getElementById("maxLabLayers").value),
    selfSpray: document.getElementById("selfAcc").checked, // 是否自喷涂增产剂
    generateTeslaTower: document.getElementById("generateTeslaTower").checked, // 是否自动插电线杆
    teslaTowerInterval: 10, // 同一排内电线杆距离
    teslaTowerLineInterval: parseInt(
      document.getElementById("teslaTowerLineInterval").value
    ), // 电线杆间隔几排
    // onlyConveyorBeltMk3Downgrade: document.getElementById('onlyConveyorBeltMk3Downgrade').checked  // 三级传送带运力降级
    onlyConveyorBeltMk3Downgrade: false, // 三级传送带运力降级
  };
  // console.log(config)
  let b1 = new Blueprint(
    recipe.blueprintTitle,
    recipe.blueprintIcon.concat(Array(5).fill(0)).slice(0, 5),
    outputRecipe,
    config
  );
  b1.init();
  b1.generateBuildings();
  b1.generateConveyorBelts();
  b1.generateConveyorBeltsForSprayCoater();
  b1.blueprintTemplate.buildings = b1.buildings;
  b1.blueprintTemplate.header.desc = recipe.blueprintDesc.trimEnd();
  switch (recipe.blueprintIcon.length) {
    case 1:
      b1.blueprintTemplate.header.layout = 10;
      break;
    case 2:
      b1.blueprintTemplate.header.layout = 20;
      break;
    case 3:
      b1.blueprintTemplate.header.layout = 30;
      break;
    case 4:
      b1.blueprintTemplate.header.layout = 40;
      break;
    default:
      b1.blueprintTemplate.header.layout = 51;
      break;
  }
  navigator.clipboard
    .writeText(b1.toStr())
    .then((r) => cocoMessage.success("已复制到粘贴板", 1000));
  // navigator.clipboard.writeText(JSON.stringify(b1.blueprintTemplate.buildings)).then(r => cocoMessage.success("已复制到粘贴板", 1000))
}
