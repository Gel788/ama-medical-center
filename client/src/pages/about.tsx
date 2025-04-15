import { motion } from 'framer-motion';
import { CheckCircleIcon, UserGroupIcon, BuildingOfficeIcon, ChartBarIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const features = [
  {
    id: 1,
    title: 'Современное оборудование',
    description: 'Наша клиника оснащена передовым медицинским оборудованием от ведущих производителей',
    icon: CheckCircleIcon,
  },
  {
    id: 2,
    title: 'Квалифицированные специалисты',
    description: 'В нашей команде работают опытные врачи с многолетним стажем и регулярным повышением квалификации',
    icon: UserGroupIcon,
  },
  {
    id: 3,
    title: 'Индивидуальный подход',
    description: 'Мы разрабатываем персональный план лечения для каждого пациента с учетом его особенностей',
    icon: BuildingOfficeIcon,
  },
  {
    id: 4,
    title: 'Гарантия качества',
    description: 'Мы гарантируем высокое качество медицинских услуг и внимательное отношение к каждому пациенту',
    icon: ChartBarIcon,
  },
];

const stats = [
  { id: 1, name: 'Лет работы', value: '15+' },
  { id: 2, name: 'Довольных пациентов', value: '10000+' },
  { id: 3, name: 'Квалифицированных врачей', value: '50+' },
  { id: 4, name: 'Филиалов', value: '3' },
];

export default function AboutPage() {
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
                О клинике
              </motion.h1>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Мы стремимся сделать качественную медицинскую помощь доступной для каждого
          </motion.p>
        </div>

        {/* Миссия */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-12"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Наша миссия</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Наша миссия - обеспечить каждого пациента качественной и доступной медицинской помощью. 
              Мы постоянно совершенствуем наши услуги, внедряем новые технологии и методики лечения, 
              чтобы предоставить нашим пациентам лучший медицинский сервис.
            </p>
          </div>
        </motion.div>

        {/* Преимущества */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Статистика */}
        <div className="bg-blue-600 dark:bg-blue-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-lg text-blue-100">{stat.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Доверьте свое здоровье профессионалам
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Записаться на прием
          </button>
        </div>
      </div>
    </div>
  );
} 