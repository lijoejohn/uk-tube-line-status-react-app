import { getUrl, sort, parseData, getChunks, getColorClass } from '../../services/helper';
import { unProcessedData, processedData, SAMPLE_ID } from '../mockData';

describe('Helper functions test', function () {
  test('getUrl should return correct value', () => {
    const data = { param: undefined, url: 'Line/Mode/Tube/Status' };
    const endpoint = `${process.env.VITE_BACK_END_URL}Line/Mode/Tube/Status?app_key=${process.env.VITE_API_KEY}&`;
    const returnData = getUrl(data);
    expect(returnData.match(endpoint));
  });
  test('getUrl should return correct value when passing url params', () => {
    const data = { param: { param1: 'value1' }, url: 'Line/Mode/Tube/Status' };
    const endpoint = `${process.env.VITE_BACK_END_URL}Line/Mode/Tube/Status?app_key=${process.env.VITE_API_KEY}&param1=value1`;
    const returnData = getUrl(data);
    expect(returnData.match(endpoint));
  });
  test('Sort function should return correct dataset bases on low statusSeverity first', () => {
    const lowSeverity = {
      name: 'name',
      id: 'id',
      statusSeverity: 1,
      statusSeverityDescription: 'statusSeverityDescription',
      lineId: 'lineId'
    };
    const highSeverity = {
      name: 'name',
      id: 'id',
      statusSeverity: 2,
      statusSeverityDescription: 'statusSeverityDescription',
      lineId: 'lineId'
    };
    const data = [highSeverity, lowSeverity];
    const returnData = sort(data);
    expect(returnData[0]).toEqual(lowSeverity);
  });

  test('parseData should return correct data set by skipping the unwanted keys', () => {
    const returnData = parseData(unProcessedData);
    expect(returnData).toEqual(processedData);
  });

  test('getChunks should return  data in array of chunks based on chunk size', () => {
    let returnData = getChunks(
      [...processedData, ...processedData, ...processedData, ...processedData],
      3
    );
    expect(returnData.length).toEqual(2);

    returnData = getChunks([...processedData, ...processedData, ...processedData], 3);
    expect(returnData.length).toEqual(1);
  });

  test('getColorClass should return correct color code based on tube name', () => {
    let returnData = getColorClass(SAMPLE_ID);
    expect(returnData).toEqual('bg-color-red');
    returnData = getColorClass('central');
    expect(returnData).toEqual('bg-color-yellow');
    returnData = getColorClass('dfsgr');
    expect(returnData).toEqual('bg-color-red');
  });
});
