export default function SyllabusAnalysis() {
  const topics = [
    { name: 'HTML Tools, Forms, History', progress: 80, color: 'bg-blue-500' },
    { name: 'Tags & References in HTML', progress: 60, color: 'bg-orange-500' },
    { name: 'Tables & References in HTML', progress: 24, color: 'bg-red-500' },
    { name: 'Tables & CSS Bascis', progress: 96, color: 'bg-green-500' },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-6">Syllabus Wise Analysis</h3>
      <div className="space-y-6">
        {topics.map((topic) => (
          <div key={topic.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">{topic.name}</span>
              <span className="text-blue-600">{topic.progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div 
                className={`h-full rounded-full ${topic.color}`}
                style={{ width: `${topic.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}