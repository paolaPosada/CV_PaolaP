import React, { useMemo } from 'react'
import { AcademicInformation } from './AcademicInformation';

import { getInfoByType } from '../../selectors/getInfoByType';
import { LanguagesInformation } from './LanguagesInformation';

export const ListInformation = ({ Tipo }) => {

    const information = useMemo(() => getInfoByType(Tipo), [Tipo]);
    console.log(information);

    return (
        <div>
            {
                Tipo === 'Academica'
                    ?
                    <div>
                        {information.map(info => (
                            <AcademicInformation key={info.ID}
                                {...info}>
                            </AcademicInformation>
                        ))}
                    </div>
                    :Tipo === 'Idiomas'
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
                    :
                    <p>Holii</p>

            }
        </div>

    )
}
