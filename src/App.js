import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
