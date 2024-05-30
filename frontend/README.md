# NFT Holdings Viewer

This project is a React-based web application for viewing NFT (Non-Fungible Token) collections. It allows users to search for NFTs based on their owner address and chain.

## File Structure

- `src/`
  - `api/`: Contains files related to API calls and data handling.
  - `components/`: Contains React components used in the application.
  - `hooks/`: Contains custom React hooks.
  - `utils/`: Contains utility functions and data used across the application.
  - `App.tsx`: Main component where the application starts.
  - `index.tsx`: Entry point of the application.
  - `setupTests.ts`: Configuration for testing environment.
  - `public/`: Contains public assets and HTML file.

## Key Files

- `api/`: Contains files related to API calls and data handling.
- `fetchNFTsByAddress.ts`: Function for fetching NFTs by owner address.
- `components/`: Contains React components used in the application.
- `MultiSelectDropdown.tsx`: Component for a multi-select dropdown.
- `NFTCard.tsx`: Component for displaying NFT card details.
- `hooks/`: Contains custom React hooks.
- `useFetchNFTs.ts`: Custom hook for fetching NFT data.
- `utils/`: Contains utility functions and data used across the application.
- `options.ts`: Data file containing options for the multi-select dropdown.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open the application in a web browser at `http://localhost:3000`.

## Dependencies

- React: Frontend library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- React-Select: Customizable select component for React applications.
- TypeScript: Typed superset of JavaScript for enhanced development experience.
- Web3: Library for interacting with Ethereum blockchain.
- Ethers: Ethereum JavaScript library for interacting with smart contracts.

## Scripts

- `npm start`: Start the development server.
- `npm build`: Build the application for production.
- `npm test`: Run tests.
- `npm eject`: Eject from Create React App for advanced configurations.

## Additional Notes

- This application integrates with the OpenSea API to fetch NFT data.
- Ensure proper network connectivity to fetch NFTs from the blockchain.

