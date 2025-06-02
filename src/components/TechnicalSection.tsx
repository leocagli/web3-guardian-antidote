
import { Code, Database, Zap, Shield, CheckCircle, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const TechnicalSection = () => {
  const techFeatures = [
    {
      icon: Code,
      title: "Smart Contracts Auditados",
      description: "Código verificado por CertiK y ConsenSys Diligence",
      color: "text-blue-400"
    },
    {
      icon: Database,
      title: "Registry Inmutable",
      description: "Base de datos blockchain de amenazas verificadas",
      color: "text-emerald-400"
    },
    {
      icon: Zap,
      title: "API Real-Time",
      description: "Respuestas en menos de 100ms para UX fluida",
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: "Multi-Chain Support",
      description: "Ethereum, BSC, Polygon, Arbitrum, Optimism",
      color: "text-purple-400"
    }
  ];

  const metrics = [
    { label: "Gas Optimization", value: "40%", description: "más eficiente", color: "text-emerald-400" },
    { label: "Response Time", value: "<100ms", description: "promedio", color: "text-blue-400" },
    { label: "Uptime SLA", value: "99.9%", description: "disponibilidad", color: "text-purple-400" },
    { label: "False Positives", value: "<0.1%", description: "precisión", color: "text-orange-400" }
  ];

  const securityStandards = [
    "✅ Auditorías: CertiK, ConsenSys Diligence",
    "✅ Tests: 95% coverage, fuzzing tests",
    "✅ Documentación: OpenAPI, técnica completa",
    "✅ Monitoring: 24/7 uptime monitoring",
    "✅ Upgradability: Proxy patterns seguros"
  ];

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm">
            ⚙️ Arquitectura Técnica
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Calidad Técnica
            </span>
            <br />
            <span className="text-white">de Nivel Empresarial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Arquitectura robusta, segura y escalable construida con los más altos estándares 
            de la industria blockchain.
          </p>
        </div>

        {/* Tech Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <feature.icon className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Smart Contract Code Preview */}
        <div className="bg-slate-900/80 rounded-2xl p-8 border border-blue-500/30 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2 text-blue-400" />
            Smart Contract (Auditado)
          </h3>
          
          <div className="bg-slate-950 rounded-lg p-6 border border-slate-700/50 overflow-x-auto">
            <pre className="text-sm text-gray-300">
              <code>{`contract AntidoteRegistry {
    mapping(address => ThreatLevel) public addressRegistry;
    mapping(bytes32 => ContractAudit) public contractAudits;
    
    function reportThreat(address target, bytes32 evidence) 
        external onlyValidator returns (bool) {
        require(validators[msg.sender].stake >= MINIMUM_STAKE);
        threats[target].reports++;
        
        if (threats[target].reports >= CONSENSUS_THRESHOLD) {
            addressRegistry[target] = ThreatLevel.HIGH;
            emit ThreatConfirmed(target, block.timestamp);
        }
        return true;
    }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Architecture Layers */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">🏗️ Capas de Seguridad</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-500/30 text-center">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="font-bold text-emerald-400 mb-2">On-Chain Registry</h4>
              <p className="text-gray-300 text-sm">Datos inmutables de amenazas</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30 text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h4 className="font-bold text-blue-400 mb-2">Off-Chain Analysis</h4>
              <p className="text-gray-300 text-sm">ML para detección de patrones</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-purple-400 mb-2">Real-Time API</h4>
              <p className="text-gray-300 text-sm">Respuestas en <100ms</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/30 text-center">
              <div className="text-3xl mb-3">🔌</div>
              <h4 className="font-bold text-orange-400 mb-2">Wallet Integration</h4>
              <p className="text-gray-300 text-sm">SDKs para todas las wallets</p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Activity className="h-6 w-6 mr-2 text-green-400" />
              Métricas de Rendimiento
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                  <div className="text-gray-500 text-xs">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-emerald-400" />
              Estándares de Seguridad
            </h3>
            <div className="space-y-3">
              {securityStandards.map((standard, index) => (
                <div key={index} className="flex items-center text-gray-300 text-sm">
                  <span className="mr-2">✅</span>
                  {standard.replace('✅ ', '')}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scalability */}
        <div className="text-center bg-slate-800/50 rounded-2xl p-12 border border-cyan-500/30">
          <h3 className="text-3xl font-bold text-white mb-6">🚀 Escalabilidad Técnica</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-3">🌐</div>
              <h4 className="font-bold text-cyan-400 mb-2">Multi-Chain</h4>
              <p className="text-gray-300 text-sm">5+ redes soportadas</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="font-bold text-blue-400 mb-2">Modular</h4>
              <p className="text-gray-300 text-sm">APIs reutilizables</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-purple-400 mb-2">Performante</h4>
              <p className="text-gray-300 text-sm">10,000 verificaciones/seg</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-emerald-400 mb-2">Costeable</h4>
              <p className="text-gray-300 text-sm">Freemium accesible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
