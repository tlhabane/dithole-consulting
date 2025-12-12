import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-slate-900 flex items-center justify-center">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517181875630-f72350452109?auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-4 tracking-wide">About Us</h1>
            <nav className="font-heading text-xl text-slate-300 tracking-wide">
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link> / <span className="text-cyan-500">About Us</span>
            </nav>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our History & Focus</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-lime-500 mx-auto mb-8"></div>
            <p className="font-sans text-lg text-slate-600 mb-6 leading-relaxed">
                Letlhogonolo Otukile founded Dithole in 2016 and registered it in 2020. The company is based in central Pretoria and provides fully outsourced IT technology solutions, surveillance technology, mechanical automation, communications, and consulting to South Africa and SADC based businesses.
            </p>
            <p className="font-sans text-lg text-slate-600 leading-relaxed">
                Over the past several years, Dithole Consulting has transitioned from a typical IT Support Partner to a technology and communications partner providing consultancy, strategy-based IT, automation, and communications. We are proud to partner with Leading Technology companies, enabling growth and success for firms in Financial Services, Property, Security, Health, and Education sectors.
            </p>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-slate-50">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-20 flex flex-col justify-center">
                <h3 className="font-heading text-4xl font-bold text-slate-900 mb-4 border-l-4 border-cyan-500 pl-4">Our Vision</h3>
                <p className="font-sans text-slate-600 text-lg leading-relaxed">
                    Building on the pillars of quality service, partnerships, professionalism, and superior knowledge of our core businesses. We strive to be the Service Provider of choice for SME customers throughout South Africa.
                </p>
            </div>
            <div className="h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1575313545668-2b9833e8c07f?auto=format&fit=crop&w=800&q=80)' }}></div>
          </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto bg-cover bg-center order-2 md:order-1" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="p-12 md:p-20 flex flex-col justify-center order-1 md:order-2">
                <h3 className="font-heading text-4xl font-bold text-slate-900 mb-4 border-l-4 border-lime-500 pl-4">Our Mission</h3>
                <p className="font-sans text-slate-600 text-lg leading-relaxed">
                    Through professional services we aim to provide our customers with solutions that leverage only the best from the ever-changing and dynamic industry, distinguishing ourselves through our service ethic, delivery mechanisms, and attention to detail.
                </p>
                <div className="mt-6">
                    <h4 className="font-heading text-2xl font-bold text-slate-800 mb-2">Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-slate-600 marker:text-cyan-500 font-sans">
                        <li>Growth</li>
                        <li>Efficiency/Productivity</li>
                        <li>Business Continuity/Risk</li>
                    </ul>
                </div>
            </div>
          </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12">
                  <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
                  <p className="font-sans max-w-2xl mx-auto text-slate-400">
                      Our core values are embodied in our daily activities and interactions with our customers.
                  </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition duration-300">
                      <h3 className="font-heading text-3xl font-bold text-cyan-400 mb-3">Excellence</h3>
                      <p className="font-sans text-slate-300">
                          We always strive to do that little bit extra. We challenge ourselves to execute flawlessly and to consistently deliver the highest quality of service. We aim to always exceed our goals and the expectations of our clients.
                      </p>
                  </div>
                   <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-lime-500/50 transition duration-300">
                      <h3 className="font-heading text-3xl font-bold text-lime-400 mb-3">Ownership</h3>
                      <p className="font-sans text-slate-300">
                          We take ownership of our customers' needs and are accountable for delivering friendly and professional service. We put in the additional time and effort to finish the job correctly.
                      </p>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition duration-300">
                      <h3 className="font-heading text-3xl font-bold text-cyan-400 mb-3">Personal Development</h3>
                      <p className="font-sans text-slate-300">
                          We value learning, feedback, coaching and mentoring. Engineers are encouraged to take additional exams and certifications to better serve our clients.
                      </p>
                  </div>
                   <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-lime-500/50 transition duration-300">
                      <h3 className="font-heading text-3xl font-bold text-lime-400 mb-3">Fun</h3>
                      <p className="font-sans text-slate-300">
                         We have fun at work. It is essential to our well-being and creating real relationships. A happy team translates into high motivation and better service.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default About;