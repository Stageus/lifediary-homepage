// Slice
import { useGetGrassList } from "../api/useGetGrassList";

export const useModel = () => {

    const [ grassList, setSelectYear ] = useGetGrassList();
    const nowYears = new Date().getFullYear();
    const yearsList = Array( 3 ).fill( nowYears ).map( ( value, idx ) => value - idx );
    const onClickYears = ( year )=> setSelectYear( year );
    
    return { grassList, yearsList, onClickYears }
}