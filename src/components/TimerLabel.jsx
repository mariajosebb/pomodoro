const TimerLabel = ({ minutes, seconds, isSession }) => {
  return (
    <div id="timer">
      <p id="timer-label" className="text-base">
        {isSession ? "Session" : "Break"}
      </p>
      <div id="time-left" className="text-2xl">{`${minutes}:${seconds}`}</div>
    </div>
  );
};

export default TimerLabel;
