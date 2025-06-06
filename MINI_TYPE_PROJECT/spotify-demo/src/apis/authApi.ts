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
    console.log("clientId:", clientId);
    console.log("clientSecret:", clientSecret);
    console.log(encodedBase64(clientId + ":" + clientSecret));
    try {
      const body = new URLSearchParams({
        grant_type: "client_credentials",
      });
      console.log("body.toString():", body.toString());
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
      console.log("✅ token response:", response.data); // ← 이거 추가!
      return response.data;
    } catch (error) {
      console.error(
        "❌ Token 요청 중 오류 발생1:",
        error.response?.data || error.message
      );
      console.error("❌ Token 요청 중 오류 발생2:", error);
      throw new Error("Failed to fetch client credential token.");
    }
  };
