import { create } from "zustand";

export const useAlarm = create(( set )=>({
    value: null,
    alarmText: (text) => {
        set({ value: text });
        setTimeout(() => {
          set({ value: null });
        }, 1000);
      },
}))