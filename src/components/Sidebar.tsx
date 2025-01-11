import { BarChart2, GraduationCap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">
      <div className="mb-10">
        <h1 className="text-xl font-bold">WhatBytes</h1>
      </div>
      
      <nav className="space-y-1">
        <Link to="/" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <BarChart2 className="w-5 h-5 mr-3" />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/skill-test" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg">
          <GraduationCap className="w-5 h-5 mr-3" />
          <span>Skill Test</span>
        </Link>
        
        <Link to="/internship" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <FileText className="w-5 h-5 mr-3" />
          <span>Internship</span>
        </Link>
      </nav>
    </div>
  );
}