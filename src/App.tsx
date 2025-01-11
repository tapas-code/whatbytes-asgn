import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import QuickStats from "./components/QuickStats";
import ComparisonGraph from "./components/ComparisonGraph";
import SyllabusAnalysis from "./components/SyllabusAnalysis";
import QuestionAnalysis from "./components/QuestionAnalysis";
import UpdateModal from "./components/UpdateModal";
import HeaderTop from "./components/HeaderTop";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState({
    rank: 4,
    percentile: 30,
    score: 10,
  });

  const handleUpdateStats = (newValues: {
    rank: number;
    percentile: number;
    score: number;
  }) => {
    setStats(newValues);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8">
      <HeaderTop />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="md:col-span-2">
            <Header onUpdate={() => setIsModalOpen(true)} />
            <QuickStats stats={stats} />
            <ComparisonGraph percentile={stats.percentile} />
          </div>

          <div className="space-y-4 md:space-y-8">
            <SyllabusAnalysis />
            <QuestionAnalysis score={stats.score} />
          </div>
        </div>

        <UpdateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleUpdateStats}
          initialValues={stats}
        />
      </main>
    </div>
  );
}

export default App;
