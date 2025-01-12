import React from 'react';

interface HeaderProps {
  onUpdate: () => void;
}

export default function Header({ onUpdate }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8 gap-6">
      <div className="flex items-center gap-4">
        <img src="/html5.svg" alt="HTML5" className="w-12 h-12" />
        <div>
          <h2 className="md:hidden text-xl font-semibold">HTML</h2>
          <h2 className="md:block hidden text-xl font-semibold">Hyper Text Markup Language</h2>
          <p className="text-gray-600 text-sm">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
      </div>
      <button 
        onClick={onUpdate}
        className="px-6 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-900 transition-colors"
      >
        Update
      </button>
    </div>
  );
}