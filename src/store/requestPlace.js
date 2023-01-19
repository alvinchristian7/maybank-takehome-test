import { mergeMap, map } from "rxjs";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { FETCH_PLACE, FETCH_PLACE_FULFILLED } from "./actionTypes";

const defaultState = {
  loading: false,
  data: [],
  error: null,
};

export const places = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PLACE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLACE_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

// action creators
export const fetchPlace = (payload) => ({ type: FETCH_PLACE, payload });
export const fetchPlaceFulfilled = (payload) => ({
  type: FETCH_PLACE_FULFILLED,
  payload,
});

// epic
export const fetchPlaceEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_PLACE),
    mergeMap((action) =>
      ajax.getJSON(`https://maps.googleapis.com/maps/api/place/autocomplete/json
    ?input=${action.payload}
    &types=geocode
    &key=AIzaSyCu6hpTn38UHorKFQAXl_bY-BUzs1Za-74`).pipe(
        map((response) => fetchPlaceFulfilled(response))
      )
    )
  );

export default places;
