import {FaArrowRight} from "react-icons/fa6"

import styles from "./page.module.css";

export default function Home() {
  return (
      <section className={styles.theSection}>
        {/* This section should slide up on search */}
          <div className={styles.area}>
            {/* This is the container for the search */}
            <form className={styles.searchbox}>
              <input className={styles.searctext} placeholder={"find info of maritime courses within Nigeria..."} />
              <button type="submit" className={styles.searchicon}> <FaArrowRight /> </button>
            </form>
          </div>


      </section>
  );
}
