import { useEffect, useState } from "react";
import { refTryRefactor, axiosInstance } from "../constants";

export interface UseAxiosRequestInterface {
  method: "post" | "patch" | "get" | "put" | "delete";
  endpoint: string;
  payload?: any;
  errorHandler?: any;
  successHandler?: any;
}

export default function useAxios() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const processRequest = async (options: UseAxiosRequestInterface) => {
    setLoading(true);
    const { method, endpoint, payload, errorHandler, successHandler } = options;
    const promise = axiosInstance[method](endpoint, payload);
    const [res] = await refTryRefactor(promise);
    if (res) {
      setData(res.data);
      successHandler();
      setLoading(false);
    } else {
      setError(true);
      errorHandler();
      setLoading(false);
    }
  };
  return { processRequest, data, loading, error };
}
