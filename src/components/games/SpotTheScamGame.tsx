
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface URLOption {
  url: string;
  isScam: boolean;
  id: number;
}

export const SpotTheScamGame = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const urlOptions: URLOption[] = [
    { id: 1, url: "uniswap.org", isScam: false },
    { id: 2, url: "uniswap-rewards.com", isScam: true },
    { id: 3, url: "app.uniswap.org", isScam: false },
    { id: 4, url: "uniswap.finance", isScam: true }
  ];

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameEnded) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted) {
      endGame();
    }
  }, [timeLeft, gameStarted, gameEnded]);

  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setTimeLeft(30);
    setScore(0);
    setSelectedAnswers([]);
  };

  const endGame = () => {
    setGameEnded(true);
    calculateScore();
  };

  const calculateScore = () => {
    const correctScams = urlOptions.filter(url => url.isScam).map(url => url.id);
    const correctSelections = selectedAnswers.filter(id => correctScams.includes(id));
    const incorrectSelections = selectedAnswers.filter(id => !correctScams.includes(id));
    
    const points = correctSelections.length * 15 - incorrectSelections.length * 5;
    setScore(Math.max(0, points));
  };

  const toggleSelection = (id: number) => {
    if (gameEnded) return;
    
    setSelectedAnswers(prev => 
      prev.includes(id) 
        ? prev.filter(answerId => answerId !== id)
        : [...prev, id]
    );
  };

  const getButtonStyle = (option: URLOption) => {
    if (!gameEnded) {
      return selectedAnswers.includes(option.id) 
        ? "bg-purple-600 hover:bg-purple-700 text-white" 
        : "bg-slate-700 hover:bg-slate-600 text-gray-300";
    }
    
    if (option.isScam && selectedAnswers.includes(option.id)) {
      return "bg-green-600 text-white"; // Correct scam identification
    } else if (option.isScam && !selectedAnswers.includes(option.id)) {
      return "bg-red-600 text-white"; // Missed scam
    } else if (!option.isScam && selectedAnswers.includes(option.id)) {
      return "bg-orange-600 text-white"; // False positive
    } else {
      return "bg-green-600 text-white"; // Correct safe site
    }
  };

  return (
    <Card className="bg-slate-800/90 border-purple-500/30">
      <CardHeader>
        <CardTitle className="text-center text-purple-400 flex items-center justify-center">
          🎯 Spot the Scam
        </CardTitle>
        <p className="text-center text-gray-300 text-sm">
          Identifica las URLs falsas en 30 segundos
        </p>
      </CardHeader>
      <CardContent>
        {!gameStarted ? (
          <div className="text-center space-y-4">
            <p className="text-gray-300">¿Puedes detectar qué URLs son scams?</p>
            <Button onClick={startGame} className="bg-purple-600 hover:bg-purple-700">
              Iniciar Juego
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                Tiempo: {timeLeft}s
              </Badge>
              {gameEnded && (
                <Badge variant="secondary" className="bg-emerald-900/50 text-emerald-300">
                  +{score} XP
                </Badge>
              )}
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {urlOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleSelection(option.id)}
                  disabled={gameEnded}
                  className={`p-4 rounded-lg border transition-all duration-200 text-left ${getButtonStyle(option)}`}
                >
                  <span className="font-mono">{option.url}</span>
                  {gameEnded && (
                    <span className="ml-2 text-sm">
                      {option.isScam ? "❌ SCAM" : "✅ SEGURO"}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {gameEnded && (
              <div className="text-center space-y-2">
                <p className="text-emerald-400 font-semibold">
                  ¡Juego terminado! Ganaste {score} XP
                </p>
                <Button onClick={startGame} size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Jugar de Nuevo
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
