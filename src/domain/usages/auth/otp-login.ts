import { User } from "../../models/auth/user";

export interface OtpLogin {
  login(params: OtpLogin.Params): Promise<User>;
}

export namespace OtpLogin {
  export type Params = {
    mobile: string;
    otp: number;
  };
}
