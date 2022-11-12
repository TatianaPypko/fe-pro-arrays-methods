import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  const filterBrand = goods.filter(function (item) {
    return item.brand === brand;
  });
  return filterBrand;
};
 

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  const filterColor = goods.filter(function (item) {
    return item.color === color;
  });
  return filterColor;
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  const filterModel = goods.filter(function (item) {
    return item.model === model;
  });
  return filterModel;
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  const filterMemory = goods.filter(function (item) {
    return item.memory === memory;
  });
  return filterMemory;
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  const filterPrice = goods.filter(function (item) {
    return item.price === price;
  });
  return filterPrice;
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  const filterCountry = goods.filter(function (item) {
    return item.country === country;
  });
  return filterCountry;
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
 const filterOs = goods.filter(function (item) {
    return item.os === os;
 });
  return filterOs;
}

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter(item => {
    if (from <= item.price && item.price <= to) {
      return item;
    }
  });
};

const minPriceReducer = () => {
  return goods.reduce((acc, item) => {
    if (acc === 0 || acc >= item.price) acc = item.price;
    return acc;
  }, Infinity)
};

const maxPriceReducer = () => {
  return goods.reduce((acc, item) => {
    if (acc === 0 || acc <= item.price) acc = item.price;
    return acc;
  }, 0)
};

const toMaxSorter = () => {
  return goods.sort((a, b) => {
    if (a.price < b.price) return 1;
    if (a.price === b.price) return 0;
    if (a.price > b.price) return -1;
  })
};
const toMinSorter = () => {
  return goods.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price === b.price) return 0;
    if (a.price < b.price) return -1;
  })
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
