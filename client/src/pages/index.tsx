import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Медицинский центр АМА</title>
      </Head>
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Медицинский центр "Ама"
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Приветствуем вас на сайте медицинского центра "Ама". Мы предоставляем качественные медицинские услуги.
        </p>
      </div>
    </div>
  );
} 