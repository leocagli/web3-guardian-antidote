
import { TrendingUp, Users, DollarSign, Award, Target, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const ImpactSection = () => {
  const roadmapPhases = [
    {
      phase: "Fase 1: Validación",
      period: "Q1 2024",
      target: "1,000 usuarios beta",
      product: "Browser extension + API básica",
      investment: "$50K desarrollo",
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Fase 2: Crecimiento",
      period: "Q2-Q3 2024",
      target: "50,000 usuarios activos",
      product: "Integración con top wallets",
      investment: "$100K ARR",
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Fase 3: Expansión",
      period: "Q4 2024",
      target: "500,000 usuarios",
      product: "Enterprise solutions",
      investment: "$1M ARR",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const impactMetrics = [
    {
      icon: DollarSign,
      title: "Fondos Protegidos",
      value: ">$100M",
      description: "en primer año",
      color: "text-emerald-400"
    },
    {
      icon: Target,
      title: "Incidentes Prevenidos",
      value: ">10,000",
      description: "ataques bloqueados",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Educación",
      value: "80%",
      description: "usuarios mejoran prácticas",
      color: "text-purple-400"
    },
    {
      icon: Globe,
      title: "Adopción",
      value: "100+",
      description: "DApps integradas",
      color: "text-orange-400"
    }
  ];

  const benefitsStats = [
    { category: "Engagement", increase: "+300%", description: "tiempo promedio en app" },
    { category: "Retención", increase: "+250%", description: "retención de usuarios" },
    { category: "Seguridad", increase: "+400%", description: "acciones de seguridad realizadas" },
    { category: "Aprendizaje", increase: "85%", description: "mejor retención de conceptos" },
    { category: "Comunidad", increase: "+500%", description: "interacciones entre usuarios" },
    { category: "Reportes", increase: "+200%", description: "amenazas por crowdsourcing" }
  ];

  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2 text-sm">
            📈 Potencial de Adopción
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Impacto Transformacional
            </span>
            <br />
            <span className="text-white">en Web3</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Antidote no solo protege, <span className="text-emerald-400 font-semibold">educa</span>. 
            Cada interacción es una oportunidad de aprendizaje que construye un ecosistema más seguro.
          </p>
        </div>

        {/* Roadmap */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">🗺️ Plan de Adopción</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-br ${phase.color} p-1 rounded-2xl`}>
                  <div className="bg-slate-900 rounded-xl p-8">
                    <div className="text-center mb-6">
                      <h4 className={`text-xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent mb-2`}>
                        {phase.phase}
                      </h4>
                      <Badge className="bg-slate-700 text-gray-300">{phase.period}</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-1">TARGET</h5>
                        <p className="text-white font-semibold">{phase.target}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-1">PRODUCTO</h5>
                        <p className="text-gray-300 text-sm">{phase.product}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-1">INVERSIÓN</h5>
                        <p className={`font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                          {phase.investment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connector */}
                {index < roadmapPhases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-1 bg-gradient-to-r from-gray-600 to-gray-400"></div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-2xl p-12 border border-emerald-500/30 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">📊 Impacto Medible</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className={`h-12 w-12 ${metric.color} mx-auto mb-4`} />
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <h4 className="font-semibold text-white mb-1">{metric.title}</h4>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-emerald-400" />
              ROI del Ecosistema
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Costo de desarrollo</span>
                  <span className="text-red-400 font-bold">$500K</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Pérdidas evitadas</span>
                  <span className="text-emerald-400 font-bold">$100M+</span>
                </div>
                <hr className="border-gray-600 my-3" />
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">ROI del ecosistema</span>
                  <span className="text-emerald-400 font-bold text-xl">200:1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-400" />
              Beneficios de Gamificación
            </h3>
            <div className="space-y-3">
              {benefitsStats.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-300 text-sm">{benefit.category}</span>
                    <div className="text-xs text-gray-500">{benefit.description}</div>
                  </div>
                  <span className="text-emerald-400 font-bold">{benefit.increase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainability */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">♻️ Sostenibilidad</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-blue-400 mb-2">Revenue Streams</h4>
              <p className="text-gray-300 text-sm">SaaS empresas, premium features, validator rewards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌊</div>
              <h4 className="font-bold text-emerald-400 mb-2">Community Growth</h4>
              <p className="text-gray-300 text-sm">Red effect - más usuarios = más seguridad</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-bold text-purple-400 mb-2">Partnerships</h4>
              <p className="text-gray-300 text-sm">Integraciones con wallets, exchanges, DApps</p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-12 border border-blue-500/30">
          <h3 className="text-3xl font-bold text-white mb-6">🔮 Visión a Largo Plazo</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Un mundo donde la seguridad cripto sea <span className="text-blue-400 font-semibold">tan natural</span> como usar antivirus, 
            donde los errores humanos costosos sean <span className="text-emerald-400 font-semibold">cosa del pasado</span>, 
            y donde <span className="text-purple-400 font-semibold">todos</span> puedan participar en Web3 de forma segura.
          </p>
          
          <div className="flex justify-center items-center space-x-4 text-4xl">
            <span className="hover:scale-125 transition-transform duration-300">🔒</span>
            <span className="text-2xl text-gray-400">+</span>
            <span className="hover:scale-125 transition-transform duration-300">🎓</span>
            <span className="text-2xl text-gray-400">+</span>
            <span className="hover:scale-125 transition-transform duration-300">🎮</span>
            <span className="text-2xl text-gray-400">=</span>
            <span className="text-emerald-400 hover:scale-125 transition-transform duration-300">🌍</span>
          </div>
          
          <p className="text-lg text-gray-400 mt-6 italic">
            "En Web3, la seguridad no es un lujo, es un derecho. Antidote lo hace realidad."
          </p>
        </div>
      </div>
    </section>
  );
};
