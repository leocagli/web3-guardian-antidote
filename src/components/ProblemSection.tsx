
import { AlertTriangle, Target, DollarSign, Users, Zap } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Filtros Anti-Spam Inexistentes",
      description: "Web3 carece de protección especializada contra amenazas cripto",
      color: "text-red-400"
    },
    {
      icon: Target,
      title: "Verificación de Contratos",
      description: "Los usuarios no pueden verificar la seguridad de smart contracts",
      color: "text-orange-400"
    },
    {
      icon: Users,
      title: "Zero Educación Contextual",
      description: "No hay guías durante las interacciones críticas",
      color: "text-yellow-400"
    },
    {
      icon: Zap,
      title: "Interfaces Confusas",
      description: "UX compleja facilita errores costosos e irreversibles",
      color: "text-red-400"
    }
  ];

  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-400">🚨 Crisis de Seguridad</span>
            <br />
            <span className="text-white">en Web3</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La descentralización eliminó intermediarios pero también 
            <span className="text-red-400 font-semibold"> las capas de protección</span>. 
            Los usuarios quedaron solos frente a amenazas sofisticadas.
          </p>
        </div>

        {/* Reality Check */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 mb-16 border border-red-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">⚠️ La Realidad Alarmante</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-400 mb-2">$3.8B</div>
              <div className="text-gray-300">perdidos en hackeos DeFi solo en 2022</div>
            </div>
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-gray-300">de incidentes por errores humanos</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-400 mb-2">1 de 4</div>
              <div className="text-gray-300">usuarios víctima de phishing cripto</div>
            </div>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <problem.icon className={`h-12 w-12 ${problem.color} mb-4`} />
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-300">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Central Problem */}
        <div className="text-center bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-2xl p-12 border border-blue-500/30">
          <h3 className="text-3xl font-bold text-white mb-6">💔 El Problema Central</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Los usuarios de Web3 navegan en un ecosistema <span className="text-red-400 font-semibold">altamente riesgoso</span> 
            sin protección adecuada. Miles pierden fondos diariamente por transacciones equívocas, 
            phishing sofisticado y <span className="text-orange-400 font-semibold">poisoning de wallets</span> con tokens maliciosos.
          </p>
        </div>
      </div>
    </section>
  );
};
