
import { Shield, Eye, BookOpen, Zap, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SolutionSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Filtros Anti-Spam Web3",
      description: "Detección especializada de amenazas cripto en tiempo real",
      color: "text-blue-400"
    },
    {
      icon: Eye,
      title: "Verificación Automática",
      description: "Análisis instantáneo de contratos inteligentes y direcciones",
      color: "text-cyan-400"
    },
    {
      icon: Zap,
      title: "Detección de Phishing",
      description: "Protección proactiva contra sitios y apps maliciosas",
      color: "text-emerald-400"
    },
    {
      icon: BookOpen,
      title: "Educación Contextual",
      description: "Aprende mejores prácticas durante cada transacción",
      color: "text-purple-400"
    }
  ];

  const whyBlockchain = [
    {
      title: "Verificación Descentralizada",
      description: "Red distribuida de nodos valida amenazas por consenso",
      icon: "🌐"
    },
    {
      title: "Base de Datos Inmutable",
      description: "Registry blockchain de direcciones maliciosas verificadas",
      icon: "🔒"
    },
    {
      title: "Incentivos Tokenizados",
      description: "Recompensas por reportar amenazas y mantener la red segura",
      icon: "💰"
    },
    {
      title: "Transparencia Total",
      description: "Código abierto verificable y auditorías públicas",
      icon: "👁️"
    }
  ];

  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2 text-sm">
            ✨ Nuestra Solución
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Seguridad Blockchain-Native
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un sistema de seguridad proactivo que protege usuarios Web3 mediante 
            verificación descentralizada y educación gamificada.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative mb-4">
                <feature.icon className={`h-12 w-12 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className={`absolute inset-0 ${feature.color.replace('text-', 'bg-')}/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Blockchain Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-12 border border-blue-500/30 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            🔗 ¿Por Qué Blockchain Es Esencial?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {whyBlockchain.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flow Diagram */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <h4 className="text-xl font-bold text-white mb-6 text-center">🔄 Flujo de Verificación</h4>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-center">
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
                <div className="text-blue-400 font-semibold">Usuario</div>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-500/30">
                <div className="text-emerald-400 font-semibold">Antidote</div>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30">
                <div className="text-purple-400 font-semibold">Red de Nodos</div>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-cyan-500/20 rounded-lg p-4 border border-cyan-500/30">
                <div className="text-cyan-400 font-semibold">Validación Blockchain</div>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-500/30">
                <div className="text-orange-400 font-semibold">Respuesta</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">💎 Propuesta de Valor Única</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-500/30">
              <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
              <h4 className="font-bold text-emerald-400 mb-2">Seguridad Proactiva</h4>
              <p className="text-gray-300 text-sm">Prevención antes que reacción</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
              <CheckCircle className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-bold text-blue-400 mb-2">Zero Friction</h4>
              <p className="text-gray-300 text-sm">Protección sin complicar UX</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
              <CheckCircle className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h4 className="font-bold text-purple-400 mb-2">Educación Continua</h4>
              <p className="text-gray-300 text-sm">Cada interacción enseña</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/30">
              <CheckCircle className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-cyan-400 mb-2">Comunidad-Driven</h4>
              <p className="text-gray-300 text-sm">Mejora con cada usuario</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
