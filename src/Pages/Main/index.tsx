import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.css";

const Main = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.btnWrapper}>
        <Link to={"/registration"}>Пройти регистрацию</Link>
      </div>
    </div>
  );
};

export default Main;
