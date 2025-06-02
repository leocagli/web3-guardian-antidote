
import { Shield, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const footerLinks = {
    Producto: [
      { name: "Demo", href: "#demo" },
      { name: "Características", href: "#features" },
      { name: "Precios", href: "#pricing" },
      { name: "API", href: "#api" }
    ],
    Recursos: [
      { name: "Documentación", href: "#docs" },
      { name: "Blog", href: "#blog" },
      { name: "Guías", href: "#guides" },
      { name: "Comunidad", href: "#community" }
    ],
    Compañía: [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Prensa", href: "#press" },
      { name: "Contacto", href: "#contact" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Shield className="h-8 w-8 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                ANTIDOTE
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              El guardián inteligente de Web3. Protección proactiva, educación gamificada 
              y seguridad blockchain-native para el ecosistema cripto.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">🚀 Early Access</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 flex-1 focus:border-blue-500 focus:outline-none"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6">
                  Unirse
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🔥 ¿Listos para hacer de Web3 un lugar seguro para todos?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete a la revolución de seguridad cripto. Sé parte de los primeros guardianes 
              en proteger el futuro descentralizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold"
              >
                🛡️ Comenzar Ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full font-semibold"
              >
                📋 Agendar Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>&copy; 2024 Antidote. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Términos</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Construido con</span>
              <span className="text-red-400">❤️</span>
              <span>para la comunidad Web3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
