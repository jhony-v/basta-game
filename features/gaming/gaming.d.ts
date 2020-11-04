interface Word {
  key ?: string;
  value ?: string;
}

interface GamingState {
  letter : string;
  words: Word[];
  percentage: number;
  timerToStart: number;
  timerCountDown: number;
}
