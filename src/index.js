import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Routes
import MovieDetails from "./routes/MovieDetails";
import About from "./routes/About";
import Search from "./routes/Search";
import Page404 from "./routes/Page404";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="about" element={<About />} />
          <Route path="movies/:movieID" element={<MovieDetails />} />
          <Route path="search/:searchKey" element={<Search />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
