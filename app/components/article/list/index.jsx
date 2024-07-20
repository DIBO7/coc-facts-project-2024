let sampleHeading = 'Requirements For Advance Medical First Aid';
let sampleList = [
    "Six months sea term on vessels > 500gt",
    "Minimum of National Diploma in Nautical/Marine Engineering",
    "Six months sea service on a passenger ship",
]

export default function List({heading = sampleHeading, list=sampleList}){
    return (
        <section>
            <h3>{heading}</h3>
            <ul>
                {
                    list.map((content, ind)=>{
                        return <li key={ind}>{content}</li>
                    })
                }
            </ul>
        </section>
    )
}