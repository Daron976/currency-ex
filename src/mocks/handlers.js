/*eslint-disable*/
import { rest } from 'msw';

const data = [
  {
    name: {
    common: "Mauritania",
    official: "Islamic Republic of Mauritania",
    },
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
    MRU: {
    name: "Mauritanian ouguiya",
    symbol: "UM"
    }
    },
    capital: [
    "Nouakchott"
    ],
    region: "Africa",
    subregion: "Western Africa",
    flag: "🇲🇷",
    maps: {
    googleMaps: "https://goo.gl/maps/im2MmQ5jFjzxWBks5",
    openStreetMaps: "https://www.openstreetmap.org/relation/192763"
    },
    population: 4649660,
    gini: {
    2014: 32.6
    },
    fifa: "MTN",
    car: {
    signs: [
    "RIM"
    ],
    side: "right"
    },
    timezones: [
    "UTC"
    ],
    continents: [
    "Africa"
    ],
    flags: {
    png: "https://flagcdn.com/w320/mr.png",
    svg: "https://flagcdn.com/mr.svg"
    },
    coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/mr.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/mr.svg"
    },
    startOfWeek: "monday",
    capitalInfo: {
    latlng: [
    18.07,
    -15.97
    ]
    }
    },
    {
      name: {
      common: "Mauritania",
      official: "Islamic Republic of Mauritania",
      },
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: {
      MRU: {
      name: "Mauritanian ouguiya",
      symbol: "UM"
      }
      },
      capital: [
      "Nouakchott"
      ],
      region: "Africa",
      subregion: "Western Africa",
      flag: "🇲🇷",
      maps: {
      googleMaps: "https://goo.gl/maps/im2MmQ5jFjzxWBks5",
      openStreetMaps: "https://www.openstreetmap.org/relation/192763"
      },
      population: 4649660,
      gini: {
      2014: 32.6
      },
      fifa: "MTN",
      car: {
      signs: [
      "RIM"
      ],
      side: "right"
      },
      timezones: [
      "UTC"
      ],
      continents: [
      "Africa"
      ],
      flags: {
      png: "https://flagcdn.com/w320/mr.png",
      svg: "https://flagcdn.com/mr.svg"
      },
      coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/mr.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/mr.svg"
      },
      startOfWeek: "monday",
      capitalInfo: {
      latlng: [
      18.07,
      -15.97
      ]
      }
      }
]

export const handlers = [
  // Handles a GET /user request
  rest.get('/currency', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMeassage: 'Not Authorized',
        }),
      );
    }

    return res(
      ctx.status(300),
      ctx.json({
        data,
      }),
    );
  }),
];
