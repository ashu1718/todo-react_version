import { useState, useRef } from "react";
import styles from "./inputcomp.module.css";
import { MdDownloadDone } from "react-icons/md";
function Input({ onclickAdd }) {
  /* const [work, addWork] = useState("");
  const [date, addDate] = useState("");

  const handleDateChange = (e) => {
    addDate(e.target.value);
  };
  const handleWorkChange = (e) => {
    addWork(e.target.value);
  };*/
  let workElement = useRef();
  let dateElement = useRef();

  const buttonClicked = () => {
    const work = workElement.current.value;
    const date = dateElement.current.value;
    workElement.current.value = "";
    dateElement.current.value = "";
    onclickAdd(work, date);
    /*addDate("");
    addWork("");*/
  };

  return (
    <div className={styles["input-class"]}>
      <input
        className={styles.inp}
        type="text"
        placeholder="Enter something"
        /*value={work}
        onChange={handleWorkChange}*/
        ref={workElement}
      />
      <input
        className={styles.inp}
        type="date"
        /* value={date}
        onChange={handleDateChange}*/
        ref={dateElement}
      />
      <button onClick={buttonClicked} className="btn btn-success">
        <MdDownloadDone />
      </button>
    </div>
  );
}
export default Input;
