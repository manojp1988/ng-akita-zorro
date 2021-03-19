export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  authorities: string[];
  token: string;
}


export interface Credentials {
  token?: string;
  username?: string;
}
