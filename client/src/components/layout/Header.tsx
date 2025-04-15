import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            <Link href="/">AMA</Link>
          </h1>
          <nav className="flex gap-4">
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Услуги
            </Link>
            <Link href="/doctors" className="text-gray-600 hover:text-gray-900">
              Врачи
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              О клинике
            </Link>
            <Link href="/contacts" className="text-gray-600 hover:text-gray-900">
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 