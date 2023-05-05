export interface tokens {
  access_token: string;
  refresh_token: string;
}

export interface getUserMeRes {
  intraId: string;
  coalition: string;
  wallet: number;
  isAdmin: boolean;
}
