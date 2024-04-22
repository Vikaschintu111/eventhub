import React from "react";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.MainCntr}>
      <div className={styles.Cntr}>
        <input id="email" type="text" placeholder="enter mail" name="name" />
        <input
          id="password"
          type="text"
          placeholder="enter password"
          name="name"
        />
      </div>
    </div>
  );
};
export default Login;
