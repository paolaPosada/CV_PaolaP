import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { AcademicInformation } from './AcademicInformation';
import { getInfoByType } from '../../selectors/getInfoByType';
import { LanguagesInformation } from './LanguagesInformation';
import { WorkingInformation } from './WorkingInformation';
import { InformationCourses } from './InformationCourses';
import { InformationHobbies } from './InformationHobbies';

export const ListInformation = ({ Tipo }) => {

    const information = useMemo(() => getInfoByType(Tipo), [Tipo]);

    return (
        <div>
            {
                Tipo === 'Academica'
                    ?
                    <div>
                        <p className='fuentes subtitleR'>Información acádemica</p>
                        <br></br>
                        {information.map(info => (
                            <AcademicInformation key={info.ID}
                                {...info}>
                            </AcademicInformation>
                        ))}
                    </div>
                    : Tipo === 'Idiomas'
                        ?
                        <div>
                            {
                                information.map(info => (
                                    <LanguagesInformation key={info.ID}
                                        {...info}>
                                    </LanguagesInformation>
                                ))
                            }

                        </div>
                        : Tipo === 'Laboral'
                            ?
                            <div>
                                <p className='fuentes subtitleR'>Información Laboral</p>
                                {

                                    information.map(info => (
                                        <WorkingInformation key={info.ID}
                                            {...info}>
                                        </WorkingInformation>
                                    ))
                                }

                            </div>
                            : Tipo === 'Cursos'
                                ?
                                <div>
                                    <p className='fuentes subtitleR'>Cursos y certificaciones</p>
                                    <br></br>
                                    {

                                        information.map(info => (
                                            <InformationCourses key={info.ID}
                                                {...info}>
                                            </InformationCourses>
                                        ))
                                    }

                                </div>
                                : Tipo === 'Hobbies'
                                    ?
                                    <div>
                                        <p className='fuentes subtitleL'>Hobbies</p>
                                        <br></br>
                                        {

                                            information.map(info => (
                                                <InformationHobbies key={info.ID}
                                                    {...info}>
                                                </InformationHobbies>
                                            ))
                                        }

                                    </div>
                                    :
                                    <p>Holii</p>

            }
        </div>

    )
}

ListInformation.propTypes = {
    Tipo: PropTypes.string.isRequired
};