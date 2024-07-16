/*
Options

1. Call useParamsTwice in both searchbox components and search result. 
Probably good for seo as useClient goes donw in heirachy. downside, redundant function calls, slower loader time.

2. Make a component -> it soes the useSearchParams stuff, and then calls the same component called in first page 
good. app runs faster, bad-i am afraid early "use client" may make it bad for seo

I AM CURRENTY GOING WITH OPTION TWO.
*/

import SearchFunction from "@/app/components/searchresultclient";

export default function SearchResult(){
    return (
        <section >
            <SearchFunction />
        </section>
    )
}