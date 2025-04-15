import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { 
  CalendarIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const features = [
  {
    id: 1,
    title: 'Современное оборудование',
    description: 'Используем новейшее медицинское оборудование для точной диагностики',
    image: '/images/features/equipment.jpg'
  },
  {
    id: 2,
    title: 'Квалифицированные врачи',
    description: 'Наши специалисты имеют большой опыт работы и регулярно повышают квалификацию',
    image: '/images/features/doctors.jpg'
  },
  {
    id: 3,
    title: 'Индивидуальный подход',
    description: 'Для каждого пациента разрабатываем персональный план лечения',
    image: '/images/features/individual.jpg'
  },
  {
    id: 4,
    title: 'Быстрая диагностика',
    description: 'Современные методы обследования позволяют быстро поставить точный диагноз',
    image: '/images/features/diagnostics.jpg'
  }
];

const services = [
  {
    id: 1,
    name: 'Терапия',
    description: 'Комплексное обследование и лечение',
    image: '/images/services/therapy.jpg'
  },
  {
    id: 2,
    name: 'Кардиология',
    description: 'Диагностика и лечение заболеваний сердца',
    image: '/images/services/cardiology.jpg'
  },
  {
    id: 3,
    name: 'Офтальмология',
    description: 'Забота о вашем зрении',
    image: '/images/services/ophthalmology.jpg'
  }
];

export default function HomePage() {
  const router = useRouter();

  return (
    <Layout>
      {/* Шапка */}
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.push('/')}
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  AMA
                </button>
                <nav className="hidden md:flex space-x-8">
                  <button
                    onClick={() => router.push('/services')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    Услуги
                  </button>
                  <button
                    onClick={() => router.push('/doctors')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    Врачи
                  </button>
                  <button
                    onClick={() => router.push('/about')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    О клинике
                  </button>
                  <button
                    onClick={() => router.push('/contacts')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    Контакты
                  </button>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.push('/dashboard')}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <UserCircleIcon className="h-5 w-5 mr-2" />
                  Личный кабинет
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Современная медицинская клиника
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Профессиональная медицинская помощь с использованием передовых технологий и индивидуальным подходом к каждому пациенту
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <button
                onClick={() => router.push('/appointment')}
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Записаться на прием
              </button>
              <button
                onClick={() => router.push('/services')}
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Наши услуги
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            >
              Почему выбирают нас
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              Мы предлагаем высококачественные медицинские услуги с заботой о каждом пациенте
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white text-center">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            >
              Наши услуги
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              Широкий спектр медицинских услуг для всей семьи
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => router.push('/appointment')}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      Записаться →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Готовы начать?</span>
              <span className="block text-blue-200">Запишитесь на прием прямо сейчас</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          >
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => router.push('/appointment')}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                Записаться на прием
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">О клинике</h3>
              <p className="text-gray-300">
                Современная медицинская клиника с высококвалифицированными специалистами
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Контакты</h3>
              <p className="text-gray-300">
                г. Москва, ул. Примерная, 123<br />
                Телефон: +7 (123) 456-78-90<br />
                Email: info@amaclinic.ru
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Часы работы</h3>
              <p className="text-gray-300">
                Пн-Пт: 8:00 - 20:00<br />
                Сб: 9:00 - 18:00<br />
                Вс: 9:00 - 15:00
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => router.push('/services')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Услуги
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push('/doctors')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Врачи
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push('/contacts')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-center">
              © 2024 AMA Clinic. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
} 