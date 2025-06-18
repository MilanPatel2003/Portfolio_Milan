import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface RadarChartData {
  subject: string;
  value: number;
}

interface RadarChartProps {
  data: RadarChartData[];
  title?: string;
}

const RadarChartComponent: React.FC<RadarChartProps> = ({ data, title }) => {
  return (
    <div className="w-full h-[500px] p-4">
      {title && (
        <span className="text-xl font-medium text-white mb-4 text-center">
          {title}
        </span>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
          />
          <PolarRadiusAxis
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Proficiency"
            dataKey="value"
            stroke="rgba(255, 255, 255, 0.8)"
            fill="rgba(255, 255, 255, 0.2)"
            fillOpacity={0.4}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              fontSize: '12px',
              padding: '8px 12px',
            }}
            formatter={(value: number) => [`${value}%`, 'Proficiency']}
            cursor={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent; 