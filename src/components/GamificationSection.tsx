
import { Trophy, Target, Award, Users, Gamepad2, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const GamificationSection = () => {
  const achievements = [
    { name: "Primera Transacción Segura", xp: 50, color: "text-emerald-400" },
    { name: "Verificador de Direcciones", xp: 25, color: "text-blue-400" },
    { name: "Detector de Phishing", xp: 100, color: "text-purple-400" },
    { name: "Educador Comunitario", xp: 75, color: "text-orange-400" }
  ];

  const levels = [
    { level: 1, name: "Novato Cripto", xp: "0-100 XP", color: "from-gray-500 to-gray-600" },
    { level: 5, name: "Guardian Experimentado", xp: "500-1000 XP", color: "from-blue-500 to-cyan-500" },
    { level: 10, name: "Maestro de Seguridad", xp: "2000+ XP", color: "from-purple-500 to-pink-500" }
  ];

  const miniGames = [
    {
      name: "Spot the Scam",
      description: "Encuentra las URLs falsas en 30 segundos",
      reward: "+25 XP",
      icon: "🎯"
    },
    {
      name: "Address Puzzle",
      description: "Identifica diferencias sutiles en direcciones",
      reward: "+30 XP",
      icon: "🧩"
    },
    {
      name: "Contract Detective",
      description: "Analiza código de smart contracts",
      reward: "+40 XP",
      icon: "🔍"
    }
  ];

  return (
    <section id="gamification" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm">
            🎮 Gamificación
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aprende Jugando
            </span>
            <br />
            <span className="text-white">Seguridad Divertida</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Convierte la educación cripto en una aventura épica con personajes únicos, 
            misiones emocionantes y recompensas por ser un guardian responsable.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🎮 Dashboard del Guardian</h3>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">🛡️</div>
              <div>
                <h4 className="text-xl font-bold text-white">Alex: "¡Buen día, Guardian!"</h4>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="text-purple-400 font-semibold">Nivel 7</span>
                  <Progress value={62.5} className="w-32" />
                  <span className="text-gray-400 text-sm">(1,250/2,000 XP)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Daily Missions */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">🎯 Misiones de Hoy</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
                    <span className="text-emerald-400">✅</span>
                    <span className="text-gray-300 text-sm">Verificación Matutina</span>
                    <span className="text-emerald-400 text-sm ml-auto">+20 XP</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-gray-400">⏳</span>
                    <span className="text-gray-300 text-sm">Cazador de Scams (0/1)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-gray-400">⏳</span>
                    <span className="text-gray-300 text-sm">Educador Web3 (0/1)</span>
                  </div>
                </div>
              </div>

              {/* Weekly Progress */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">🏆 Progreso Semanal</h5>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Transacciones Seguras</span>
                      <span className="text-blue-400">47/50</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Amenazas Reportadas</span>
                      <span className="text-purple-400">3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Levels & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Levels */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="h-6 w-6 mr-2 text-yellow-400" />
              Sistema de Niveles
            </h3>
            <div className="space-y-4">
              {levels.map((level, index) => (
                <div key={index} className={`p-4 rounded-lg bg-gradient-to-r ${level.color} bg-opacity-20 border border-opacity-30`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white">Nivel {level.level}: {level.name}</h4>
                      <p className="text-gray-300 text-sm">{level.xp}</p>
                    </div>
                    <Star className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-400" />
              Logros
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className={`h-5 w-5 ${achievement.color}`} />
                    <span className="text-gray-300 text-sm">{achievement.name}</span>
                  </div>
                  <span className={`text-sm font-semibold ${achievement.color}`}>+{achievement.xp} XP</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mini-Games */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Gamepad2 className="h-8 w-8 mr-3 text-purple-400" />
            Mini-Juegos Educativos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {miniGames.map((game, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4 text-center">{game.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2 text-center">{game.name}</h4>
                <p className="text-gray-300 text-sm text-center mb-4">{game.description}</p>
                <div className="text-center">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {game.reward}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-cyan-400" />
              Gremios (Guilds)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <span>🛡️</span>
                <span className="text-gray-300">"Los Guardianes" - Especialistas en protección</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <span>🔍</span>
                <span className="text-gray-300">"Los Detectives" - Cazadores de amenazas</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
                <span>📚</span>
                <span className="text-gray-300">"Los Educadores" - Mentores de la comunidad</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30">
                <span>⚡</span>
                <span className="text-gray-300">"Los Speedsters" - Expertos en eficiencia</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="h-6 w-6 mr-2 text-yellow-400" />
              Leaderboards
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">🥇 Top Verificadores del Mes</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>1. CryptoGuardian47</span>
                    <span className="text-yellow-400">2,847 XP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2. BlockchainDefender</span>
                    <span className="text-gray-400">2,341 XP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3. Web3Protector</span>
                    <span className="text-orange-400">2,156 XP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
