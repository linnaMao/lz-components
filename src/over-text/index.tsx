import * as React from 'react';

interface IOverTextProps {
  data: string;
  rows?: number;
  suffix?: string;
  one?: boolean;
}

const END_ELLIPSIS = '...';
const EXTRA_OPERATE = '更多';

const pxToNumber = (value: string | null): number => {
  if (!value) return 0;
  const match = value.match(/^\d*(\.\d*)?/);

  return match ? Number(match[0]) : 0;
};

const OverText: React.FC<IOverTextProps> = props => {
  const { data, rows = 2, one } = props;
  const [more, setMore] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (rows && rows! < 1) {
      throw new Error('错误：高度不能小于1');
    }
  }, [rows]);

  React.useEffect(() => {
    if (!ref.current) return;

    const current = ref?.current;
    const offsetHeight = current.offsetHeight;
    const originStyle = window.getComputedStyle(current);
    const originHeight = pxToNumber(originStyle.lineHeight);
    const originPaddingBottom = pxToNumber(originStyle.paddingBottom);
    const originPaddingTop = pxToNumber(originStyle.paddingTop);
    const rowsHeight = Math.round(
      originHeight * rows + originPaddingBottom + originPaddingTop,
    );
    const newItem = document.createElement('a');

    if (one) {
      const originWidth = originStyle.width;
      current.style.whiteSpace = 'noWrap';
      const wrapWidth = originStyle.width;
      if (originWidth > wrapWidth) {
        current.style.width = originWidth;
        current.style.overflow = 'hidden';
        current.style.textOverflow = 'ellipsis';
      }
      return;
    }

    if (rowsHeight > current.offsetHeight && current.textContent === data)
      return;

    if (!more) {
      const textMore = document.createTextNode(EXTRA_OPERATE);
      newItem.appendChild(textMore);
      newItem.onclick = () => setMore(true);

      const measureText = (startLoc = 0, endLoc = data.length): any => {
        const midLoc = Math.floor((startLoc + endLoc) / 2);
        const currentText = data.slice(0, midLoc);
        current.textContent = currentText;

        if (startLoc >= endLoc - 1) {
          for (let step = endLoc; step >= startLoc; step--) {
            if (current.offsetHeight > rowsHeight - originHeight) {
              const currentStepText: string =
                current.textContent!.slice(
                  0,
                  step - `${EXTRA_OPERATE}${END_ELLIPSIS}`.length,
                ) + END_ELLIPSIS;
              current.textContent = currentStepText;
              current.insertBefore(newItem, current.childNodes[1]);
            }
          }

          return;
        }

        if (current.offsetHeight > rowsHeight) {
          return measureText(startLoc, midLoc);
        }
        return measureText(midLoc, endLoc);
      };

      measureText();
    } else {
      const textNode = document.createTextNode('收起');

      newItem.appendChild(textNode);
      newItem.onclick = () => setMore(false);

      current.textContent = data;
      current.insertBefore(newItem, current.childNodes[1]);
    }
  }, [more, data, rows]);

  return (
    <>
      <div ref={ref}>{data}</div>
    </>
  );
};

export default OverText;
