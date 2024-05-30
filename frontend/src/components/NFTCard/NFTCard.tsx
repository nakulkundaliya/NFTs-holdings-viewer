import React from 'react';
import './NFTCard.css';
import { NFTCardProps } from '../../utils/interfaces';

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <div className="nft-card">
      {nft?.image ? (
        <div className="nft-card-image">
          <img src={nft?.image} alt={nft?.name} />
        </div>
      ) : (
        <div className="nft-card-no-image">No Image Available</div>
      )}
      <div className="nft-card-content">
        <h3 className="nft-card-title">{nft?.name}</h3>
        <p className="nft-card-id">ID: {nft?.id}</p>
        <p className="nft-card-description">{nft?.description}</p>
      </div>
    </div>
  );
};

export default NFTCard;
