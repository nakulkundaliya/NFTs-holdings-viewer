import axios from 'axios';
const BASE_URL = 'https://testnets-api.opensea.io/api/v2'

export const apiCall = async (url: string, method: string = 'GET') => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`);
    // const response = (await axios.get(`${BASE_URL}/chain/mumbai/account/0x69f2301E037f1E35CC056a736758123460141d7a/nfts`));
    return response
  } catch (error) {
    return error
  }
}

export const successResponse = (res: any, message: string, data: any) => {
  return res.status(200).json({
    message,
    status: true,
    data
  });
}

export const errorResponse = (res: any, message: string) => {
  return res.status(400).json({
    message,
    status: false,
    data: null
  });
}

export const internalServerError = (res: any) => {
  return res.status(400).json({
    message: "Something went wrong, Please try again",
    status: false,
    data: null
  });
}