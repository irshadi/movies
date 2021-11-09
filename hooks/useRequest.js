import axios from "axios";
import { isEmpty } from "../helper";

export const useRequest = () => {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.BASE_URL;
  const IMG_URL = process.env.IMAGE_URL;
  const URL = `${BASE_URL}/?apikey=${API_KEY}&`;
  const IMAGE_URL = `${IMG_URL}/?apikey=${API_KEY}&`;

  const get = async (url, params = {}) => {
    const hasParams = !isEmpty(params);

    try {
      const { data } = await axios({
        method: "GET",
        url,
        ...(hasParams && { params })
      });
      return data;
    } catch (e) {
      throw e;
    }
  };
  return { get, URL, IMAGE_URL };
};
