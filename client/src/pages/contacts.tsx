import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const departments = [
  {
    id: 1,
    name: 'Терапевтическое отделение',
    phone: '+7 (123) 456-78-90',
    email: 'therapy@clinic.ru',
    hours: 'Пн-Пт: 8:00 - 20:00, Сб: 9:00 - 18:00'
  },
  {
    id: 2,
    name: 'Хирургическое отделение',
    phone: '+7 (123) 456-78-91',
    email: 'surgery@clinic.ru',
    hours: 'Пн-Пт: 9:00 - 18:00'
  },
  {
    id: 3,
    name: 'Диагностический центр',
    phone: '+7 (123) 456-78-92',
    email: 'diagnostics@clinic.ru',
    hours: 'Пн-Пт: 8:00 - 20:00, Сб-Вс: 9:00 - 16:00'
  }
];

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Терапевтическое отделение',
    message: ''
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Отправка формы:', formData);
    setFormData({
      name: '',
      email: '',
      department: 'Терапевтическое отделение',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <HomeIcon className="h-6 w-6" />
            </button>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Контакты
            </motion.h1>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Свяжитесь с нами удобным для вас способом
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Основная информация
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPinIcon className="h-6 w-6 text-primary-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
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
                <h3 className="font-semibold text-gray-900 dark:text-white">
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
                <h3 className="font-semibold text-gray-900 dark:text-white">
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
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Режим работы
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Пн-Пт: 8:00 - 20:00<br />
                  Сб: 9:00 - 18:00<br />
                  Вс: 9:00 - 16:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Отделения
          </h2>
          <div className="space-y-6">
            {departments.map((dept) => (
              <div key={dept.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {dept.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-primary-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {dept.phone}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-primary-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {dept.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-primary-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {dept.hours}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Форма обратной связи
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Имя
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Ваше имя"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Ваш email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Сообщение
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              rows={4}
              placeholder="Ваше сообщение"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Отправить сообщение
          </button>
        </form>
      </motion.div>
    </div>
  );
} 