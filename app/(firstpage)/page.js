import styles from "./page.module.css";
import SearchBox from "../components/searchbox/searchbox";

export default function Home() {
  

  return (
      <section className={styles.theSection}>
        {/* This section should slide up on search */}
          <div className={styles.area}>
            {/* This is the container for the search */}
              <SearchBox />
          </div>


      </section>
  );
}
