import { create } from "zustand";

export const usePost = create((set) => ({
  filteredPosts: [],
  setFilteredPosts: (filteredPosts) => set({ filteredPosts }),
}));
