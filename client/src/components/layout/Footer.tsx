import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">О нас</h3>
            <p className="text-gray-300">
              Современная медицинская клиника, предоставляющая полный спектр услуг для всей семьи.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-gray-300">
              ул. Примерная, д. 123<br />
              Телефон: +7 (123) 456-7890<br />
              Email: info@ama-clinic.ru
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services">Услуги</Link></li>
              <li><Link href="/doctors">Врачи</Link></li>
              <li><Link href="/about">О клинике</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Клиника АМА. Все права защищены.
        </div>
      </div>
    </footer>
  );
} 