import Heading from "./components/heading";
import Input from "./components/inputcomp";
import Output from "./components/outputcomp";
import EmptyMesssage from "./components/emptyListMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoList, settodoList] = useState([]);

  /* const handleClickAdd = (item, duedate) => {
    console.log({ item }, { duedate });
    const newList = [...todoList, { todowork: item, duedate: duedate }];
    settodoList(newList);
  };  */
  const handleClickAdd = (item, duedate) => {
    settodoList((currValue) => [
      ...currValue,
      { todowork: item, duedate: duedate },
    ]);
  };

  const handleDeleteItem = (deletedItem) => {
    const newListAfterDeletion = [];
    for (let i = 0; i < todoList.length; i++) {
      if (i != deletedItem) {
        newListAfterDeletion.push(todoList[i]);
      }
    }

    settodoList(newListAfterDeletion);

    console.log(todoList);
  };
  return (
    <>
      <Heading></Heading>
      <Input onclickAdd={handleClickAdd}></Input>
      {todoList.length === 0 && <EmptyMesssage></EmptyMesssage>};
      <Output List={todoList} onclickDelete={handleDeleteItem}></Output>
    </>
  );
}

export default App;
