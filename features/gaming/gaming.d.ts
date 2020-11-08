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
  gaming: boolean;
}

export interface WordGame {
  id : string;
  words : Word[]
  user : {
      username : string;
      fullName : string;
      avatar? : string;
  }
}