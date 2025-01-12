import { BarChart2, GraduationCap, FileText, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-full md:w-64 md:min-h-screen bg-white border-r border-gray-200 p-4 md:p-6">
      <div className="md:mb-10 flex justify-between ">
        <h1 className="text-xl font-bold">WhatBytes</h1>
      <div className='md:hidden'>
        <Menu />
      </div>
      </div>

      
      <nav className="hidden md:block space-y-1">
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