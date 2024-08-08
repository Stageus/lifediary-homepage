import { create } from "zustand";

export const useMessage = create(( set )=>({
    message: null,
    callback: null,
    btnOption: false,
    setMessage: ( text, callback = null, btnOption = false ) => set({ message: text, callback: callback, btnOption:btnOption }),
    cleanMessage: () => set({ message: null, callback: null, btnOption: false})
}))