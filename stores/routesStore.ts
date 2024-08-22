import { NavObject } from "@/lib/navConfig";
import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface RoutesState {
  mainRoute?: NavObject | null;
  subRoutes: NavObject[];
}

export interface RoutesActions {
  setSubRoutes: (subRoutes: NavObject[]) => void;
  setMainRoute: (mainRoute?: NavObject | null) => void;
}

const routesStore: StateCreator<RoutesState & RoutesActions> = (set) => ({
  mainRoute: null,
  subRoutes: [],
  setSubRoutes: (subRoutes) => set({ subRoutes }),
  setMainRoute: (mainRoute) => set({ mainRoute }),
});

const useRoutesStore = create<RoutesState & RoutesActions>()(
  persist(routesStore, {
    name: "routes",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useRoutesStore;
