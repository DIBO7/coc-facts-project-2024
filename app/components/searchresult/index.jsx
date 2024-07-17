import Link from "next/link"

export default function ResultSnippet(){
    return (
        <article>
            <h3>Nigerian Maritime Academy, Oron</h3>
            <section>
                {/* contains left div and right div */}
                <div>
                    {/* contains top and bottom */}
                    <div>
                        <h2>Advance Fire Fighting</h2>
                    </div>

                    <div>
                        {/* the bottom flex div of two icons and datas */}
                        {
                            ["4 days", "Next Friday"].map((i, ind)=>{
                                return <div key={ind}>
                                    {/* This would be repetead twice, dynamically */}
                                    <i></i> <span> {i} </span>
                                    {/* i tag will have from react-icons icon */}
                                 </div>
                            })
                        }
                        


                    </div>

                </div>

                <div>
                    {/* top and bottom */}
                    <h2>NGN 22,800</h2>
                    <div>
                        {/* div might be necessary to restric the width of child 'p tag' */}
                        <p>NGN 22,000 if you are renewing</p>

                    </div>
                </div>

            </section>

            <section>
                <Link href="/">how to register</Link>
                <Link href="/">see requirements</Link>
            </section>

        </article>
    )
}