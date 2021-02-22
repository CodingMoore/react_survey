import React from "react";
import Header from "./Header";

function App(){
  return (
    <React.Fragment>
      <Header />
      <App />
    </React.Fragment>
  );
}

export default App;