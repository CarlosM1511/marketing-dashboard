import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeIsPositive: boolean;
  sparklineData: number[];
}

export const KPICard: React.FC<KPICardProps> = ({ title, value, change, changeIsPositive, sparklineData }) => {
  const data = sparklineData.map((val, index) => ({ value: val, index }));
  
  return (
    <div className="card py-2 px-3">
      <div className="text-gray-500 text-[12px] text-center">{title}</div>
      <div className="text-xl font-semibold text-gray-800 text-center leading-none mt-0.5">{value}</div>
      
      <div className={`flex items-center justify-center text-[10px] mt-0.5 font-medium ${changeIsPositive ? 'text-theme-up' : 'text-theme-down'}`}>
        {changeIsPositive ? <FiArrowUp size={12} className="mr-0.5" /> : <FiArrowDown size={12} className="mr-0.5" />}
        {change}
      </div>
      
      <div className="h-14 mt-1 w-full -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 2, left: 2, bottom: 4 }}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8b5cf6" 
              strokeWidth={2} 
              dot={false} 
              isAnimationActive={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
