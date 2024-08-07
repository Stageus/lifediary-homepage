import { useNavigate } from "react-router-dom";
import { paths } from "@shared/consts/paths";

export const useRoute = () => {

    const navigate = useNavigate();

    const homeRoute = () => navigate( "/" );
    const complainRoute = ( pageNum ) => navigate( `${paths.COMPLAIN}?page=${pageNum}` );
    const diaryRoute = ( diaryIdx ) => {
        if ( diaryIdx ) return navigate( `${paths.DIARY}/${diaryIdx}` );
        navigate( paths.DIARY );
    };
    const diaryCreateRoute = () => navigate( paths.DIARYCREATE );
    const diaryUpdateRoute = ( diaryIdx ) => navigate( `${paths.DIARYUPDATE}/${diaryIdx}` );
    const searchRoute = ( tags ) => navigate( `${paths.SEARCH}?page=1&tag=${tags}` );
    const myProfileRoute = () => navigate( paths.MYPROFILE );
    const userProfileRoute = ( accountIdx ) => navigate( `${paths.USERPROFILE}/${accountIdx}` );
    const loginRoute = () => navigate( paths.LOGIN );
    const signupRoute = () => navigate( paths.SIGNUP );

    return { 
        homeRoute,
        complainRoute,
        diaryRoute,
        diaryCreateRoute,
        diaryUpdateRoute,
        searchRoute,
        myProfileRoute,
        userProfileRoute,
        loginRoute,
        signupRoute,
     };
}