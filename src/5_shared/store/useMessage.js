import { create } from "zustand";

export const useMessage = create(( set )=>({
    message: null,
    callback: null,
    setMessage: ( text, callback = null ) => set({ message: text, callback: callback}),
    cleanMessage: () => set({ message: null, callback: null })
}))