import { useEffect, useState } from "react";

type TimerCountDownProps = {
    from? : number;
    to? : number;
    duration? : number;
}

const useTimerCountDown = ({ from = 60, duration = 1,to = 0 }: TimerCountDownProps) => {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState<number>(from);

  const startRunning = () => setRunning(true);
  const stopRunning = () => setRunning(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTimer((e) => e - 1);
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if(timer === to)  setRunning(false);
  },[timer])

  return {
      running,
      timer,
      startRunning,
      stopRunning
  };
};

export default useTimerCountDown;
