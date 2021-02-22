import * as React from 'react';

import { WordCloud } from 'lz-cps';

const JsonList = [
  {
    name: '花鸟市场',
    value: 1446,
  },
  {
    name: '汽车',
    value: 928,
  },
  {
    name: '视频',
    value: 906,
  },
  {
    name: '电视',
    value: 825,
  },
  {
    name: 'Lover Boy 88',
    value: 514,
  },
  {
    name: '动漫',
    value: 486,
  },
  {
    name: '音乐',
    value: 5999,
  },
  {
    name: '直播',
    value: 163,
  },
  {
    name: '广播电台',
    value: 86,
  },
  {
    name: '戏曲曲艺',
    value: 17,
  },
  {
    name: '演出票务',
    value: 6,
  },
  {
    name: '给陌生的你听',
    value: 1,
  },
  {
    name: '资讯',
    value: 1437,
  },
  {
    name: '商业财经',
    value: 422,
  },
  {
    name: '娱乐八卦',
    value: 353,
  },
  {
    name: '军事',
    value: 331,
  },
  {
    name: '科技资讯',
    value: 313,
  },
  {
    name: '社会时政',
    value: 307,
  },
  {
    name: '时尚',
    value: 43,
  },
  {
    name: '网络奇闻',
    value: 15,
  },
  {
    name: '旅游出行',
    value: 438,
  },
  {
    name: '景点类型',
    value: 957,
  },
  {
    name: '国内游',
    value: 927,
  },
  {
    name: '远途出行方式',
    value: 908,
  },
  {
    name: '酒店',
    value: 693,
  },
  {
    name: '关注景点',
    value: 611,
  },
  {
    name: '旅游网站偏好',
    value: 512,
  },
  {
    name: '出国游',
    value: 382,
  },
  {
    name: '交通票务',
    value: 312,
  },
  {
    name: '旅游方式',
    value: 187,
  },
  {
    name: '旅游主题',
    value: 163,
  },
  {
    name: '港澳台',
    value: 104,
  },
  {
    name: '本地周边游',
    value: 3,
  },
  {
    name: '小卖家',
    value: 1331,
  },
  {
    name: '全日制学校',
    value: 941,
  },
  {
    name: '基础教育科目',
    value: 585,
  },
  {
    name: '考试培训',
    value: 473,
  },
  {
    name: '语言学习',
    value: 358,
  },
  {
    name: '留学',
    value: 246,
  },
  {
    name: 'K12课程培训',
    value: 207,
  },
  {
    name: '艺术培训',
    value: 194,
  },
  {
    name: '技能培训',
    value: 104,
  },
  {
    name: 'IT培训',
    value: 87,
  },
  {
    name: '高等教育专业',
    value: 63,
  },
  {
    name: '家教',
    value: 48,
  },
  {
    name: '体育培训',
    value: 23,
  },
  {
    name: '职场培训',
    value: 5,
  },
  {
    name: '金融财经',
    value: 1328,
  },
  {
    name: '银行',
    value: 765,
  },
  {
    name: '股票',
    value: 452,
  },
  {
    name: '保险',
    value: 415,
  },
  {
    name: '贷款',
    value: 253,
  },
  {
    name: '基金',
    value: 211,
  },
  {
    name: '信用卡',
    value: 180,
  },
  {
    name: '外汇',
    value: 138,
  },
  {
    name: 'P2P',
    value: 116,
  },
  {
    name: '贵金属',
    value: 98,
  },
  {
    name: '债券',
    value: 93,
  },
  {
    name: '网络理财',
    value: 92,
  },
  {
    name: '信托',
    value: 90,
  },
  {
    name: '征信',
    value: 76,
  },
  {
    name: '期货',
    value: 76,
  },
  {
    name: '公积金',
    value: 40,
  },
  {
    name: '银行理财',
    value: 36,
  },
  {
    name: '银行业务',
    value: 30,
  },
  {
    name: '典当',
    value: 7,
  },
  {
    name: '海外置业',
    value: 1,
  },
  {
    name: '汽车',
    value: 1309,
  },
  {
    name: '汽车档次',
    value: 965,
  },
  {
    name: '汽车品牌',
    value: 900,
  },
  {
    name: '汽车车型',
    value: 727,
  },
  {
    name: '购车阶段',
    value: 461,
  },
  {
    name: '二手车',
    value: 309,
  },
  {
    name: '汽车美容',
    value: 260,
  },
  {
    name: '新能源汽车',
    value: 173,
  },
  {
    name: '汽车维修',
    value: 155,
  },
  {
    name: '租车服务',
    value: 136,
  },
  {
    name: '车展',
    value: 121,
  },
  {
    name: '违章查询',
    value: 76,
  },
  {
    name: '汽车改装',
    value: 62,
  },
  {
    name: '汽车用品',
    value: 37,
  },
  {
    name: '路况查询',
    value: 32,
  },
  {
    name: '汽车保险',
    value: 28,
  },
  {
    name: '陪驾代驾',
    value: 4,
  },
  {
    name: '网络购物',
    value: 1275,
  },
  {
    name: '做我的猫',
    value: 1088,
  },
  {
    name: '只想要你知道',
    value: 907,
  },
  {
    name: '团购',
    value: 837,
  },
  {
    name: '比价',
    value: 201,
  },
  {
    name: '海淘',
    value: 195,
  },
  {
    name: '移动APP购物',
    value: 179,
  },
  {
    name: '支付方式',
    value: 119,
  },
  {
    name: '代购',
    value: 43,
  },
  {
    name: '体育健身',
    value: 1234,
  },
  {
    name: '体育赛事项目',
    value: 802,
  },
  {
    name: '运动项目',
    value: 405,
  },
  {
    name: '体育类赛事',
    value: 337,
  },
  {
    name: '健身项目',
    value: 199,
  },
];

const Demo: React.FC = () => {
  return (
    <>
      <WordCloud data={JsonList} />
    </>
  );
};

export default Demo;
