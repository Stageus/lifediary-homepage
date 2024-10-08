import { useNavigate } from "react-router-dom";
import { paths } from "@shared/consts/paths";

export const useRoute = () => {

    const navigate = useNavigate();

    const homeRoute = () => navigate( "/" );
    const complainRoute = ( number ) => navigate( `/${paths.COMPLAIN}?page=${number}` );
    const diaryRoute = ( diaryIdx ) => {
        if ( diaryIdx ) return navigate( `/${paths.DIARY}/${diaryIdx}` );
        navigate( `/${paths.DIARY}` );
    };
    const diaryCreateRoute = () => navigate( paths.DIARYCREATE );
    const diaryUpdateRoute = ( diaryIdx ) => navigate( `/${paths.DIARYUPDATE}/${diaryIdx}` );
    const searchRoute = ( tags ) => {
        const encodedTags = tags.map(tag => encodeURIComponent(tag));
        navigate( `/${paths.SEARCH}?tags=${encodedTags}` );
    };
    const myProfileRoute = () => navigate( `/${paths.MYPROFILE}` );
    const userProfileRoute = ( accountIdx ) => navigate( `/${paths.USERPROFILE}/${accountIdx}` );
    const loginRoute = () => navigate( `/${paths.LOGIN}` );
    const signupRoute = ( googleInfo ) => {
        navigate( `/${paths.SIGNUP}`, { state: {...googleInfo} } )
    };
    const errorRoute = ( status, message ) => navigate(`/${status}`, {state:{status, message}});
    const backRoute = () => navigate(-1);

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
        errorRoute,
        backRoute,
     };
}