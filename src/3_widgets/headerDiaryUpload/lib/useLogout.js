import { useNavigate } from "react-router-dom";

import { useCookie } from "@shared/hook";

export const useLogout = () => {
  const navigate = useNavigate();
  const { handleRemoveCookie, handleGetCookie } = useCookie();

  const logout = () => {
    handleRemoveCookie("token");

    const token = handleGetCookie("token");
    if (!token) {
      navigate("/login");
    }
  };
  return logout;
};
