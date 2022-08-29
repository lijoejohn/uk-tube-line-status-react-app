import { TUBE_LINE_COLORCODES } from '../constans';
import { FetchParams, LineStatus, SingleLineStatus } from '../Interface/tubeStatus';

/* getUrl
a helper function generate the endpoint url based on url,params
*/
const getUrl = ({ url, param }: FetchParams) => {
  let paramString = '';
  if (param) {
    paramString = Object.keys(param)
      .map(function (k) {
        return `${encodeURIComponent(k)}'='${encodeURIComponent(param[k])}`;
      })
      .join('&');
  }
  const endPoint = `${process.env.VITE_BACK_END_URL}${url}?app_key=${process.env.VITE_API_KEY}&${paramString}`;
  return endPoint;
};

/* sort
a helper function generate the line status based on statusSeverity
*/
const sort = (dataSet: SingleLineStatus[]) => {
  function compare(a: SingleLineStatus, b: SingleLineStatus) {
    if (a.statusSeverity > b.statusSeverity) {
      return 1;
    }
    if (a.statusSeverity < b.statusSeverity) {
      return -1;
    }
    return 0;
  }
  dataSet.sort(compare);
  return dataSet;
};

/* parseData
a helper function parseData the api response, this function will only return
required dats for the line status rendering, and also it will flatten the
lineStatuses array to object
*/
const parseData = (data: LineStatus[]) => {
  const returnData: SingleLineStatus[] = [];
  if (data.length) {
    data.forEach(({ name, id, lineStatuses }) => {
      const lineStatus = lineStatuses[0];
      returnData.push({ ...lineStatus, name, id });
    });
  }
  return sort(returnData);
};

/* getChunks
a helper function split the total result in to chunks based on the chunk size
this is used in status list rendering, by default we are rendering in 2 column layout in desktop
with 8 items in each container
*/
const getChunks = (array: SingleLineStatus[], chunkSize: number) => {
  const returnData: SingleLineStatus[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    returnData.push(chunk);
  }
  return returnData;
};

/* getColorClass
a helper function to return the corresponding color class names based on the tube name
*/
const getColorClass = (tubeId: string) => {
  const className = 'bg-color-red';
  const record = TUBE_LINE_COLORCODES.find((items) => {
    return items.id === tubeId;
  });
  return record?.color || className;
};
export { getUrl, sort, parseData, getChunks, getColorClass };
