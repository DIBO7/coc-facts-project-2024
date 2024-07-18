import AsideNavBar from "@/app/components/aside";

import styles from "./page.module.css";

export default function CoursePage({ params }) {
    // excellent -> params.slug is the slug
    return (
        <section className={styles.coursePage}>
            
            <AsideNavBar />

            <article className={styles.document}>
                <section>
                    <h2>Advance Medical First Aid</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint, obcaecati accusamus, 
                        impedit dicta id, aspernatur ea odio beatae provident ab harum eos in cumque enim nostrum! Sint, 
                        expedita a.
                    </p>
                </section>

                <section>
                    <h3>Requirements For Advance Medical First Aid</h3>
                    <ul>
                        {
                            [1,2,3].map((_, ind)=>{
                                return <li key={ind}>Six months sea term on vessels {">"} 500gt.</li>
                            })
                        }
                    </ul>
                </section>

                <section>
                    <h3>Institutions Offering Advance Medical First Aid</h3>

                </section>
            </article>

        </section>
    
    )
  }