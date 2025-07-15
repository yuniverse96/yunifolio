import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

const data02 = [
  { name: 'A1', value: 300, color: '#f4b8a7', title: 'HTML' },
  { name: 'A2', value: 300, color: '#a3c8f5', title: 'CSS' },
  { name: 'A3', value: 300, color: '#f9f1a5', title: 'JS' },
  { name: 'A4', value: 100, color: '#b4ecff', title: 'REACT' }
];

// label에 들어갈 텍스트 정의
const renderCustomLabel = ({ index, x, y }) => {
    const entry = data02[index];
    return (
      <text className='cart_label'
        x={x} 
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#333"
        fontSize={14}
      >
       {entry.title}
      </text>
    );
  };

export default function Example() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          label={renderCustomLabel} // 🔥 여기에서 커스텀 함수 사용
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || '#ccc'} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
