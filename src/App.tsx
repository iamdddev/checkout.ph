import React from "react";
import firebase from "firebase/app";

function App() {
  const test = firebase.getApp();
  return <div className="App">{JSON.stringify(test.options, null, 2)} df</div>;
}

export default App;
