import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center font-heading tracking-wide">
                Dithole Consulting
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-cyan-500 mb-1"></span>
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              Your partner in fully outsourced IT solutions, surveillance technology, mechanical automation, and communications. Enabling growth and success for businesses since 2016.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition transform hover:scale-110"><Facebook size={20} /></a>
              <a href="#" className="hover:text-cyan-400 transition transform hover:scale-110"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-cyan-400 transition transform hover:scale-110"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 font-heading tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 flex items-center transition-colors"><ChevronRight size={14} className="mr-1 text-cyan-600"/> Home</Link></li>
              <li><Link to="/about-us" className="hover:text-cyan-400 flex items-center transition-colors"><ChevronRight size={14} className="mr-1 text-cyan-600"/> About Us</Link></li>
              <li><Link to="/services/information-technology" className="hover:text-cyan-400 flex items-center transition-colors"><ChevronRight size={14} className="mr-1 text-cyan-600"/> Services</Link></li>
              <li><Link to="/contact-us" className="hover:text-cyan-400 flex items-center transition-colors"><ChevronRight size={14} className="mr-1 text-cyan-600"/> Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 font-heading tracking-wide">Our Services</h3>
             <ul className="space-y-2 text-sm">
              <li><Link to="/services/information-technology" className="hover:text-cyan-400 flex items-center transition-colors"><ChevronRight size={14} className="mr-1 text-cyan-600"/> Information Technology</Link></li>
              <li><Link to="/services/intelligent-surveillance" className="hover:text-cyan-400 flex items-center transition-colors"><ChevronRight size={14} className="mr-1 text-cyan-600"/> Intelligent Surveillance</Link></li>
              <li><Link to="/services/branding-design" className="hover:text-cyan-400 flex items-center transition-colors"><ChevronRight size={14} className="mr-1 text-cyan-600"/> Branding & Design</Link></li>
              <li><Link to="/services/advertising" className="hover:text-cyan-400 flex items-center transition-colors"><ChevronRight size={14} className="mr-1 text-cyan-600"/> Advertising</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 font-heading tracking-wide">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>596 Thabo Sehume, Motown Fountains, Pretoria, 0002</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                <span>+27 12 320 0346</span>
              </li>
               <li className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                <span>+27 78 158 8658</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                <span>info@dithole.co.za</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 py-4 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Dithole Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;