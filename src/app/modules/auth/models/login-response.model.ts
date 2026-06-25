export interface LoginResponse {

  accessToken: string;

  refreshToken: string;

  expiresIn: number;

  userId: number;

  userName: string;

  roles: string[];

  permissions: string[];
}