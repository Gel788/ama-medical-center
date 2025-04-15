import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const departments = [
  {
    id: 1,
    name: 'Терапевтическое отделение',
    phone: '+7 (123) 456-78-90',
    email: 'therapy@clinic.ru',
    workingHours: 'Пн-Пт: 8:00 - 20:00, Сб: 9:00 - 15:00'
  },
  {
    id: 2,
    name: 'Кардиологическое отделение',
    phone: '+7 (123) 456-78-91',
    email: 'cardio@clinic.ru',
    workingHours: 'Пн-Пт: 9:00 - 18:00'
  },
  {
    id: 3,
    name: 'Офтальмологическое отделение',
    phone: '+7 (123) 456-78-92',
    email: 'ophthalmology@clinic.ru',
    workingHours: 'Пн-Пт: 8:00 - 20:00, Сб: 9:00 - 15:00'
  }
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Контактная информация
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Свяжитесь с нами удобным для вас способом
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Основная информация
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPinIcon className="h-6 w-6 text-primary-500 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Адрес
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  г. Москва, ул. Медицинская, д. 123
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <PhoneIcon className="h-6 w-6 text-primary-500 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Телефон
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +7 (123) 456-78-89
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <EnvelopeIcon className="h-6 w-6 text-primary-500 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  info@clinic.ru
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <ClockIcon className="h-6 w-6 text-primary-500 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Режим работы
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Пн-Пт: 8:00 - 20:00
                  <br />
                  Сб: 9:00 - 15:00
                  <br />
                  Вс: выходной
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Отделения клиники
          </h2>
          <div className="space-y-6">
            {departments.map((department) => (
              <div key={department.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {department.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-primary-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {department.phone}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-primary-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {department.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-primary-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {department.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Форма обратной связи
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Отделение
            </label>
            <select
              id="department"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">Выберите отделение</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Сообщение
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Отправить сообщение
          </button>
        </form>
      </motion.div>
    </div>
  );
} 