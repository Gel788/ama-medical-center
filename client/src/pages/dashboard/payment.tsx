import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { CreditCardIcon, BanknotesIcon, CalendarIcon } from '@heroicons/react/24/outline';

const payments = [
  {
    id: 1,
    date: '10.04.2024',
    amount: '2500 ₽',
    service: 'Консультация терапевта',
    status: 'Оплачено',
  },
  {
    id: 2,
    date: '05.03.2024',
    amount: '3500 ₽',
    service: 'ЭКГ',
    status: 'Оплачено',
  },
  {
    id: 3,
    date: '20.02.2024',
    amount: '2000 ₽',
    service: 'Осмотр офтальмолога',
    status: 'Оплачено',
  },
];

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');

  return (
    <DashboardLayout title="Оплата">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Оплата
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Управление платежами и оплата услуг
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              История платежей
            </h3>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {payments.map((payment) => (
                <li key={payment.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <CreditCardIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {payment.service}
                        </p>
                        <div className="mt-1 flex items-center space-x-2">
                          <CalendarIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {payment.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {payment.amount} ₽
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          payment.status === 'Оплачено'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}
                      >
                        {payment.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Оплата услуг
            </h3>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Способ оплаты
                </label>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`relative rounded-lg border p-4 flex flex-col ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center">
                      <CreditCardIcon
                        className={`h-5 w-5 ${
                          paymentMethod === 'card'
                            ? 'text-blue-500 dark:text-blue-400'
                            : 'text-gray-400 dark:text-gray-500'
                        }`}
                      />
                      <span
                        className={`ml-2 block text-sm font-medium ${
                          paymentMethod === 'card'
                            ? 'text-blue-900 dark:text-blue-100'
                            : 'text-gray-900 dark:text-gray-100'
                        }`}
                      >
                        Банковская карта
                      </span>
                    </div>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('cash')}
                    className={`relative rounded-lg border p-4 flex flex-col ${
                      paymentMethod === 'cash'
                        ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center">
                      <BanknotesIcon
                        className={`h-5 w-5 ${
                          paymentMethod === 'cash'
                            ? 'text-blue-500 dark:text-blue-400'
                            : 'text-gray-400 dark:text-gray-500'
                        }`}
                      />
                      <span
                        className={`ml-2 block text-sm font-medium ${
                          paymentMethod === 'cash'
                            ? 'text-blue-900 dark:text-blue-100'
                            : 'text-gray-900 dark:text-gray-100'
                        }`}
                      >
                        Наличные
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Номер карты
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Срок действия
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="000"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Сумма оплаты
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 dark:text-gray-400 sm:text-sm">₽</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Оплатить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 