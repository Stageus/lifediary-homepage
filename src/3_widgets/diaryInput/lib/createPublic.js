import { useState } from "react";

export const createPublic = () => {
  const [isPublic, setIsPublic] = useState(false);

  const toggle = () => {
    setIsPublic(!isPublic);
  };

  return [isPublic, toggle];
};
