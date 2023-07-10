import { create } from "zustand";

export const usePageStore = create((set)=>({
    page: 'Home',
    change: (pages)=> set(state => ({
        page: pages
    }))
}))