import React, { useState } from 'react';
import "./Counters.scss";
import ImmaterialCounter from '../immaterialCounter/ImmaterialCounter';
import RelevantCounter from '../relevantCounter/RelevantCounter';

export default function Counters() {
    return (
        <div>
            <ImmaterialCounter />
            <RelevantCounter />
        </div>
    )
}