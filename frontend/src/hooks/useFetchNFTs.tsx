import { useState } from 'react';
import { fetchNFTsByAddress } from '../api';
import { FetchNFTsResponse, NFT } from '../utils/interfaces';

const useFetchNFTs = (): FetchNFTsResponse => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [userSearch, setUserSearch] = useState<boolean>(false);

  const fetchNFTs = async (chain: string, addressId: string): Promise<void> => {
    setLoading(true);
    setError('');
    setNfts([]);
    setUserSearch(true);
    try {
      const ownedNfts = await fetchNFTsByAddress(chain, addressId);
      setNfts(ownedNfts);
    } catch (err) {
      setError(err.message || 'Failed to fetch NFTs');
    }
    setLoading(false);
    setUserSearch(false);
  };

  return { nfts, loading, error, fetchNFTs, userSearch, setError };
};

export default useFetchNFTs;
