export interface RequestLoginOtp {
  requestOtp(params: RequestLoginOtp.Params): Promise<any>;
}

export namespace RequestLoginOtp {
  export type Params = {
    mobile: string;
  };
}
