import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Медицинский центр "Ама"
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
          Приветствуем вас на сайте медицинского центра "Ама". Мы предоставляем качественные медицинские услуги.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link 
            href="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md text-center"
          >
            Войти
          </Link>
          <Link 
            href="/register" 
            className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium py-2 px-6 rounded-md text-center"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
} 