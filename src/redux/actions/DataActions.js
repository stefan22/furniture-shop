import type from '../Types';
import { data as placeholder} from './PlaceholderData';

// placeholder data
export const doLoadData = () => dispatch => {
  let categories = new Promise(resolve => resolve(placeholder.categories));

  categories.then(results => dispatch({
      type: type.SET_CATEGORIES,
      payload: results,
    }))
    .catch(err => console.log(err));

  let products = new Promise(resolve => resolve(placeholder.products));
  products.then(results => dispatch({
      type: type.SET_PRODUCTS,
      payload: results,
    }))
    .catch(err => console.log(err));

}






