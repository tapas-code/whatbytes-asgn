import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface ComparisonGraphProps {
  percentile: number;
}

const data = [
  { percentile: 0, value: 10 },
  { percentile: 10, value: 15 },
  { percentile: 20, value: 20 },
  { percentile: 30, value: 25 },
  { percentile: 40, value: 40 },
  { percentile: 50, value: 55 },
  { percentile: 60, value: 75 },
  { percentile: 70, value: 90 },
  { percentile: 80, value: 65 },
  { percentile: 90, value: 40 },
  { percentile: 100, value: 20 },
];

export default function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Comparison Graph</h3>
      <p className="text-gray-600 mb-6">
        You scored <span className="font-semibold">{percentile}% percentile</span> which is lower than the
        average percentile 72% of all the engineers who took this assessment
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E40AF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#1E40AF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="percentile"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis hide />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1E40AF"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}