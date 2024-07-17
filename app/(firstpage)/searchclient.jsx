"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import classname from "classname";
import SearchBox from "../components/searchbox/searchbox";
import ResultSnippet from "../components/searchresult";
import styles from "./page.module.css";

//This is called by firstpage/seachpage because i want the parent page itself to remain server-rendered component 
// despite the need to use "useSearchParams" early on. hence this would be a client component


export default function FirstPageClient(){
    let sp = useSearchParams();
    let [searchState, setSearchState] = useState(false);

    const search = sp.get("search");
    const searchIsEmpty = !search
    
    useEffect(()=>{
        if(!searchIsEmpty)setSearchState(true);

    }, [searchIsEmpty])
    // let searchNotEmpty = search.length > 0;


    return(
        <>
        <section className={ classname(styles.theSection, searchState?styles.aftermath : "") }>
            {/* This section should slide up on search */}
            <div className={classname(styles.area, searchState?styles.aftermath : "")}>
                {/* This is the container for the search */}
                <SearchBox 
                    hasValue={!searchIsEmpty}
                    currentInput={search} //check what happenes when this is null.
                />
            </div>
        </section>

        <section className={classname(styles.resultcontainer, searchState?styles.aftermath : "")}>

            <ResultSnippet />
            <ResultSnippet />
            <ResultSnippet />
            <ResultSnippet />
            <ResultSnippet />
            <ResultSnippet />
        </section>
        </>
    )
}