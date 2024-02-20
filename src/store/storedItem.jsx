import { createContext, useReducer } from "react";

export const StoredItems = createContext([]);

const itemReducer = (currItemList, action) => {
  let newList = currItemList;
  if (action.type === "Add_Item") {
    newList = [
      ...currItemList,
      { todowork: action.payload.item, duedate: action.payload.duedate },
    ];
  } else if (action.type === "Delete_Item") {
    newList = [];
    for (let i = 0; i < currItemList.length; i++) {
      if (i != action.payload.index) {
        newList.push(currItemList[i]);
      }
    }
  }
  return newList;
};

const StoredItemsprovider = ({ children }) => {
  const [todoList, dispatchtodoList] = useReducer(itemReducer, []);

  const AddNewItem = (item, duedate) => {
    const AddtodoList = {
      type: "Add_Item",
      payload: {
        item,
        duedate,
      },
    };
    dispatchtodoList(AddtodoList);
  };

  const DeleteItem = (deletedItem) => {
    const deletedList = {
      type: "Delete_Item",
      payload: {
        index: deletedItem,
      },
    };
    dispatchtodoList(deletedList);
  };
  return (
    <StoredItems.Provider value={{ todoList, AddNewItem, DeleteItem }}>
      {children}
    </StoredItems.Provider>
  );
};
export default StoredItemsprovider;
