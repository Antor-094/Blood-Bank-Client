import { axiosInstance } from "./userApi";

export const GetAllBloodBroupsInInventory = () => {
  return axiosInstance("get", "http://localhost:5000/api/dashboard/blood-groups-data");
};