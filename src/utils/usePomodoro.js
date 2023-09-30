import { useState, useEffect } from "react";

const usePomodoro = ({
  workTime,
  breakTime,
  taskCompletedCallback,
  isRunning,
  setIsRunning,
  setCurrentBreakLength,
  setCurrentSessionLength,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(workTime * 60);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSecondsRemaining((s) => {
          if (s <= 1) return 0;
          return s - 1;
        });
        if (secondsRemaining === 0) {
          clearInterval(interval);
          setIsSession((prevIsSession) => !prevIsSession);
          setSecondsRemaining(isSession ? breakTime * 60 : workTime * 60);
          taskCompletedCallback();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, secondsRemaining]);

  useEffect(() => {
    setSecondsRemaining(workTime * 60);
  }, [workTime]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setSecondsRemaining(workTime * 60);
    setCurrentBreakLength(5);
    setCurrentSessionLength(25);
    setIsSession(true);
    const audioElement = document.getElementById("beep");
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.pause();
    }
  };

  return {
    secondsRemaining,
    start,
    stop,
    reset,
    isSession,
  };
};

export default usePomodoro;
