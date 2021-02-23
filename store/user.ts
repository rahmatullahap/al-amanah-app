export interface UserState {
  list: User[];
}

export interface User {
  id: string;
  createdAt: Date;
  name: string;
  role: string;
}

export function state(): UserState {
  return {
    list: []
  };
}
