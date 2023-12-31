import { useState } from "react";
import { ARROW_TYPE } from "./constants";

const useCurrentBreakLength = (isRunning) => {
  const [currentBreakLength, setCurrentBreakLength] = useState(5);
  const handleCurrentBreakLength = (action) => {
    if (isRunning) return;
    if (action === ARROW_TYPE.INCREMENT) {
      if (currentBreakLength === 60) return;
      return setCurrentBreakLength(
        (prevCurrentBreakLength) => prevCurrentBreakLength + 1
      );
    }
    if (currentBreakLength === 1) return;
    return setCurrentBreakLength(
      (prevCurrentBreakLength) => prevCurrentBreakLength - 1
    );
  };
  return [currentBreakLength, handleCurrentBreakLength, setCurrentBreakLength];
};

export default useCurrentBreakLength;
