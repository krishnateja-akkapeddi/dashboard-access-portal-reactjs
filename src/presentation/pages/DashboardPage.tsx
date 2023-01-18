import { constant, result } from "lodash";
import React from "react";
import { Paper, CircularProgress } from "@mui/material";
import { Typography, TypographySize } from "../ga-components/Typography";
import Navbar from "../components/Navbar";
import { LoggedInUser } from "../../domain/usages/auth/logged-in-user";
import { pageRoutes } from "../../routes";
import { useNavigate } from "react-router-dom";
import { Constants } from "../../common/Constants";
type Props = {
  loggedInUser: LoggedInUser;
};
const DashboardPage = (props: Props) => {
  const [dashboardUrl, setDashboardUrl] = React.useState("");
  const loggedInUserDetails = props.loggedInUser.getUser();
  const navigate = useNavigate();
  const [onFrame, setOnFrame] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const logout = () => {
    props.loggedInUser.setToken("");
    props.loggedInUser.setUser({
      user_id: 0,
      role: "",
      auth_token: "",
      user_name: "",
      mobile: "",
      department: "",
    });
    navigate(pageRoutes.login);
  };

  React.useEffect(() => {
    if (!loggedInUserDetails) navigate("/auth/login");
    document.onvisibilitychange = function (e) {
      setDashboardUrl("");
    };
    document.onkeydown = function (e) {
      if (e.keyCode == 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={() => {
        setDashboardUrl(Constants.DASHBOARD_URL);
        setOnFrame(true);
      }}
      onMouseLeave={() => {
        setDashboardUrl("");
        setOnFrame(false);
      }}
    >
      <Navbar
        loggedInUser={props.loggedInUser}
        loggedInUserDetails={loggedInUserDetails}
      />

      <div className=" ml-[13%] pt-[5%] mr-[8%]  ">
        <div>
          {onFrame ? (
            <div className=" absolute top-[50%] left-[45%] text-center">
              <CircularProgress />
              <Typography>Loading Data... </Typography>
            </div>
          ) : (
            <Typography
              size={TypographySize.XL}
              className="absolute top-[50%] left-[30%] "
            >
              Please make sure that the cursor is on the window to load the data{" "}
            </Typography>
          )}
          {onFrame && (
            <iframe
              id="dashboard"
              height={700}
              width={1000}
              // src={dashboardUrl}
              src="https://goapt.in/0cD3c"
              frameBorder={0}
              allowFullScreen
              className="p-4 relative"
            />
          )}
        </div>
        <div
          className={` w-[38%] left-[53%] h-8 absolute  text-transparent top-[106%] bg-white `}
        >
          d
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default DashboardPage;
