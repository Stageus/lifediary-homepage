import { create } from "zustand";

export const useSubscribe = create((set)=>({
    addSubscribeList: [],
    updateSubscribe: ( newSubscribe ) => set((state) => ({addSubscribeList: [...state.addSubscribeList, ...newSubscribe]})),
    deleteSubscribe: ( removeSubscribeIdx ) => set((state) => ({addSubscribeList: state.addSubscribeList.filter( item => item.accountIdx !==  removeSubscribeIdx)})),
}))