import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dropdown from "./reducer/dropdown";

const rootReducer = combineReducers({
  reducer_dropdown: dropdown,
});

let composeEnhancers = compose;

const store_config = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default store_config;
