const HEADER_NAV_ITEMS = [
  {
    title: 'Автомобили',
    link: '#',
  },
  {
    title: 'Контакты',
    link: '#',
  },
  {
    title: 'Услуги',
    link: '#',
  },
  {
    title: 'Вакансии',
    link: '#',
  },
];

const FOOTER_NAV_ITEMS = [
  {
    title: 'Корпоративным клиентам',
    link: '#',
  },
  {
    title: 'Клиентам',
    link: '#',
  },
  {
    title: 'Аренда авто',
    link: '#',
  },
  {
    title: 'Каршеринг',
    link: '#',
  },
  {
    title: 'Как продать авто',
    link: '#',
  },
  {
    title: 'Trade-in',
    link: '#',
  },
  {
    title: 'Test drive',
    link: '#',
  },
];

const CONTACTS = {
  adressTitle: 'Адрес',
  adressValue: 'Санкт-Петербург,\nнабережная реки Карповки, дом 5',
  workTimeTitle: 'Режим работы',
  workTimeValue: 'Ежедневно, с 10:00 до 21:00',
  phoneTitle: 'Телефон',
  phoneValue: '8 (800) 333-55-99',
  emailTitle: 'E-mail',
  emailValue: 'info@avto-moto.ru',
};

const DEFAULT_MAP_LAT = 59.9682962;
const DEFAULT_MAP_LNG = 30.3152402;
const DEFAULT_MAP_ZOOM = 17.42;
const MAP_WIDTH = '431px';
const API_KEY = '';

const STARS_COUNT = 5;
const StarsSizes = {
  WIDTH_SMALL: 16,
  HEIGHT_SMALL: 17,
  WIDTH_BIG: 27,
  HEIGHT_BIG: 27,
};
const StarsFillColor = {
  ACTIVE:'#D12136',
  INACTIVE: '#E5E5E5',
};

const FeaturesTypes = {
  FUEL_TYPE: 'fuel-type',
  TRANSMISSION_TYPE: 'transmission-type',
  ENGINE_POWER: 'engine-power',
  ENGINE_VOLUME: 'engine-volume',
};

const TabsName = {
  SPECIFICATIONS: 'Характеристики',
  REVIEWS: 'Отзывы',
  CONTACTS: 'Контакты',
};

const TextualRating = {
  BAD: 'Плохо',
  NORMAL: 'Нормально',
  GOOD: 'Советуют',
  VERY_GOOD: 'Очень хорошо',
  AWESOME: 'Отлично',
};


export {
  HEADER_NAV_ITEMS,
  FOOTER_NAV_ITEMS,
  CONTACTS,
  DEFAULT_MAP_LAT,
  DEFAULT_MAP_LNG,
  DEFAULT_MAP_ZOOM,
  MAP_WIDTH,
  API_KEY,
  STARS_COUNT,
  StarsFillColor,
  StarsSizes,
  FeaturesTypes,
  TabsName,
  TextualRating
};
