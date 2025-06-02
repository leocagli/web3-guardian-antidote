
import { Shield, AlertTriangle, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2 text-sm">
          🚨 Crisis de Seguridad Web3 - $3.8B perdidos en 2022
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            ANTIDOTE
          </span>
          <br />
          <span className="text-white text-3xl md:text-5xl">
            El Guardián Inteligente de Web3
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Protección proactiva contra phishing, scams y errores humanos en el ecosistema cripto. 
          <span className="text-emerald-400 font-semibold"> Aprende jugando</span> mientras navegas seguro.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
            <AlertTriangle className="h-8 w-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-400">95%</div>
            <div className="text-sm text-gray-400">Errores humanos</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
            <TrendingUp className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-400">$3.8B</div>
            <div className="text-sm text-gray-400">Perdidos en hackeos</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
            <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-400">1 de 4</div>
            <div className="text-sm text-gray-400">Víctimas de phishing</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
            <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400">100M+</div>
            <div className="text-sm text-gray-400">$ que protegeremos</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
          >
            🛡️ Probar Demo Gratis
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-full text-lg font-semibold"
          >
            📚 Ver Documentación
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
