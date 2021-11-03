import {FeaturesTypes} from '../const';
import firstSlideStandart from '../assets/img/desktop-slide-1-1x.jpg';
import firstSlideRetina from '../assets/img/desktop-slide-1-2x.jpg';
import firstPreviewSlideStandart from '../assets/img/desktop-slide-1-preview-1x.jpg';
import firstPreviewSlideRetina from '../assets/img/desktop-slide-1-preview-2x.jpg';
import secondSlideStandart from '../assets/img/desktop-slide-2-1x.jpg';
import secondSlideRetina from '../assets/img/desktop-slide-2-2x.jpg';
import secondPreviewSlideStandart from '../assets/img/desktop-slide-2-preview-1x.jpg';
import secondPreviewSlideRetina from '../assets/img/desktop-slide-2-preview-2x.jpg';
import thirdSlideStandart from '../assets/img/desktop-slide-3-1x.jpg';
import thirdSlideRetina from '../assets/img/desktop-slide-3-2x.jpg';
import thirdPreviewSlideStandart from '../assets/img/desktop-slide-3-preview-1x.jpg';
import thirdPreviewSlideRetina from '../assets/img/desktop-slide-3-preview-2x.jpg';

const product = {
  productName: 'Марпех 11',
  newPrice: '2 300 000 ₽',
  oldPrice: '2 400 000 ₽',
  photos: [
    {
      srcSlide: firstSlideStandart,
      srcSlideRetina: firstSlideRetina,
      srcPreviewSlide: firstPreviewSlideStandart,
      srcPreviewSlideRetina: firstPreviewSlideRetina,
      alt: 'Марпех 11 экстерьер',
    },
    {
      srcSlide: secondSlideStandart,
      srcSlideRetina: secondSlideRetina,
      srcPreviewSlide: secondPreviewSlideStandart,
      srcPreviewSlideRetina: secondPreviewSlideRetina,
      alt:  'Марпех 11 интерьер',
    },
    {
      srcSlide: thirdSlideStandart,
      srcSlideRetina: thirdSlideRetina,
      srcPreviewSlide: thirdPreviewSlideStandart,
      srcPreviewSlideRetina: thirdPreviewSlideRetina,
      alt: 'Марпех 11 приборная панель',
    },
  ],
  mainFeatures: [
    {
      featureType: FeaturesTypes.FUEL_TYPE,
      value: 'бензин',
    },
    {
      featureType: FeaturesTypes.TRANSMISSION_TYPE,
      value: 'механика',
    },
    {
      featureType: FeaturesTypes.ENGINE_POWER,
      value: '100 л.с.',
    },
    {
      featureType: FeaturesTypes.ENGINE_VOLUME,
      value: '1.4 л',
    },
  ],
  techDetails: [
    {
      name: 'Трансмиссия',
      value: 'Роботизированная',
    },
    {
      name: 'Мощность двигателя, л.с.',
      value: '249',
    },
    {
      name: 'Тип двигателя',
      value: 'Бензиновый',
    },
    {
      name: 'Привод',
      value: 'Полный',
    },
    {
      name: 'Объем двигателя, л',
      value: '2.4',
    },
    {
      name: 'Макс. крутящий момент',
      value: '370/4500',
    },
    {
      name: 'Количество цилиндров',
      value: '4',
    },
  ],
};

export {
  product
};
