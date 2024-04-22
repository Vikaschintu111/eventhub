import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.MainCntr}>
      <div className={styles.ProfileContainer}>
        <p className={styles.Title}>Name</p>
      </div>
      <div className={styles.MenuCntr}>
        <div className={styles.Message}>
          <p className={styles.Name}>Message</p>
          <div className={styles.BookMark}>
            <p className={styles.Name}>BookMark</p>
            <div className={styles.ContactUs}>
              <p className={styles.Name}>ContactUs</p>
              <div className={styles.Settings}>
                <p className={styles.Name}>Settings</p>
                <div className={styles.Helps}>
                  <p className={styles.Name}>Helps</p>
                  <div className={styles.SignOut}>
                    <p className={styles.Name}>SignOut</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
