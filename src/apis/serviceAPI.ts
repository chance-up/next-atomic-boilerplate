import { ServiceType } from "@/types";
import axios from "./axios";

export class ServiceAPI {
  fetchServiceList = async () => {
    try {
      const response = await axios.get<ServiceType[]>("data/service.json");
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("error");
    }
  };
}
