import styles from "./outputcomp.module.css";
import Todoitem from "./Todoitem";
function Output({ List, onclickDelete }) {
  return (
    <>
      <div className={styles["output-container"]}>
        {List.map((itm, index) => (
          <Todoitem
            key={index}
            todowork={itm.todowork}
            duedate={itm.duedate}
            index={index}
            onclickDelete={onclickDelete}
          ></Todoitem>
        ))}
      </div>
    </>
  );
}
export default Output;
