import { create } from "zustand";

type TToken = {
  name: string;
  balance: number;
};

type State = {
  tokens: TToken[];
  openTokenListModal: boolean;
};

type Action = {
  setTokens: (token: TToken) => void;
  updateTokenBalance: (tokenName: string, spent: number) => void;
  receiveTokenBalance: (tokenName: string, spent: number) => void;
  setOpenTokenListModal: () => void;
};

// Create your store, which includes both state and (optionally) actions
export const tokenStore = create<State & Action>((set) => ({
  tokens: [
    { name: "Bitcoin", balance: 100 },
    { name: "Ethereum", balance: 100 },
    { name: "Litcoin", balance: 100 },
    { name: "NeoAI", balance: 100 },
  ],
  openTokenListModal: true,
  setTokens: (token) => set(({ tokens }) => ({ tokens: [token, ...tokens] })),
  updateTokenBalance: (tokenName, spent) =>
    set(({ tokens }) => {
      const newTokens = [...tokens];
      const index = tokens.findIndex((f) => f.name === tokenName);
      newTokens[index].balance -= spent;
      return { tokens: [...newTokens] };
    }),
  receiveTokenBalance: (tokenName, spent) =>
    set(({ tokens }) => {
      const newTokens = [...tokens];
      const index = tokens.findIndex((f) => f.name === tokenName);
      newTokens[index].balance += spent;
      return { tokens: [...newTokens] };
    }),
  setOpenTokenListModal: () =>
    set(({ openTokenListModal }) => ({ openTokenListModal: !openTokenListModal })),
}));
