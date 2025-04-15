import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function DashboardLayout({ children, title = 'Личный кабинет' }: DashboardLayoutProps) {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 bg-white dark:bg-gray-800">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Личный кабинет</h1>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          <main className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h1>
              <div className="mt-6">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 