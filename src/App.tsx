import "./stylesheets/index.scss";

import Dropdown from "./components/dropdown/dropdown";

const App = () => (
  <nav data-test-id='nav' className='nav'>
    <Dropdown />
  </nav>
);

export default App;
