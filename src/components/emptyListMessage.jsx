import styles from "./emptyListMessage.module.css";
import { useContext } from "react";
import { StoredItems } from "../store/storedItem";
const EmptyMesssage = () => {
  const { todoList } = useContext(StoredItems);

  return (
    todoList.length === 0 && (
      <div className={styles["empty_message"]}>
        No Task!!...Enjoy Or Add Task
      </div>
    )
  );
};
export default EmptyMesssage;
