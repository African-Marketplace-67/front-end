import axiosWithAuth from '../utils/axiosWithAuth'

export const FETCHING_ITEMS_START = "FETCHING_ITEMS_START";
export const FETCHING_ITEMS_SUCCESS = "FETCHING_ITEMS_SUCCESS";
export const ADDING_ITEMS_START = "ADDING_ITEMS_START";
export const ADDING_ITEMS_SUCCESS = "ADDING_ITEMS_SUCCESS";
export const EDIT_ITEM_START = "EDIT_ITEM_START";
export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS";
export const DELETE_ITEM_START = "DELETE_ITEM_START"
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS"
export const HANDLE_ERROR = "HANDLE_ERROR";

export const getItems = () => dispatch => {
  dispatch({ type: FETCHING_ITEMS_START });
  console.log(dispatch)
  axiosWithAuth()
    .get('/items')
    .then((res) => {
      console.log(res)
      dispatch({ type: FETCHING_ITEMS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: HANDLE_ERROR, payload: err.response });
    });
};
export const addItem = (newItem) => dispatch => {
  dispatch({ type: ADDING_ITEMS_START });
  axiosWithAuth()
    .post('/items', newItem)
    .then((res) => {
      console.log(res)
      dispatch({ type: ADDING_ITEMS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: HANDLE_ERROR, payload: err.response });
    });
};

export const editItem = (newItem) => dispatch => {
  dispatch({ type: EDIT_ITEM_START });
  axiosWithAuth()
    .put(`/items/${newItem.id}`, newItem)
    .then((res) => {
      dispatch({ type: EDIT_ITEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: HANDLE_ERROR, payload: err.response });
    });
};

export const deleteItem = (newItem) => dispatch => {
    dispatch({ type: DELETE_ITEM_START });
    axiosWithAuth()
      .delete(`/items/${newItem.id}`, newItem)
      .then((res) => {
        console.log(res)
        dispatch({ type: DELETE_ITEM_SUCCESS, payload: newItem });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: HANDLE_ERROR, payload: err.response });
      });
  };
