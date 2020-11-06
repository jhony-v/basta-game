import { useEffect, useState } from "react";

type TimerCountDownProps = {
    from : number;
    to : number;
    duration : number;
}

const useTimerCountDown = ({ from, duration = 1000,to = 0 }: TimerCountDownProps) => {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(from);

  const startRunning = () => setRunning(true);
  const stopRunning = () => setRunning(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTimer((e) => e - 1);
      }, duration);
      return () => clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if(timer === to)  setRunning(false);
  },[running])

  return {
      running,
      timer,
      startRunning,
      stopRunning
  };
};

export default useTimerCountDown;
