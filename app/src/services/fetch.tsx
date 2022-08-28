import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetchTypes } from '../Interface/tubeStatus';
import { getUrl } from './helper';

const fetchData = async ({ method, url: endPoint, body }: useFetchTypes) => {
  try {
    const resp = await axios({
      method,
      url: endPoint,
      data: body
    });
    const { data, status } = resp;
    return status === 200 ? data : false;
  } catch (error) {
    return error;
  }
};

const useFetch = ({ method = 'GET', url, body, param }: useFetchTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<any>();
  const endPoint = getUrl({ url, param });
  useEffect(() => {
    setIsLoading(true);
    fetchData({
      method,
      url: endPoint,
      body
    }).then((response) => {
      if (response) {
        setApiData(response || []);
        setIsLoading(false);
      }
    });
  }, [url, method, body]);

  return { isLoading, apiData };
};
export default useFetch;
export { fetchData };
