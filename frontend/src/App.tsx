import React, { useState, useEffect } from 'react';
import useFetchNFTs from './hooks/useFetchNFTs';
import NFTCard from './components/NFTCard/NFTCard';
import './App.css';
import { CustomInput, Loader, MultiSelectDropDown } from './components';
import { Chain } from './utils/interfaces';
import options from './utils';

function App(): JSX.Element {
  const defaultSelectedChains = options.find(sel => sel.value === 'mumbai');
  const [ownerAddress, setOwnerAddress] = useState<string>('');
  const [inputError, setInputError] = useState<string>('');
  const [selectedChains, setSelectedChains] = useState<Chain[]>(defaultSelectedChains as any);
  const { nfts, loading, error, fetchNFTs, userSearch, setError } = useFetchNFTs();
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    if (!initialLoad && !loading) {
      setInitialLoad(false);
    }
  }, [initialLoad, loading]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setError('');
    if (!ownerAddress.trim()) {
      return setInputError("Address ID required!");
    }
    setInputError('');
    fetchNFTs(selectedChains.value, ownerAddress);
    setInitialLoad(false);
  };

  const handleInputChange = (value: string): void => {
    setOwnerAddress(value);
    setError('');
    setInputError('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleChainChange = (selected: Chain[]): void => {
    setSelectedChains(selected);
    setError('');
    setInputError('');
    if (ownerAddress.trim()) {
      fetchNFTs(selected.value, ownerAddress);
      setInitialLoad(false);
    }
  };

  console.log(selectedChains)
  return (
    <div className="App">
      <h1>Pudgy Penguins NFT Viewer</h1>
      <div className="input-section">
        <MultiSelectDropDown selectedOptions={selectedChains} handleChange={handleChainChange} />
        <form onSubmit={handleSubmit} style={{ marginTop: 18, marginLeft: 10 }}>
          <CustomInput
            value={ownerAddress}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Search by address"
          />
          <button type="submit">Fetch NFTs</button>
        </form>
      </div>
      {inputError && <p className="error">{inputError}</p>}
      {loading ? <Loader /> : error ? <p className="error">{error}</p> : !initialLoad && (userSearch || nfts.length === 0) ? <p>No items found for this search</p> :
        <div className="nft-list">
          {nfts?.map((nft, index) => (
            <NFTCard key={`${nft.id}-${index}`} nft={nft} />
          ))}
        </div>
      }
    </div>
  );
}

export default App;