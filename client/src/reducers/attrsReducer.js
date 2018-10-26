export default function attrsReducer(state = [], action) {
  switch (action.type) {

    case "FETCH_COUNTRIES":
      return state.concat(action.countries)
      
    default:
      return state
  }
};
