import Link from "next/link"
import styles from "./index.module.css";
import classname from "classname";

export default function ResultSnippet(){
    return (
        <article className={styles.snippet}>
            <h3 className={"subtitle"}>Nigerian Maritime Academy, Oron</h3>
            <section className={styles.middlebelt}>
                {/* contains left div and right div */}
                <div className={styles.western}>
                    {/* contains top and bottom */}
                    
                        <h2 className={"title"}>Advance Fire Fighting</h2>
                    

                    <div className={styles.pillBottle}>
                        {/* the bottom flex div of two icons and datas */}
                        {
                            ["4 days", "Next Friday"].map((i, ind)=>{
                                return <div key={ind} className={classname(styles.pills, "subtitle")}>
                                    {/* This would be repetead twice, dynamically */}
                                    <i></i> <span> {i} </span>
                                    {/* i tag will have from react-icons icon */}
                                 </div>
                            })
                        }
                        


                    </div>

                </div>

                <div className={styles.eastern}>
                    {/* top and bottom */}
                    <h2 className={"title"}>NGN 22,800</h2>
                    <div>
                        {/* div might be necessary to restric the width of child 'p tag' */}
                        <p className={"subtitle"}>NGN 22,000 if you are renewing</p>

                    </div>
                </div>

            </section>

            <section className={styles.footnote}>
                <Link href="/">how to register</Link>
                <Link href="/">see requirements</Link>
            </section>

        </article>
    )
}