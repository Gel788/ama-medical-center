import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { CalendarIcon, ClockIcon, UserIcon, XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const appointments = [
  {
    id: 1,
    date: '15.04.2024',
    time: '10:00',
    doctor: 'Иванова Анна Петровна',
    specialty: 'Терапевт',
    status: 'Подтверждена',
  },
  {
    id: 2,
    date: '20.04.2024',
    time: '14:30',
    doctor: 'Петров Сергей Иванович',
    specialty: 'Кардиолог',
    status: 'Ожидает подтверждения',
  },
  {
    id: 3,
    date: '25.04.2024',
    time: '11:15',
    doctor: 'Сидорова Мария Владимировна',
    specialty: 'Офтальмолог',
    status: 'Отменена',
  },
];

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const router = useRouter();

  return (
    <DashboardLayout title="Мои записи">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Мои записи
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Управление вашими записями на прием
                </p>
              </div>
              <button
                onClick={() => router.push('/appointment')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <CalendarIcon className="h-4 w-4 mr-2" />
                Записаться на прием
              </button>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Предстоящие записи
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSelectedDate(new Date())}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Сегодня
                </button>
                <button
                  onClick={() => {
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    setSelectedDate(tomorrow);
                  }}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Завтра
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <CalendarIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {appointment.doctor}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {appointment.specialty}
                        </p>
                        <div className="mt-1 flex items-center space-x-2">
                          <ClockIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {appointment.date} в {appointment.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          appointment.status === 'Подтверждена'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : appointment.status === 'Ожидает подтверждения'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }`}
                      >
                        {appointment.status}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            // Handle cancel
                          }}
                          className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => {
                            // Handle reschedule
                          }}
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <PencilSquareIcon className="h-5 w-5" />
                        </button>
                      </div>
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