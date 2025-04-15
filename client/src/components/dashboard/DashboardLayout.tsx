import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  UserCircleIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Профиль', href: '/dashboard', icon: UserCircleIcon },
  { name: 'Записи', href: '/dashboard/appointments', icon: CalendarIcon },
  { name: 'История', href: '/dashboard/history', icon: ClipboardDocumentListIcon },
  { name: 'Оплата', href: '/dashboard/payment', icon: CreditCardIcon },
  { name: 'Настройки', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Запись на прием подтверждена', time: '10 минут назад' },
    { id: 2, message: 'Напоминание о приеме завтра', time: '1 час назад' },
  ]);

  const handleLogout = () => {
    // Здесь будет логика выхода
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center flex-shrink-0 px-4">
                <button
                  onClick={() => router.push('/')}
      {/* Боковая панель */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-200 ease-in-out z-30`}
      >
        <div className="h-full w-64 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-16 px-4 bg-blue-600 dark:bg-blue-800">
              <h1 className="text-xl font-bold text-white">Личный кабинет</h1>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </a>
                );
              })}
            </nav>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className={`md:pl-64 ${isSidebarOpen ? 'pl-64' : 'pl-0'} transition-all duration-200`}>
        <div className="sticky top-0 z-10 flex h-16 bg-white dark:bg-gray-800 shadow">
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <button
                type="button"
                className="md:hidden px-4 text-gray-500 focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <span className="sr-only">Открыть меню</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Уведомления</span>
                <BellIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.push('/')}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <HomeIcon className="h-6 w-6" />
                </button>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
              </div>
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <BellIcon className="h-6 w-6" />
              </button>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 