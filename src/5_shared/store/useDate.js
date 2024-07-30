import { create } from "zustand";

export const useDate = create((set) => ({
  startDate: null,
  endDate: null,
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));
