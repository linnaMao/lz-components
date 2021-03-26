import * as React from 'react';
import HotList from '..';
import HotCard from '../components/card';

import styles from './index.less';

const hotList = [
  {
    id: '123123',
    image:
      'http://media-dedup.oss-cn-hangzhou.aliyuncs.com/media-dedup/test/screenshots/04775710A8FD3E97F018C4E15A184C80-3.jpg',
    title: '今天你都干了什么',
    video: '高清',
    mediaCount: 13123213,
    hotNum: 12323,
    content:
      '今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么',
  },
  {
    id: '123126',
    image:
      'http://media-dedup.oss-cn-hangzhou.aliyuncs.com/media-dedup/test/screenshots/04775710A8FD3E97F018C4E15A184C80-3.jpg',
    title: '你不说也不知道',
    video: '高清',
    mediaCount: 13123213,
    hotNum: 12323,
    content:
      '今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么',
  },
  {
    id: '123124',
    image:
      'http://media-dedup.oss-cn-hangzhou.aliyuncs.com/media-dedup/test/screenshots/04775710A8FD3E97F018C4E15A184C80-3.jpg',
    title: '没什么没什么',
    video: '高清',
    mediaCount: 13123213,
    hotNum: 12323,
    content:
      '今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么',
  },
  {
    id: '123128',
    image:
      'http://media-dedup.oss-cn-hangzhou.aliyuncs.com/media-dedup/test/screenshots/04775710A8FD3E97F018C4E15A184C80-3.jpg',
    title: '你说什么',
    video: '高清',
    mediaCount: 13123213,
    hotNum: 123212313,
    content:
      '今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么',
  },
  {
    id: '123120',
    image:
      'http://media-dedup.oss-cn-hangzhou.aliyuncs.com/media-dedup/test/screenshots/04775710A8FD3E97F018C4E15A184C80-3.jpg',
    title: '我说什么',
    video: '高清',
    mediaCount: 13123213,
    hotNum: 12323,
    content:
      '今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么',
  },
  {
    id: '123129',
    image:
      'http://media-dedup.oss-cn-hangzhou.aliyuncs.com/media-dedup/test/screenshots/04775710A8FD3E97F018C4E15A184C80-3.jpg',
    title: '没什么没什么你说什么',
    video: '高清',
    mediaCount: 13123213,
    hotNum: 12323,
    content:
      '今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么今天你都干了什么',
  },
];

const Demo = () => {
  return (
    <div className={styles.hotWrap}>
      <h2>我是标题</h2>
      <div className={styles.hotList}>
        {hotList.map((item, index) => {
          return <HotCard data={item} index={index + 1} content={true} />;
        })}
      </div>
      {/* <HotList className={styles.hotList} data={hotList} /> */}
    </div>
  );
};

export default Demo;
