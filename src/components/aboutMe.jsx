import React from 'react';

export const AboutMe = () => (
  <div className='flex flex-wrap justify-center'>
    <div className='flex flex-col content-center justify-center gap-2 '>
      <div className='flex justify-center'>
        <img
          src='https://i.ibb.co/2jbtXwB/descarga.png'
          alt='Paola Posada'
          className='h-72 w-auto my-3'
        />
      </div>
      <div>
        <p className='text-2xl font-medium text-gray-900 py-2'>
          paola.posada1@udea.edu.co
        </p>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <a
          className='mx-4 my-2 flex items-center rounded'
          href='https://www.linkedin.com/in/paola-andrea-posada-restrepo-745934227/'
        >
          <span className='iconify w-12 h-12' data-icon='fa-brands:linkedin' />
        </a>
        <a
          className='mx-4 my-2 flex items-center rounded'
          href='https://github.com/paolaPosada'
        >
          <span className='iconify w-12 h-12' data-icon='fa-brands:github' />
        </a>
      </div>
    </div>
    <div>
      <br />
      <p className='font-sans text-3xl  not-italic font-semibold text-center p-0 text-gray-900'>
        Información sobre mí
      </p>
      <br />
      <p className='font-xl'>
        Soy una persona íntegra, responsable y respetuosa, me gusta estar en
        constante aprendizaje y cuento con la capacidad de aprender rápidamente.
        Busco crecer en el campo personal y profesional, aumentando y aplicando
        los conocimientos que he adquirido, teniendo siempre presente los
        valores morales y éticos.
      </p>
    </div>
  </div>
);
