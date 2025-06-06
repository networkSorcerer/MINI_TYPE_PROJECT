import axios from "axios";
import { clientId, clientSecret } from "../configs/authConfig";
import { ClientCredentialTokenResponse } from "../models/auth";
// import { URLSearchParams } from "url";

const encodedBase64 = (data: string): string => {
  // Buffer가 있는 환경과 없는 환경이 있기 때문에 이렇게 처리.

  if (typeof window !== "undefined") {
    // 브라우저 환경
    return btoa(data);
  } else {
    // Node.js 환경
    return Buffer.from(data).toString("base64");
  }
};

export const getClientCredentialToken =
  async (): Promise<ClientCredentialTokenResponse> => {
    try {
      const body = new URLSearchParams({
        grant_type: "client_credentials",
      });
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        body,
        {
          headers: {
            Authorization: `Basic ${encodedBase64(
              clientId + ":" + clientSecret
            )}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch client credential token.");
    }
  };
