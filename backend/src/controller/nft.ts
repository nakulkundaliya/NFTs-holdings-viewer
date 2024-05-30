import { apiCall, errorResponse, internalServerError, successResponse } from "../helper";
import { ReqHandlerU } from "../types/utils"


export const getNFTs: ReqHandlerU<[], {}> = async (req, res) => {
  const { address, chain } = req.query;

  if (!address || !chain) {
    return errorResponse(res, 'Please provide valid params')
  }
  try {
    const result: any = await apiCall(`chain/${chain}/account/${address}/nfts`)
    if (result.data) {
      const nfts = result?.data?.nfts?.map((asset: any) => {
        const { image_url, name, identifier, description } = asset
        return {
          image: image_url,
          name,
          id: identifier,
          description
        }
      });
      return successResponse(res, 'Successfully retrieved all NFTs', nfts)
    } else {
      return errorResponse(res, result.message)
    }

  } catch (error) {
    return internalServerError(res)
  }

}