import create from "zustand";

export const useStore = create((set) => ({
  users: [],
  addUser: (newUser) => set((state)=>({ users: [...state.users, newUser]})),
}));

