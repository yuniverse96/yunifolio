

import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { useEffect, useState } from 'react';

const data02 = [
    { name: 'A1', value: 300, color: '#f4b8a7', title: 'HTML' },
    { name: 'A2', value: 300, color: '#a3c8f5', title: 'CSS' },
    { name: 'A3', value: 300, color: '#f9f1a5', title: 'JS' },
    { name: 'A4', value: 100, color: '#b4ecff', title: 'REACT' }
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
      fill="#333"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={14}
    >
     {entry.title} 
    </text>
  );
};

export default function Chart({ visible }) {
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (visible) {
      setShowChart(true);
    }
  }, [visible]);

  return (
    <div style={{ opacity: showChart ? 1 : 0, transition: 'opacity 1s ease' }}>
      {showChart && (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
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
