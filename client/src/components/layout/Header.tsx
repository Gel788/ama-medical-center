import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            AMA
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Услуги
            </Link>
            <Link href="/doctors" className="text-gray-700 hover:text-blue-600">
              Врачи
            </Link>
            <Link href="/prices" className="text-gray-700 hover:text-blue-600">
              Цены
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              О клинике
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-blue-600">
              Контакты
            </Link>
          </nav>
          <div className="flex items-center">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Личный кабинет
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 