export interface Word {
  key : string;
  value : string;
}

export interface GamingState {
  letter : string;
  words: Word[];
  percentage: number;
  timerToStart: number;
  timerCountDown: number;
  id: string;
}
