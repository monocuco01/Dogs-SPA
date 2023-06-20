const initialState = {
  dogs: [],
  temper: [],
  currentPage: 1,
  itemsPerPage: 8,
};

import {
  GET_DOGS,
  GET_TEMPER,
  GET_DOG_NAME,
  GET_DOG_DETAIL,
  RESET_DETAIL,
} from "./actions";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, filteredDogs: action.payload };

    case GET_TEMPER:
      return { ...state, temper: action.payload };
    case GET_DOG_NAME:
      return { ...state, dogs: action.payload };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_ITEMS_PER_PAGE":
      return {
        ...state,
        itemsPerPage: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case RESET_DETAIL:
      return {
        ...state,
        dogDetail: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
