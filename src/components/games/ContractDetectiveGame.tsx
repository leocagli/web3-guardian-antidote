
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Question {
  id: number;
  question: string;
  answer: boolean;
  explanation: string;
}

export const ContractDetectiveGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);

  const contractCode = `pragma solidity ^0.8.0;

contract SuspiciousToken {
    address public owner;
    mapping(address => uint256) public balances;
    bool public paused = false;
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    function mint(address to, uint256 amount) public onlyOwner {
        balances[to] += amount; // ⚠️ Sin límite
    }
    
    function withdrawAll() public onlyOwner {
        payable(owner).transfer(address(this).balance); // 🚨 Drain
    }
    
    function pause() public onlyOwner {
        paused = true; // ✅ Pausa de emergencia
    }
}`;

  const questions: Question[] = [
    {
      id: 1,
      question: "¿Tiene funciones de mint ilimitado?",
      answer: true,
      explanation: "Sí - La función mint() puede crear tokens sin límite, esto es riesgoso."
    },
    {
      id: 2,
      question: "¿Los fondos pueden ser retirados por el owner?",
      answer: true,
      explanation: "Sí - withdrawAll() permite al owner drenar todos los fondos del contrato."
    },
    {
      id: 3,
      question: "¿Hay pausas de emergencia?",
      answer: true,
      explanation: "Sí - La función pause() permite detener el contrato en emergencias."
    }
  ];

  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
  };

  const submitAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End game and calculate score
      const correctAnswers = newAnswers.filter((ans, idx) => ans === questions[idx].answer).length;
      setScore(correctAnswers * 15);
      setGameEnded(true);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameEnded(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
  };

  return (
    <Card className="bg-slate-800/90 border-green-500/30">
      <CardHeader>
        <CardTitle className="text-center text-green-400 flex items-center justify-center">
          🔍 Contract Detective
        </CardTitle>
        <p className="text-center text-gray-300 text-sm">
          Analiza código de smart contracts para detectar vulnerabilidades
        </p>
      </CardHeader>
      <CardContent>
        {!gameStarted ? (
          <div className="space-y-4">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
              <p className="text-xs text-gray-400 mb-2">Código a Analizar:</p>
              <pre className="text-xs text-gray-300 overflow-x-auto">
                <code>{contractCode}</code>
              </pre>
            </div>
            <div className="text-center">
              <Button onClick={startGame} className="bg-green-600 hover:bg-green-700">
                Iniciar Análisis
              </Button>
            </div>
          </div>
        ) : gameEnded ? (
          <div className="space-y-4">
            <div className="text-center">
              <Badge variant="secondary" className="bg-emerald-900/50 text-emerald-300 mb-4">
                +{score} XP
              </Badge>
              <h3 className="text-lg font-semibold text-white mb-4">
                Análisis Completado!
              </h3>
            </div>
            
            <div className="space-y-3">
              {questions.map((question, index) => (
                <Alert key={question.id} className="bg-slate-700/50 border-slate-600">
                  <AlertDescription>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-gray-300 text-sm">{question.question}</span>
                      <span className={`text-sm ${answers[index] === question.answer ? 'text-emerald-400' : 'text-red-400'}`}>
                        {answers[index] === question.answer ? '✅' : '❌'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{question.explanation}</p>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
            
            <div className="text-center">
              <Button onClick={resetGame} size="sm" className="bg-green-600 hover:bg-green-700">
                Analizar Nuevo Contrato
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                Pregunta {currentQuestion + 1}/{questions.length}
              </Badge>
            </div>
            
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
              <h3 className="text-white font-semibold mb-3">
                {questions[currentQuestion].question}
              </h3>
              <div className="flex space-x-3">
                <Button 
                  onClick={() => submitAnswer(true)}
                  className="bg-red-600 hover:bg-red-700 flex-1"
                >
                  🚨 SÍ (Riesgoso)
                </Button>
                <Button 
                  onClick={() => submitAnswer(false)}
                  className="bg-emerald-600 hover:bg-emerald-700 flex-1"
                >
                  ✅ NO (Seguro)
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
