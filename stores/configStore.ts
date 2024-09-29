import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ClientConfigState {
  isMobile: boolean;
  isSidebarOpen: boolean;
}

interface ClientConfigActions {
  setIsMobile: (isMobile: boolean) => void;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

export type ClientConfigType = ClientConfigState & ClientConfigActions;

const clientConfigStore: StateCreator<ClientConfigType> = (set) => ({
  isMobile: false,
  isSidebarOpen: false,
  setIsMobile: (isMobile) => set({ isMobile }),
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
});

const useClientConfigStore = create<ClientConfigType>()(
  persist(clientConfigStore, {
    name: "client-config",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useClientConfigStore;
