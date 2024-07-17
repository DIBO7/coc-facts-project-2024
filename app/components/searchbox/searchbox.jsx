"use client";

import { useRouter } from "next/navigation";
import {FaArrowRight} from "react-icons/fa6";
import styles from "./search.module.css";
import { useEffect, useRef} from "react";

/*
Bug: form should not submit
1. if entry is empty
2. if entry is the same as currentInput, cos you are basically user is lookaing at result of the same search
*/

export default function SearchBox( {hasValue=false, currentInput} ){

    const route = useRouter();
    const handleSubmit = function(event){
        event.preventDefault();
        // console.log(event.target.elements[0].value);
        const query = event.target.elements[0].value;
        route.push(`/?search=${query}`)
    }

    let inputRef = useRef();

    useEffect(()=>{
        if(inputRef && hasValue){
            inputRef.current.value=currentInput;
        }
    })

    return (
        <form className={styles.searchbox} onSubmit={handleSubmit}>
            <input ref={inputRef} className={styles.searctext} placeholder={"find info of maritime courses within Nigeria..."} />
            <button type="submit" className={styles.searchicon}> <FaArrowRight /> </button>
        </form>

    )
}