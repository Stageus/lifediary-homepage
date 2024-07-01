import { S } from "./style";
import { useFetch } from "@shared/hook/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const GoogleLogin = () => {
  const [data, errorStatus, baseFetch] = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    baseFetch("firstCommu"); // 임시로 firstCommu 경로로 요청, 추후 수정예정
    if (errorStatus) {
      console.log(`Error: ${errorStatus}`);
      return;
    }
  }, []);

  const handleNaviLogin = () => {
    navigate(`/${data.result.redirectUrl}`);
  };

  return (
    <S.LoginBtn onClick={handleNaviLogin}>
      <S.GoogleLogo />
    </S.LoginBtn>
  );
};
