
import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Loader2, Wallet, Eye, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface WalletAnalyzerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ThreatResult {
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  recommendation: string;
}

export const WalletAnalyzer = ({ isOpen, onClose }: WalletAnalyzerProps) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [threats, setThreats] = useState<ThreatResult[]>([]);
  const [riskScore, setRiskScore] = useState(0);
  const { toast } = useToast();

  const simulateWalletAnalysis = async () => {
    if (!walletAddress || walletAddress.length < 42) {
      toast({
        title: "Error",
        description: "Por favor ingresa una dirección de wallet válida",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisComplete(false);
    setThreats([]);

    // Simular análisis progresivo
    const steps = [
      { progress: 20, message: "Verificando en blacklists..." },
      { progress: 40, message: "Analizando transacciones recientes..." },
      { progress: 60, message: "Detectando NFTs sospechosos..." },
      { progress: 80, message: "Verificando ataques de poisoning..." },
      { progress: 100, message: "Análisis completado" }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setAnalysisProgress(step.progress);
    }

    // Simular resultados basados en la dirección
    const mockThreats: ThreatResult[] = [];
    let calculatedRisk = 0;

    // Simular diferentes escenarios basados en la dirección
    if (walletAddress.toLowerCase().includes('a') || walletAddress.toLowerCase().includes('1')) {
      mockThreats.push({
        type: "Dirección Filtrada",
        severity: "high",
        description: "Esta dirección aparece en listas de direcciones comprometidas",
        recommendation: "Evita interactuar con esta dirección y reporta actividad sospechosa"
      });
      calculatedRisk += 40;
    }

    if (walletAddress.toLowerCase().includes('b') || walletAddress.toLowerCase().includes('2')) {
      mockThreats.push({
        type: "NFTs Sospechosos",
        severity: "medium",
        description: "Se detectaron NFTs potencialmente maliciosos en esta wallet",
        recommendation: "No interactúes con NFTs desconocidos de esta dirección"
      });
      calculatedRisk += 25;
    }

    if (walletAddress.toLowerCase().includes('c') || walletAddress.toLowerCase().includes('3')) {
      mockThreats.push({
        type: "Address Poisoning",
        severity: "high",
        description: "Patrón de transacciones indicativo de ataques de envenenamiento",
        recommendation: "Verifica cuidadosamente las direcciones antes de enviar fondos"
      });
      calculatedRisk += 35;
    }

    if (mockThreats.length === 0) {
      mockThreats.push({
        type: "Sin Amenazas Detectadas",
        severity: "low",
        description: "No se encontraron amenazas conocidas para esta dirección",
        recommendation: "Mantén buenas prácticas de seguridad al interactuar"
      });
      calculatedRisk = 5;
    }

    setThreats(mockThreats);
    setRiskScore(calculatedRisk);
    setAnalysisComplete(true);
    setIsAnalyzing(false);

    toast({
      title: "Análisis Completado",
      description: `Se detectaron ${mockThreats.length} elementos de análisis`,
    });
  };

  const connectWallet = async () => {
    // Simular conexión de wallet
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts'
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          toast({
            title: "Wallet Conectada",
            description: "Wallet conectada exitosamente",
          });
        }
      } catch (error) {
        // Usar dirección demo si no hay wallet
        setWalletAddress('0x742d35Cc6639C0532fEb72Aa05Ca7b2b1a67e3c1');
        toast({
          title: "Modo Demo",
          description: "Usando dirección demo para el análisis",
        });
      }
    } else {
      // Usar dirección demo
      setWalletAddress('0x742d35Cc6639C0532fEb72Aa05Ca7b2b1a67e3c1');
      toast({
        title: "Modo Demo",
        description: "Usando dirección demo para el análisis",
      });
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getRiskScoreColor = (score: number) => {
    if (score >= 50) return 'text-red-400';
    if (score >= 25) return 'text-orange-400';
    return 'text-green-400';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white flex items-center">
            <Shield className="h-6 w-6 mr-2 text-blue-400" />
            🛡️ Antidote - Análisis de Wallet Demo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Conexión de Wallet */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Wallet className="h-5 w-5 mr-2 text-purple-400" />
              Conectar Wallet para Análisis
            </h3>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="0x... o conecta tu wallet"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-400"
              />
              <Button
                onClick={connectWallet}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Conectar Wallet
              </Button>
            </div>

            {walletAddress && (
              <div className="mt-4 p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <p className="text-blue-300 text-sm">
                  <strong>Dirección conectada:</strong> {walletAddress.slice(0, 10)}...{walletAddress.slice(-8)}
                </p>
              </div>
            )}
          </div>

          {/* Análisis */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="h-5 w-5 mr-2 text-cyan-400" />
                Análisis de Seguridad On-Chain
              </h3>
              <Button
                onClick={simulateWalletAnalysis}
                disabled={!walletAddress || isAnalyzing}
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analizando...
                  </>
                ) : (
                  <>
                    <Shield className="h-4 w-4 mr-2" />
                    Iniciar Análisis
                  </>
                )}
              </Button>
            </div>

            {isAnalyzing && (
              <div className="space-y-3">
                <Progress value={analysisProgress} className="w-full" />
                <p className="text-gray-300 text-sm text-center">
                  Progreso: {analysisProgress}%
                </p>
              </div>
            )}

            {analysisComplete && (
              <div className="space-y-6">
                {/* Score de Riesgo */}
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h4 className="text-white font-semibold mb-2">📊 Score de Riesgo</h4>
                  <div className="flex items-center space-x-4">
                    <div className={`text-3xl font-bold ${getRiskScoreColor(riskScore)}`}>
                      {riskScore}%
                    </div>
                    <div className="flex-1">
                      <Progress value={riskScore} className="h-3" />
                    </div>
                    <Badge className={getSeverityColor(riskScore >= 50 ? 'high' : riskScore >= 25 ? 'medium' : 'low')}>
                      {riskScore >= 50 ? 'Alto Riesgo' : riskScore >= 25 ? 'Riesgo Medio' : 'Bajo Riesgo'}
                    </Badge>
                  </div>
                </div>

                {/* Resultados de Amenazas */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
                    Resultados del Análisis
                  </h4>
                  
                  {threats.map((threat, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-white font-medium flex items-center">
                          {threat.severity === 'high' && <AlertCircle className="h-4 w-4 mr-2 text-red-400" />}
                          {threat.severity === 'medium' && <AlertTriangle className="h-4 w-4 mr-2 text-orange-400" />}
                          {threat.severity === 'low' && <CheckCircle className="h-4 w-4 mr-2 text-green-400" />}
                          {threat.type}
                        </h5>
                        <Badge className={getSeverityColor(threat.severity)}>
                          {threat.severity.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{threat.description}</p>
                      <p className="text-blue-300 text-sm">
                        <strong>Recomendación:</strong> {threat.recommendation}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Acciones Recomendadas */}
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-white font-semibold mb-3">🎯 Próximos Pasos</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>✅ Revisa las recomendaciones específicas arriba</p>
                    <p>✅ Considera usar Antidote para protección continua</p>
                    <p>✅ Mantente informado sobre nuevas amenazas</p>
                    <p>✅ Comparte este análisis con tu comunidad</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Info del Demo */}
          <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-500/30">
            <p className="text-emerald-300 text-sm">
              <strong>🎮 Modo Demo:</strong> Esta es una demostración básica de las capacidades de Antidote. 
              La versión completa incluirá análisis en tiempo real, integración blockchain y más funciones de seguridad.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
