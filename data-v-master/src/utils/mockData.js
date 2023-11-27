import json from '../json/json'
const mockData = {
  // 横向柱形图
  regionData: {
    regions: [
      { id: 1, name: "华北", value: utils.createRandom(1, 100) },
      { id: 2, name: "东北", value: utils.createRandom(1, 100) },
      { id: 3, name: "华东", value: utils.createRandom(1, 100) },
      { id: 4, name: "中南", value: utils.createRandom(1, 100) },
      { id: 5, name: "西南", value: utils.createRandom(1, 100) },
      { id: 6, name: "西北", value: utils.createRandom(1, 100) },
    ]
  },
  // 纵向图
  verData: {
    servers: [
      { id: 1, name: "服务1", value: utils.createRandom(1, 100) },
      { id: 2, name: "服务2", value: utils.createRandom(1, 100) },
      { id: 3, name: "服务3", value: utils.createRandom(1, 100) },
      { id: 4, name: "服务4", value: utils.createRandom(1, 100) },
      { id: 5, name: "服务5", value: utils.createRandom(1, 100) },
      { id: 6, name: "服务6", value: utils.createRandom(1, 100) },
    ] 
  },
  // 雷达图
  riskData: {
    risks: [
      { id: 1, name: "华北", value: utils.createRandom(1, 100) },
      { id: 2, name: "东北", value: utils.createRandom(1, 100) },
      { id: 3, name: "华东", value: utils.createRandom(1, 100) },
      { id: 4, name: "中南", value: utils.createRandom(1, 100) },
      { id: 5, name: "西南", value: utils.createRandom(1, 100) },
      { id: 6, name: "西北", value: utils.createRandom(1, 100) },
    ]
  },
  // 环形图
  abnormalData: {
    abnormals: [
      { id: 1, name: "华北", value: utils.createRandom(300, 500) },
      { id: 2, name: "东北", value: utils.createRandom(300, 500) },
      { id: 3, name: "华东", value: utils.createRandom(300, 500) },
      { id: 4, name: "中南", value: utils.createRandom(300, 500) },
      { id: 5, name: "西南", value: utils.createRandom(300, 500) },
      { id: 6, name: "西北", value: utils.createRandom(300, 500) },
    ]
  },
  // 关系图
  relationData: {
    relations: [
      {id:1,name:'上级平台1',source:'上级平台1',speed:utils.createRandom(1, 200),target:'数据中心',value:[0,300]},
      {id:2,name:'上级平台2',source:'上级平台2',speed:utils.createRandom(1, 200),target:'数据中心',value:[0,100]},
      {id:3,name:'子级平台1',source:'数据中心',speed:utils.createRandom(1, 200),target:'子级平台1',value:[100,100]},
      {id:4,name:'子级平台2',source:'数据中心',speed:utils.createRandom(1, 200),target:'子级平台2',value:[100,300]},
      {id:0,name:'数据中心',speed:utils.createRandom(1, 200),value:[50,200]},
    ]
  },
  // 文档云图
  wordCloudData: {
    datas: [
      {value:utils.createRandom(1, 100),name:'企联网'},
      {value:utils.createRandom(1, 100),name:'智农通'},
      {value:utils.createRandom(1, 100),name:'OPPO'},
      {value:utils.createRandom(1, 100),name:'HONOR'},
      {value:utils.createRandom(1, 100),name:'红米'},
      {value:utils.createRandom(1, 100),name:'小米'},
      {value:utils.createRandom(1, 100),name:'华为'},
      {value:utils.createRandom(1, 100),name:'苹果'},
      {value:utils.createRandom(1, 100),name:'魅族'},
      {value:utils.createRandom(1, 100),name:'诺基亚'},
      {value:utils.createRandom(1, 100),name:'美图'},
      {value:utils.createRandom(1, 100),name:'锤子'},
      {value:utils.createRandom(1, 100),name:'SAMSUNG'},
      {value:utils.createRandom(1, 100),name:'金立'},
    ]
  },
  // 总览数据
  totalData: {
    db:utils.createRandom(10000, 90000),
    hb:utils.createRandom(10000, 90000),
    hd:utils.createRandom(10000, 90000),
    total:utils.createRandom(100000, 9000000),
    xb:utils.createRandom(10000, 90000),
    xn:utils.createRandom(10000, 90000),
    zn:utils.createRandom(10000, 90000),
  },
  // 地图
  mapData: {
    categoryData: {
      2019: [
        { name: '北京', value: utils.createRandom(1, 100) },
        { name: '天津', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '内蒙古', value: utils.createRandom(1, 100) },
        { name: '辽宁', value: utils.createRandom(1, 100) },
        { name: '吉林', value: utils.createRandom(1, 100) },
        { name: '黑龙江', value: utils.createRandom(1, 100) },
        { name: '上海', value: utils.createRandom(1, 100) },
        { name: '江苏', value: utils.createRandom(1, 100) },
        { name: '安徽', value: utils.createRandom(1, 100) },
        { name: '浙江', value: utils.createRandom(1, 100) },
        { name: '福建', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '山东', value: utils.createRandom(1, 100) },
        { name: '河南', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '云南', value: utils.createRandom(1, 100) },
      ],
      2020: [
        { name: '北京', value: utils.createRandom(1, 100) },
        { name: '天津', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '内蒙古', value: utils.createRandom(1, 100) },
        { name: '辽宁', value: utils.createRandom(1, 100) },
        { name: '吉林', value: utils.createRandom(1, 100) },
        { name: '黑龙江', value: utils.createRandom(1, 100) },
        { name: '上海', value: utils.createRandom(1, 100) },
        { name: '江苏', value: utils.createRandom(1, 100) },
        { name: '安徽', value: utils.createRandom(1, 100) },
        { name: '浙江', value: utils.createRandom(1, 100) },
        { name: '福建', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '山东', value: utils.createRandom(1, 100) },
        { name: '河南', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '云南', value: utils.createRandom(1, 100) },
      ],
      2021: [
        { name: '北京', value: utils.createRandom(1, 100) },
        { name: '天津', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '内蒙古', value: utils.createRandom(1, 100) },
        { name: '辽宁', value: utils.createRandom(1, 100) },
        { name: '吉林', value: utils.createRandom(1, 100) },
        { name: '黑龙江', value: utils.createRandom(1, 100) },
        { name: '上海', value: utils.createRandom(1, 100) },
        { name: '江苏', value: utils.createRandom(1, 100) },
        { name: '安徽', value: utils.createRandom(1, 100) },
        { name: '浙江', value: utils.createRandom(1, 100) },
        { name: '福建', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '山东', value: utils.createRandom(1, 100) },
        { name: '河南', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '云南', value: utils.createRandom(1, 100) },
      ],
      2022: [
        { name: '北京', value: utils.createRandom(1, 100) },
        { name: '天津', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '内蒙古', value: utils.createRandom(1, 100) },
        { name: '辽宁', value: utils.createRandom(1, 100) },
        { name: '吉林', value: utils.createRandom(1, 100) },
        { name: '黑龙江', value: utils.createRandom(1, 100) },
        { name: '上海', value: utils.createRandom(1, 100) },
        { name: '江苏', value: utils.createRandom(1, 100) },
        { name: '安徽', value: utils.createRandom(1, 100) },
        { name: '浙江', value: utils.createRandom(1, 100) },
        { name: '福建', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '山东', value: utils.createRandom(1, 100) },
        { name: '河南', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '云南', value: utils.createRandom(1, 100) },
      ],
      2023: [
        { name: '北京', value: utils.createRandom(1, 100) },
        { name: '天津', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '内蒙古', value: utils.createRandom(1, 100) },
        { name: '辽宁', value: utils.createRandom(1, 100) },
        { name: '吉林', value: utils.createRandom(1, 100) },
        { name: '黑龙江', value: utils.createRandom(1, 100) },
        { name: '上海', value: utils.createRandom(1, 100) },
        { name: '江苏', value: utils.createRandom(1, 100) },
        { name: '安徽', value: utils.createRandom(1, 100) },
        { name: '浙江', value: utils.createRandom(1, 100) },
        { name: '福建', value: utils.createRandom(1, 100) },
        { name: '山西', value: utils.createRandom(1, 100) },
        { name: '山东', value: utils.createRandom(1, 100) },
        { name: '河南', value: utils.createRandom(1, 100) },
        { name: '河北', value: utils.createRandom(1, 100) },
        { name: '云南', value: utils.createRandom(1, 100) },
      ]
    },
    colors: ['#1DE9B6', '#F46E36', '#04B9FF', '#5DBD32', '#FFC809',
      '#FB95D5', 'BDA29A', '6E7074', '#546570','C4CCD3'],
    topData: {
      2019: [
        {name:"天津",value:[117.2,39.12,84.1]},
        {name:"河北",value:[114.52,38.05,68.1]},
        {name:"河南",value:[113.62,34.75,50.1]},
        {name:"山东",value:[116.98,36.67,80.1]},
        {name:"安徽",value:[117.4219,38.4189,60]},
      ],
      2020: [
        {name:"山西",value:[112.55,37.87,84.1]},
        {name:"内蒙",value:[111.73,40.83,68.1]},
        {name:"辽宁",value:[123.43,41.8,50.1]},
        {name:"山东",value:[116.98,36.67,80.1]},
        {name:"吉林",value:[125.32,43.9,60]},
      ],
      2021: [
        {name:"天津",value:[117.2,39.12,84.1]},
        {name:"河北",value:[114.52,38.05,68.1]},
        {name:"河南",value:[113.62,34.75,50.1]},
        {name:"山东",value:[116.98,36.67,80.1]},
        {name:"安徽",value:[117.4219,39.4189,60]},
      ],
      2022: [
        {name:"重庆",value:[106.55,29.57,84.1]},
        {name:"四川",value:[104.07,30.67,68.1]},
        {name:"贵州",value:[106.63,26.65,50.1]},
        {name:"云南",value:[102.72,25.05,80.1]},
        {name:"广西",value:[108.37,22.82,60]},
      ],
      2023: [
        {name:"陕西",value:[108.93,34.27,84.1]},
        {name:"甘肃",value:[103.82,36.07,68.1]},
        {name:"宁夏",value:[106.28,38.47,50.1]},
        {name:"新疆",value:[87.62,43.82,80.1]},
        {name:"云南",value:[102.72,25.05,60]},
      ]
    },
    voltageLevel: ['2019', '2020', '2021', '2022', '2023'],
  }
}

export default mockData