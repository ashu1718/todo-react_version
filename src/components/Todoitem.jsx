import styles from "./Todoitem.module.css";
import { MdDelete } from "react-icons/md";
function Todoitem({ todowork, duedate, index, onclickDelete }) {
  return (
    <div className={styles["out-element"]}>
      <div className={styles["out-item"]}>{todowork}</div>
      <div className={styles["out-item"]}>{duedate}</div>
      <button onClick={() => onclickDelete(index)} className="btn btn-danger">
        <MdDelete />
      </button>
    </div>
  );
}
export default Todoitem;
