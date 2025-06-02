
import { Shield, Search, BookOpen, Zap } from "lucide-react";

export const CharactersSection = () => {
  const characters = [
    {
      name: "Alex el Guardián",
      emoji: "🛡️",
      role: "Mentor de Seguridad Principal",
      personality: "Protector, sabio, confiable",
      function: "Guía al usuario en decisiones de seguridad",
      phrases: [
        "¡Espera! Esta transacción parece sospechosa",
        "¡Excelente! Verificaste la dirección correctamente"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: Shield
    },
    {
      name: "Crypto el Explorador",
      emoji: "🔍",
      role: "Detective de Amenazas",
      personality: "Curioso, analítico, aventurero",
      function: "Explica cómo funcionan los ataques y cómo prevenirlos",
      phrases: [
        "Investiguemos esta dirección juntos",
        "¡Descubrí un patrón de phishing!"
      ],
      color: "from-purple-500 to-pink-500",
      icon: Search
    },
    {
      name: "Luna la Educadora",
      emoji: "📚",
      role: "Maestra de Web3",
      personality: "Paciente, clara, motivadora",
      function: "Enseña conceptos complejos de forma simple",
      phrases: [
        "Te explico paso a paso",
        "¡Genial! Ahora entiendes los smart contracts"
      ],
      color: "from-emerald-500 to-teal-500",
      icon: BookOpen
    },
    {
      name: "Max el Speedster",
      emoji: "⚡",
      role: "Especialista en Transacciones Rápidas",
      personality: "Enérgico, eficiente, preciso",
      function: "Ayuda con transacciones rápidas pero seguras",
      phrases: [
        "¡Rápido pero seguro!",
        "Optimicemos esta transacción"
      ],
      color: "from-orange-500 to-red-500",
      icon: Zap
    }
  ];

  return (
    <section id="characters" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Conoce a Tus </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Guardianes Web3
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Personajes 2D únicos que te acompañan en cada paso, convirtiendo la seguridad cripto 
            en una experiencia educativa y divertida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {characters.map((character, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Character Header */}
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{character.emoji}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{character.name}</h3>
                    <p className={`text-lg bg-gradient-to-r ${character.color} bg-clip-text text-transparent font-semibold`}>
                      {character.role}
                    </p>
                  </div>
                  <character.icon className={`h-8 w-8 ml-auto opacity-20 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${character.color.replace('from-', 'text-').replace(' to-cyan-500', '').replace(' to-pink-500', '').replace(' to-teal-500', '').replace(' to-red-500', '')}`} />
                </div>

                {/* Character Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">PERSONALIDAD</h4>
                    <p className="text-gray-300">{character.personality}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">FUNCIÓN</h4>
                    <p className="text-gray-300">{character.function}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">FRASES TÍPICAS</h4>
                    <div className="space-y-2">
                      {character.phrases.map((phrase, phraseIndex) => (
                        <div 
                          key={phraseIndex}
                          className="bg-slate-700/50 rounded-lg p-3 border-l-4 border-purple-500/50"
                        >
                          <p className="text-sm text-gray-300 italic">"{phrase}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interaction Preview */}
                <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-600/50">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{character.emoji}</div>
                    <div className="flex-1">
                      <div className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <p className="text-sm text-gray-300">
                          {character.phrases[0]}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className={`px-3 py-1 rounded-md text-xs bg-gradient-to-r ${character.color} text-white opacity-80 hover:opacity-100 transition-opacity`}>
                          Verificar
                        </button>
                        <button className="px-3 py-1 rounded-md text-xs bg-slate-600 text-gray-300 hover:bg-slate-500 transition-colors">
                          Continuar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Power */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-12 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-6">🚀 Poder del Equipo</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Cada guardián tiene especialidades únicas, pero juntos forman un sistema integral de protección 
            que se adapta a tu nivel de experiencia y necesidades específicas.
          </p>
          <div className="flex justify-center space-x-8 text-4xl">
            <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">🛡️</span>
            <span className="text-2xl text-gray-400">+</span>
            <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">🔍</span>
            <span className="text-2xl text-gray-400">+</span>
            <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">📚</span>
            <span className="text-2xl text-gray-400">+</span>
            <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">⚡</span>
            <span className="text-2xl text-gray-400">=</span>
            <span className="text-emerald-400">🔒</span>
          </div>
        </div>
      </div>
    </section>
  );
};
