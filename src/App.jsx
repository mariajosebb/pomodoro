import { useState } from "react";
import "./index.css";
import "./app.css";
import alarm from "./assets/alarm.wav";
import MainTitle from "./components/MainTitle";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import TimerControl from "./components/TimerControl";
import TimerLabel from "./components/TimerLabel";
import useCurrentBreakLength from "./utils/useCurrentBreakLength";
import useCurrentSessionLength from "./utils/useCurrentSessionLength";
import usePomodoro from "./utils/usePomodoro";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentBreakLength, handleCurrentBreakLength, setCurrentBreakLength] =
    useCurrentBreakLength(isRunning);

  const [
    currentSessionLength,
    handleCurrentSessionLength,
    setCurrentSessionLength,
  ] = useCurrentSessionLength(isRunning);

  const playAudio = () => {
    const audioElement = document.getElementById("beep");
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  };

  const { secondsRemaining, start, stop, reset, isSession } = usePomodoro({
    workTime: currentSessionLength,
    breakTime: currentBreakLength,
    taskCompletedCallback: () => playAudio(),
    isRunning,
    setIsRunning,
    setCurrentBreakLength,
    setCurrentSessionLength,
  });

  const minutes =
    Math.floor(secondsRemaining / 60) < 10
      ? `0${Math.floor(secondsRemaining / 60)}`
      : Math.floor(secondsRemaining / 60);
  const seconds =
    secondsRemaining % 60 > 9
      ? secondsRemaining % 60
      : `0${secondsRemaining % 60}` || "00";

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

        <TimerLabel minutes={minutes} seconds={seconds} isSession={isSession} />
        <TimerControl
          isRunning={isRunning}
          start={start}
          stop={stop}
          reset={reset}
        />
        <audio
          id="beep"
          src={alarm}
          className="clip"
          preload="auto"
          autoPlay={false}
        />
      </div>
    </div>
  );
}

export default App;
