import axios from "axios";
import { clientId, clientSecret } from "../configs/authConfig";
import { ClientCredentialTokenResponse } from "../models/auth";

const encodeBase64 = (data: string): string => {
  if (typeof window !== "undefined") {
    return btoa(data);
  } else {
    return Buffer.from(data).toString("base64");
  }
};
export const getClientCredentialToken =
  async (): Promise<ClientCredentialTokenResponse> => {
    console.log("clientId:", clientId);
    console.log("clientSecret:", clientSecret);

    try {
      const body = new URLSearchParams({
        grant_type: "client_credentials",
      });
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        body,
        {
          headers: {
            Authorization: `Basic ${encodeBase64(
              clientId + ":" + clientSecret
            )}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Fail to fetch client credential token");
    }
  };
