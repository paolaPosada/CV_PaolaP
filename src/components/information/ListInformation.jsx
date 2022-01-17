import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getInfoByType } from 'selectors/getInfoByType';
import { AcademicInformation } from 'components/information/AcademicInformation';
import { LanguagesInformation } from 'components/information/LanguagesInformation';
import { WorkingInformation } from 'components/information/WorkingInformation';
import { InformationCourses } from 'components/information/InformationCourses';
import { InformationHobbies } from 'components/information/InformationHobbies';

export const ListInformation = ({ Tipo }) => {
  const information = useMemo(() => getInfoByType(Tipo), [Tipo]);

  const tipo = Tipo;
  let aux;

  if (tipo === 'Academica') {
    aux = (
      <div>
        <p className='fuentes subtitleR'>Información acádemica</p>
        <br />
        {information.map((info) => (
          <AcademicInformation key={info.ID} {...info} />
        ))}
      </div>
    );
  } else if (tipo === 'Idiomas') {
    aux = (
      <div>
        {information.map((info) => (
          <LanguagesInformation key={info.ID} {...info} />
        ))}
      </div>
    );
  } else if (tipo === 'Laboral') {
    aux = (
      <div>
        <p className='fuentes subtitleR'>Información Laboral</p>
        {information.map((info) => (
          <WorkingInformation key={info.ID} {...info} />
        ))}
      </div>
    );
  } else if (tipo === 'Cursos') {
    aux = (
      <div>
        <p className='fuentes subtitleR'>Cursos y certificaciones</p>
        <br />
        {information.map((info) => (
          <InformationCourses key={info.ID} {...info} />
        ))}
      </div>
    );
  } else {
    aux = (
      <div>
        <p className='fuentes subtitleL'>Hobbies</p>
        <br />
        {information.map((info) => (
          <InformationHobbies key={info.ID} {...info} />
        ))}
      </div>
    );
  }

  return <div>{aux}</div>;
};

ListInformation.propTypes = {
  Tipo: PropTypes.string.isRequired,
};
