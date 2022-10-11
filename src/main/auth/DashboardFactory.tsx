import React from "react";
import { useNavigate } from "react-router-dom";

import { AxiosHttpClient } from "../../infra/http/axios-http-client";
import { LocalJsonStorage } from "../../infra/http/local-json-storage";
import { AUTH_HEADER, AUTH_TOKEN_KEY } from "../../base";
import { LocalLoggedInUser } from "../../data/usecases/auth/local-logged-in-user";
import DashboardPage from "../../presentation/pages/DashboardPage";

const DashboardFactory = () => {
  const storage = LocalJsonStorage.getInstance();
  const token = storage.get(AUTH_TOKEN_KEY);
  const axiosHttpClient = AxiosHttpClient.getInstance();
  axiosHttpClient.setAuthHeaders({ [AUTH_HEADER]: atob(token) });

  const loggedInUser = new LocalLoggedInUser(storage);

  return (
    <div>
      <DashboardPage loggedInUser={loggedInUser} />
    </div>
  );
};

export default DashboardFactory;
