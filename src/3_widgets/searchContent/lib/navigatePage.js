import { useNavigate } from "react-router-dom";

export const navigatePage = () => {
  const navigate = useNavigate();

  const navigateMyProfile = () => navigate("/myProfile");
  const navigateDiary = () => navigate("/diary");

  return [navigateMyProfile, navigateDiary];
};
