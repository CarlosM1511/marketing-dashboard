import { KPICard } from './components/KPICard';
import { PerformanceChart } from './components/PerformanceChart';
import { DataTable } from './components/DataTable';
import { kpiData, channelPerformanceData, dataSourcePerformanceData, campaignPerformanceData } from './data/mockData';
import { FiPieChart, FiDatabase, FiFolder } from 'react-icons/fi';
import './index.css';

function App() {
  const channelColumns = [
    { key: 'channel', label: 'Channel' },
    { key: 'impressions', label: 'Impressions', isBar: true, barPercentKey: 'barPercent' },
    { key: 'impDelta', label: '% Δ', isDelta: true, positiveKey: 'impPositive' },
    { key: 'ctr', label: 'CTR', isBar: true, barPercentKey: 'barPercent' },
    { key: 'ctrDelta', label: '% Δ', isDelta: true, positiveKey: 'ctrPositive' }
  ];

  const sourceColumns = [
    { key: 'source', label: 'Source' },
    { key: 'impressions', label: 'Impressions', isBar: true, barPercentKey: 'barPercent' },
    { key: 'impDelta', label: '% Δ', isDelta: true, positiveKey: 'impPositive' },
    { key: 'ctr', label: 'CTR', isBar: true, barPercentKey: 'barPercent' },
    { key: 'ctrDelta', label: '% Δ', isDelta: true, positiveKey: 'ctrPositive' }
  ];

  const campaignColumns = [
    { key: 'campaign', label: 'Campaign' },
    { key: 'impressions', label: 'Impressions' },
    { key: 'impDelta', label: '% Δ', isDelta: true, positiveKey: 'impPositive' },
    { key: 'ctr', label: 'CTR', isBar: true, barPercentKey: 'barPercent' },
    { key: 'ctrDelta', label: '% Δ', isDelta: true, positiveKey: 'ctrPositive' }
  ];

  return (
    <div className="w-full h-screen p-4 xl:p-6 bg-theme-bg overflow-hidden flex flex-col">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 h-full min-h-0">
        
        {/* Left Side: KPIs (4x2) + Chart */}
        <div className="xl:col-span-7 2xl:col-span-8 flex flex-col gap-4 min-h-0">
          
          {/* Top 8 KPIs in a 4x2 grid to match chart width */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 shrink-0">
            {kpiData.map((kpi, index) => (
              <KPICard 
                key={index} 
                title={kpi.title}
                value={kpi.value}
                change={kpi.change}
                changeIsPositive={kpi.changeIsPositive}
                sparklineData={kpi.sparklineData}
              />
            ))}
          </div>

          {/* Bottom Chart */}
          <div className="flex-1 min-h-[250px]">
            <PerformanceChart />
          </div>
        </div>

        {/* Right Side: 3 Performances stacked vertically matching the full height */}
        <div className="xl:col-span-5 2xl:col-span-4 flex flex-col gap-3 h-full min-h-0">
          <div className="flex-1 min-h-0">
            <DataTable 
              title="Channel Performance" 
              icon={<FiPieChart size={16} />} 
              columns={channelColumns} 
              data={channelPerformanceData} 
            />
          </div>
          <div className="flex-[1.5] min-h-0">
            <DataTable 
              title="Data Source Performance" 
              icon={<FiDatabase size={16} />} 
              columns={sourceColumns} 
              data={dataSourcePerformanceData} 
            />
          </div>
          <div className="flex-[1.8] min-h-0">
            <DataTable 
              title="Campaign Performance" 
              icon={<FiFolder size={16} />} 
              columns={campaignColumns} 
              data={campaignPerformanceData} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
