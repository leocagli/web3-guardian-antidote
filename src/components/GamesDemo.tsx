
import { SpotTheScamGame } from "./games/SpotTheScamGame";
import { AddressPuzzleGame } from "./games/AddressPuzzleGame";
import { ContractDetectiveGame } from "./games/ContractDetectiveGame";

export const GamesDemo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <SpotTheScamGame />
      <AddressPuzzleGame />
      <ContractDetectiveGame />
    </div>
  );
};
