import * as React from 'react';
import styles from './index.less';
import { THotItem } from '../..';

interface IHotCardProps {
  data: THotItem;
  index: number;
}

const HotCard: React.FC<IHotCardProps> = props => {
  const { data, index } = props;

  return (
    <div className={styles.hotCard} key={data.id}>
      <div className={styles.image}>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.info}>
          <span>{data.video}</span>
          <span>媒资: {data.mediaCount}</span>
        </div>
      </div>
      <div className={styles.number}>
        <div className={styles.index}>{`0${index}`.slice(-2)}</div>
        <div className={styles.hotNum}>
          <i />
          <span>{data.hotNum}</span>
        </div>
      </div>
    </div>
  );
};

export default HotCard;
