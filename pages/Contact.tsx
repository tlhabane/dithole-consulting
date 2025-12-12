import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Map Hero */}
      <div className="w-full h-[400px] bg-slate-200 relative">
        {/* Placeholder for Map - In a real app, use Google Maps Embed API */}
        <div className="w-full h-full flex items-center justify-center bg-slate-300">
           <div className="text-center">
             <MapPin size={48} className="mx-auto text-slate-500 mb-2" />
             <p className="font-heading text-slate-600 font-bold text-2xl">596 Thabo Sehume, Motown Fountains, Pretoria</p>
             <p className="font-sans text-slate-500 text-sm">Interactive Map Placeholder</p>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Left: Contact Info */}
                <div className="bg-slate-900 p-10 text-white flex flex-col justify-center relative overflow-hidden">
                    {/* Background accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-500/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>

                    <h2 className="font-heading text-5xl font-bold mb-6 relative z-10">Get in Touch</h2>
                    <p className="font-sans text-slate-300 mb-10 leading-relaxed relative z-10">
                        Whether you have a question about our services, pricing, or want to discuss a new project, our team is ready to answer all your questions.
                    </p>

                    <div className="space-y-6 relative z-10">
                        <div className="flex items-start group">
                            <div className="bg-slate-800 p-3 rounded-lg mr-4 group-hover:bg-cyan-900/50 transition duration-300 border border-slate-700 group-hover:border-cyan-500/30">
                                <MapPin className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <h4 className="font-heading text-2xl font-bold text-white">Our Location</h4>
                                <p className="font-sans text-slate-300">596 Thabo Sehume, Motown Fountains<br/>Pretoria, 0002</p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                             <div className="bg-slate-800 p-3 rounded-lg mr-4 group-hover:bg-cyan-900/50 transition duration-300 border border-slate-700 group-hover:border-cyan-500/30">
                                <Phone className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <h4 className="font-heading text-2xl font-bold text-white">Phone Number</h4>
                                <p className="font-sans text-slate-300">(+27) 12 320 0346</p>
                                <p className="font-sans text-slate-300">078-158-8658</p>
                            </div>
                        </div>

                         <div className="flex items-start group">
                             <div className="bg-slate-800 p-3 rounded-lg mr-4 group-hover:bg-cyan-900/50 transition duration-300 border border-slate-700 group-hover:border-cyan-500/30">
                                <Mail className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <h4 className="font-heading text-2xl font-bold text-white">Email Address</h4>
                                <p className="font-sans text-slate-300">info@ditholeconsulting.co.za</p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                             <div className="bg-slate-800 p-3 rounded-lg mr-4 group-hover:bg-cyan-900/50 transition duration-300 border border-slate-700 group-hover:border-cyan-500/30">
                                <Clock className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <h4 className="font-heading text-2xl font-bold text-white">Business Hours</h4>
                                <p className="font-sans text-slate-300">Mon - Fri: 8:00 AM - 5:00 PM</p>
                                <p className="font-sans text-cyan-400/80 text-sm italic mt-1">24/7 Support for IT Clients</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="p-10 bg-white">
                    <h2 className="font-heading text-4xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg font-medium text-slate-700 mb-1 font-heading tracking-wide">Full Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition font-sans" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-slate-700 mb-1 font-heading tracking-wide">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition font-sans" placeholder="+27..." />
                            </div>
                        </div>
                        <div>
                             <label className="block text-lg font-medium text-slate-700 mb-1 font-heading tracking-wide">Email Address</label>
                             <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition font-sans" placeholder="john@example.com" />
                        </div>
                        <div>
                             <label className="block text-lg font-medium text-slate-700 mb-1 font-heading tracking-wide">Subject</label>
                             <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition font-sans">
                                <option>General Enquiry</option>
                                <option>IT Services</option>
                                <option>Surveillance</option>
                                <option>Branding & Design</option>
                                <option>Advertising</option>
                             </select>
                        </div>
                        <div>
                             <label className="block text-lg font-medium text-slate-700 mb-1 font-heading tracking-wide">Message</label>
                             <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition font-sans" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition transform hover:-translate-y-1 shadow-lg font-heading text-2xl tracking-wide">
                            SendMessage
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;