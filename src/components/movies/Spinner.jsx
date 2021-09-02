import styles from "./../../scss/style/style.module.scss";
import { FaSpinner } from "react-icons/fa";
export function Spinner() {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={50} />
    </div>
  );
}
