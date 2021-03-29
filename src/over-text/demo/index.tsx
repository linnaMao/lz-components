import * as React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const Demo: React.FC = () => {
  const [ellipse, setEllipse] = React.useState(true);

  const handleMoreClick = () => {
    setEllipse(false);
  };

  return (
    <>
      <Paragraph
        ellipsis={
          ellipse && {
            rows: 2,
            expandable: true,
            symbol: '更多',
            onExpand: handleMoreClick,
          }
        }
        copyable={!ellipse}
      >
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
        <a>收起</a>
      </Paragraph>
    </>
  );
};

export default Demo;
