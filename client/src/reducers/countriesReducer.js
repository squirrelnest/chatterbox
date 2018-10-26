export default function countriesReducer(state = {loading: false, countries: []}, action = {}) {
  switch (action.type) {

    case "FETCH_COUNTRIES": {
      if (action.pictures) {
        return {
            loading: false,
            // use spread operator to explode the action.pictures array into its component elements
            // instead of nesting array inside the cats array
            countries: [...state.countries, ...action.nicknames]
          }
      } else {
        return state
      }
    }

    case "LOADING_COUNTRIES": {
      return {
          loading: true,
          countries: []
      }
    }

    default:
      return state
  }
};
