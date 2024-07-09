import { useNavigate } from "react-router-dom";

export const navigatePage = () => {
  const navigate = useNavigate();

  const navigateMyProfile = () => navigate("/myProfile");
  const navigateDiaryCreate = () => navigate("/diaryCreate");
  const navigateHome = () => navigate("/");

  return [navigateMyProfile, navigateDiaryCreate, navigateHome];
};
