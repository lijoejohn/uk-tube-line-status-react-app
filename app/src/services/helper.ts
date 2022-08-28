import { TUBE_LINE_COLORCODES } from '../constans';
import { FetchParams, LineStatus, SingleLineStatus } from '../Interface/tubeStatus';

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

const sort = (dataSet: SingleLineStatus[]) => {
  function compare(a: SingleLineStatus, b: SingleLineStatus) {
    if (a.statusSeverityDescription < b.statusSeverityDescription) {
      return 1;
    }
    if (a.statusSeverityDescription > b.statusSeverityDescription) {
      return -1;
    }
    return 0;
  }
  dataSet.sort(compare);
  return dataSet;
};

const parseData = (data: [LineStatus]) => {
  const returnData: SingleLineStatus[] = [];
  if (data.length) {
    data.forEach(({ name, id, lineStatuses }) => {
      const lineStatus = lineStatuses[0];
      returnData.push({ ...lineStatus, name, id });
    });
  }
  return sort(returnData);
};

const getChunks = (array: SingleLineStatus[], chunkSize: number) => {
  const returnData: SingleLineStatus[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    returnData.push(chunk);
  }
  return returnData;
};

const getColorClass = (tubeId: string) => {
  const className = 'bg-color-red';
  const record = TUBE_LINE_COLORCODES.find((items) => {
    return items.id === tubeId;
  });
  return record?.color || className;
};
export { getUrl, sort, parseData, getChunks, getColorClass };
