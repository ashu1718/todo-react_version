import styles from "./emptyListMessage.module.css";
const EmptyMesssage = () => {
  return (
    <div className={styles["empty_message"]}>No Task!!...Enjoy Or Add Task</div>
  );
};
export default EmptyMesssage;
