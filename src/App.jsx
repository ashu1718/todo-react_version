import Heading from "./components/heading";
import Input from "./components/inputcomp";
import Output from "./components/outputcomp";
import EmptyMesssage from "./components/emptyListMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useReducer } from "react";
import StoredItemsprovider from "./store/storedItem";

function App() {
  return (
    <>
      <StoredItemsprovider>
        <Heading></Heading>
        <Input></Input>
        <EmptyMesssage></EmptyMesssage>
        <Output></Output>
      </StoredItemsprovider>
    </>
  );
}

export default App;
