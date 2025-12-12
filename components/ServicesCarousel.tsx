import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/content';
import { ArrowRight } from 'lucide-react';

const ServicesCarousel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">Our Core Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-lime-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
                <Link 
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="group relative h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer block bg-slate-900"
                >
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                        style={{ backgroundImage: `url(${service.image})` }}
                    />
                    
                    {/* Overlay (Gradient) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-90 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300 translate-y-28 group-hover:translate-y-0">
                         <div className="mb-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">{service.icon}</div>
                         <h3 className="font-heading text-3xl font-bold leading-none mb-3">{service.title}</h3>
                        
                        {/* Description */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <p className="font-sans text-sm text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                                {service.shortDescription}
                             </p>
                             <span className="font-heading text-xl inline-flex items-center font-semibold text-lime-400 hover:text-lime-300 transition-colors tracking-wide">
                                Learn More <ArrowRight className="ml-1 w-5 h-5" />
                             </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
};

export default ServicesCarousel;