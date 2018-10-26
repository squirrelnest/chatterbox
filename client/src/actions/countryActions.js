import fetch from 'isomorphic-fetch';

export function fetchCountries() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COUNTRIES' });
    return fetch('http://localhost:3001/geojson')
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({
          type: 'FETCH_COUNTRIES',
          nicknames: responseJSON.nicknames
        })
      })
  }
}
