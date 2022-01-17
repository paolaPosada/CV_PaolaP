import { information } from 'data/information';

export const getInfoByType = (Tipo) => {
  const validType = ['Academica', 'Idiomas', 'Laboral', 'Cursos', 'Hobbies'];
  if (!validType.includes(Tipo)) {
    throw new Error(`Tipo "${Tipo}" no es correcto`);
  }
  return information.filter((info) => info.Tipo === Tipo);
};
