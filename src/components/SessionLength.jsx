import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";
import { ARROW_TYPE } from "../utils/constants";

const SessionLength = ({
  handleCurrentSessionLength,
  currentSessionLength,
}) => {
  return (
    <div id="session-label" className="text-base">
      <div className="text" id="session-label">
        Session Length
      </div>
      <div className="arrow-container">
        <button
          id="session-increment"
          onClick={() => handleCurrentSessionLength(ARROW_TYPE.INCREMENT)}
        >
          <BsArrowBarUp />
        </button>
        <div id="session-length">{currentSessionLength}</div>
        <button
          id="session-decrement"
          onClick={() => handleCurrentSessionLength(ARROW_TYPE.DECREMENT)}
        >
          {" "}
          <BsArrowBarDown />
        </button>
      </div>
    </div>
  );
};

export default SessionLength;
