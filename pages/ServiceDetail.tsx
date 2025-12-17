import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Phone, Mail, Plus, Minus, ArrowRight, ChevronLeft } from 'lucide-react';
import { ButtonSpinner } from '@/components/ButtonSpinner';
import { type FormData, useForm } from '@/hooks/useForm';
import { getHttpRequestConfig,  useHttp } from '@/hooks/useHttp';
import { useToast } from '@/hooks/useToast';
import { services } from '../data/content';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
            >
        <span className={`font-heading text-xl font-medium transition-colors ${isOpen ? 'text-cyan-600' : 'text-slate-800 group-hover:text-cyan-600'}`}>
          {question}
        </span>
                {isOpen ? (
                    <Minus className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                ) : (
                    <Plus className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 flex-shrink-0" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
            >
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

// Internal Slider Component for Content Images
const ContentImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset index if images change
    useEffect(() => {
        setCurrentIndex(0);
    }, [images]);

    const next = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (images.length === 0) return null;
    if (images.length === 1) {
        return (
            <div className="mb-12">
                <img
                    src={images[0]}
                    alt="Service Detail"
                    className="w-full h-80 object-cover rounded-xl shadow-md"
                />
            </div>
        );
    }

    return (
        <div className="mb-12 relative group">
            <div className="w-full h-80 overflow-hidden rounded-xl shadow-md bg-slate-100 relative">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition focus:outline-none opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition focus:outline-none opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};


const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find(s => s.slug === slug);

    const initialFormData = useMemo<FormData>(() => ({
        name: { value: '', error: '', type: 'text'},
        phone: { value: '', error: '', type: 'tel' },
        email: { value: '', error: '', type: 'email' },
        subject: { value: service?.title || '', error: '', type: 'text' },
        message: { value: '', error: '', type: 'text' },
    }), [service]);

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
                url: '/enquiry.php'
            };

            await toast(sendHttpRequest(httpRequestConfig));
            setSubmitting(false);
            resetForm();
        } catch (error) {
            setSubmitting(false);
        }
    });

    if (!service) {
        return <Navigate to="/" replace />;
    }

    // Determine images
    const heroBackgroundImage = service.heroImage || service.image;
    // If contentImages exists and is not empty, use it. Otherwise, use [service.image] as fallback for slider logic (which handles single image case)
    const contentImagesToDisplay = (service.contentImages && service.contentImages.length > 0)
        ? service.contentImages
        : [service.image];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 bg-slate-900 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-700"
                    style={{ backgroundImage: `url(${heroBackgroundImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">{service.title}</h1>
                    <nav className="font-heading text-xl text-slate-300 tracking-wide">
                        <Link to="/" className="hover:text-cyan-400 transition">Home</Link> / <Link to="/services/information-technology" className="hover:text-cyan-400 transition">Services</Link> / <span className="text-cyan-500">{service.title}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Content */}
                    <div className="lg:w-2/3 flex flex-col">
                        <div className="prose prose-lg prose-slate max-w-none mb-12">
                            <h2 className="font-heading text-4xl font-bold text-slate-900 mb-6 relative inline-block">
                                {service.title}
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-cyan-500"></span>
                            </h2>
                            <div className="font-sans text-slate-600">
                                {service.fullDescription}
                            </div>
                        </div>

                        {/* Content Image / Slider */}
                        <ContentImageSlider images={contentImagesToDisplay} />

                        {/* FAQ Section */}
                        <div className="mt-auto pt-8 border-t border-slate-100">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                {service.faqs && service.faqs.map((faq, index) => (
                                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:w-1/3 space-y-8">

                        {/* Navigation Links */}
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 mb-4">Our Services</h3>
                            <ul className="space-y-2">
                                {services.map(s => (
                                    <li key={s.id}>
                                        <Link
                                            to={`/services/${s.slug}`}
                                            className={`flex items-center justify-between p-3 rounded transition font-medium font-heading text-xl tracking-wide ${
                                                s.slug === slug
                                                    ? 'bg-cyan-600 text-white shadow-md'
                                                    : 'bg-white hover:bg-cyan-50 text-slate-600 hover:text-cyan-700'
                                            }`}
                                        >
                                            <span>{s.title}</span>
                                            {s.slug === slug && <ChevronRight size={16} />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Enquiry Form */}
                        <div className="bg-slate-900 p-8 rounded-lg text-white border-t-4 border-cyan-500 shadow-xl">
                            <h3 className="font-heading text-3xl font-bold mb-2">Have Questions?</h3>
                            <p className="font-sans text-slate-400 text-sm mb-6">Enquire specifically about {service.title} solutions.</p>

                            <form className="space-y-4" onSubmit={onSubmit} noValidate>
                                <input
                                    type="hidden"
                                    name="subject"
                                    defaultValue={formData.subject.value}
                                    onChange={handleInputDataUpdate}
                                    onBlur={handleInputFocus}
                                />
                                <div>
                                    <label
                                        className="block text-xs font-semibold text-cyan-400 mb-1 font-heading tracking-wider text-lg">Name</label>
                                    <input
                                        type="text"
                                        className={`w-full px-3 py-2 rounded bg-slate-800 border border-${formData.name.error.trim() === '' ? 'slate' : 'red'}-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition font-sans`}
                                        placeholder="Your Name"
                                        name="name"
                                        onChange={handleInputDataUpdate}
                                        onBlur={handleInputFocus}
                                    />
                                    {formData.name.error.trim() !== '' && (
                                        <label
                                            className="block text-sm text-red-700 my-1 font-heading tracking-wider text-lg">
                                            {formData.name.error}
                                        </label>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className="block text-xs font-semibold text-cyan-400 mb-1 font-heading tracking-wider text-lg">Phone</label>
                                    <input
                                        type="tel"
                                        className={`w-full px-3 py-2 rounded bg-slate-800 border border-${formData.phone.error.trim() === '' ? 'slate' : 'red'}-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition font-sans`}
                                        placeholder="Phone Number"
                                        name="phone"
                                        defaultValue={formData.phone.value}
                                        onChange={handleInputDataUpdate}
                                        onBlur={handleInputFocus}
                                    />
                                    {formData.phone.error.trim() !== '' && (
                                        <label
                                            className="block text-sm text-red-700 my-1 font-heading tracking-wider text-lg">
                                            {formData.phone.error}
                                        </label>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className="block text-xs font-semibold text-cyan-400 mb-1 font-heading tracking-wider text-lg">Email</label>
                                    <input
                                        type="email"
                                        className={`w-full px-3 py-2 rounded bg-slate-800 border border-${formData.email.error.trim() === '' ? 'slate' : 'red'}-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition font-sans`}
                                        placeholder="Email Address"
                                        name="email"
                                        defaultValue={formData.email.value}
                                        onChange={handleInputDataUpdate}
                                        onBlur={handleInputFocus}
                                    />
                                    {formData.email.error.trim() !== '' && (
                                        <label
                                            className="block text-sm text-red-700 my-1 font-heading tracking-wider text-lg">
                                            {formData.email.error}
                                        </label>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className="block text-xs font-semibold text-cyan-400 mb-1 font-heading tracking-wider text-lg">Message</label>
                                    <textarea
                                        rows={4}
                                        className={`w-full px-3 py-2 rounded bg-slate-800 border border-${formData.message.error.trim() === '' ? 'slate' : 'red'}-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition font-sans`}
                                        placeholder="How can we help?"
                                        name="message"
                                        defaultValue={formData.message.value}
                                        onChange={handleInputDataUpdate}
                                        onBlur={handleInputFocus}
                                    />
                                    {formData.message.error.trim() !== '' && (
                                        <label
                                            className="block text-sm text-red-700 my-1 font-heading tracking-wider text-lg">
                                            {formData.message.error}
                                        </label>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-lime-600 text-white font-bold py-3 rounded hover:from-cyan-500 hover:to-lime-500 transition shadow-lg font-heading text-2xl tracking-wide"
                                    disabled={submitting}
                                >

                                    {submitting ? <ButtonSpinner /> : 'Send Enquiry'}
                                </button>
                            </form>
                        </div>

                        {/* Quick Contact Info */}
                        <div className="border border-slate-200 p-6 rounded-lg bg-slate-50">
                            <h3 className="font-heading text-2xl font-bold mb-4 text-slate-900">Need Immediate
                                Help?</h3>
                            <div className="flex items-center text-slate-600 mb-2 font-sans">
                                <Phone size={18} className="mr-2 text-cyan-600"/>
                                <span>+27 78 158 8658</span>
                            </div>
                            <div className="flex items-center text-slate-600 font-sans">
                                <Mail size={18} className="mr-2 text-cyan-600" />
                                <span>info@ditholeconsulting.co.za</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900 via-slate-900 to-slate-900"></div>
                    <img
                        src={heroBackgroundImage}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                        {service.cta.title}
                    </h2>
                    <p className="font-sans text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {service.cta.description}
                    </p>
                    <Link
                        to={service.cta.buttonLink}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-lime-600 text-white font-bold py-4 px-10 rounded-full hover:from-cyan-500 hover:to-lime-500 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 font-heading text-2xl tracking-wide"
                    >
                        {service.cta.buttonText} <ArrowRight className="ml-2 w-6 h-6" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;