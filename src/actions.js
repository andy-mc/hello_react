import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCES,
  REQUEST_ROBOTS_FAILED 
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  fetch('https://my-json-server.typicode.com/andy-mc/hello_react/get')
    .then(response => response.json())
    .then(robotsData => dispatch({ type: REQUEST_ROBOTS_SUCCES, payload: robotsData }))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error }))
};