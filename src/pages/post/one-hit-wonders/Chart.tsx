import React from 'react';

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { convertOrdinalNumber } from '../../../utils/number';

interface Props {
  data: any;
  median: number;
  color: string;
}

export default function Chart({ data, median, color }: Props) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid horizontal vertical={false} strokeDasharray="4 4" />
        <XAxis
          dataKey="year"
          stroke="#c8c8c8"
          strokeWidth={2}
          tickLine={false}
          type="number"
          domain={['dataMin', 'dataMax']}
          tick={{ fill: '#969696' }}
          ticks={[1990, 1995, 2000, 2005, 2010, 2015]}
          padding={{ left: 50, right: 50 }}
        />
        <YAxis
          reversed
          dataKey="rank"
          tickLine={false}
          axisLine={false}
          type="number"
          interval={0}
          domain={[0, 300]}
          tick={{ fill: '#969696' }}
          ticks={[20, 50, 100, 200, 300]}
          tickFormatter={(value) =>
            value === 20 ? 'TOP 20' : value === 300 ? '300+' : `${value}`
          }
          allowDataOverflow
        />
        <Tooltip isAnimationActive={false} />
        <ReferenceLine
          y={median}
          stroke="black"
          label={{
            value: `MEDIAN: ${convertOrdinalNumber(median)}`,
            position: 'insideBottomRight',
          }}
        />
        <Line
          type="step"
          dataKey="rank"
          stroke={color}
          strokeOpacity={0.5}
          strokeWidth={2}
          activeDot={{
            r: 4,
            strokeWidth: 2,
            fill: '#fff',
            stroke: color,
            opacity: 1,
          }}
          dot={{
            r: 4,
            strokeWidth: 2,
            stroke: '#fff',
            fill: color,
            opacity: 1,
          }}
          connectNulls
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
