import React from "react";
import About from "./About";
import Bio from "./Bio";
import Contacts from "./Contacts";
import { globalData, setGlobalData, globalDataSubject } from "./global-data";

function App() {
    return (
        <div style={{ width: "800px", margin: "25px auto" }}>
            <div className="App">RxGlobal - Version 2 (optimized re-rendering)</div>
            <hr />
            <About />
            <hr />
            <Bio />
            <hr />
            <Contacts />
        </div>
    );
}

export default App;
