const SAMPLE_ID = 'bakerloo';
const SAMPLE_NAME = 'Bakerloo';
const mockData = [
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: SAMPLE_ID,
    name: SAMPLE_NAME,
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: 'Good Service',
        created: '0001-01-01T00:00:00',
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Bakerloo&serviceTypes=Regular'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'central',
    name: 'Central',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        lineId: 'central',
        statusSeverity: 9,
        statusSeverityDescription: 'Minor Delays',
        reason:
          'Central Line: Minor delays between White City and Ealing Broadway / West Ruislip, also between Leytonstone and Epping / Woodford via Hainault due to train cancellations. GOOD SERVICE on the rest of the line. ',
        created: '0001-01-01T00:00:00',
        validityPeriods: [
          {
            $type: 'Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities',
            fromDate: '2022-08-27T20:22:55Z',
            toDate: '2022-08-28T00:29:00Z',
            isNow: true
          }
        ],
        disruption: {
          $type: 'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
          category: 'RealTime',
          categoryDescription: 'RealTime',
          description:
            'Central Line: Minor delays between White City and Ealing Broadway / West Ruislip, also between Leytonstone and Epping / Woodford via Hainault due to train cancellations. GOOD SERVICE on the rest of the line. ',
          affectedRoutes: [],
          affectedStops: [],
          closureText: 'minorDelays'
        }
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Central&serviceTypes=Regular'
      },
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Night',
        uri: '/Line/Route?ids=Central&serviceTypes=Night'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'circle',
    name: 'Circle',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: 'Good Service',
        created: '0001-01-01T00:00:00',
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Circle&serviceTypes=Regular'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'district',
    name: 'District',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: 'Good Service',
        created: '0001-01-01T00:00:00',
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=District&serviceTypes=Regular'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'hammersmith-city',
    name: 'Hammersmith & City',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        lineId: 'hammersmith-city',
        statusSeverity: 9,
        statusSeverityDescription: 'Minor Delays',
        reason: 'Hammersmith and City Line: Minor delays due to train cancellations. ',
        created: '0001-01-01T00:00:00',
        validityPeriods: [
          {
            $type: 'Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities',
            fromDate: '2022-08-27T17:28:44Z',
            toDate: '2022-08-28T00:29:00Z',
            isNow: true
          }
        ],
        disruption: {
          $type: 'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
          category: 'RealTime',
          categoryDescription: 'RealTime',
          description: 'Hammersmith and City Line: Minor delays due to train cancellations. ',
          affectedRoutes: [],
          affectedStops: [],
          closureText: 'minorDelays'
        }
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Hammersmith & City&serviceTypes=Regular'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'jubilee',
    name: 'Jubilee',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        lineId: 'jubilee',
        statusSeverity: 9,
        statusSeverityDescription: 'Minor Delays',
        reason: 'Jubilee Line: Minor delays due to train cancellations. ',
        created: '0001-01-01T00:00:00',
        validityPeriods: [
          {
            $type: 'Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities',
            fromDate: '2022-08-27T15:13:52Z',
            toDate: '2022-08-28T00:29:00Z',
            isNow: true
          }
        ],
        disruption: {
          $type: 'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
          category: 'RealTime',
          categoryDescription: 'RealTime',
          description: 'Jubilee Line: Minor delays due to train cancellations. ',
          affectedRoutes: [],
          affectedStops: [],
          closureText: 'minorDelays'
        }
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Jubilee&serviceTypes=Regular'
      },
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Night',
        uri: '/Line/Route?ids=Jubilee&serviceTypes=Night'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'metropolitan',
    name: 'Metropolitan',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        lineId: 'metropolitan',
        statusSeverity: 5,
        statusSeverityDescription: 'Part Closure',
        reason:
          'METROPOLITAN LINE: Saturday 27, Sunday 28 and Bank Holiday Monday 29 August, no service between Harrow-on-the-Hill and Watford / Amersham / Chesham. Replacement buses operate. No Chiltern Railways services between Marylebone and Amersham.',
        created: '0001-01-01T00:00:00',
        validityPeriods: [
          {
            $type: 'Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities',
            fromDate: '2022-08-27T03:30:00Z',
            toDate: '2022-08-30T00:29:00Z',
            isNow: false
          }
        ],
        disruption: {
          $type: 'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
          category: 'PlannedWork',
          categoryDescription: 'PlannedWork',
          description:
            'METROPOLITAN LINE: Saturday 27, Sunday 28 and Bank Holiday Monday 29 August, no service between Harrow-on-the-Hill and Watford / Amersham / Chesham. Replacement buses operate. No Chiltern Railways services between Marylebone and Amersham.',
          additionalInfo:
            'Replacement buses operate:Service ML2: Harrow-on-the-Hill - North Harrow - Pinner - Northwood Hills - Northwood - Rickmansworth - Croxley - WatfordService ML3: Harrow-on-the-Hill - North Harrow - Pinner - Northwood Hills - Northwood - RickmansworthService ML6: Rickmansworth - Chorleywood - Chalfont & Latimer - Amersham (with certain journeys extended to Chesham)Customers wishing to travel to Moor Park should alight at Northwood and seek assistance from station staff',
          created: '2022-02-17T09:14:00Z',
          affectedRoutes: [],
          affectedStops: [],
          closureText: 'partClosure'
        }
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Metropolitan&serviceTypes=Regular'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'northern',
    name: 'Northern',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: 'Good Service',
        created: '0001-01-01T00:00:00',
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Northern&serviceTypes=Regular'
      },
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Night',
        uri: '/Line/Route?ids=Northern&serviceTypes=Night'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'piccadilly',
    name: 'Piccadilly',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: 'Good Service',
        created: '0001-01-01T00:00:00',
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Piccadilly&serviceTypes=Regular'
      },
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Night',
        uri: '/Line/Route?ids=Piccadilly&serviceTypes=Night'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'victoria',
    name: 'Victoria',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.123Z',
    modified: '2022-08-22T16:51:28.123Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: 'Good Service',
        created: '0001-01-01T00:00:00',
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Victoria&serviceTypes=Regular'
      },
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Night',
        uri: '/Line/Route?ids=Victoria&serviceTypes=Night'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  },
  {
    $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
    id: 'waterloo-city',
    name: 'Waterloo & City',
    modeName: 'tube',
    disruptions: [],
    created: '2022-08-22T16:51:28.107Z',
    modified: '2022-08-22T16:51:28.107Z',
    lineStatuses: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
        id: 0,
        lineId: 'waterloo-city',
        statusSeverity: 4,
        statusSeverityDescription: 'Planned Closure',
        reason:
          'WATERLOO & CITY LINE: Closed on weekends and public bank holidays. Services resume on Monday morning.',
        created: '0001-01-01T00:00:00',
        validityPeriods: [
          {
            $type: 'Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities',
            fromDate: '2022-08-27T03:30:00Z',
            toDate: '2022-08-27T22:59:00Z',
            isNow: false
          }
        ],
        disruption: {
          $type: 'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
          category: 'PlannedWork',
          categoryDescription: 'PlannedWork',
          description:
            'WATERLOO & CITY LINE: Closed on weekends and public bank holidays. Services resume on Monday morning.',
          created: '2022-03-11T11:08:00Z',
          affectedRoutes: [],
          affectedStops: [],
          closureText: 'plannedClosure'
        }
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
        name: 'Regular',
        uri: '/Line/Route?ids=Waterloo & City&serviceTypes=Regular'
      }
    ],
    crowding: {
      $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
    }
  }
];
export { mockData, SAMPLE_ID, SAMPLE_NAME };
