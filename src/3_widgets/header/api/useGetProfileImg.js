import { useState, useEffect } from "react";
import { useFetch } from "@shared/hook/useFetch";

export const useGetProfileImage = () => {
  const [myProfileImg, setMyProfileImg] = useState(null);
  const [, , baseFetch] = useFetch();

  useEffect(() => {
    const fetchProfileImg = () => {
      try {
        const response = baseFetch("account", {
          method: "GET",
          headers: {
            token: credential,
          },
        });

        const data = response.json();
        if (data.message === "success") {
          setMyProfileImg(data.result.profileImg);
        } else {
          console.error("Profile image fetch failed: ", data);
        }
      } catch (error) {
        // console.error("Error: ", error);
      }
    };

    fetchProfileImg();
  }, [baseFetch]);

  return myProfileImg;
};
