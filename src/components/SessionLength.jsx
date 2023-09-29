import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";
import { ARROW_TYPE } from "../utils/constants";

const SessionLength = ({
  handleCurrentSessionLength,
  currentSessionLength,
}) => {
  return (
    <div id="session-label" className="text-base">
      <div className="text">Session Length</div>
      <div className="arrow-container">
        <BsArrowBarUp
          id="session-increment"
          onClick={() => handleCurrentSessionLength(ARROW_TYPE.INCREMENT)}
        />
        <span>{currentSessionLength}</span>
        <BsArrowBarDown
          id="session-decrement"
          onClick={() => handleCurrentSessionLength(ARROW_TYPE.DECREMENT)}
        />
      </div>
    </div>
  );
};

export default SessionLength;
