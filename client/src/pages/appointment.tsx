import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CalendarIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  comment: string;
};

const services = [
  { id: 1, name: 'Стоматология' },
  { id: 2, name: 'Терапия' },
  { id: 3, name: 'Гинекология' },
  { id: 4, name: 'Кардиология' },
  { id: 5, name: 'Неврология' },
];

const doctors = [
  { id: 1, name: 'Иванов Иван Иванович', specialization: 'Стоматолог' },
  { id: 2, name: 'Петрова Мария Сергеевна', specialization: 'Терапевт' },
  { id: 3, name: 'Сидорова Анна Александровна', specialization: 'Гинеколог' },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
];

export default function Appointment() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Здесь будет API запрос
      console.log(data);
      alert('Запись успешно создана! Мы свяжемся с вами для подтверждения.');
    } catch (error) {
      alert('Произошла ошибка при создании записи. Пожалуйста, попробуйте позже.');
    }
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Запись на прием
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Заполните форму ниже, и мы свяжемся с вами для подтверждения записи
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Ваше имя
                </label>
                <div className="mt-2.5 relative">
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">Пожалуйста, укажите ваше имя</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                  Телефон
                </label>
                <div className="mt-2.5 relative">
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  <PhoneIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">Пожалуйста, укажите ваш телефон</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">Пожалуйста, укажите корректный email</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">
                  Услуга
                </label>
                <div className="mt-2.5">
                  <select
                    id="service"
                    {...register('service', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.service && (
                  <p className="mt-2 text-sm text-red-600">Пожалуйста, выберите услугу</p>
                )}
              </div>

              <div>
                <label htmlFor="doctor" className="block text-sm font-semibold leading-6 text-gray-900">
                  Врач
                </label>
                <div className="mt-2.5">
                  <select
                    id="doctor"
                    {...register('doctor', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Выберите врача</option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} ({doctor.specialization})
                      </option>
                    ))}
                  </select>
                </div>
                {errors.doctor && (
                  <p className="mt-2 text-sm text-red-600">Пожалуйста, выберите врача</p>
                )}
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">
                  Дата
                </label>
                <div className="mt-2.5 relative">
                  <input
                    type="date"
                    id="date"
                    {...register('date', { required: true })}
                    min={new Date().toISOString().split('T')[0]}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.date && (
                  <p className="mt-2 text-sm text-red-600">Пожалуйста, выберите дату</p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-semibold leading-6 text-gray-900">
                  Время
                </label>
                <div className="mt-2.5">
                  <select
                    id="time"
                    {...register('time', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Выберите время</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.time && (
                  <p className="mt-2 text-sm text-red-600">Пожалуйста, выберите время</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="comment" className="block text-sm font-semibold leading-6 text-gray-900">
                  Комментарий
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="comment"
                    {...register('comment')}
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Записаться на прием'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
} 