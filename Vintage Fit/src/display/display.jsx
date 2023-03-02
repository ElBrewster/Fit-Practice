import React, { useState } from "react";
import "./display.scss";
import patterns from "../apiCalls/mockData";

export default function Display() {
    const [patternData, setPatternData] = useState(patterns);

    //useEffect to grab apicall

    const patternPortraits = () => {
        return patternData.map(pattern => {
            return (
                <section className="portraits" key={pattern.id}>
                    <p className="portrait-heading">{pattern.name}</p>
                    <img src={pattern.url} alt={pattern.alt} width={200}></img>
                </section>
            );
        })
    }

    return(
        <section>
            {patternPortraits()}
        </section>
    );
}