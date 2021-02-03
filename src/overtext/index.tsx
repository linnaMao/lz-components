import * as React from 'react';
import { Tooltip } from 'antd';
interface IOverTextProps {
  data: string;
  rows?: number;
  suffix?: string;
  one?: boolean;
}

const pxToNumber = (value: string | null): number => {
  if (!value) return 0;
  const match = value.match(/^\d*(\.\d*)?/);

  return match ? Number(match[0]) : 0;
};

const OverText: React.FC<IOverTextProps> = props => {
  const { data, rows = 2, one } = props;
  const [more, setMore] = React.useState(false);
  const [tooltip, setIsTooltip] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (rows && rows! < 1) {
      throw new Error('错误：高度不能小于1');
    }
  }, [rows]);

  React.useEffect(() => {
    if (!ref.current) return;

    const current = ref?.current;
    const originStyle = window.getComputedStyle(current);
    const originHeight = pxToNumber(originStyle.lineHeight);
    const originPaddingBottom = pxToNumber(originStyle.paddingBottom);
    const originPaddingTop = pxToNumber(originStyle.paddingTop);
    const maxHeight =
      originHeight * rows! + originPaddingBottom + originPaddingTop;
    const newItem = document.createElement('a');

    if (one) {
      const originWidth = originStyle.width;
      current.style.whiteSpace = 'noWrap';
      const wrapWidth = originStyle.width;
      if (originWidth > wrapWidth) {
        setIsTooltip(true);

        current.style.width = originWidth;
        current.style.overflow = 'hidden';
        current.style.textOverflow = 'ellipsis';
      }
      return;
    }

    if (
      (maxHeight > current.offsetHeight && current.textContent === data) ||
      !rows
    ) {
      return;
    }

    setIsTooltip(true);
    if (!more) {
      const textNode = document.createTextNode('查看更多');

      newItem.appendChild(textNode);
      newItem.onclick = () => setMore(true);

      for (let step = current.textContent!.length; step > 0; step--) {
        if (current.offsetHeight > maxHeight) {
          const currentStepText: string =
            current.textContent!.slice(0, step) + '...';
          current.textContent = currentStepText;
        }

        current.insertBefore(newItem, current.childNodes[1]);
      }
    } else {
      const textNode = document.createTextNode('收起');

      newItem.appendChild(textNode);
      newItem.onclick = () => setMore(false);

      current.textContent = data;
      current.insertBefore(newItem, current.childNodes[1]);
    }
  }, [more, data, rows]);

  return <>{<div ref={ref}>{data}</div>}</>;
};

export default OverText;
