const BASE_URL = 'https://14.design.pages.academy';
const DEFAULT_CITY = 'Paris';
const REQUEST_TIMEOUT = 5000;

const DEFAULT_VALUE_NULL = 0;
const MAX_LENGTH_REVIEW = 10;
const MAX_LENGTH_OFFERS_NEAR = 3;
const MAX_LENGTH_OFFER_PHOTO = 6;
const MAX_LENGTH_POINT_NEAR = 3;
const ENDING = 2;
const RENAME_WORD = 1;

export const CommentLength = {
  Min: 50,
  Max: 300
} as const;

export const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const CitiesForFilter = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Error = '/error'
}

enum ApiRoute {
  Offers = '/six-cities/offers',
  OffersFavorite = '/six-cities/favorite',
  Comments = '/six-cities/comments',
  Login = '/six-cities/login',
  Logout = '/six-cities/logout'
 }

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum TitleDescription {
  MainPage = '6 cities',
  LoginPage = '6 cities: authorization',
  FavoritePage = '6 cities: favorites',
  OfferPage = '6 cities: offer',
  ErrorPage = '6 cities: error'
}

export const DEFAULT_ICON = {
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
};

export const CURRENT_ICON = {
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
};

export const MonthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const Options = [
  {label: 'perfect', value: 5},
  {label: 'good', value: 4},
  {label: 'not bad', value: 3},
  {label: 'badly', value: 2},
  {label: 'terribly', value: 1},
];

export const DefaultCityToMap = {
  Paris: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },

  Cologne: {
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 13,
  },

  Dusseldorf: {
    title: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 13
  },

  Amsterdam: {
    title: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 13
  },

  Brussels: {
    title: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 13
  },

  Hamburg: {
    title: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 13
  },
} as const;

export const SettingLogoHeader = {
  ClassName: 'header',
  Width: 81,
  Height: 41,
} as const;

export const SettingLogoFooter = {
  ClassName: 'footer',
  Width: 64,
  Height: 33,
} as const;

export const SettingFavoriteCard = {
  ClassName: 'favorites',
  Width: 150,
  Height: 110,
} as const;

export const SettingCardCities = {
  ClassName: 'cities',
  Width: 260,
  Height: 200,
} as const;

export const SettingFavoriteButtonOfferPage = {
  ClassName: 'offer__bookmark-button',
  Width: 31,
  Height: 33,
} as const;

export const SettingFavoriteButtonCard = {
  ClassName: 'place-card__bookmark-button',
  Width: 18,
  Height: 19,
} as const;

export const StatusFavoriteToServer = {
  Favorite: 1,
  NoFavorite: 0,
} as const;

export const Sort = {
  Popular: 'Popular',
  LowToHight: 'low to high',
  HighToLow: 'high to low',
  TopRatedFirst: 'Top rated first'
} as const;

export {
  AppRoute,
  AuthorizationStatus,
  ApiRoute,
  TitleDescription,
  MAX_LENGTH_REVIEW,
  DEFAULT_CITY,
  BASE_URL,
  REQUEST_TIMEOUT,
  ENDING,
  DEFAULT_VALUE_NULL,
  MAX_LENGTH_OFFERS_NEAR,
  MAX_LENGTH_OFFER_PHOTO,
  MAX_LENGTH_POINT_NEAR,
  RENAME_WORD
};
