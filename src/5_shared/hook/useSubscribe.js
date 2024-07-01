import { create } from "zustand";

export const useSubscribe = create((set)=>({
    value: false,
    updateSubscribe: () => set( (state) => ({value: !state.value})),
}))