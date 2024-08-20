import { useState, useEffect } from "react";
// Slice
import { S } from "./style";
import profileImg from "./assets/profile.png";

export const Profile = (props) => {
    
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { img } = props;

  useEffect(() => {
    const newImg = new Image();
    newImg.onload = () => {
      setLoading(false);
      setError(false);
    };
    newImg.onerror = () => {
      setLoading(false);
      setError(true);
    };
    newImg.src = img;
  }, [img]);


  return (
    <>
      {loading && <S.ImgCustom src={profileImg} alt="Loading ..." />}
      {error && <S.ImgCustom src={profileImg} alt="Error..." />}
      {!loading && !error && <S.ImgCustom src={img} alt="Diary ..." />}
    </>
  );
};
