import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Zap, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-transparent to-purple-900/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 animate-ping opacity-20">
                  <Zap className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white">IoTHINC</span>
                <span className="text-sm text-cyan-400 block">VIT Vellore</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Pioneering the future of IoT and connected technologies through innovation, collaboration, and cutting-edge research.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-cyan-400 transition-colors">Events</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-cyan-400 transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Tech Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">VIT University, Vellore<br />Tamil Nadu, India - 632014</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400">iothincvitv@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2025 IoTHINC VIT Vellore. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;