import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { BellIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleNotificationChange = (type: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Настройки</h2>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-6">
                {/* Уведомления */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Уведомления</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <BellIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Email уведомления</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Получать уведомления на email
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('email')}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          notifications.email ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                            notifications.email ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <BellIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">SMS уведомления</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Получать уведомления по SMS
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('sms')}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          notifications.sms ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                            notifications.sms ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <BellIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Push уведомления</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Получать push-уведомления в браузере
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('push')}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          notifications.push ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                            notifications.push ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Внешний вид */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Внешний вид</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {theme === 'light' ? (
                          <SunIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        ) : (
                          <MoonIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Тема оформления</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {theme === 'light' ? 'Светлая тема' : 'Темная тема'}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setTheme('light')}
                          className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                            theme === 'light'
                              ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-100'
                              : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                          }`}
                        >
                          Светлая
                        </button>
                        <button
                          onClick={() => setTheme('dark')}
                          className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                            theme === 'dark'
                              ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-100'
                              : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                          }`}
                        >
                          Темная
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 