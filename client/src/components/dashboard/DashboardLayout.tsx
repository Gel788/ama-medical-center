import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  UserIcon,
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  CreditCardIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

const navigation = [
  { name: 'Профиль', href: '/dashboard', icon: UserIcon },
  { name: 'Записи', href: '/dashboard/appointments', icon: CalendarIcon },
  { name: 'История', href: '/dashboard/history', icon: ClockIcon },
  { name: 'Врачи', href: '/dashboard/doctors', icon: UserGroupIcon },
  { name: 'Оплата', href: '/dashboard/payment', icon: CreditCardIcon },
  { name: 'Настройки', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function DashboardLayout({ children, title = 'Личный кабинет' }: DashboardLayoutProps) {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Личный кабинет</h1>
          </div>
          <nav className="mt-5 space-y-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  router.pathname === item.href
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
          </nav>
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