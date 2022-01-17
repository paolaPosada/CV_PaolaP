import React from 'react';
import { ProgressBar } from 'components/progressBar';

export const InformationKnowledge = () => (
  <div>
    <p className='fuentes subtitleL xl:text-indigo-500'>Conocimientos</p>
    <br />
    <ProgressBar Nombre='JavaScript' porcentaje='75%' />
    <ProgressBar Nombre='HTML' porcentaje='75%' />
    <ProgressBar Nombre='CSS' porcentaje='50%' />
    <ProgressBar Nombre='SQL' porcentaje='45%' />
    <ProgressBar Nombre='Python' porcentaje='60%' />
    <ProgressBar Nombre='React' porcentaje='65%' />
  </div>
);
