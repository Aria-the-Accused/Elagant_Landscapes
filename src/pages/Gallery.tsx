import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES as STATIC_IMAGES } from '../constants';
import { GalleryImage } from '../types';

export const Gallery = () => {
  const [dynamicImages, setDynamicImages] = useState<GalleryImage[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/api/gallery');
        if (response.ok) {
          const data = await response.json();
          setDynamicImages(data);
        }
      } catch (error) {
        console.error('Failed to fetch dynamic gallery:', error);
      }
    };
    fetchGallery();
  }, []);

  const allImages = [...STATIC_IMAGES, ...dynamicImages];
  const categories = ['All', ...new Set(allImages.map(img => img.category))];

  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 bg-stone-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Our Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our collection of completed projects. From modern patios to traditional garden designs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, index) => (
            <motion.div
              layout
              key={img.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-square overflow-hidden rounded-sm shadow-lg bg-white"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-2">{img.category}</span>
                <h3 className="text-white font-heading text-2xl italic">{img.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
