import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { services } from '../data/content';
import Logo from './logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
      const SITE_NAME = "Dithole Consulting";
      const SLOGAN = "Superior products & services since 2016";
      const locationParts = location.pathname.split("/");
      const pageNameParts = locationParts[locationParts.length - 1].split('-').map((item) => (
          item.split("").map((i, index) => index === 0 ? i.toUpperCase() : i.toLowerCase()).join("")
      ))
      const pageName = pageNameParts.join(' ');
      document.title = pageName.trim() === '' ? `${SLOGAN} :: ${SITE_NAME}` : `${pageName} :: ${SITE_NAME}`
  }, [location])

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper for active link styles (Desktop)
  const getLinkClass = (path: string) => {
    return location.pathname === path 
      ? "text-cyan-600"
      : "text-slate-600 hover:text-cyan-600";
  };
  
  // Helper for active link styles (Mobile)
  const getMobileLinkClass = (path: string) => {
    return location.pathname === path
      ? "bg-cyan-50 text-cyan-700"
      : "text-slate-600 hover:bg-slate-50 hover:text-cyan-600";
  };

  return (
    <header className="w-full bg-white shadow-md transition-all fixed top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-950 text-slate-400 py-4 text-xs md:text-sm font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex space-x-4">
                <span className="flex items-center hover:text-cyan-400 transition"><Phone className="w-3 h-3 mr-1" /> +27 12 320 0346</span>
                <span className="hidden md:flex items-center hover:text-cyan-400 transition"><Mail className="w-3 h-3 mr-1" /> info@ditholeconsulting.co.za</span>
            </div>
            <div className="hidden md:block">
                Superior products & services since 2016
            </div>
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                {/* Logo - Left */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        <img src={Logo} alt="Dithole Consulting" style={{ maxWidth: 300, width: '50%' }} />
                    </Link>
                </div>

                {/* Desktop Menu - Centered */}
                <nav className="hidden md:flex space-x-10 items-center justify-center flex-1 px-4 font-heading text-xl tracking-wide">
                    <Link to="/" className={`transition-colors duration-200 ${getLinkClass('/')}`}>
                        Home
                    </Link>
                    <Link to="/about-us" className={`transition-colors duration-200 ${getLinkClass('/about-us')}`}>
                        About Us
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <button
                            className={`flex items-center transition-colors duration-200 py-2 ${location.pathname.startsWith('/services') ? "text-cyan-600" : "text-slate-600 hover:text-cyan-600"}`}
                        >
                            Services <ChevronDown className="w-4 h-4 ml-1" />
                        </button>

                        {/* Dropdown Content */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-64 bg-white rounded-b-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top z-50 border-t-4 border-cyan-500">
                            <div className="py-2">
                                {services.map(service => (
                                    <Link
                                        key={service.id}
                                        to={`/services/${service.slug}`}
                                        className={`block px-4 py-3 text-lg transition-colors hover:bg-cyan-50 ${location.pathname === `/services/${service.slug}` ? 'text-cyan-700 font-medium bg-cyan-50' : 'text-slate-700 hover:text-cyan-700'}`}
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Contact Button - Right */}
                <div className="hidden md:flex items-center flex-shrink-0">
                    <Link
                        to="/contact-us"
                        className="bg-lime-600 hover:from-cyan-500 hover:to-lime-500 text-white font-heading text-xl tracking-wide px-8 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform border border-transparent"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-slate-600 hover:text-cyan-600 focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 max-h-[calc(100vh-80px)] overflow-y-auto font-heading text-xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md font-medium ${getMobileLinkClass('/')}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`block px-3 py-2 rounded-md font-medium ${getMobileLinkClass('/about-us')}`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium ${location.pathname.startsWith('/services') ? 'text-cyan-600' : 'text-slate-600 hover:bg-slate-50 hover:text-cyan-600'}`}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l-2 border-cyan-100 ml-3">
                  {services.map(service => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className={`block px-3 py-2 rounded-md text-lg font-medium ${getMobileLinkClass(`/services/${service.slug}`)}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact-us"
              className={`block px-3 py-2 rounded-md font-medium ${getMobileLinkClass('/contact-us')}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;