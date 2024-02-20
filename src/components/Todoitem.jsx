import { useContext } from "react";
import styles from "./Todoitem.module.css";
import { MdDelete } from "react-icons/md";
import { StoredItems } from "../store/storedItem";
function Todoitem({ todowork, duedate, index }) {
  const { DeleteItem } = useContext(StoredItems);
  return (
    <div className={styles["out-element"]}>
      <div className={styles["out-item"]}>{todowork}</div>
      <div className={styles["out-item"]}>{duedate}</div>
      <button onClick={() => DeleteItem(index)} className="btn btn-danger">
        <MdDelete />
      </button>
    </div>
  );
}
export default Todoitem;
