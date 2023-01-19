import { createEpicMiddleware } from "redux-observable";
import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import { rootEpic, rootReducer } from "./root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
