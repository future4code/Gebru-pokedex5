import React from "react";
import Router from "./Pages/Router/Router";
import Header from "./Components/PasteHeader/Header";
import Card from "./Components/PasteCard/Card";

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Card />
    </div>
  );
}

export default App;
