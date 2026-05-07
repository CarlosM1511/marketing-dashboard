import { FiArrowUp, FiArrowDown, FiBarChart2, FiFilter, FiMoreVertical } from 'react-icons/fi';

interface Column {
  key: string;
  label: string;
  isBar?: boolean;
  isDelta?: boolean;
  positiveKey?: string;
  barPercentKey?: string;
}

interface DataTableProps {
  title: string;
  icon: React.ReactNode;
  columns: Column[];
  data: any[];
}

export const DataTable: React.FC<DataTableProps> = ({ title, icon, columns, data }) => {
  return (
    <div className="card p-3 flex flex-col h-full w-full max-h-full">
      <div className="flex items-center mb-2 shrink-0">
        <div className="bg-theme-purple w-7 h-7 rounded-full flex items-center justify-center text-white mr-2 shrink-0">
          {icon}
        </div>
        <div className="font-semibold text-[13px] lg:text-sm text-gray-800">{title}</div>
        <div className="ml-auto flex items-center gap-2 text-gray-400 cursor-pointer">
          <FiBarChart2 size={16} className="hover:text-gray-700 transition" />
          <FiFilter size={16} className="hover:text-gray-700 transition" />
          <FiMoreVertical size={16} className="hover:text-gray-700 transition" />
        </div>
      </div>
      
      <div className="w-full flex-1 min-h-0 overflow-y-auto">
        <table className="w-full border-collapse relative">
          <thead className="sticky top-0 bg-white z-20">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="table-th">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="group hover:bg-gray-50/50 transition-colors">
                {columns.map((col, colIndex) => {
                  const value = row[col.key];

                  if (col.isDelta) {
                    const isPositive = typeof col.positiveKey !== 'undefined' ? row[col.positiveKey] : null;
                    return (
                      <td key={colIndex} className="table-td">
                        <div className={`flex items-center gap-0.5 text-xs font-medium ${isPositive === true ? 'text-theme-up' : isPositive === false ? 'text-theme-down' : 'text-gray-400'}`}>
                          {value}
                          {isPositive === true && <FiArrowUp size={10} />}
                          {isPositive === false && <FiArrowDown size={10} />}
                        </div>
                      </td>
                    );
                  }

                  if (col.isBar) {
                    const percent = col.barPercentKey ? row[col.barPercentKey] : 0;
                    return (
                      <td key={colIndex} className="table-td relative z-0 w-[80px]">
                        <div className="bar-bg" style={{ width: `calc(${percent}% - 8px)` }}></div>
                        <span className="relative z-20 font-medium text-gray-700">{value}</span>
                      </td>
                    );
                  }

                  return (
                    <td key={colIndex} className={`table-td ${colIndex === 0 ? 'text-gray-500 max-w-[120px] truncate' : 'text-gray-700 font-medium'}`}>
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
