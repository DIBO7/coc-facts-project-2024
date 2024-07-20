import AsideNavBar from "@/app/components/aside";

import styles from "../../document.module.css";
import Paragraph from "@/app/components/article/paragraph";
import List from "@/app/components/article/list";
import Table from "@/app/components/article/table";

export default function CoursePage({ params }) {
    // excellent -> params.slug is the slug
    return (
        <>
            
            <AsideNavBar navLink={[
                {
                    label: "Information",
                    url: "#information"
                },
                {
                    label: "How To Register",
                    url: "#registry"
                },
                {
                    label: "Programmes",
                    url: "#programmes"
                }
            ]} />

            <article className={styles.document}>
                <Paragraph
                    heading="Nigerian Maritime Academy, Oron"
                />

                <List 
                    heading="How To Register With Nigerian Maritime Academy"
                />

                <Table head="Programmes At Nigerian Maritime Academy" />
            </article>

        </>
    
    )
  }