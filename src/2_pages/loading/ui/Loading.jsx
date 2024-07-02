import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "@shared/hook/useFetch";
import { S } from "./style";

export const Loading = () => {
  const navigate = useNavigate();
  const [data, errorStatus, baseFetch] = useFetch();

  const secondFetch = async () => {
    await baseFetch("secondCommu"); // baseFetch의 완료를 기다림
    if (errorStatus) {
      console.log(`Error: ${errorStatus}`);
      return;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await secondFetch();
      console.log(data);
      // data와 data.result의 존재성을 확인
      if (data.result.isAccountExist === true) {
        navigate("/");
      } else {
        navigate("/SignUp");
      }
    };

    fetchData();
  }, [data, errorStatus, navigate]); // 의존성 배열에 data와 errorStatus 추가

  return (
    <>
      <S.PageContainer>
        <S.LoadingImg />
      </S.PageContainer>
    </>
  );
};
