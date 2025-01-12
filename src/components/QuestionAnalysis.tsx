import { PieChart, Pie, Cell } from 'recharts';
interface QuestionAnalysisProps {
  score: number;
}

export default function QuestionAnalysis({ score }: QuestionAnalysisProps) {
  const total = 15;
  const data = [
    { name: 'Correct', value: score },
    { name: 'Incorrect', value: total - score }
  ];
  
  const COLORS = ['#1E40AF', '#E5E7EB'];

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Question Analysis</h3>
        <span className="text-blue-600">{score}/15</span>
      </div>
      <p className="text-gray-600 mb-6">
        You scored {score} question correct out of 15. However it still needs some improvements
      </p>
      <div className="relative w-48 h-48 mx-auto">
        <PieChart width={192} height={192}>
          <Pie
            data={data}
            cx={96}
            cy={96}
            innerRadius={60}
            outerRadius={80}
            fill="#1E40AF"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2">🎯</div>
            <div className="text-sm text-gray-600">Target</div>
          </div>
        </div>
      </div>
    </div>
  );
}