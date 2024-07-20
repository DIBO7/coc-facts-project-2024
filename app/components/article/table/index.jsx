import styles from "./index.module.css";

let sampleHeading = "Institutions Offering Advance Medical First Aid";
let trow = [
    "Nigerian Maritime Academy, Oron",
    "NGN 28,500 (22,000)",
    "September 16, 2024",
    "2 days"
]
let sampleData = {
    head: [
        "Institutions",
        "Price (Renewal)",
        "Next Class",
        "Duration"
    ],
    body:[
        trow,
        trow,
        trow,
        trow
    ]
}

export default function Table({head=sampleHeading, data=sampleData}){
    return(
        <section>
            <h3>{head}</h3>

            <div className={styles.tablewrapper}>
            <table>
                <thead>
                <tr>
                    {
                        data.head.map((text, index)=>{
                            return <th key={index}>{text}</th>
                        })
                    }
                </tr>
                </thead>

                <tbody>
                {
                    data.body.map((datarow,ind)=>{
                        return <tr key={ind}>
                            {
                                datarow.map((datacell, index)=>{
                                    return <td key={index}>{datacell}</td>
                                })
                            }

                    </tr>
                    })
                }
            </tbody>
            </table>
            </div>

        </section>
    )
}