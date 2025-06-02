
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AddressOption {
  address: string;
  isCorrect: boolean;
  id: number;
}

export const AddressPuzzleGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const realAddress = "0x742d35Cc6634C0532925a3b8D47c9e6b63AC2B82";
  
  const addressOptions: AddressOption[] = [
    { id: 1, address: "0x742d35Cc6634C0532925a3b8D47c9e6b63AC2B82", isCorrect: true },
    { id: 2, address: "0x742d35Cc6634C0532925a3b8D47c9e6b63AC2B8B", isCorrect: false }, // Changed last character
    { id: 3, address: "0x742d35Cc6634C0532925a3b8D47c9e6b63AC2E82", isCorrect: false }, // Changed middle character
    { id: 4, address: "0x742d35Cc6634C0532925a3b8D47c9e6b63AC2A82", isCorrect: false }  // Changed near end
  ];

  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setSelectedAnswer(null);
    setScore(0);
  };

  const selectAnswer = (id: number) => {
    if (gameEnded) return;
    
    setSelectedAnswer(id);
    const correct = addressOptions.find(opt => opt.id === id)?.isCorrect;
    setScore(correct ? 30 : 0);
    setGameEnded(true);
  };

  const getButtonStyle = (option: AddressOption) => {
    if (!gameEnded) {
      return selectedAnswer === option.id 
        ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-500" 
        : "bg-slate-700 hover:bg-slate-600 text-gray-300 border-slate-600";
    }
    
    if (option.isCorrect) {
      return "bg-green-600 text-white border-green-500";
    } else if (selectedAnswer === option.id) {
      return "bg-red-600 text-white border-red-500";
    } else {
      return "bg-slate-700 text-gray-300 border-slate-600";
    }
  };

  const highlightDifferences = (address: string, realAddr: string) => {
    return address.split('').map((char, index) => (
      <span 
        key={index} 
        className={char !== realAddr[index] ? 'bg-red-500/50 px-0.5 rounded' : ''}
      >
        {char}
      </span>
    ));
  };

  return (
    <Card className="bg-slate-800/90 border-blue-500/30">
      <CardHeader>
        <CardTitle className="text-center text-blue-400 flex items-center justify-center">
          🧩 Address Puzzle
        </CardTitle>
        <p className="text-center text-gray-300 text-sm">
          Encuentra la dirección real entre las falsas
        </p>
      </CardHeader>
      <CardContent>
        {!gameStarted ? (
          <div className="text-center space-y-4">
            <p className="text-gray-300">
              Identifica diferencias sutiles en las direcciones Web3
            </p>
            <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-600">
              <p className="text-xs text-gray-400 mb-1">Dirección Real:</p>
              <p className="font-mono text-sm text-emerald-400 break-all">
                {realAddress}
              </p>
            </div>
            <Button onClick={startGame} className="bg-blue-600 hover:bg-blue-700">
              Iniciar Puzzle
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-300 text-sm">Selecciona la dirección correcta:</p>
              {gameEnded && (
                <Badge variant="secondary" className="bg-emerald-900/50 text-emerald-300">
                  +{score} XP
                </Badge>
              )}
            </div>
            
            <div className="space-y-3">
              {addressOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => selectAnswer(option.id)}
                  disabled={gameEnded}
                  className={`w-full p-3 rounded-lg border transition-all duration-200 text-left ${getButtonStyle(option)}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Opción {option.id}:</span>
                    {gameEnded && (
                      <span className="text-sm">
                        {option.isCorrect ? "✅ CORRECTA" : "❌ FALSA"}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-sm break-all mt-1">
                    {gameEnded ? highlightDifferences(option.address, realAddress) : option.address}
                  </p>
                </button>
              ))}
            </div>

            {gameEnded && (
              <div className="text-center space-y-2">
                <p className={`font-semibold ${score > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {score > 0 ? '¡Correcto!' : '¡Intenta de nuevo!'} {score > 0 && `+${score} XP`}
                </p>
                <Button onClick={startGame} size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Nuevo Puzzle
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
