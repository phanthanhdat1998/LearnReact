import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Product />
      </div>
    </Provider>
  );
};

export default App;
