export interface Chain {
  label: string;
  value: string;
}

export interface NFTData {
  data: any[];
}

export interface Option {
  value: string;
  label: string;
}

export interface NFT {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export interface NFTCardProps {
  nft: NFT;
}

export interface FetchNFTsResponse {
  nfts: NFT[];
  loading: boolean;
  error: string;
  fetchNFTs: (chain: string, addressId: string) => Promise<void>;
  userSearch: boolean;
  setError: (error: string) => void;
}

export interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
}