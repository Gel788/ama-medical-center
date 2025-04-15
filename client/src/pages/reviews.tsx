import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  StarIcon,
  UserCircleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    rating: 5,
    date: '15.03.2024',
    text: 'Очень довольна посещением клиники. Врач внимательно выслушал все жалобы, провел тщательный осмотр и назначил эффективное лечение. Персонал вежливый и отзывчивый.',
    department: 'Терапия'
  },
  {
    id: 2,
    name: 'Иван Сидоров',
    rating: 4,
    date: '10.03.2024',
    text: 'Хорошая клиника с современным оборудованием. Единственное, что не понравилось - долгое ожидание приема. В остальном все на высшем уровне.',
    department: 'Кардиология'
  },
  {
    id: 3,
    name: 'Мария Иванова',
    rating: 5,
    date: '05.03.2024',
    text: 'Отличный сервис и профессионализм врачей. Особенно хочу отметить удобную систему онлайн-записи и напоминания о приеме.',
    department: 'Офтальмология'
  },
  {
    id: 4,
    name: 'Алексей Козлов',
    rating: 5,
    date: '01.03.2024',
    text: 'Очень благодарен врачам за внимательное отношение и качественное лечение. Клиника оснащена всем необходимым оборудованием.',
    department: 'Терапия'
  }
];

export default function ReviewsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [newReview, setNewReview] = useState({
    name: '',
    department: 'Терапия',
    rating: 5,
    text: ''
  });

  const departments = ['all', 'Терапия', 'Кардиология', 'Офтальмология'];

  const filteredReviews = selectedDepartment === 'all'
    ? reviews
    : reviews.filter(review => review.department === selectedDepartment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки отзыва
    console.log('Отправка отзыва:', newReview);
    setNewReview({
      name: '',
      department: 'Терапия',
      rating: 5,
      text: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Отзывы пациентов
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Мнения наших пациентов о качестве обслуживания
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                selectedDepartment === department
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {department === 'all' ? 'Все отделения' : department}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-12">
        {filteredReviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <div className="flex items-start">
              <UserCircleIcon className="h-12 w-12 text-gray-400 mr-4" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h3>
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      {review.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {review.department}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {review.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Оставить отзыв
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Отделение
            </label>
            <select
              id="department"
              value={newReview.department}
              onChange={(e) => setNewReview({ ...newReview, department: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="Терапия">Терапия</option>
              <option value="Кардиология">Кардиология</option>
              <option value="Офтальмология">Офтальмология</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Оценка
            </label>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                  className="focus:outline-none"
                >
                  <StarIcon
                    className={`h-8 w-8 ${
                      i < newReview.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Ваш отзыв
            </label>
            <textarea
              id="text"
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Отправить отзыв
          </button>
        </form>
      </motion.div>
    </div>
  );
} 