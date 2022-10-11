import { Constants } from "../../../common/Constants";
import HTTPStatusCode from "../../../domain/enums/httpStatusCode";
import { LoginErrors } from "../../../domain/models/login-errors";
import { RequestLoginOtp } from "../../../domain/usages/auth/request-login-otp";
import { HttpConstants } from "../../protocols/http/http-constants";
import { HttpPostClient } from "../../protocols/http/http-post-client";

export class RemoteRequestLoginOtp implements RequestLoginOtp {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async requestOtp(params: RequestLoginOtp.Params): Promise<any> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
      headers: {
        [HttpConstants.CONTENT_TYPE]: HttpConstants.APPLICATION_JSON,
        [HttpConstants.ACCEPT]: HttpConstants.APPLICATION_JSON,
      },
      authHeaders: false,
    });

    if (!httpResponse) {
      let response: LoginErrors = { message: "", mobile: "", otp: "" };
      response.message = Constants.SERVER_ERROR;
      return response;
    } else if (httpResponse.status == HTTPStatusCode.RESET_CONTENT) {
      let response: LoginErrors = { message: "", mobile: "", otp: "" };
      response.message = Constants.AUTHORIZATION_ERROR;
      return response;
    }
    return httpResponse.body ? httpResponse.body : httpResponse.data;
  }
}
