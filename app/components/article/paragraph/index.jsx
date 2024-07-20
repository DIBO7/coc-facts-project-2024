let sampleHeading = "Advance Medical First Aid";
let sampleBody = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint, obcaecati accusamus, 
                impedit dicta id, aspernatur ea odio beatae provident ab harum eos in cumque enim nostrum! Sint, 
                expedita a.`

export default function Paragraph({heading=sampleHeading, body=sampleBody}){
    return (
        <section>
            <h2>{heading}</h2>
            <p>
                {body}
            </p>
        </section>
    )
}