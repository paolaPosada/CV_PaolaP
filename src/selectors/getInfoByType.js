import { information } from "../data/information";

export const getInfoByType = (Tipo) => {
    const validType = ['Academica', 'Idiomas','Laboral','Cursos','Hobbies'];
    //Validar si existe el publisher, si no existe genera un error
    if (!validType.includes(Tipo)){
        throw new Error(`Tipo "${Tipo}" no es correcto`);
    }
    //Si existe lo retorna
    return information.filter(info => info.Tipo === Tipo);
}