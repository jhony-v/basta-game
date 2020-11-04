export interface Message {
  id?: string;
  username?: string;
  message?: string;
}
export interface User {
  username?: string;
  avatar?: string;
  id?: string;
  description?: string;
}

export interface RoomChatState {
  messages?: Message[];
  users?: User[];
}
