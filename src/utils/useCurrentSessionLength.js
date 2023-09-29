import { useState } from "react";
import { ARROW_TYPE } from "./constants";

const useCurrentSessionLength = () => {
  const [currentSessionLength, setCurrentSessionLength] = useState(25);
  const handleCurrentSessionLength = (action) => {
    if (action === ARROW_TYPE.INCREMENT) {
      if (currentSessionLength === 60) return;
      return setCurrentSessionLength(
        (prevCurrentSessionLength) => prevCurrentSessionLength + 1
      );
    }
    if (currentSessionLength === 1) return;
    return setCurrentSessionLength(
      (prevCurrentSessionLength) => prevCurrentSessionLength - 1
    );
  };
  return [currentSessionLength, handleCurrentSessionLength];
};

export default useCurrentSessionLength;
