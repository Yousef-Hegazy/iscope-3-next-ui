import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface ClientConfigState {
  isMobile: boolean;
  isSidebarOpen: boolean;
}

interface ClientConfigActions {
  setIsMobile: (isMobile: boolean) => void;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const clientConfigStore: StateCreator<ClientConfigState & ClientConfigActions> = (set) => ({
  isMobile: false,
  isSidebarOpen: false,
  setIsMobile: (isMobile) => set({ isMobile }),
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
});

const useClientConfigStore = create<ClientConfigState & ClientConfigActions>()(
  persist(clientConfigStore, { name: "client-config" })
);

export default useClientConfigStore;
