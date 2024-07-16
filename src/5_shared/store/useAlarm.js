import { create } from "zustand";

export const useAlarm = create(( set )=>({
    value: null,
    alarmText: () => set( (state) => ({value: state})),
}))