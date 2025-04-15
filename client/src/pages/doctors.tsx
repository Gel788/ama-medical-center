import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, AcademicCapIcon, ClockIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const doctors = [
  {
    id: 1,
    name: 'Анна Смирнова',
    specialty: 'Терапевт',
    experience: '15 лет',
    education: 'Первый МГМУ им. И.М. Сеченова',
    image: '/images/doctors/doctor1.jpg',
    schedule: 'Пн-Пт: 9:00-17:00',
    phone: '+7 (999) 123-45-67',
    email: 'anna.smirnova@example.com',
    description: 'Опытный терапевт с обширной практикой в диагностике и лечении различных заболеваний. Регулярно проходит курсы повышения квалификации.'
  },
  {
    id: 2,
    name: 'Иван Иванов',
    specialty: 'Стоматолог',
    experience: '12 лет',
    education: 'МГМСУ им. А.И. Евдокимова',
    image: '/images/doctors/doctor2.jpg',
    schedule: 'Пн-Сб: 10:00-18:00',
    phone: '+7 (999) 234-56-78',
    email: 'ivan.ivanov@example.com',
    description: 'Специализируется на эстетической стоматологии и протезировании. Применяет современные методики лечения и реставрации зубов.'
  },
  {
    id: 3,
    name: 'Мария Петрова',
    specialty: 'Офтальмолог',
    experience: '10 лет',
    education: 'РНИМУ им. Н.И. Пирогова',
    image: '/images/doctors/doctor3.jpg',
    schedule: 'Вт-Сб: 9:00-17:00',
    phone: '+7 (999) 345-67-89',
    email: 'maria.petrova@example.com',
    description: 'Специализируется на диагностике и лечении заболеваний глаз. Владеет современными методами коррекции зрения.'
  },
  {
    id: 4,
    name: 'Алексей Козлов',
    specialty: 'Кардиолог',
    experience: '18 лет',
    education: 'ПМГМУ им. И.М. Сеченова',
    image: '/images/doctors/doctor4.jpg',
    schedule: 'Пн-Пт: 8:00 - 16:00',
    phone: '+7 (999) 123-45-70',
    email: 'alexey.kozlov@amadent.ru',
    description: 'Специализируется на диагностике и лечении сердечно-сосудистых заболеваний. Использует современные методы обследования и лечения.'
  },
  {
    id: 5,
    name: 'Елена Соколова',
    specialty: 'Невролог',
    experience: '14 лет',
    education: 'РНИМУ им. Н.И. Пирогова',
    image: '/images/doctors/doctor5.jpg',
    schedule: 'Вт-Сб: 9:00 - 18:00',
    phone: '+7 (999) 123-45-71',
    email: 'elena.sokolova@amadent.ru',
    description: 'Эксперт в области диагностики и лечения заболеваний нервной системы. Разрабатывает индивидуальные программы реабилитации.'
  },
  {
    id: 6,
    name: 'Дмитрий Волков',
    specialty: 'Гастроэнтеролог',
    experience: '16 лет',
    education: 'МГМУ им. И.М. Сеченова',
    image: '/images/doctors/doctor6.jpg',
    schedule: 'Пн-Пт: 10:00 - 19:00',
    phone: '+7 (999) 123-45-72',
    email: 'dmitry.volkov@amadent.ru',
    description: 'Специализируется на диагностике и лечении заболеваний желудочно-кишечного тракта. Использует современные методы обследования и лечения.'
  }
];

export default function DoctorsPage() {
  const router = useRouter();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Наши специалисты
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Команда профессионалов с многолетним опытом работы
          </motion.p>
        </div>

        {/* Список врачей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{doctor.specialty}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{doctor.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <AcademicCapIcon className="h-5 w-5 mr-2" />
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>Опыт работы: {doctor.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>{doctor.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <EnvelopeIcon className="h-5 w-5 mr-2" />
                    <span>{doctor.email}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Записаться на прием
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <HomeIcon className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Наши врачи</h1>
          </div>
        </div>
      </div>
    </div>
  );
} 