import { ServiceType } from "@/types";
import { create } from "zustand";

interface ServiceState {
  serviceList: ServiceType[];
  setServiceList: (serviceList: ServiceType[]) => void;
}

export const useServiceStore = create<ServiceState>(set => ({
  serviceList: [],
  setServiceList: serviceList => set({ serviceList }),
}));
