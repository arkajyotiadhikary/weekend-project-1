import { err } from "react-native-svg";
import axiosInstance from "../utils/axiosInstance";

type FetchData = (ignr: string) => any;

const fetchData: FetchData = async (ingr) => {
      console.log("ingr", ingr);
      try {
            const requestConfing: any = {
                  params: {
                        query: ingr,
                  },
            };
            const response = await axiosInstance.get("", requestConfing);
            return response.data;
      } catch (error) {
            console.error("Error fetching data!", err);
            throw err;
      }
};

export { fetchData };
