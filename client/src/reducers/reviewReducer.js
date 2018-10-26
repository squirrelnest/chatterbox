import {
  ADD_REVIEW,
  REMOVE_REVIEW,
  GET_REVIEWS,
  LOADING_REVIEWS
} from '../actions/reviewActions'

const initialState = {
  reviews: []
}

/* Object.assign(target, source object, source object) copies values from one or more source objects to the target object then returns the target object */

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {

    case LOADING_REVIEWS:
      return { reviews: [] }

    case GET_REVIEWS:
      return { reviews: action.payload.data.reviews }

    case ADD_REVIEW:
      const review = Object.assign({}, action.review)
      return { reviews: state.reviews.concat(review) }

    case REMOVE_REVIEW:
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return { reviews }

    default:
      return state
  }
}
