import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { getNewReleasesResponse } from "../models/album";

export const getNewReleases = async (
  clientCredentialToken: string
): Promise<getNewReleasesResponse> => {
  try {
    const response = await axios.get(
      `${SPOTIFY_BASE_URL}/browse/new-release?limit=6`,
      {
        headers: {
          Authorization: `Bearer
            ${clientCredentialToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Fail to fetch ew release");
  }
};
