import type { User } from "firebase/auth";
import { create } from "zustand";

type State = {
  user: User | null;
  isFetching: boolean;
};

type Action = {
  updateFetching: (fetching: boolean) => void;
  updateUser: (user: User) => void;
};

// Create your store, which includes both state and (optionally) actions
export const userStore = create<State & Action>((set) => ({
  user: null,
  isFetching: true,
  updateFetching: (fetching) => set(() => ({ isFetching: fetching })),
  updateUser: (user) => set(() => ({ user })),
}));
