import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";
import { ARROW_TYPE } from "../utils/constants";

const BreakLength = ({ currentBreakLength = 5, handleCurrentBreakLength }) => {
  return (
    <div id="break-label" className="text-base">
      <div className="text" id="break-label">
        Break Length
      </div>
      <div className="arrow-container">
        <button
          id="break-increment"
          onClick={() => handleCurrentBreakLength(ARROW_TYPE.INCREMENT)}
        >
          <BsArrowBarUp />
        </button>
        <div id="break-length">{currentBreakLength}</div>
        <button
          id="break-decrement"
          onClick={() => handleCurrentBreakLength(ARROW_TYPE.DECREMENT)}
        >
          <BsArrowBarDown />
        </button>
      </div>
    </div>
  );
};

export default BreakLength;
