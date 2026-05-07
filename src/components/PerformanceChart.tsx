import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { channelTrendsData } from '../data/mockData';
import { FiArrowUpRight, FiBarChart2, FiMoreVertical, FiFilter } from 'react-icons/fi';

export const PerformanceChart: React.FC = () => {
  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return '0';
    return `${tickItem / 1000000}M`;
  };

  const renderCustomLegend = (props: any) => {
    const { payload } = props;
    return (
      <ul className="flex items-center space-x-6 text-xs text-gray-500">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center">
            <span className="w-3 h-0.5 mr-2" style={{ backgroundColor: entry.color }}></span>
            {entry.value === 'Programmatic' ? 'Programmatic' : 
             entry.value === 'PaidSearch' ? 'Paid Search' : 
             entry.value === 'PaidSocial' ? 'Paid Social' : 'Organic'}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="card h-full flex flex-col p-4 w-full">
      <div className="flex justify-between items-center mb-4">
         <div className="flex-1"></div> {/* Spacer for left side if title ever exists */}
         <div className="flex items-center space-x-3 text-gray-500 cursor-pointer">
           <FiArrowUpRight size={18} className="hover:text-gray-800 transition-colors" />
           <FiBarChart2 size={18} className="hover:text-gray-800 transition-colors" />
           <FiFilter size={18} className="hover:text-gray-800 transition-colors" />
           <FiMoreVertical size={18} className="hover:text-gray-800 transition-colors" />
         </div>
      </div>
      
      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={channelTrendsData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f0f0f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#888' }} dy={10} />
            <YAxis tickFormatter={formatYAxis} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#888' }} dx={-10} ticks={[0, 2500000, 5000000, 7500000, 10000000, 12500000, 15000000]} />
            <Tooltip />
            <Legend content={renderCustomLegend} verticalAlign="top" height={40} />
            <Line type="linear" dataKey="Programmatic" stroke="#8b5cf6" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
            <Line type="linear" dataKey="PaidSearch" stroke="#ec4899" strokeWidth={2} dot={false} />
            <Line type="linear" dataKey="PaidSocial" stroke="#3b82f6" strokeWidth={2} dot={false} />
            <Line type="linear" dataKey="Organic" stroke="#f97316" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
