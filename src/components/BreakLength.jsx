import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";
import { ARROW_TYPE } from "../utils/constants";

const BreakLength = ({ currentBreakLength = 5, handleCurrentBreakLength }) => {
  return (
    <div id="break-label" className="text-base">
      <div className="text">Break Length</div>
      <div className="arrow-container">
        <BsArrowBarUp
          id="break-increment"
          onClick={() => handleCurrentBreakLength(ARROW_TYPE.INCREMENT)}
        />
        <span>{currentBreakLength}</span>
        <BsArrowBarDown
          id="break-decrement"
          onClick={() => handleCurrentBreakLength(ARROW_TYPE.DECREMENT)}
        />
      </div>
    </div>
  );
};

export default BreakLength;
