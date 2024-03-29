/**
 * 常用的数据信息
 *
 */

const data = {
    // 是否
    Whether: [
        {
            label: '否',
            value: 0,
        },
        {
            label: '是',
            value: 1,
        },
    ],
    // 性别
    sex: [
        {
            label: '男',
            value: 0,
        },
        {
            label: '女',
            value: 1,
        },
    ],
    // 跟进客服
    customerService: [
        {
            label: '招鸿雀',
            value: '招鸿雀',
        },
        {
            label: '蔡龙君',
            value: '蔡龙君',
        },
        {
            label: '李校',
            value: '李校',
        },
    ],
    // 接单状态
    acceptanceStatus: [
        {
            label: '可接单',
            value: 0,
        },
        {
            label: '订单沟通中',
            value: 1,
        },
        {
            label: '雇主面试中',
            value: 2,
        },
        {
            label: '上单中',
            value: 3,
        },
        {
            label: '不可接单',
            value: 4,
        },
    ],
    // 工作状态
    jobIntention: [
        {
            label: '月嫂',
            value: 0,
        },
        {
            label: '保姆',
            value: 1,
        },
    ],
    // 民族
    nation: [
        {
            label: '汉族',
            value: 0,
        },
        {
            label: '壮族',
            value: 1,
        },
        {
            label: '满族',
            value: 2,
        },
        {
            label: '回族',
            value: 3,
        },
        {
            label: '苗族',
            value: 4,
        },
        {
            label: '维吾尔族',
            value: 5,
        },
        {
            label: '土家族',
            value: 6,
        },
        {
            label: '彝族',
            value: 7,
        },
        {
            label: '蒙古族',
            value: 8,
        },
        {
            label: '藏族',
            value: 9,
        },
        {
            label: '布依族',
            value: 10,
        },
        {
            label: '侗族',
            value: 11,
        },
        {
            label: '瑶族',
            value: 12,
        },
        {
            label: '朝鲜族',
            value: 13,
        },
        {
            label: '白族',
            value: 14,
        },
        {
            label: '哈尼族',
            value: 15,
        },
        {
            label: '哈萨克族',
            value: 16,
        },
        {
            label: '黎族',
            value: 17,
        },
        {
            label: '傣族',
            value: 18,
        },
        {
            label: '畲族',
            value: 19,
        },
        {
            label: '傈僳族',
            value: 20,
        },
        {
            label: '仡佬族',
            value: 21,
        },
        {
            label: '东乡族',
            value: 22,
        },
        {
            label: '高山族',
            value: 23,
        },
        {
            label: '拉祜族',
            value: 24,
        },
        {
            label: '水族',
            value: 25,
        },
        {
            label: '佤族',
            value: 26,
        },
        {
            label: '纳西族',
            value: 27,
        },
        {
            label: '羌族',
            value: 28,
        },
        {
            label: '土族',
            value: 29,
        },
        {
            label: '仫佬族',
            value: 30,
        },
        {
            label: '锡伯族',
            value: 31,
        },
        {
            label: '柯尔克孜族',
            value: 32,
        },
        {
            label: '达斡尔族',
            value: 33,
        },
        {
            label: '景颇族',
            value: 34,
        },
        {
            label: '毛南族',
            value: 35,
        },
        {
            label: '撒拉族',
            value: 36,
        },
        {
            label: '布朗族',
            value: 37,
        },
        {
            label: '塔吉克族',
            value: 38,
        },
        {
            label: '阿昌族',
            value: 39,
        },
        {
            label: '普米族',
            value: 40,
        },
        {
            label: '鄂温克族',
            value: 41,
        },
        {
            label: '怒族',
            value: 42,
        },
        {
            label: '京族',
            value: 43,
        },
        {
            label: '基诺族',
            value: 44,
        },
        {
            label: '德昂族',
            value: 45,
        },
        {
            label: '保安族',
            value: 46,
        },
        {
            label: '俄罗斯族',
            value: 47,
        },
        {
            label: '裕固族',
            value: 48,
        },
        {
            label: '乌孜别克族',
            value: 49,
        },
        {
            label: '门巴族',
            value: 50,
        },
        {
            label: '鄂伦春族',
            value: 51,
        },
        {
            label: '独龙族',
            value: 52,
        },
        {
            label: '塔塔尔族',
            value: 53,
        },
        {
            label: '赫哲族',
            value: 54,
        },
        {
            label: '珞巴族',
            value: 55,
        },
    ],
    district: [
        {
            value: '440000',
            label: '广东省',
            children: [
                {
                    value: '440800',
                    label: '湛江市',
                    children: [
                        {
                            value: '440801',
                            label: '全市',
                        },
                        {
                            value: '440802',
                            label: '赤坎区',
                        },
                        {
                            value: '440803',
                            label: '霞山区',
                        },
                        {
                            value: '440804',
                            label: '坡头区',
                        },
                        {
                            value: '440811',
                            label: '麻章区',
                        },
                        {
                            value: '440823',
                            label: '遂溪县',
                        },
                        {
                            value: '440825',
                            label: '徐闻县',
                        },
                        {
                            value: '440881',
                            label: '廉江市',
                        },
                        {
                            value: '440882',
                            label: '雷州市',
                        },
                        {
                            value: '440883',
                            label: '吴川市',
                        },
                    ],
                },
            ],
        },
    ],
    // 街道
    street: {
        '440801': {
            name: '市辖区',
            children: [],
        },
        '440802': {
            name: '赤坎区',
            children: [
                {
                    value: '440802001',
                    label: '中华街道',
                },
                {
                    value: '440802002',
                    label: '寸金街道',
                },
                {
                    value: '440802003',
                    label: '民主街道',
                },
                {
                    value: '440802004',
                    label: '中山街道',
                },
                {
                    value: '440802005',
                    label: '沙湾街道',
                },
                {
                    value: '440802006',
                    label: '调顺街道',
                },
                {
                    value: '440802007',
                    label: '南桥街道',
                },
                {
                    value: '440802008',
                    label: '北桥街道',
                },
            ],
        },
        '440803': {
            name: '霞山区',
            children: [
                {
                    value: '440803001',
                    label: '解放街道',
                },
                {
                    value: '440803002',
                    label: '爱国街道',
                },
                {
                    value: '440803003',
                    label: '工农街道',
                },
                {
                    value: '440803004',
                    label: '友谊街道',
                },
                {
                    value: '440803005',
                    label: '新兴街道',
                },
                {
                    value: '440803009',
                    label: '建设街道',
                },
                {
                    value: '440803010',
                    label: '东新街道',
                },
                {
                    value: '440803011',
                    label: '新园街道',
                },
                {
                    value: '440803012',
                    label: '海头街道',
                },
                {
                    value: '440803070',
                    label: '泉庄街道',
                },
                {
                    value: '440803071',
                    label: '乐华街道',
                },
            ],
        },
        '440804': {
            name: '坡头区',
            children: [
                {
                    value: '440804001',
                    label: '南调街道',
                },
                {
                    value: '440804002',
                    label: '麻斜街道',
                },
                {
                    value: '440804100',
                    label: '南三镇',
                },
                {
                    value: '440804101',
                    label: '坡头镇',
                },
                {
                    value: '440804102',
                    label: '乾塘镇',
                },
                {
                    value: '440804103',
                    label: '龙头镇',
                },
                {
                    value: '440804104',
                    label: '官渡镇',
                },
                {
                    value: '440804401',
                    label: '湛江市坡头区官渡工业园',
                },
            ],
        },
        '440811': {
            name: '麻章区',
            children: [
                {
                    value: '440811100',
                    label: '麻章镇',
                },
                {
                    value: '440811101',
                    label: '太平镇',
                },
                {
                    value: '440811102',
                    label: '湖光镇',
                },
                {
                    value: '440811170',
                    label: '东山镇',
                },
                {
                    value: '440811171',
                    label: '东简镇',
                },
                {
                    value: '440811172',
                    label: '民安镇',
                },
                {
                    value: '440811173',
                    label: '硇洲镇',
                },
                {
                    value: '440811450',
                    label: '湖光农场',
                },
            ],
        },
        '440823': {
            name: '遂溪县',
            children: [
                {
                    value: '440823100',
                    label: '遂城镇',
                },
                {
                    value: '440823101',
                    label: '黄略镇',
                },
                {
                    value: '440823102',
                    label: '洋青镇',
                },
                {
                    value: '440823103',
                    label: '界炮镇',
                },
                {
                    value: '440823104',
                    label: '乐民镇',
                },
                {
                    value: '440823105',
                    label: '江洪镇',
                },
                {
                    value: '440823106',
                    label: '杨柑镇',
                },
                {
                    value: '440823107',
                    label: '城月镇',
                },
                {
                    value: '440823108',
                    label: '乌塘镇',
                },
                {
                    value: '440823109',
                    label: '建新镇',
                },
                {
                    value: '440823110',
                    label: '岭北镇',
                },
                {
                    value: '440823111',
                    label: '北坡镇',
                },
                {
                    value: '440823112',
                    label: '港门镇',
                },
                {
                    value: '440823113',
                    label: '草潭镇',
                },
                {
                    value: '440823114',
                    label: '河头镇',
                },
                {
                    value: '440823450',
                    label: '广前公司',
                },
            ],
        },
        '440825': {
            name: '徐闻县',
            children: [
                {
                    value: '440825001',
                    label: '徐城街道办',
                },
                {
                    value: '440825102',
                    label: '迈陈镇',
                },
                {
                    value: '440825103',
                    label: '海安镇',
                },
                {
                    value: '440825104',
                    label: '曲界镇',
                },
                {
                    value: '440825105',
                    label: '前山镇',
                },
                {
                    value: '440825106',
                    label: '西连镇',
                },
                {
                    value: '440825107',
                    label: '下桥镇',
                },
                {
                    value: '440825108',
                    label: '龙塘镇',
                },
                {
                    value: '440825109',
                    label: '下洋镇',
                },
                {
                    value: '440825110',
                    label: '锦和镇',
                },
                {
                    value: '440825111',
                    label: '和安镇',
                },
                {
                    value: '440825112',
                    label: '新寮镇',
                },
                {
                    value: '440825113',
                    label: '南山镇',
                },
                {
                    value: '440825201',
                    label: '城北乡',
                },
                {
                    value: '440825204',
                    label: '角尾乡',
                },
                {
                    value: '440825451',
                    label: '南华农场',
                },
                {
                    value: '440825452',
                    label: '五一农场',
                },
                {
                    value: '440825453',
                    label: '华海公司',
                },
                {
                    value: '440825454',
                    label: '友好农场',
                },
                {
                    value: '440825455',
                    label: '红星农场',
                },
            ],
        },
        '440881': {
            name: '廉江市',
            children: [
                {
                    value: '440881001',
                    label: '罗州街道办',
                },
                {
                    value: '440881002',
                    label: '城南街道办',
                },
                {
                    value: '440881003',
                    label: '城北街道办',
                },
                {
                    value: '440881101',
                    label: '石城镇',
                },
                {
                    value: '440881102',
                    label: '新民镇',
                },
                {
                    value: '440881103',
                    label: '吉水镇',
                },
                {
                    value: '440881104',
                    label: '河唇镇',
                },
                {
                    value: '440881105',
                    label: '石角镇',
                },
                {
                    value: '440881106',
                    label: '良垌镇',
                },
                {
                    value: '440881107',
                    label: '横山镇',
                },
                {
                    value: '440881108',
                    label: '安铺镇',
                },
                {
                    value: '440881109',
                    label: '营仔镇',
                },
                {
                    value: '440881110',
                    label: '青平镇',
                },
                {
                    value: '440881111',
                    label: '车板镇',
                },
                {
                    value: '440881112',
                    label: '高桥镇',
                },
                {
                    value: '440881113',
                    label: '石岭镇',
                },
                {
                    value: '440881114',
                    label: '雅塘镇',
                },
                {
                    value: '440881115',
                    label: '石颈镇',
                },
                {
                    value: '440881116',
                    label: '长山镇',
                },
                {
                    value: '440881117',
                    label: '塘蓬镇',
                },
                {
                    value: '440881118',
                    label: '和寮镇',
                },
                {
                    value: '440881401',
                    label: '九洲江开发区',
                },
            ],
        },
        '440882': {
            name: '雷州市',
            children: [
                {
                    value: '440882001',
                    label: '雷城街道办',
                },
                {
                    value: '440882002',
                    label: '西湖街道办',
                },
                {
                    value: '440882003',
                    label: '新城街道办',
                },
                {
                    value: '440882100',
                    label: '白沙镇',
                },
                {
                    value: '440882101',
                    label: '沈塘镇',
                },
                {
                    value: '440882102',
                    label: '客路镇',
                },
                {
                    value: '440882103',
                    label: '杨家镇',
                },
                {
                    value: '440882104',
                    label: '唐家镇',
                },
                {
                    value: '440882105',
                    label: '企水镇',
                },
                {
                    value: '440882106',
                    label: '纪家镇',
                },
                {
                    value: '440882107',
                    label: '松竹镇',
                },
                {
                    value: '440882108',
                    label: '南兴镇',
                },
                {
                    value: '440882109',
                    label: '雷高镇',
                },
                {
                    value: '440882110',
                    label: '东里镇',
                },
                {
                    value: '440882111',
                    label: '调风镇',
                },
                {
                    value: '440882112',
                    label: '龙门镇',
                },
                {
                    value: '440882113',
                    label: '英利镇',
                },
                {
                    value: '440882114',
                    label: '北和镇',
                },
                {
                    value: '440882115',
                    label: '乌石镇',
                },
                {
                    value: '440882116',
                    label: '覃斗镇',
                },
                {
                    value: '440882117',
                    label: '附城镇',
                },
                {
                    value: '440882450',
                    label: '湛江奋勇高新技术产业开发区管理委员会',
                },
                {
                    value: '440882451',
                    label: '广东省丰收糖业发展有限公司',
                },
                {
                    value: '440882452',
                    label: '广东省国营火炬农场',
                },
                {
                    value: '440882453',
                    label: '广东省国营幸福农场',
                },
                {
                    value: '440882454',
                    label: '湛江农垦东方红农场',
                },
                {
                    value: '440882455',
                    label: '湛江农垦金星农场',
                },
            ],
        },
        '440883': {
            name: '吴川市',
            children: [
                {
                    value: '440883001',
                    label: '梅录街道',
                },
                {
                    value: '440883002',
                    label: '塘尾街道',
                },
                {
                    value: '440883003',
                    label: '大山江街道',
                },
                {
                    value: '440883004',
                    label: '博铺街道',
                },
                {
                    value: '440883005',
                    label: '海滨街道',
                },
                {
                    value: '440883100',
                    label: '浅水镇',
                },
                {
                    value: '440883101',
                    label: '长岐镇',
                },
                {
                    value: '440883102',
                    label: '覃巴镇',
                },
                {
                    value: '440883103',
                    label: '王村港镇',
                },
                {
                    value: '440883104',
                    label: '振文镇',
                },
                {
                    value: '440883105',
                    label: '樟铺镇',
                },
                {
                    value: '440883106',
                    label: '吴阳镇',
                },
                {
                    value: '440883107',
                    label: '塘缀镇',
                },
                {
                    value: '440883109',
                    label: '黄坡镇',
                },
                {
                    value: '440883111',
                    label: '兰石镇',
                },
            ],
        },
    },
    // 小区数据（保留）
    community: {
        '440801': {
            name: '市辖区',
            children: [],
        },
        '440802': {
            name: '赤坎区',
            children: [
                {
                    value: '440802-1-0',
                    label: '华和南国豪苑',
                },
                {
                    value: '440802-2',
                    label: '飞鹏万荟世界',
                },
                {
                    value: '440802-3',
                    label: '天润御海湾',
                },
                {
                    value: '440802-4',
                    label: '西粤京基城',
                },
                {
                    value: '440802-5',
                    label: '公园一号',
                },
                {
                    value: '440802-6',
                    label: '鼎能东盟城',
                },
                {
                    value: '440802-7',
                    label: '万象金沙湾广场',
                },
                {
                    value: '440802-8',
                    label: '富虹上游城',
                },
                {
                    value: '440802-9',
                    label: '万象凯旋湾',
                },
                {
                    value: '440802-10',
                    label: '瑞云湖兆福苑',
                },
                {
                    value: '440802-11',
                    label: '君临世纪',
                },
                {
                    value: '440802-12',
                    label: '碧桂园豪庭',
                },
                {
                    value: '440802-13',
                    label: '年丰豪庭',
                },
                {
                    value: '440802-14',
                    label: '盛和园',
                },
                {
                    value: '440802-15',
                    label: '君浩绿桂园1期',
                },
            ],
        },
        '440803': {
            name: '霞山区',
            children: [
                {
                    value: '440803-1',
                    label: '银地东山花园',
                },
                {
                    value: '440803-1',
                    label: '银地东山花园',
                },
            ],
        },
        '440804': {
            name: '坡头区',
            children: [
                {
                    value: '440803-1',
                    label: '华和南国豪苑',
                },
            ],
        },
        '44080X': {
            name: '开发区',
            children: [
                {
                    value: '440803-1',
                    label: '华和南国豪苑',
                },
            ],
        },
        '440811': {
            name: '麻章区',
            children: [
                {
                    value: '440803-1',
                    label: '华和南国豪苑',
                },
            ],
        },
        '440823': {
            name: '遂溪县',
            children: [
                {
                    value: '440803-1',
                    label: '华和南国豪苑',
                },
            ],
        },
        '440825': {
            name: '徐闻县',
            children: [
                {
                    value: '440803-1',
                    label: '华和南国豪苑',
                },
            ],
        },
        '440881': {
            name: '廉江市',
            children: [
                {
                    value: '440803-1',
                    label: '华和南国豪苑',
                },
            ],
        },
        '440882': {
            name: '雷州市',
            children: [
                {
                    value: '440803-1',
                    label: '华和南国豪苑',
                },
            ],
        },
        '440883': {
            name: '吴川市',
            children: [
                {
                    value: '440803-1',
                    label: '华和南国豪苑',
                },
            ],
        },
    },
    // 血型
    bloodType: [
        {
            value: 0,
            label: 'A型',
        },
        {
            value: 1,
            label: 'B型',
        },
        {
            value: 2,
            label: 'AB型',
        },
        {
            value: 3,
            label: 'O型',
        },
        {
            value: 4,
            label: '其他',
        },
        {
            value: 5,
            label: '未测过',
        },
    ],
    // 婚姻状况
    maritalStatus: [
        {
            value: 0,
            label: '已婚已育',
        },
        {
            value: 1,
            label: '已婚未育',
        },
        {
            value: 2,
            label: '未婚已育',
        },
        {
            value: 3,
            label: '未婚未育',
        },
        {
            value: 4,
            label: '离异',
        },
        {
            value: 5,
            label: '其他',
        },
    ],
    // 文化程度
    educationalLevel: [
        {
            value: 0,
            label: '文盲或半文盲',
        },
        {
            value: 1,
            label: '小学',
        },
        {
            value: 2,
            label: '初中',
        },
        {
            value: 3,
            label: '高中',
        },
        {
            value: 4,
            label: '技工学校',
        },
        {
            value: 5,
            label: '中专学校或中等技工学校',
        },
        {
            value: 6,
            label: '大学专科和专科学校',
        },
        {
            value: 7,
            label: '大学本科',
        },
        {
            value: 8,
            label: '研究生',
        },
    ],
    // 宗教信仰
    religion: [
        {
            value: 0,
            label: '无',
        },
        {
            value: 1,
            label: '佛教',
        },
        {
            value: 2,
            label: '基督教',
        },
        {
            value: 3,
            label: '耶稣教',
        },
        {
            value: 4,
            label: '伊斯兰教',
        },
        {
            value: 5,
            label: '天主教',
        },
        {
            value: 6,
            label: '其他',
        },
    ],
    // 工作经历
    experienceList: [
        {
            value: '农民',
            label: '农民',
        },
        {
            value: '保姆',
            label: '保姆',
        },
        {
            value: '家庭主妇',
            label: '家庭主妇',
        },
        {
            value: '打工',
            label: '打工',
        },
        {
            value: '护士',
            label: '护士',
        },
        {
            value: '教师',
            label: '教师',
        },
        {
            value: '厨师',
            label: '厨师',
        },
        {
            value: '个体户',
            label: '个体户',
        },
        {
            value: '职员',
            label: '职员',
        },
        {
            value: '其他',
            label: '其他',
        },
    ],
    // 生肖
    chineseZodiac: [
        {
            value: 0,
            label: '鼠',
        },
        {
            value: 1,
            label: '牛',
        },
        {
            value: 2,
            label: '虎',
        },
        {
            value: 3,
            label: '兔',
        },
        {
            value: 4,
            label: '龙',
        },
        {
            value: 5,
            label: '蛇',
        },
        {
            value: 6,
            label: '马',
        },
        {
            value: 7,
            label: '羊',
        },
        {
            value: 8,
            label: '猴',
        },
        {
            value: 9,
            label: '鸡',
        },
        {
            value: 10,
            label: '狗',
        },
        {
            value: 11,
            label: '猪',
        },
    ],
    // 技能证书
    certificate: [
        {
            value: 0,
            label: '育婴师证',
        },
        {
            value: 1,
            label: '母婴护理师证',
        },
        {
            value: 2,
            label: '健康证',
        },
        {
            value: 3,
            label: '营养师证',
        },
        {
            value: 4,
            label: '乙肝二对半证',
        },
        {
            value: 5,
            label: '其他证书',
        },
    ],
    // 语言
    language: [
        {
            value: 0,
            label: '普通话',
        },
        {
            value: 1,
            label: '粤语',
        },
        {
            value: 2,
            label: '雷州话',
        },
        {
            value: 3,
            label: '涯话',
        },
        {
            value: 4,
            label: '客家话',
        },
        {
            value: 5,
            label: '潮汕话',
        },
        {
            value: 6,
            label: '英语',
        },
        {
            value: 7,
            label: '韩语',
        },
        {
            value: 8,
            label: '日语',
        },
        {
            value: 9,
            label: '其他',
        },
    ],
    // 技能等级
    grade: [
        {
            value: 0,
            label: '初级',
        },
        {
            value: 1,
            label: '中级',
        },
        {
            value: 2,
            label: '高级',
        },
        {
            value: 3,
            label: '其他',
        },
    ],
    // 烹饪技能
    cooking: [
        {
            value: 0,
            label: '一般',
        },
        {
            value: 1,
            label: '不熟悉',
        },
        {
            value: 2,
            label: '熟悉',
        },
    ],
    // 个人诉讼案件类型
    caseType: [
        {
            value: 'cpws',
            label: '裁判文',
        },
        {
            value: 'zxgg',
            label: '执行公告',
        },
        {
            value: 'shixin',
            label: '失信',
        },
        {
            value: 'ktgg',
            label: '开庭公告',
        },
        {
            value: 'fygg',
            label: '法院公告',
        },
        {
            value: 'ajlc',
            label: '案件流程',
        },
        {
            value: 'bgt',
            label: '曝光台',
        },
    ],
    // 订单支付状态
    orderPayStatus: {
        '-1': '超时关闭',
        '0': '价格面议',
        '1': '待支付状态',
        '2': '支付成功',
        '3': '退款成功',
    },
    // 管理员申请状态
    applicantPermission: {
        '0': '不通过',
        '1': '通过',
        '2': '审核中',
    },
    // 通行证账号状态
    passportStatus: {
        '0': '正常',
        '1': '禁用',
    },
    // 家政人员工作申请状态
    jobApplicationStatus: {
        '0': '申请不通过',
        '1': '申请通过',
        '2': '申请中',
    },
};

export default data;
