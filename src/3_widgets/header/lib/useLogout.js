import { useCallback } from "react";
import { useCookie } from "@shared/hook/useCookie"; // useCookie 훅의 정확한 경로로 수정해야 합니다.

export const useLogout = () => {
  const { handleRemoveCookie } = useCookie();

  const logout = useCallback(() => {
    handleRemoveCookie("token"); // 쿠키에서 토큰 삭제
  }, [handleRemoveCookie]);

  return logout;
};
