import { catchError } from 'rxjs'
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import places, { fetchPlaceEpic } from "./requestPlace";

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics({
    fetchPlaceEpic,
  })(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export const rootReducer = combineReducers({
  places,
});
