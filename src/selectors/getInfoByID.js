import { InfoAcademica } from "../data/infoAcademica";

export const getInfoByID = (id) => {


    return InfoAcademica.find(info => info.ID === id);
}