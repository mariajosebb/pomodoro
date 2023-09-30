import { HiPlay, HiStop, HiRefresh } from "react-icons/Hi";

const TimerControl = ({ isRunning, start, stop, reset }) => {
  return (
    <div id="timer-control">
      <button id="start_stop" onClick={() => (isRunning ? stop() : start())}>
        {isRunning ? <HiStop></HiStop> : <HiPlay></HiPlay>}
      </button>
      <button onClick={reset} id="reset">
        <HiRefresh></HiRefresh>
      </button>
    </div>
  );
};

export default TimerControl;
