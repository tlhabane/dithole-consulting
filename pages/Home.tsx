import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ServicesCarousel from '../components/ServicesCarousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { testimonials } from '../data/content';
import { ButtonSpinner } from '@/components/ButtonSpinner';
import { type FormData, useForm } from '@/hooks/useForm';
import { getHttpRequestConfig, useHttp } from '@/hooks/useHttp';
import { useToast } from '@/hooks/useToast';


const initialFormData: FormData = {
    email: { value: '', error: '', type: 'email' },
}
const Home: React.FC = () => {

    const { formData, handleInputDataUpdate, handleInputFocus, handleSubmit, resetForm } = useForm(initialFormData);

    const toast = useToast();
    const sendHttpRequest = useHttp();
    const [submitting, setSubmitting] = useState(false);
    const onSubmit = handleSubmit(async (validatedData, button) => {
        try {
            setSubmitting(true);
            const httpRequestConfig = {
                ...getHttpRequestConfig('POST'),
                data: validatedData,
                url: '/subscribe.php'
            };

            await toast(sendHttpRequest(httpRequestConfig));
            setSubmitting(false);
            resetForm();
        } catch (error) {
            setSubmitting(false);
        }
    });

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* About Excerpt */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">Enabling Growth and Success</h2>
            <p className="font-sans text-lg text-slate-600 mb-8 leading-relaxed">
                Since our founding in 2016, Dithole Consulting has transitioned from a typical IT Support Partner to a comprehensive technology and communications partner. We help businesses increase revenue, improve efficiency, and decrease risk through strategy-based IT, automation, and intelligent surveillance.
            </p>
            <Link to="/about-us" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-800 transition font-heading text-xl tracking-wide">
                Read our full story <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="bg-slate-50 border-t border-slate-200">
        <ServicesCarousel />
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">What Our Clients Say</h2>
                <div className="w-16 h-1 bg-lime-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <TestimonialsCarousel items={testimonials} />
            
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-lime-500/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-8 md:mb-0">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">Ready to Elevate Your Business?</h2>
                <p className="font-sans text-lg text-slate-300">Let's discuss how our technology solutions can work for you.</p>
            </div>
            <Link to="/contact-us" className="bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition shadow-lg transform hover:-translate-y-1 font-heading text-2xl tracking-wide">
                Contact Us Today
            </Link>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h3 className="font-heading text-3xl font-bold text-slate-800 mb-4">Stay Updated</h3>
            <p className="font-sans text-slate-600 mb-6">Subscribe to our newsletter for the latest tech insights and company news.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={onSubmit} noValidate>
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className={`flex-grow px-4 py-3 rounded-lg border border-${formData.email.error.trim() === '' ? 'slate' : 'red'}-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-sans`}
                    name="email"
                    onChange={handleInputDataUpdate}
                    onBlur={handleInputFocus}
                    defaultValue={formData.email.value}
                />
                <button
                    type="submit"
                    className="bg-slate-800 inline-flex items-center justify-center text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-700 transition duration-300 font-heading text-xl tracking-wide"
                    disabled={submitting}
                >
                    {submitting ? <ButtonSpinner /> : 'Subscribe'}
                </button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Home;