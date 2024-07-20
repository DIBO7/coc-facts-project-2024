import AsideNavBar from "@/app/components/aside";

import styles from "../../document.module.css";
import Paragraph from "@/app/components/article/paragraph";
import List from "@/app/components/article/list";
import Table from "@/app/components/article/table";

export default function CoursePage({ params }) {
    // excellent -> params.slug is the slug
    return (
        <>
            
            <AsideNavBar />

            <article className={styles.document}>
                <Paragraph />

                <List />

                <Table />
            </article>

        </>
    
    )
  }