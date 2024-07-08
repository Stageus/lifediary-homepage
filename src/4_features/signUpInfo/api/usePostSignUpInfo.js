import { useEffect } from "react";
import { useFetch } from "@shared/hook/useFetch";

export const usePostSignUpInfo = () => {
  const [signUpData, errorStatus, baseFetch] = useFetch();

  useEffect(() => {
    const postData = () => {
      try {
        const response = baseFetch("account", {
          method: "POST",
          data: signUpData,
        });

        if (!response) {
          console.log("Error: ", errorStatus);
        } else {
          console.log("업로드 성공");
        }
      } catch (error) {
        console.log("요청 처리 중 에러 발생: ", error);
      }
    };

    postData();
  }, [signUpData]); // 의존성 배열에 signUpData, baseFetch, errorStatus 추가

  return [signUpData, errorStatus, baseFetch];
};
