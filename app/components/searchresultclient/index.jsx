// "use client"

// THIS PAGE IS REDUNDANT. I ONLY KEPT IT FOR THE DUMMYDATA IF I WANT TO COPY IT LATER

import { useSearchParams } from "next/navigation";
import SearchBox from "../searchbox/searchbox";
import ResultSnippet from "../searchresult";

function SearchFunction(){

    let sp = useSearchParams();

    let search = sp.get("search");

    let dummyData = [
        {
            school: "Nigerian Maritime Academy, Oron",
            course: "Advance Fire Fihting",
            duration: "4 days",
            next: "September 16, 2024",
            slug: "advance fire fighting",
            price : {
                firstTimer: "28,500",
                renewal: "22,000"
            }
        },
        {
            school: "Coastal Maritime Academy",
            course: "Basic STCW Mandatories",
            duration: "5 days",
            next: "Next Thursday",
            slug: "basic stcw mandatories",
            price : {
                firstTimer: "36,700",
                renewal: "30,000"
            }
        }
    ]

    return (
        <>
        <div style={{width:"min(92%, 680px)", margin:"0 auto"}}>
            {/* onsubmit functn for css cmes here */}
            <SearchBox 
                hasValue={true}
                currentInput={search}
            />
        </div>

        <section style={{backgroundColor:"#fff"}}>
            {/* The result are displayed here ....onsbmt and here*/}
            <ResultSnippet />
        </section>
        </>
    )
};

export default SearchFunction;