// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import { useFetch, useCookie } from "@shared/hook";

// export const usePostSignUpInfo = () => {
//   const navigate = useNavigate();
//   const [fetchData, baseFetch] = useFetch();
//   const { handleGetCookie } = useCookie();

//   const postSignUpInfo = (profileImg, nickname, oauthGoogleId) => {
//     const formData = new FormData();
//     formData.append("profileImg", profileImg);
//     formData.append("nickname", nickname);
//     formData.append("oauthGoogleId", oauthGoogleId);

//     baseFetch(
//       "account",
//       {
//         method: "POST",
//         body: formData,
//       },
//       handleGetCookie()
//     );
//   };

//   useEffect(() => {
//     if (!fetchData) return;

//     if (fetchData.status === 200) {
//       alert("회원가입에 성공했습니다!");
//       navigate("/diary");
//     }

//     if (fetchData?.status === 400) {
//       return console.log("유효성 검사 실패");
//     }

//     if (fetchData?.status === 500) {
//       return console.log("서버 에러");
//     }
//   }, [fetchData]);

//   return [postSignUpInfo];
// };

export const usePostSignUpInfo = () => {
  const postSignUpInfo = async (profileImg, nickname, oauthGoogleId) => {
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    formData.append("nickname", nickname);
    formData.append("oauthGoogleId", oauthGoogleId);

    try {
      const response = await fetch("http://3.36.128.193/account", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
      } else {
        console.log("Signup failed:", response.status);
      }
    } catch (error) {
      console.log("Error occurred during signup:", error.message);
    }
  };

  return [postSignUpInfo];
};
