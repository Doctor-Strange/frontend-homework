import ReactDOM from "react-dom";
import App from "./App";
// Redux
import store_config from "./store/configure_store";
import { Provider } from "react-redux";
const store = store_config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
