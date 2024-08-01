import { useLocation } from "react-router-dom";

export const useCurrentPage = () => {

    const location = useLocation();
    const pathName = location.pathname;

    return { pathName };
}