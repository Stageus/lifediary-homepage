import { create } from "zustand";

export const useSubscribe = create((set)=>({
    addSubscribeList: [],
    // updateSubscribe: ( newSubscribe ) => set((state) => ({addSubscribeList: [...state.addSubscribeList, ...newSubscribe]})),
    updateSubscribe: (newSubscribe) => set((state) => {
        const existingIds = new Set(state.addSubscribeList.map(sub => sub.accountIdx));
        const filteredNewSubscribe = newSubscribe.filter(sub => !existingIds.has(sub.accountIdx));
        return { addSubscribeList: [...state.addSubscribeList, ...filteredNewSubscribe] };
    }),
    deleteSubscribe: ( removeSubscribeIdx ) => set((state) => ({addSubscribeList: state.addSubscribeList.filter( item => item.accountIdx !==  removeSubscribeIdx)})),
}))