import Link from "next/link";
import styles from "./index.module.css";

let sampleData = [
    {
        label: "introduction",
        url: "#introduction"
    },
    {
        label: "Content",
        url: "#content"
    },
    {
        label: "Table",
        url: "#table"
    },
    {
        label: "Closing Remark",
        url: "#closing"
    },
]

export default function AsideNavBar({navLink = sampleData}){
    return (
        <aside className={styles.asidebar}>
            <div className={styles.stamp}>
                <h1> MARINE SCHOOL </h1>
            </div>

            <nav className={styles.navigation}>
                <ul>
                    {
                        navLink.map((nav, ind)=>{
                            return <li key={ind}> <Link href={nav.url}> {nav.label} </Link> </li>
                        })
                    }

                    
                </ul>
            </nav>
            
        </aside>

    )
}