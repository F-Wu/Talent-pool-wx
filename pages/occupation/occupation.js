// pages/categories/categories.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // action: '',
    url: "",
    curIndex: 0,
    toView: "new",
    detail: [],
    // categoryList: [{
    //   "id": "20",
    //   "name": "技术",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '移动开发',
    //       'poalist': ['HTML5', 'Anbroid', 'IOS', '移动web前端', 'Flash开发', 'JavaScript', 'U3D', 'COCOS2DX', 'UE4']
    //     },
    //     {
    //       'poaname': '测试',
    //       'poalist': ['测试工程师', '自动化测试', '功能测试', '性能测试', '测试开发', '移动端测试', '游戏测试', '硬件测试', '软件测试', '渗透测试']
    //     },
    //     {
    //       'poaname': '运维/技术支持',
    //       'poalist': ['运维工程师', '运维开发工程师', '网络工程师', '系统工程师', 'IT技术支持', '系统管理员', '网络安全', '系统安全', 'DBA']
    //     },
    //     {
    //       'poaname': '数据',
    //       'poalist': ['ETL工程师', '数据仓库', '数据开发', '数据挖掘', '数据分析师', '数据架构师']
    //     },
    //     {
    //       'poaname': '项目管理',
    //       'poalist': ['项目经理', '项目主管', '项目助理', '项目专员', '实施顾问', '实施工程师', '需求分析工程师', '硬件项目经理']
    //     },
    //     {
    //       'poaname': '硬件开发',
    //       'poalist': ['硬件工程师', '嵌入式', '自动化', '单片机', '电路设计', '驱动开发', '系统集成', 'FPGA开发', 'DSP开发', 'ARM开发', 'PCD工艺',
    //         '射频工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['web前端', 'JavaScript', 'Flash开发', 'HTML5']
    //     },
    //     {
    //       'poaname': '通信',
    //       'poalist': ['通信技术工程师', '通信研发工程师', '数据通信工程师', '移动通信工程师', '电信网络工程师', '电信交换工程师', '有线传输工程师', '无线/射频工程师',
    //         '通信电源工程师', '通信标准化工程师', '通信项目专员', '通信项目经理',
    //         '核心网工程师', '通信测试工程师', '通信设备工程师', '光通信工程师', '光传输工程师', '光网络工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '电子/半导体',
    //       'poalist': ['电气工程师', '电气设计工程师', '电子工程师', '集成电路IC设计', 'PAE', 'IC验证工程师']
    //     },
    //     {
    //       'poaname': '高端技术职位',
    //       'poalist': ['技术经理', '技术总监', '测试经理', '架构师', 'CTO', '运维总监', '技术合伙人']
    //     },
    //     {
    //       'poaname': '人工智能',
    //       'poalist': ['数据挖掘', '搜索算法', '自然语言处理', '推荐算法', '算法工程师', '智能驾驶系统工程师', '反欺诈/风控算法', '机器学习',
    //         '深度学习', '语音识别', '图像识别', '算法研究员'
    //       ]
    //     },
    //     {
    //       'poaname': '销售技术支持',
    //       'poalist': ['售前技术支持', '售后技术支持']
    //     },
    //     {
    //       'poaname': '其他技术职位',
    //       'poalist': ['其他技术职位']
    //     }
    //   ]
    // }, {
    //   "id": "19",
    //   "name": "运营",
    //   "subCategoryList": [{
    //       'poaname': '运营',
    //       'poalist': ['用户运营', '产品运营', '数据营业', '内容运营', '活动运营', '商家运营', '品类运营', '游戏运营', '网站运营', '新媒体运营', '微博运营', '社区运营',
    //         '微信运营', '策略运营', '线下拓展运营', '电商运营', '运营助理/专员', '内容审核', '数据标注', '直播运营', '车辆运营', '跨境电商运营', '网店店长'
    //       ]
    //     },
    //     {
    //       'poaname': '编辑',
    //       'poalist': ['副主编', '内容主编', '文案策划', '网站编辑', '采编', '医学编辑']
    //     },
    //     {
    //       'poaname': '客服',
    //       'poalist': ['售前客服', '售后客服', '网络客服', '客服经理', '客服专员', '客服主管', '电话客服', '咨询热线/呼叫中心服务']
    //     },
    //     {
    //       'poaname': '高端运营职位',
    //       'poalist': ['主编', '运营总监', 'COO', '客服总监', '运营经理/主管']
    //     },
    //     {
    //       'poaname': '其他运营职位',
    //       'poalist': ['其他运营职位']
    //     }
    //   ]
    // }, {
    //   "id": "18",
    //   "name": "销售",
    //   "subCategoryList": [{
    //       'poaname': '销售行政/商务',
    //       'poalist': ['商务专员', '商务经理', '销售助理', '商务总监', '销售运营']
    //     },
    //     {
    //       'poaname': '房地产销售/招商',
    //       'poalist': ['置业顾问', '地产中介', '物业招商管理', '房地产销售总监']
    //     },
    //     {
    //       'poaname': '服务业销售',
    //       'poalist': ['彩妆顾问', '美容顾问', '会籍顾问', '珠宝销售', '旅游顾问', '瘦身顾问']
    //     },
    //     {
    //       'poaname': '汽车销售',
    //       'poalist': ['汽车销售', '汽车配件销售']
    //     },
    //     {
    //       'poaname': '广告/会展销售',
    //       'poalist': ['广告销售', '会议活动销售', '会展活动销售', '媒介顾问']
    //     },
    //     {
    //       'poaname': '金融销售',
    //       'poalist': ['证券经纪人', '信用卡销售', '保险顾问', '理财顾问']
    //     },
    //     {
    //       'poaname': '外贸销售',
    //       'poalist': ['外贸经理', '外贸业务员']
    //     },
    //     {
    //       'poaname': '销售',
    //       'poalist': ['销售专员', '客户代表', '大客户代表', 'BD经理', '渠道销售', '代理商销售', '电话销售', '销售顾问', '网络销售', '销售工程师', '客户经理']
    //     },
    //     {
    //       'poaname': '课程销售',
    //       'poalist': ['课程顾问', '招生顾问', '留学顾问']
    //     },
    //     {
    //       'poaname': '医疗销售',
    //       'poalist': ['医疗机械销售', '医药代表', '健康顾问', '医美咨询']
    //     },
    //     {
    //       'poaname': '销售管理',
    //       'poalist': ['销售经理', '销售总监', '区域总监', '城市经理', '销售VP', '团队经理']
    //     },
    //     {
    //       'poaname': '其他销售职位',
    //       'poalist': ['其他销售职位']
    //     }
    //   ]
    // }, {
    //   "id": "17",
    //   "name": "人事/行政/财务/法务",
    //   "subCategoryList": [{
    //       'poaname': '人力资源',
    //       'poalist': ['人力资源主管', '招聘', 'HRBP', '人力资源专员/助理', '培训', '薪资福利', '绩效考核', '人力资源经理', '人力资源VP/CHO', '人力资源总监',
    //         '员工关系', '组织发展'
    //       ]
    //     },
    //     {
    //       'poaname': '行政',
    //       'poalist': ['行政专员/助理', '前台', '行政主管', '经理助理', '后勤', '行政经理', '行政总监']
    //     },
    //     {
    //       'poaname': '财务',
    //       'poalist': ['会计', '出纳', '财务顾问', '结算', '税务', '审计', '风控', '成本', '总账会计', '财务经理', 'CFO', '财务总监',
    //         '财务主管'
    //       ]
    //     },
    //     {
    //       'poaname': '法务',
    //       'poalist': ['法务专员/助理', '律师', '法律顾问', '法务主管', '法务经理', '法务总监']
    //     },
    //     {
    //       'poaname': '其他职能职位',
    //       'poalist': ['其他职能职位']
    //     }
    //   ]
    // }, {
    //   "id": "16",
    //   "name": "高级管理",
    //   "subCategoryList": [{
    //     'poaname': '高级管理职位',
    //     'poalist': ['总裁/总经理/CEO', '副总裁/副总经理/VP', '分公司/代表处负责人', '区域负责人（辖多个分公司）', '总助/CEO助理/董事长助理', '合伙人', '联合创始人',
    //       '董事会秘书'
    //     ]
    //   }]
    // }, {
    //   "id": "15",
    //   "name": "传媒",
    //   "subCategoryList": [{
    //       'poaname': '采编/写作/出版',
    //       'poalist': ['排版设计', '记者', '编辑', '采编', '撰稿人', '出版发行', '校对录入', '总编', '自媒体']
    //     },
    //     {
    //       'poaname': '公关媒介',
    //       'poalist': ['媒介经理', '媒介专员', '广告协调', '品牌公关', '活动策划执行', '媒介策划']
    //     },
    //     {
    //       'poaname': '广告',
    //       'poalist': ['广告/会展项目经理', '广告创意设计', '美术指导', '广告设计', '策划经理', '广告文案', '广告制作', '媒介投放', '媒介合作', '广告审核']
    //     },
    //     {
    //       'poaname': '影视媒体',
    //       'poalist': ['艺人助理', '主持人/DJ', '主播助理', '灯光师', '剪辑师', '影视特效', '导演/编导', '摄影/摄像', '视频编辑', '音频编辑', '经纪人', '后期制作',
    //         '影视发行', '影视策划', '主播', '演员/配音/模特', '化妆/造型/服装', '放映员', '录音/音效', '编剧'
    //       ]
    //     },
    //     {
    //       'poaname': '其他传媒职位',
    //       'poalist': ['其他传媒职位']
    //     }
    //   ]
    // }, {
    //   "id": "14",
    //   "name": "金融",
    //   "subCategoryList": [{
    //       'poaname': '投融资',
    //       'poalist': ['投资经理', '行业研究', '资产管理', '投资总监', '投资VP', '投资合伙人', '融资', '并购', '投后管理', '投资助理', '其他投融资职位', '投资顾问']
    //     },
    //     {
    //       'poaname': '风控',
    //       'poalist': ['风控', '律师', '资信评估', '合规稽查']
    //     },
    //     {
    //       'poaname': '税务审计',
    //       'poalist': ['审计', '法务', '会计', '清算']
    //     },
    //     {
    //       'poaname': '银行',
    //       'poalist': ['分析师', '柜员', '商务渠道', '大堂经理', '客户经理', '信贷管理', '风控']
    //     },
    //     {
    //       'poaname': '互联网金融',
    //       'poalist': ['金融产品经理', '风控', '催收员', '分析师', '投资经理', '审计', '清算']
    //     },
    //     {
    //       'poaname': '保险',
    //       'poalist': ['保险精算师', '保险理赔']
    //     },
    //     {
    //       'poaname': '证券',
    //       'poalist': ['证券分析师', '交易员']
    //     },
    //     {
    //       'poaname': '其他金融职位',
    //       'poalist': ['其他金融职位']
    //     }
    //   ]
    // }, {
    //   "id": "13",
    //   "name": "教育培训",
    //   "subCategoryList": [{
    //       'poaname': '教育产品研发',
    //       'poalist': ['课程设计', '课程编辑', '培训研究', '培训师', '培训策划', '其他教育产品研发职位']
    //     },
    //     {
    //       'poaname': '教育行政',
    //       'poalist': ['园长/副园长', '校长/副校长', '教务管理', '教学管理', '班主任/辅导员']
    //     },
    //     {
    //       'poaname': '教师',
    //       'poalist': ['教师', '日语教师', '其他外语教师', '语文教师', '数学教师', '物理教师', '化学教师', '生物教师', '家教', '托管老师', '早教老师', '助教',
    //         '高中教师', '初中教师', '小学教师', '幼教', '理科教师', '文科教师', '英语教师', '音乐教师', '美术教师', '体育教师', '就业老师'
    //       ]
    //     },
    //     {
    //       'poaname': 'IT培训',
    //       'poalist': ['JAVA培训讲师', 'Android培训讲师', 'iOS培训讲师', 'PHP培训讲师', '.NET培训讲师', 'c++培训讲师', 'Unity3D培训讲师',
    //         'web前端培训讲师', '软件测试培训讲师', '动漫培训讲师', 'UI设计培训讲师'
    //       ]
    //     },
    //     {
    //       'poaname': '职业培训',
    //       'poalist': ['财会培训讲师', 'HR培训讲师', '培训师', '拓展培训']
    //     },
    //     {
    //       'poaname': '特长培训',
    //       'poalist': ['武术教练', '滑轮教练', '表演教师', '机器人教师', '书法教师', '钢琴教师', '吉他教师', '古筝教师', '播音主持教师', '乐高教师', '舞蹈老师', '瑜伽老师',
    //         '游泳教练', '健身教练', '篮球/羽毛球教练', '跆拳道教练'
    //       ]
    //     },
    //     {
    //       'poaname': '其他教育培训职位',
    //       'poalist': ['其他教育培训职位']
    //     }
    //   ]
    // }, {
    //   "id": "12",
    //   "name": "市场",
    //   "subCategoryList": [{
    //       'poaname': '政府事务',
    //       'poalist': ['政府关系', '政策研究', '企业党建']
    //     },
    //     {
    //       'poaname': '市场/营销',
    //       'poalist': ['网络推广', '市场营销', '市场策划', '市场顾问', '市场推广', 'SEO', 'SEM', '商务渠道', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "11",
    //   "name": "设计",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "10",
    //   "name": "产品",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "9",
    //   "name": "房地产/建筑",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "8",
    //   "name": "服务业",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "7",
    //   "name": "医疗健康",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "6",
    //   "name": "咨询/律师/翻译",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "5",
    //   "name": "供应链",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "4",
    //   "name": "采购/贸易",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "3",
    //   "name": "生产制造",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "2",
    //   "name": "旅游",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }, {
    //   "id": "1",
    //   "name": "其他",
    //   "subCategoryList": [{
    //       'poaname': '后端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     },
    //     {
    //       'poaname': '前端开发',
    //       'poalist': ['java', 'c++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby',
    //         'Node.js', 'Golang', 'Erlang', '语音/视频/图形开发', '数据采集', '全栈工程师', 'GIS工程师'
    //       ]
    //     }
    //   ]
    // }],
    categoryList: null, //职业
    category: null //职业类别
  },

  /**
   * 生命周期函数--监听页面加载
   */
  switchCategory(e) {
    // console.log(e.currentTarget.dataset.id);
    const curIndex = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
    this.setData({
      toView: 'a' + e.currentTarget.dataset.id,
      curIndex
    });
    // alert(this.data.category.curIndex)
    wx.showToast({
      title: this.data.category[curIndex].name,
      icon: 'none',
      duration: 2000//持续的时间
    })
    console.log(this.data.category[curIndex].name)
  },
  onLoad: function (options) {
    const detail = app.globalData.category;
    this.setData({
      detail,
      url: options.action
    });
    console.log("我来自" + options.action)
    this.GETlist()
  },
  // 职业点击
  categoryClick(e) {
    var app = getApp();
    app.globalData.occupation = e.currentTarget.dataset.val
    console.log(app.globalData.occupation)
    wx.navigateBack();
  },
  empty(){
    var app = getApp();
    app.globalData.occupation='职业'
    wx.navigateBack();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  GETlist() {
    wx.request({
      url: 'http://localhost:8081/Recruit/api/occupation',
      method: 'GET',
      success: (res) => {
        let info = res.data
        if (info.status == 0) {
          let category = info.first;
          let categoryList = info.occupation
          this.setData({
            categoryList,
            category
          })
          //this.category = info.result[0].list.slice(0, 10) //每项分类数据中前十类功能
        } else {
          console.log(info.msg)
        }
        // console.log(info)
      }
    })
  },

})