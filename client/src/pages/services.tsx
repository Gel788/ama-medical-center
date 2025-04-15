import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const services = [
  {
    id: 1,
    name: 'Терапия',
    description: 'Профессиональная диагностика и лечение заболеваний внутренних органов',
    image: '/images/services/therapy.jpg',
    features: [
      'Комплексное обследование',
      'Индивидуальный подход',
      'Современные методы диагностики',
      'Опытные специалисты'
    ],
    price: 'от 2000 ₽',
    duration: '30-60 минут'
  },
  {
    id: 2,
    name: 'Кардиология',
    description: 'Диагностика и лечение заболеваний сердечно-сосудистой системы',
    image: '/images/services/cardiology.jpg',
    features: [
      'ЭКГ и УЗИ сердца',
      'Холтеровское мониторирование',
      'Консультация кардиолога',
      'Подбор терапии'
    ],
    price: 'от 2500 ₽',
    duration: '40-60 минут'
  },
  {
    id: 3,
    name: 'Офтальмология',
    description: 'Диагностика и лечение заболеваний глаз, коррекция зрения',
    image: '/images/services/ophthalmology.jpg',
    features: [
      'Проверка зрения',
      'Подбор очков и линз',
      'Лечение заболеваний глаз',
      'Современное оборудование'
    ],
    price: 'от 2000 ₽',
    duration: '30-45 минут'
  }
];

const features = [
  {
    id: 1,
    title: 'Современное оборудование',
    description: 'Используем передовые технологии и оборудование для диагностики и лечения',
    image: '/images/features/equipment.jpg'
  },
  {
    id: 2,
    title: 'Квалифицированные врачи',
    description: 'Наши специалисты имеют многолетний опыт работы и регулярно повышают квалификацию',
    image: '/images/features/doctors.jpg'
  },
  {
    id: 3,
    title: 'Индивидуальный подход',
    description: 'Разрабатываем персональный план лечения с учетом особенностей каждого пациента',
    image: '/images/features/individual.jpg'
  },
  {
    id: 4,
    title: 'Быстрая диагностика',
    description: 'Проводим комплексное обследование и ставим точный диагноз в кратчайшие сроки',
    image: '/images/features/diagnostics.jpg'
  }
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between">
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
                Наши услуги
              </motion.h1>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Предоставляем широкий спектр медицинских услуг высокого качества
          </motion.p>
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Услуги */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                  <span>{service.price}</span>
                  <span>{service.duration}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Записаться на прием
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Примечание */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            * Цены указаны без учета дополнительных обследований и анализов
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Записаться на прием
          </button>
        </div>
      </div>
    </div>
  );
} 