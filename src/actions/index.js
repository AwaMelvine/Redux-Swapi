// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

const fetchSuccess = characters => ({
  type: SUCCESS,
  payload: characters
});

const fetchFailure = message => ({
  type: FAILURE,
  payload: message
});

export const fetchingStatus = status => ({
  type: FETCHING,
  payload: status
});

export const fetchCharacters = () => dispatch => {
  dispatch(fetchingStatus(true));
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      dispatch(fetchSuccess(res.data.results));
    })
    .catch(error => {
      dispatch(fetchFailure(error.message));
    })
    .finally(() => {
      dispatch(fetchingStatus(false));
    });
};
