import { useState } from "react";

export const useCreatePublic = () => {
  const [isPublic, setIsPublic] = useState(false);

  const toggle = () => {
    setIsPublic(!isPublic);
  };

  return [isPublic, toggle];
};
