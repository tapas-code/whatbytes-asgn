import { Trophy, ClipboardCheck } from 'lucide-react';

interface QuickStatsProps {
  stats: {
    rank: number;
    percentile: number;
    score: number;
  };
}

export default function QuickStats({ stats }: QuickStatsProps) {
  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Quick Statistics</h3>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex items-center gap-4">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <div>
            <div className="text-2xl font-bold">{stats.rank}</div>
            <div className="text-gray-500 text-sm">YOUR RANK</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-200 rounded" />
          <div>
            <div className="text-2xl font-bold">{stats.percentile}%</div>
            <div className="text-gray-500 text-sm">PERCENTILE</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ClipboardCheck className="w-8 h-8 text-green-500" />
          <div>
            <div className="text-2xl font-bold">{stats.score}/15</div>
            <div className="text-gray-500 text-sm">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
}