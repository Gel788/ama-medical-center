import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const advantages = [
  {
    id: 1,
    title: 'Прозрачные цены',
    description: 'Все цены указаны без скрытых платежей',
    icon: CurrencyDollarIcon
  },
  {
    id: 2,
    title: 'Гарантия качества',
    description: 'Мы используем только современное оборудование',
    icon: ShieldCheckIcon
  },
  {
    id: 3,
    title: 'Быстрая запись',
    description: 'Запишитесь на прием онлайн в любое время',
    icon: ClockIcon
  }
];

const services = [
  {
    category: 'Терапия',
    items: [
      {
        id: 1,
        name: 'Первичный прием терапевта',
        price: '2000 ₽',
        duration: '30 мин'
      },
      {
        id: 2,
        name: 'Повторный прием терапевта',
        price: '1500 ₽',
        duration: '20 мин'
      },
      {
        id: 3,
        name: 'Консультация по результатам анализов',
        price: '1000 ₽',
        duration: '15 мин'
      }
    ]
  },
  {
    category: 'Кардиология',
    items: [
      {
        id: 4,
        name: 'Консультация кардиолога',
        price: '2500 ₽',
        duration: '40 мин'
      },
      {
        id: 5,
        name: 'ЭКГ с расшифровкой',
        price: '1500 ₽',
        duration: '20 мин'
      },
      {
        id: 6,
        name: 'Суточное мониторирование ЭКГ',
        price: '3500 ₽',
        duration: '24 часа'
      }
    ]
  },
  {
    category: 'Офтальмология',
    items: [
      {
        id: 7,
        name: 'Осмотр офтальмолога',
        price: '2000 ₽',
        duration: '30 мин'
      },
      {
        id: 8,
        name: 'Проверка остроты зрения',
        price: '1000 ₽',
        duration: '15 мин'
      },
      {
        id: 9,
        name: 'Измерение внутриглазного давления',
        price: '800 ₽',
        duration: '10 мин'
      }
    ]
  }
];

export default function PricesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Цены на услуги
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Прозрачные цены на все медицинские услуги
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {advantages.map((advantage) => (
          <div
            key={advantage.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <advantage.icon className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {advantage.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {advantage.description}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {services.map((category) => (
          <div key={category.category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-primary-500">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          * Цены указаны без учета скидок и акций
        </p>
        <button className="bg-primary-500 text-white py-3 px-8 rounded-lg hover:bg-primary-600 transition-colors">
          Записаться на прием
        </button>
      </motion.div>
    </div>
  );
} 