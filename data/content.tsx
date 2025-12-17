import React from 'react';
import { Slide, Service, Testimonial } from '../types';
import { Monitor, Camera, PenTool, Megaphone } from 'lucide-react';
import SelloThooe01 from '../assets/advertising/2004-sello-thooe/sello-thooe-01.jpg';
import SelloThooe02 from '../assets/advertising/2004-sello-thooe/sello-thooe-02.jpg';
import SelloThooe03 from '../assets/advertising/2004-sello-thooe/sello-thooe-03.jpg';

export const slides: Slide[] = [
    {
        id: 1,
        title: "Beyond Technology: Excellence & Ownership",
        subtitle: "Our commitment to delivering superior quality and taking ownership of your success.",
        ctaText: "Learn More",
        ctaLink: "/about-us",
        image: "https://images.unsplash.com/photo-1517181875630-f72350452109?auto=format&fit=crop&w=1920&q=80"
    },
    {
        id: 2,
        title: "Proactive IT Strategy",
        subtitle: "Increasing efficiency through fully outsourced, strategy-based IT solutions.",
        ctaText: "Explore IT Solutions",
        ctaLink: "/services/information-technology",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    },
    {
        id: 3,
        title: "Intelligent Surveillance",
        subtitle: "Reliable, accountable technology providing real-time business insights.",
        ctaText: "View Surveillance Tech",
        ctaLink: "/services/intelligent-surveillance",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80"
    },
    {
        id: 4,
        title: "Crafting Your Identity",
        subtitle: "Expert branding and design services to elevate your market presence.",
        ctaText: "See Creative Work",
        ctaLink: "/services/branding-design",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1920&q=80"
    },
    {
        id: 5,
        title: "High-Impact Advertising",
        subtitle: "Maximize reach with our outdoor and digital media solutions.",
        ctaText: "Discover Advertising",
        ctaLink: "/services/advertising",
        image: "https://images.unsplash.com/photo-1533069027836-fa937181a8ce?auto=format&fit=crop&w=1920&q=80"
    }
];

export const services: Service[] = [
    {
        id: 'it',
        slug: 'information-technology',
        title: 'Information Technology',
        shortDescription: 'Cost-effective, reliable, 24/7/365 solutions driven by the latest strategy-based technologies.',
        image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=800&q=80",
        icon: <Monitor className="w-6 h-6" />,
        fullDescription: (
            <div className="space-y-4 text-slate-600 font-sans">
                <p>
                    With years of experience behind the company, we deliver cost-effective and reliable solutions according to industry best practices, ensuring the highest quality of products and services to all our clients nationwide.
                </p>
                <p>
                    Our determination to become one of the Service Providers of choice is driven by the latest technologies and innovative solutions that we provide to our customers. We assist each client with their network management and growth according to their specific needs.
                </p>
                <h3 className="font-heading text-3xl font-bold text-slate-800 mt-6">Our Services Include:</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Website Development & Hosting</li>
                    <li>Email Hosting, Software Design and Deployment</li>
                    <li>Data Hosting & Cloud Storage</li>
                    <li>Software Sales & Support</li>
                    <li>Computer Supply, Installation and Support</li>
                    <li>Data Archive (Off-site) & Recovery Management</li>
                    <li>Networking & Server Support</li>
                    <li>Application Design, Deployment and Support</li>
                </ul>
                <p className="font-semibold mt-4">
                    We ensure our dedication to quality of service and support to our clients 24/7, 365 days a year.
                </p>
            </div>
        ),
        faqs: [
            {
                question: "Do you offer 24/7 support?",
                answer: "Yes, we provide 24/7/365 support to ensure your business operations never face extended downtime."
            },
            {
                question: "What industries do you specialize in?",
                answer: "We support a wide range of sectors including Financial Services, Property, Security, Health, and Education."
            },
            {
                question: "Can you help with cloud migration?",
                answer: "Absolutely. We specialize in data hosting, cloud storage solutions, and seamless migration strategies."
            },
            {
                question: "Do you supply hardware as well as software?",
                answer: "Yes, we handle computer supply, installation, server setup, and software sales."
            },
            {
                question: "How do you handle data recovery?",
                answer: "We offer comprehensive off-site data archiving and recovery management services to protect your critical business information."
            }
        ],
        cta: {
            title: "Optimize Your Infrastructure Today",
            description: "Stop worrying about downtime and start focusing on growth. Let Dithole Consulting manage your IT strategy.",
            buttonText: "Schedule an IT Audit",
            buttonLink: "/contact-us"
        }
    },
    {
        id: 'surveillance',
        slug: 'intelligent-surveillance',
        title: 'Intelligent Surveillance',
        shortDescription: 'Real-time, business-enabling decisions through world-class video surveillance systems.',
        image: "https://images.unsplash.com/photo-1672073311074-f60c4a5e7b92?auto=format&fit=crop&w=800&q=80",
        icon: <Camera className="w-6 h-6" />,
        fullDescription: (
            <div className="space-y-4 text-slate-600 font-sans">
                <p>
                    We understand that information is critical to success, which is why we continually engage in the world of video surveillance and security solutions that provide the information necessary to make real-time, business-enabling decisions.
                </p>
                <p>
                    Our experience and expertise have enabled us the opportunity to partner with some of the leaders in world-class surveillance systems developers and manufacturers.
                </p>
                <h3 className="font-heading text-3xl font-bold text-slate-800 mt-6">Our Capabilities:</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Audio Monitoring</li>
                    <li>Video Surveillance</li>
                    <li>Security & Hack Proofing</li>
                    <li>Alarm Systems</li>
                    <li>Access Control</li>
                    <li>Tracking Management</li>
                </ul>
                <p>
                    This has not only empowered us as a distributing entity but a consultancy firm with the know-how and knowledge to support businesses in risk reduction.
                </p>
            </div>
        ),
        faqs: [
            {
                question: "Is your surveillance technology accessible remotely?",
                answer: "Yes, our modern systems support secure remote access via mobile and desktop devices."
            },
            {
                question: "Do you install for both residential and commercial properties?",
                answer: "While we specialize in commercial and industrial solutions, we can assess residential needs on a case-by-case basis."
            },
            {
                question: "How does 'Intelligent' surveillance differ from standard CCTV?",
                answer: "Intelligent surveillance uses analytics to detect behavior, track movements, and provide actionable data, rather than just recording footage."
            },
            {
                question: "Can you integrate surveillance with access control?",
                answer: "Yes, we provide fully integrated security ecosystems linking video, audio, and access control."
            },
            {
                question: "Do you offer maintenance contracts?",
                answer: "We offer ongoing maintenance to ensure your security systems remain operational and up-to-date."
            }
        ],
        cta: {
            title: "Secure Your Assets with Intelligence",
            description: "Get real-time insights and peace of mind with our cutting-edge surveillance solutions.",
            buttonText: "Request a Security Assessment",
            buttonLink: "/contact-us"
        }
    },
    {
        id: 'branding',
        slug: 'branding-design',
        title: 'Branding & Design',
        shortDescription: 'Understanding strategy and creativity to promote your brand identity effectively.',
        image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=800&q=80",
        icon: <PenTool className="w-6 h-6" />,
        fullDescription: (
            <div className="space-y-4 text-slate-600 font-sans">
                <p>
                    Design and Branding is a complex process that involves an understanding of strategy, creativity, and the consumers. Our diverse design expertise and experience in branding, working across a wide variety of sectors, is of advantage to us.
                </p>
                <p>
                    <strong>Dithole</strong> has been designing and promoting Brands since 2009, and are Tshwane’s branding experts.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <h3 className="font-heading text-2xl font-bold text-slate-800 mb-2">Design & Branding</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Brand Strategy & Identity</li>
                            <li>Logo & Identity Design</li>
                            <li>Brand Manuals & Guidelines</li>
                            <li>Internal Communications</li>
                            <li>Activation Toolkits</li>
                            <li>Copywriting & Art Direction</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading text-2xl font-bold text-slate-800 mb-2">Web Design & Digital</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Mobile & Responsive Design</li>
                            <li>UX/UI Design</li>
                            <li>Social Media & Digital Content</li>
                            <li>PPC Advertising</li>
                            <li>Ecommerce Solutions</li>
                            <li>Email Marketing & Design</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        faqs: [
            {
                question: "What is included in a Brand Identity package?",
                answer: "Typically, this includes logo design, color palette, typography, business cards, and a comprehensive brand style guide."
            },
            {
                question: "Do you handle printing?",
                answer: "Yes, we manage the entire process from creative design to final print production."
            },
            {
                question: "How long does a website project take?",
                answer: "Timelines vary by complexity, but a standard corporate site usually takes 4-6 weeks from concept to launch."
            },
            {
                question: "Can you refresh an existing brand without changing it completely?",
                answer: "Yes, we specialize in brand evolution that modernizes your look while retaining your established brand equity."
            },
            {
                question: "Do you offer social media management?",
                answer: "We provide digital content creation and strategy to help you maintain a consistent presence across social platforms."
            }
        ],
        cta: {
            title: "Ignite Your Brand Identity",
            description: "Stand out in a crowded market with world-class design and strategic branding from NativityConcepts™.",
            buttonText: "Start Your Creative Project",
            buttonLink: "/contact-us"
        }
    },
    {
        id: 'advertising',
        slug: 'advertising',
        title: 'Advertising',
        shortDescription: 'High-impact outdoor and digital media solutions in high-traffic zones.',
        // 1. Core Service Image (Displayed on Home Page Cards) - High-tech Times Square/City vibe
        image: "https://images.unsplash.com/photo-1533069027836-fa937181a8ce?auto=format&fit=crop&w=800&q=80",
        // 2. Hero Image (Displayed on Service Detail Banner) - Wide city/highway night shot
        heroImage: "https://images.unsplash.com/photo-1533069027836-fa937181a8ce?auto=format&fit=crop&w=1920&q=80",
        icon: <Megaphone className="w-6 h-6" />,
        // 3. Content Images Slider (Displayed in the content body)
        contentImages: [
            /*"https://images.unsplash.com/photo-1741710466773-412b9f6482f6?auto=format&fit=crop&w=1200&q=80", // Billboard
            "https://images.unsplash.com/photo-1533069027836-fa937181a8ce?auto=format&fit=crop&w=1200&q=80", // Signage
            "https://images.unsplash.com/photo-1513757378314-e46255f6ed16?auto=format&fit=crop&w=1200&q=80" // Planning/Strategy*/
            SelloThooe01, SelloThooe02, SelloThooe03
        ],
        fullDescription: (
            <div className="space-y-4 text-slate-600 font-sans">
                <p>
                    Dithole Consulting offers high-impact advertising solutions designed to maximize reach and engagement. We specialize in strategic placement in high-traffic zones to ensure your brand is seen by the right audience.
                </p>
                <h3 className="font-heading text-3xl font-bold text-slate-800 mt-6">Morena Mall, Mmabatho, Mafikeng - <i>Coming Soon</i> </h3>
                {/* Map Container - Positioned above Stats and below Title */}
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-slate-200 my-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.815640220437!2d25.586865599999996!3d-25.842619599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea2cbc6b08d41d1%3A0xbdabbe95825af527!2s2004%20Sello%20Thooe%20St%2C%20Mmabatho%20Unit%208%2C%20Mmabatho%2C%202790!5e0!3m2!1sen!2sza!4v1765928261121!5m2!1sen!2sza"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="N1 Business Park Location"
                    />
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-heading text-2xl font-bold text-cyan-700 mb-2">OMC Stats & Reach</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-sm text-slate-500">Reach (pm)</p>
                            <p className="text-xl font-bold text-slate-800">38,000.00</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Screen</p>
                            <p className="text-lg font-semibold text-slate-800">LED Module P6.67 (2.0m x 4.0m)</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Cabinet Size</p>
                            <p className="text-lg font-semibold text-slate-800">960mm x 960mm</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">No. of Cabinets</p>
                            <p className="text-lg font-semibold text-slate-800">8</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Cards</p>
                            <p className="text-lg font-semibold text-slate-800">Novastar</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Power Supply</p>
                            <p className="text-lg font-semibold text-slate-800">G-Energy</p>
                        </div>
                    </div>
                    <p className="text-sm italic text-slate-500">
                        Located on University Rd, Unit 8 Mmabatho, Mafikeng - Morena Mall Intersection.
                    </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-heading text-2xl font-bold text-cyan-700 mb-2">Landmarks</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-sm text-slate-500">Retail</p>
                            <p className="text-xl font-bold text-slate-800">Morena Mall</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Airport</p>
                            <p className="text-lg font-semibold text-slate-800">Mafikeng Internation Airport</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Education</p>
                            <p className="text-xl font-bold text-slate-800">University of North West</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Sports</p>
                            <p className="text-xl font-bold text-slate-800">Mmabatho Stadium</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Entertainment</p>
                            <p className="text-lg font-semibold text-slate-800">Mmabatho Palms</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Grocery Retailers</p>
                            <p className="text-lg font-semibold text-slate-800">Shoprite & Pick n Pay</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Restaurants</p>
                            <p className="text-lg font-semibold text-slate-800">KFC, Chicken Licken & Nando's</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Filling Stations</p>
                            <p className="text-lg font-semibold text-slate-800">Caltex & Engen</p>
                        </div>
                    </div>
                </div>
                <p className="mt-4">
                    Whether you need digital LED billboards, traditional outdoor media, or integrated campaigns, we provide the platform to showcase your brand to millions.
                </p>
            </div>
        ),
        faqs: [
            {
                question: "What is the minimum contract period for a billboard?",
                answer: "Standard contracts usually start from 1 month for digital and 3-6 months for static, but we offer flexible packages."
            },
            {
                question: "How often can I change my content on a digital billboard?",
                answer: "Digital boards allow for frequent updates, enabling you to run time-sensitive promotions or multiple creative sets."
            },
            {
                question: "Do you help with the artwork design?",
                answer: "Yes, our Branding & Design team can create high-impact visuals optimized for large-format display."
            },
            {
                question: "How are 'Impacts' calculated?",
                answer: "We use OMC (Outdoor Measurement Council) data which tracks traffic volume, visibility, and dwell time to estimate viewership."
            },
            {
                question: "Can I target specific demographics?",
                answer: "Yes, by selecting specific locations (like the 2004 Sello Thooe), you can target specific commuter profiles and LSM groups."
            }
        ],
        cta: {
            title: "Maximize Your Market Reach",
            description: "Put your brand in front of millions. Secure prime advertising space on South Africa's busiest highways.",
            buttonText: "Book Advertising Space",
            buttonLink: "/contact-us"
        }
    }
];

export const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Dithole Consulting transformed our IT infrastructure. Their proactive approach has significantly reduced our downtime.",
        author: "Sarah Jenkins",
        role: "Operations Director, FinServe"
    },
    {
        id: 2,
        quote: "The branding team gave our startup a professional identity that resonates perfectly with our target market.",
        author: "Michael Dlamini",
        role: "Founder, TechStart SA"
    },
    {
        id: 3,
        quote: "Reliable surveillance solutions that give us peace of mind. Professional installation and support.",
        author: "Johan Vorster",
        role: "Security Manager, Retail Group"
    },
    {
        id: 4,
        quote: "Their advertising strategy on the N1 had an immediate impact on our lead generation. Fantastic results.",
        author: "Amanda Sithole",
        role: "Marketing Head, PropertyCo"
    },
    {
        id: 5,
        quote: "Efficient, knowledgeable, and always available. The best IT partners we have worked with.",
        author: "David Botha",
        role: "CEO, Constructive Solutions"
    },
    {
        id: 6,
        quote: "The automation systems installed by Dithole have streamlined our manufacturing process immensely.",
        author: "Raj Patel",
        role: "Plant Manager, AutoParts Mfg"
    }
];