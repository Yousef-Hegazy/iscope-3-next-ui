import { DynamicNavType, NavObject } from "@/lib/navConfig";
import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface RoutesState {
  mainRoute?: NavObject | null;
  subRoutes: NavObject[];
  dynamicNavType?: DynamicNavType;
}

export interface RoutesActions {
  setSubRoutes: (subRoutes: NavObject[]) => void;
  setMainRoute: (mainRoute?: NavObject | null) => void;
  setDynamicNavType: (name?: DynamicNavType) => void;
}

const routesStore: StateCreator<RoutesState & RoutesActions> = (set) => ({
  mainRoute: null,
  subRoutes: [],
  dynamicNavType: undefined,
  setDynamicNavType: (dynamicNavType) => set({ dynamicNavType }),
  setSubRoutes: (subRoutes) => set({ subRoutes }),
  setMainRoute: (mainRoute) => set({ mainRoute, dynamicNavType: undefined }),
});

const useRoutesStore = create<RoutesState & RoutesActions>()(
  persist(routesStore, {
    name: "routes",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useRoutesStore;
