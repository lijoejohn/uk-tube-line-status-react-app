import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetchTypes } from '../Interface/tubeStatus';
import { getUrl } from './helper';

/* fetchData
a helper function to call api with axios
fully configurable with method, url and querry params
*/
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

/* useFetch
a custom react hook to use for api calls
fully configurable with method, url and querry params
*/
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
