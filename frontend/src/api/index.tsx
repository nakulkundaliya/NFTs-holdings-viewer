import axios, { AxiosResponse } from 'axios';
import { NFTData } from '../utils/interfaces';
import { BASE_URL } from './constant';

export const fetchNFTsByAddress = async (chain: string, addressId: string): Promise<any[]> => {
  try {
    const response: AxiosResponse<NFTData> = await axios.get(`${BASE_URL}?address=${addressId}&chain=${chain}`);
    return response.data?.data || [];
  } catch (error) {
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (error.response) {
      if (error.response.status === 500) {
        errorMessage = 'An internal server error occurred. Please try again later.';
      } else {
        errorMessage = `An error occurred: ${error.response.statusText}`;
      }
    } else if (error.request) {
      errorMessage = 'No response received from the server. Please check your network connection.';
    } else {
      errorMessage = 'An error occurred while setting up the request. Please try again.';
    }

    throw new Error(errorMessage);
  }
};
