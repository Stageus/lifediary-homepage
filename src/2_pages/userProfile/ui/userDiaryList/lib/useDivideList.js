import { useState, useEffect } from "react";

import { useDate, usePost } from "@shared/store";

const posts = [
  { id: 1, date: new Date(2024, 6, 14), isPublic: false },
  { id: 2, date: new Date(2024, 6, 15), isPublic: true },
  { id: 3, date: new Date(2024, 6, 16), isPublic: false },
  { id: 4, date: new Date(2024, 6, 16), isPublic: false },
  { id: 5, date: new Date(2024, 6, 16), isPublic: true },
  { id: 6, date: new Date(2024, 6, 16), isPublic: false },
  { id: 7, date: new Date(2024, 6, 16), isPublic: true },
];

export const useDivideList = () => {
  const { startDate, endDate } = useDate();
  const { filteredPosts, setFilteredPosts } = usePost();

  useEffect(() => {
    if (!startDate && !endDate) {
      const publicPosts = posts.filter((post) => post.isPublic);
      setFilteredPosts(publicPosts);
    }
  }, []);

  return [filteredPosts];
};
