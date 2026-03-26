import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES, GALLERY_IMAGES as STATIC_IMAGES } from '../constants';
import { ArrowRight, Star } from 'lucide-react';
import { GalleryImage } from '../types';

export const Home = () => {
  const [featuredImages, setFeaturedImages] = useState<GalleryImage[]>(STATIC_IMAGES.slice(0, 3));

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/api/gallery');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            // Combine and take the latest 3
            const combined = [...data, ...STATIC_IMAGES].slice(0, 3);
            setFeaturedImages(combined);
          }
        }
      } catch (error) {
        console.error('Failed to fetch dynamic gallery:', error);
      }
    };
    fetchGallery();
  }, []);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&w=1920&q=80" 
            alt="Landscape Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Creating Breathtaking <br />
            <span className="italic text-accent">Outdoor Spaces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto"
          >
            Professional landscaping, paving, and garden maintenance with an elegant touch. Proudly serving Ireland.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/quote" 
              className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-[0.2em] transition-all inline-flex items-center gap-3 shadow-xl"
            >
              Get Your Free Quote
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-stone-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From complete garden redesigns to immaculate paving, we deliver professional landscaping solutions tailored to your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Recent Projects</h2>
              <p className="text-gray-600 max-w-xl text-lg">
                A glimpse into the elegant landscapes we've transformed across the country.
              </p>
            </div>
            <Link to="/gallery" className="text-accent font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              View Full Gallery <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] overflow-hidden group rounded-sm"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-heading text-xl italic">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Flare */}
      <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#D4AF37" className="text-accent" />)}
          </div>
          <h3 className="text-3xl md:text-4xl font-heading italic mb-8 leading-relaxed">
            "They transformed our overgrown backyard into a stunning stone patio and garden. The attention to detail and professionalism was second to none."
          </h3>
          <p className="uppercase tracking-[0.3em] text-accent font-bold">The Dublin Residence</p>
        </div>
      </section>
    </div>
  );
};
