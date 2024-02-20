import styles from "./outputcomp.module.css";
import Todoitem from "./Todoitem";
import { useContext } from "react";
import { StoredItems } from "../store/storedItem";

function Output() {
  const { todoList } = useContext(StoredItems);
  return (
    <>
      <div className={styles["output-container"]}>
        {todoList.map((itm, index) => (
          <Todoitem
            key={index}
            todowork={itm.todowork}
            duedate={itm.duedate}
            index={index}
          ></Todoitem>
        ))}
      </div>
    </>
  );
}
export default Output;
