import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_TEMPER = "GER_TEMPER";
export const GET_DOG_NAME = "GET_DOG_NAME";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const RESET_DETAIL = "RESET_DETAIL";

export const getDogs = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/dogs");
    const dogs = response.data;

    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const getDog = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/dogs`);
    const dog = response.data;
    dispatch({ type: GET_DOG, payload: dog });
  };
};

export const getTemp = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/tempers");
    const temper = response.data;
    console.log(temper);
    dispatch({ type: GET_TEMPER, payload: temper });
  };
};

export const getDogName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    const temper = response.data;
    console.log(temper);
    dispatch({ type: GET_DOG_NAME, payload: temper });
  };
};
export const setCurrentPage = (page) => ({
  type: "SET_CURRENT_PAGE",
  payload: page,
});

export const setItemsPerPage = (perPage) => ({
  type: "SET_ITEMS_PER_PAGE",
  payload: perPage,
});
export const resetDetail = () => {
  return {
    type: RESET_DETAIL,
  };
};
export const getDogDetail = (id) => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: GET_DOG_DETAIL,
      payload: response.data,
    });
  };
};
