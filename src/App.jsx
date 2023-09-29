import { useState } from "react";
import "./index.css";
import "./app.css";

import MainTitle from "./components/MainTitle";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";

import useCurrentBreakLength from "./utils/useCurrentBreakLength";
import useCurrentSessionLength from "./utils/useCurrentSessionLength";

function App() {
  const [currentBreakLength, handleCurrentBreakLength] =
    useCurrentBreakLength();

  const [currentSessionLength, handleCurrentSessionLength] =
    useCurrentSessionLength();

  return (
    <div style={{ width: "100%", display: "grid", placeContent: "center" }}>
      <div id="container">
        <MainTitle />
        <div className="container-length">
          <BreakLength
            currentBreakLength={currentBreakLength}
            handleCurrentBreakLength={handleCurrentBreakLength}
          />
          <SessionLength
            currentSessionLength={currentSessionLength}
            handleCurrentSessionLength={handleCurrentSessionLength}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
