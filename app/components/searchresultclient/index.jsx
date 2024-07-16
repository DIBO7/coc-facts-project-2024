"use client"

import { useSearchParams } from "next/navigation";
import SearchBox from "../searchbox/searchbox";

function SearchFunction(){

    let sp = useSearchParams();

    let search = sp.get("search");

    return (
        <>
        <div>
            {/* onsubmit functn for css cmes here */}
            <SearchBox 
                hasValue={true}
                currentInput={search}
            />
        </div>

        <section>
            {/* The result are displayed here ....onsbmt and here*/}

        </section>
        </>
    )
};

export default SearchFunction;