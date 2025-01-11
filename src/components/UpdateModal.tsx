import React, { useState } from 'react';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: { rank: number; percentile: number; score: number }) => void;
  initialValues: {
    rank: number;
    percentile: number;
    score: number;
  };
}

export default function UpdateModal({ isOpen, onClose, onSave, initialValues }: UpdateModalProps) {
  const [values, setValues] = useState(initialValues);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Update scores</h2>
          <img src="/html5.svg" alt="HTML5" className="w-8 h-8" />
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</div>
              <label className="font-medium">Update your Rank</label>
            </div>
            <input
              type="number"
              value={values.rank}
              onChange={(e) => setValues({ ...values, rank: Number(e.target.value) })}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</div>
              <label className="font-medium">Update your Percentile</label>
            </div>
            <input
              type="number"
              value={values.percentile}
              onChange={(e) => setValues({ ...values, percentile: Number(e.target.value) })}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">3</div>
              <label className="font-medium">Update your Current Score (out of 15)</label>
            </div>
            <input
              type="number"
              value={values.score}
              onChange={(e) => setValues({ ...values, score: Number(e.target.value) })}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            cancel
          </button>
          <button
            onClick={() => onSave(values)}
            className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 flex items-center gap-2"
          >
            save
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}