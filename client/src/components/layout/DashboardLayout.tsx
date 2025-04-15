import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  UserCircleIcon,
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
  CogIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Профиль', href: '/dashboard', icon: UserCircleIcon },
  { name: 'Записи', href: '/dashboard/appointments', icon: CalendarIcon },
  { name: 'История', href: '/dashboard/history', icon: ClockIcon },
  { name: 'Оплата', href: '/dashboard/payment', icon: CreditCardIcon },
  { name: 'Настройки', href: '/dashboard/settings', icon: CogIcon },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Мобильное меню */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Личный кабинет</h1>
          <button className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <BellIcon className="h-6 w-6" />
          </button>
        </div>
        {sidebarOpen && (
          <div className="fixed inset-0 z-40">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800">
              <div className="h-full overflow-y-auto">
                <nav className="px-4 py-6">
                  <div className="space-y-1">
                    {navigation.map((item) => {
                      const isActive = router.pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                            isActive
                              ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-100'
                              : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                          }`}
                        >
                          <item.icon
                            className={`mr-3 h-5 w-5 ${
                              isActive
                                ? 'text-blue-700 dark:text-blue-100'
                                : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
                            }`}
                          />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Десктопный макет */}
      <div className="hidden lg:flex lg:flex-col lg:min-h-screen">
        <div className="flex flex-1">
          {/* Боковая панель */}
          <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <div className="h-full overflow-y-auto">
              <nav className="px-4 py-6">
                <div className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = router.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-100'
                            : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                      >
                        <item.icon
                          className={`mr-3 h-5 w-5 ${
                            isActive
                              ? 'text-blue-700 dark:text-blue-100'
                              : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
                          }`}
                        />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>
          </div>

          {/* Основной контент */}
          <div className="flex-1 flex flex-col">
            <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-4 py-4">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Личный кабинет</h1>
                <button className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <BellIcon className="h-6 w-6" />
                </button>
              </div>
            </header>
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
} 