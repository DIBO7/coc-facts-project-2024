import {FaArrowRight} from "react-icons/fa6"

import styles from "./page.module.css";

export default function Home() {
  return (
          <div>
            {/* This is the container for the search */}
            <div>
              <input placeholder={"find info of maritime courses within Nigeria..."} />
              <button> <FaArrowRight /> </button>
            </div>
          </div>

  );
}
