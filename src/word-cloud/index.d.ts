import * as React from 'react';
import 'echarts-wordcloud';
declare type TData = {
  name: string;
  value: number;
};
interface IWordCloudProps {
  data: TData[];
}
declare const WordCloud: React.FC<IWordCloudProps>;
export default WordCloud;
