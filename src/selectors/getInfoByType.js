import { InfoAcademica } from "../data/infoAcademica";

export const getInfoByType = (Tipo) => {
    const validType = ['Academica', 'Idiomas'];
    //Validar si existe el publisher, si no existe genera un error
    if (!validType.includes(Tipo)){
        throw new Error(`Tipo "${Tipo}" no es correcto`);
    }
    //Si existe lo retorna
    return InfoAcademica.filter(info => info.Tipo === Tipo);
}