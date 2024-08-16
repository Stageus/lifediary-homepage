import { useLocation } from "react-router-dom";
import { paths } from "@shared/consts/paths";

export const usePageCheck = () => {
    
  const location = useLocation();
  const { MYPROFILE } = paths;
  const isMyprifle = location.pathname === `/${MYPROFILE}`;

  return { isMyprifle };
};
