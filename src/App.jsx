import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled-components/GlobalStyles";
import Navbar from "./components/navbar";
import About from "./components/about";
import Home from "./components/home";
import { Context } from "./context";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

const defaultTheme = {
  background: "#dce2e2",
};

function App() {
  return (
    <Context.Provider value={{}}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Nova+Round&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
