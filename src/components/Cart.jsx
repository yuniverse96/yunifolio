import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { useEffect, useState } from 'react';

const data02 = [
  {title: 'HTML', value: 300, color: '#f4b8a7', txtColor:'#e34f26' },
  {title: 'CSS', value: 300, color: '#a3c8f5', txtColor:'#1572B6' },
  {title: 'JS', value: 300, color: '#f9f1a5', txtColor:'#f7df1e' },
  {title: 'JQuery', value: 300, color: '#6bb0e2', txtColor:'#073f68' },
  {title: 'REACT', value: 100, color: '#b4ecff', txtColor:'#61dafb' }
];

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
  const entry = data02[index];
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={14}
      fill={entry.txtColor}
    >
      {entry.title}
    </text>
  );
};

export default function Chart({ visible }) {
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    if (visible) {
      // visible이 true 될 때마다 key 증가 → 강제 재마운트
      setChartKey(prev => prev + 1);
    }
  }, [visible]);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease' }}>
      {visible && (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart key={chartKey}>
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              label={renderCustomLabel}
              labelLine={false}
              isAnimationActive={true}
              animationDuration={1000}
            >
              {data02.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
