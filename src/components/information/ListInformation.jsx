import React, { useMemo } from 'react'
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
                        <p className='subtitle'>Información acádemica</p>
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
                                <p className='subtitle'>Información Laboral</p>
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
                                    <p className='subtitle'>Cursos y certificaciones</p>
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
                                        <p className='subtitle'>Hobbies</p>
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
