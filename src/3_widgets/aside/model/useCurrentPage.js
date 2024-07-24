import { useLocation } from "react-router-dom";

export const useCurrentPage = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const isRoute = pathname.startsWith("/diary");

    return { isRoute };
}