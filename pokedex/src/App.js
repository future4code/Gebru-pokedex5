import React from "react";
import Router from "./Pages/Router/Router";
import Header from "./components/PasteHeader/Header";
import GlobalState from './global/GlobalState'

function App() {
  return (
    <GlobalState>
       <Header />
      <Router />
    </GlobalState>
  );
}

export default App;
