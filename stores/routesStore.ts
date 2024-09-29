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

export type RoutesStoreType = RoutesState & RoutesActions;

const routesStore: StateCreator<RoutesStoreType> = (set) => ({
  mainRoute: null,
  subRoutes: [],
  dynamicNavType: undefined,
  setDynamicNavType: (dynamicNavType) => set({ dynamicNavType }),
  setSubRoutes: (subRoutes) => set({ subRoutes }),
  setMainRoute: (mainRoute) => set({ mainRoute, dynamicNavType: undefined }),
});

const useRoutesStore = create<RoutesStoreType>()(
  persist(routesStore, {
    name: "routes",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useRoutesStore;
