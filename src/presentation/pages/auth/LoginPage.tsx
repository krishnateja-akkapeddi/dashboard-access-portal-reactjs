import React from "react";
import { useMediaQuery } from "@mui/material";
import ICONS from "../../../assests/images";
import { Constants } from "../../../common/Constants";
import { LoggedInUser } from "../../../domain/usages/auth/logged-in-user";
import { OtpLogin } from "../../../domain/usages/auth/otp-login";
import { RequestLoginOtp } from "../../../domain/usages/auth/request-login-otp";
import OTPLoginForm from "../../components/LoginForm/index";
import { Card, CardColor } from "../../ga-components/cards";
import {
  Typography,
  TypographyColor,
  TypographySize,
} from "../../ga-components/Typography";
import { useNavigate } from "react-router-dom";

type Props = {
  requestLoginOtp: RequestLoginOtp;
  otpLogin: OtpLogin;
  loggedInUser: LoggedInUser;
};

const LoginPage: React.FC<Props> = ({
  requestLoginOtp,
  otpLogin,
  loggedInUser,
}) => {
  const mobile = !useMediaQuery(Constants.MOBILE);
  const loggedInUserDetails = loggedInUser.getUser();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (loggedInUserDetails) navigate("/dashboard");
  }, []);

  return (
    <>
      {mobile ? (
        <div className="grid place-items-center w-screen">
          <img
            src={ICONS.adminLogo}
            alt=""
            title="Admin Logo"
            className="m-[30px] h-52 w-52"
          ></img>
          <div>
            <Card
              color={CardColor.WHITE}
              className="grid place-items-center border rounded-[39px] w-screen"
            >
              <Typography
                color={TypographyColor.BLACK_MEDIUM}
                size={TypographySize.LG}
                className="font-semibold"
              >
                Login
              </Typography>
              <Typography
                color={TypographyColor.GRAY_MEDIUM}
                size={TypographySize.LG}
                className="font-normal text-center mb-[45px]"
              >
                Kindly enter your mobile number and OTP to login
              </Typography>
              <div className="mx-7 pb-7">
                <OTPLoginForm
                  otpLogin={otpLogin}
                  requestLoginOtp={requestLoginOtp}
                  loggedInUser={loggedInUser}
                />
              </div>
            </Card>
          </div>
          <img
            src={ICONS.ChannelPayLogo}
            alt=""
            title="ChannelPay logo"
            className="h-14 my-5"
          />
        </div>
      ) : (
        <div className="bg-[#FCFAF9] 2xl:p-10 p-5 fixed w-screen">
          <div className="grid grid-cols-2">
            <div className="bg-white grid place-items-center rounded-l-[39px]">
              <img
                src={ICONS.ChannelPayLogo}
                alt=""
                title="Channel Pay Logo"
                className="mb-6 mt-[55px]"
              />
              <Typography
                color={TypographyColor.DARK_BLUE}
                className="font-semibold text-3xl 2xl:mb-[70px] mb-[50px]"
              >
                {" "}
                Dashboard Module
              </Typography>
              <img
                src={ICONS.adminLogo}
                title="Admin Logo"
                className="2xl:h-96 h-80 pb-[40px]"
              />
            </div>
            <div className="bg-[#14008D] rounded-[39px] 2xl:p-[90px] p-[60px]">
              <Card
                color={CardColor.WHITE}
                className="rounded-[39px] p-[46px] h-full"
              >
                <Typography
                  color={TypographyColor.BLACK_MEDIUM}
                  size={TypographySize.XL2}
                  className="font-semibold"
                >
                  Login
                </Typography>
                <Typography
                  color={TypographyColor.GRAY_MEDIUM}
                  size={TypographySize.XL}
                  className="fony-normal pt-4 pb-[33px]"
                >
                  Kindly enter your mobile number and OTP to login
                </Typography>
                <OTPLoginForm
                  otpLogin={otpLogin}
                  requestLoginOtp={requestLoginOtp}
                  loggedInUser={loggedInUser}
                />
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
