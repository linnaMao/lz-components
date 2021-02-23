import * as React from 'react';
import classnames from 'classnames';
import { message, Tooltip } from 'antd';
import { CopyOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

import styles from './index.less';

interface ICopyProps {
  isIcon?: boolean;
}

const Copy: React.FC<ICopyProps> = props => {
  const { children } = props;
  const [copied, setCopied] = React.useState(false);
  const [toolTip, setToolTip] = React.useState('复制');
  const className = classnames(styles.copy, { [styles.copied]: copied });

  const handleCopyClick = () => {
    const text = document.getElementById('text');
    try {
      const range = document.createRange();

      window.getSelection()?.removeAllRanges();
      range.selectNode(text as HTMLSpanElement);
      window.getSelection()?.addRange(range);
      document.execCommand('copy');

      window.getSelection()?.removeAllRanges();
      setCopied(true);
      setToolTip('复制成功');
      window.setTimeout(() => {
        setCopied(false);
        setToolTip('复制');
      }, 3000);
    } catch (error) {
      message.error('复制失败,请手动复制');
    }
  };

  return (
    <>
      <span id="text">{children}</span>
      <Tooltip title={toolTip}>
        <a href="#" onClick={handleCopyClick} className={className}>
          {copied ? <CheckOutlined /> : <CopyOutlined />}
        </a>
      </Tooltip>
    </>
  );
};

export default Copy;
