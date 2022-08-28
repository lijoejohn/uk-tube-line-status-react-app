interface Params {
  [key: string]: string | number;
}

interface FetchParams {
  param?: Params;
  url: string;
}

interface useFetchTypes {
  method: string;
  url: string;
  body?: string;
  param?: Params;
}

interface Status {
  statusSeverity: number;
  statusSeverityDescription: string;
  reason?: string;
  lineId: string;
}
interface LineStatus {
  name: string;
  id: string;
  lineStatuses: [Status];
}

interface SingleLineStatus extends Status {
  name: string;
  id: string;
}

export type { FetchParams, Status, LineStatus, SingleLineStatus, useFetchTypes };
