import { ServiceAPI } from "@/apis/serviceAPI";
import { useServiceStore } from "@/stores/serviceStore";

export const useServiceHook = () => {
  const serviceAPI = new ServiceAPI();
  const { setServiceList } = useServiceStore();

  const fetchServiceList = async () => {
    try {
      const response = await serviceAPI.fetchServiceList();
      if (response) {
        setServiceList(response);
      } else {
        setServiceList([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchServiceList,
  };
};
