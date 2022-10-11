import React from "react";
import { AUTH_API_URL } from "../../base";
import { LocalLoggedInUser } from "../../data/usecases/auth/local-logged-in-user";
import { RemoteOtpLogin } from "../../data/usecases/auth/remote-otp-login";
import { RemoteRequestLoginOtp } from "../../data/usecases/auth/remote-request-login-otp";
import Endpoints from "../../domain/endpoints";
import { AxiosHttpClient } from "../../infra/http/axios-http-client";
import { LocalJsonStorage } from "../../infra/http/local-json-storage";
import LoginPage from "../../presentation/pages/auth/LoginPage";

type Props = {};

export const OtpLoginFormFactory = (props: Props) => {
  const axiosHttpClient = AxiosHttpClient.getInstance();
  const remoteRequestLoginOtp = new RemoteRequestLoginOtp(
    `${AUTH_API_URL}${Endpoints.LOGIN_OTP}`,
    axiosHttpClient
  );
  const remoteOtpLogin = new RemoteOtpLogin(
    `${AUTH_API_URL}${Endpoints.VERIFY_LOGIN}`,
    axiosHttpClient
  );
  const storage = LocalJsonStorage.getInstance();
  const loggedInUser = new LocalLoggedInUser(storage);
  return (
    <LoginPage
      requestLoginOtp={remoteRequestLoginOtp}
      otpLogin={remoteOtpLogin}
      loggedInUser={loggedInUser}
      {...props}
    />
  );
};
