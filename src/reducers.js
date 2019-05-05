import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
  console.log(1);
  console.log('state:', state)
  console.log('action:', action)
  switch (action.type) { 
    case CHANGE_SEARCH_FIELD:
      console.log('CHANGE_SEARCH_FIELD')
      return Object.assign({}, state, { searchField: action.payload })
    
    default:
      console.log('default:')
      return state;
  }  
};