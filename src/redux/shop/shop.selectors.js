import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollection],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollections = memoize(
  collectionUrlParam => 
  createSelector(
    [selectCollection],
    collections=> collections[collectionUrlParam]
  )
);