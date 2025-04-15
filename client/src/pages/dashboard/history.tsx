import DashboardLayout from '@/components/layout/DashboardLayout';
import { CalendarIcon, UserIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const visits = [
  {
    id: 1,
    date: '10.04.2024',
    doctor: 'Иванова Анна Петровна',
    specialty: 'Терапевт',
    diagnosis: 'ОРВИ',
    prescription: 'Покой, обильное питье, жаропонижающие при необходимости',
  },
  {
    id: 2,
    date: '05.03.2024',
    doctor: 'Петров Сергей Иванович',
    specialty: 'Кардиолог',
    diagnosis: 'Гипертония',
    prescription: 'Регулярный прием гипотензивных препаратов, контроль давления',
  },
  {
    id: 3,
    date: '20.02.2024',
    doctor: 'Сидорова Мария Владимировна',
    specialty: 'Офтальмолог',
    diagnosis: 'Близорукость',
    prescription: 'Коррекция зрения очками, регулярные осмотры',
  },
];

export default function HistoryPage() {
  return (
    <DashboardLayout title="История посещений">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  История посещений
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Просмотр истории ваших посещений клиники
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* History List */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Посещения
            </h3>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {visits.map((visit) => (
                <li key={visit.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {visit.doctor}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {visit.specialty}
                        </p>
                        <div className="mt-1 flex items-center space-x-2">
                          <CalendarIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {visit.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        Диагноз
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        {visit.diagnosis}
                      </p>
                    </div>
                    <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        Назначения
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        {visit.prescription}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 