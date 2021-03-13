
export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  authorities: string[];
  token: string;
}
