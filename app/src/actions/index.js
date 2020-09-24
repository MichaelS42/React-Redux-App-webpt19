import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

const fetch = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://cat-fact.herokuapp.com/facts")
    .then((res) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data.all,
      });
    })
    .catch((err) => {
      console.log("fail", err.message);
      dispatch({
        type: FETCH_FAIL,
        payload: err.message,
      });
    });
};

export default fetch;
