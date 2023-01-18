import React, { useCallback, useState } from "react";
import Swal from "sweetalert2";
import Button from "../../ga-components/buttons/button";
import ButtonColor from "../../ga-components/buttons/button-color";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TypographyColor,
  TypographySize,
} from "../../ga-components/Typography";
import { pageRoutes } from "../../../routes";
import { OtpLogin } from "../../../domain/usages/auth/otp-login";
import { RequestLoginOtp } from "../../../domain/usages/auth/request-login-otp";
import { LoggedInUser } from "../../../domain/usages/auth/logged-in-user";
import { User } from "../../../domain/models/auth/user";
import { useForm } from "react-hook-form";
import { UserRoles } from "../../../domain/enums/UserRoles";

type OtpLoginFormInput = {
  mobile: string;
  otp: string;
  terms_is_agreed: boolean;
};

type Props = {
  otpLogin: OtpLogin;
  requestLoginOtp: RequestLoginOtp;
  loggedInUser: LoggedInUser;
};
const OTPLoginForm: React.FC<Props> = ({
  otpLogin,
  requestLoginOtp,
  loggedInUser,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<OtpLoginFormInput>();

  const navigate = useNavigate();
  const requestOtp = useCallback(
    async (data: any) => {
      setLoading(true);
      let result = await requestLoginOtp.requestOtp({
        mobile: data.mobile,
      });
      if (result.user) {
        if (result.user_type !== 4) {
          setErrorMessages("Sorry! You are not authorized to access this page");
          setLoading(false);
          return;
        }
        setLoading(false);
        setOtpSent(true);

        setErrorMessages("");
      } else {
        setLoading(false);
        setErrorMessages(result.message);
      }
    },
    // () => {
    //   setLoading(false);
    //   setOtpSent(true);
    //   setErrorMessages("");
    //   localStorage.setItem("otp", "99999");
    // },
    [requestLoginOtp]
  );

  const validateOtp = useCallback(
    async (data: any) => {
      setLoading(true);
      let result: User = await otpLogin.login({
        mobile: data.mobile,
        otp: data.otp,
      });
      if (
        result.role === UserRoles.TSO ||
        result.role === UserRoles.CSE ||
        result.role === UserRoles.TSA ||
        result.role === UserRoles.TSM ||
        result.role === UserRoles.TSO
      ) {
        setErrorMessages("Sorry! You are not authorized");
        setLoading(false);
        return;
      }
      if (result.auth_token) {
        loggedInUser.setToken(result.auth_token);
        loggedInUser.setUser(result);
        navigate(pageRoutes.dashboard);
      } else {
        setLoading(false);
        setErrorMessages(result.errors ? result.errors.message : "");
      }

      // if (localStorage.getItem("otp") !== "99999") return;
      // navigate(pageRoutes.dashboard);
      // return;
    },
    [requestLoginOtp]
  );

  return (
    <>
      {errorMessages && (
        <div className="p-2 text-red-600 mb-4 text-center">
          <>{errorMessages}</>
        </div>
      )}

      <div>
        <Typography
          color={TypographyColor.BLACK_MEDIUM}
          size={TypographySize.BASE}
          className="font-medium mb-2"
        >
          Mobile Number:
        </Typography>
        <input
          placeholder="Enter Mobile Number"
          disabled={otpSent}
          className="xl:w-80 lg:w-60 border border-gray-300 rounded-lg h-10 indent-5"
          {...register("mobile", {
            required: "Mobile number required",
            pattern: /^[6-9]{1}[0-9]{9}$/i,
          })}
        />
        {errors.mobile && errors.mobile.type === "required" && (
          <p className="p-2 text-red-400">{errors.mobile?.message}</p>
        )}
        {errors.mobile && errors.mobile.type === "pattern" && (
          <p className="p-2 text-red-400">Invalid mobile number</p>
        )}
      </div>
      {otpSent && (
        <div className="mt-5">
          <Typography
            color={TypographyColor.BLACK_MEDIUM}
            size={TypographySize.BASE}
            className="font-medium mb-2"
          >
            OTP:
          </Typography>
          <input
            placeholder="Enter OTP"
            className="xl:w-80 lg:w-60 border border-gray-300 rounded-lg h-10 indent-5"
            {...register("otp", {
              required: "Otp required",
              pattern: /^[0-9]{4}$/i,
            })}
          />

          {errors.otp && errors.otp.type === "required" && (
            <p className="p-2 text-red-400">{errors.otp?.message}</p>
          )}
          {errors.otp && errors.otp.type === "pattern" && (
            <p className="p-2 text-red-400">Invalid OTP</p>
          )}
        </div>
      )}
      {!otpSent && (
        <Button
          text={
            loading ? (
              <div
                className="inline-block w-5 h-5 
      border-t-2 
      border-t-white  
      rounded-full 
      animate-spin pt-3"
              ></div>
            ) : (
              "Request OTP"
            )
          }
          color={ButtonColor.PRIMARY}
          onClick={handleSubmit(requestOtp)}
          className="h-[40px] mt-10 w-full rounded-lg"
        />
      )}

      {otpSent && (
        <Button
          text={
            loading ? (
              <>
                <div
                  className="inline-block w-5 h-5 
            border-t-2 
            border-t-white  
            rounded-full 
            animate-spin pt-3"
                ></div>
              </>
            ) : (
              "Login"
            )
          }
          color={ButtonColor.PRIMARY}
          onClick={handleSubmit(validateOtp)}
          iconSpin={true}
          className="h-[40px] mt-10 w-full rounded-lg"
        />
      )}
    </>
  );
};

export default OTPLoginForm;
