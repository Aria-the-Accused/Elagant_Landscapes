import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Image as ImageIcon, MessageSquare, MapPin, User } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

export const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: '',
    details: '',
  });
  const [fileCount, setFileCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id.replace('wa-', '')]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileCount(e.target.files ? e.target.files.length : 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, location, service, details } = formData;
    
    // Construct the formatted WhatsApp message
    let message = `Hello Elegant Landscapes! I would like a quote for my garden.%0A%0A`;
    message += `*Name:* ${encodeURIComponent(name)}%0A`;
    message += `*Location:* ${encodeURIComponent(location)}%0A`;
    message += `*Service Required:* ${encodeURIComponent(service)}%0A`;
    message += `*Job Details:* ${encodeURIComponent(details)}%0A`;
    
    if(fileCount > 0) {
        message += `%0A_Note: I have ${fileCount} photo(s) of my space to show you. I will attach them to this chat now._`;
    }
    
    const waLink = `https://wa.me/${CONTACT_DETAILS.whatsapp}?text=${message}`;
    
    if(fileCount > 0) {
        alert("Redirecting to WhatsApp!\n\nIMPORTANT: For your security, web browsers cannot auto-attach your photos to a message.\n\nPlease remember to click the '+' or 'Paperclip' icon in WhatsApp to attach the photos you just selected before hitting send.");
    }
    
    window.open(waLink, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-stone-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Start Your <br /><span className="text-accent italic">Project Today</span></h1>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Ready to transform your garden? Fill out our quick quote generator. Provide some details of what you need done, and your request will be instantly formatted and sent straight to our business WhatsApp!
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary text-accent flex items-center justify-center rounded-full shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">WhatsApp First</h4>
                  <p className="text-sm text-gray-500">The fastest way to get a response and share photos.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary text-accent flex items-center justify-center rounded-full shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Local Service</h4>
                  <p className="text-sm text-gray-500">Serving Dublin, Galway, Cork, and surrounding areas.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-sm shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-8">Request an Online Quote</h3>
              
              <div className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    id="wa-name" 
                    placeholder="Your Name" 
                    required 
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-stone-white border-none rounded-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    id="wa-location" 
                    placeholder="Your Area / Eircode" 
                    required 
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-stone-white border-none rounded-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                  />
                </div>

                <select 
                  id="wa-service" 
                  required 
                  defaultValue=""
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-stone-white border-none rounded-sm focus:ring-2 focus:ring-accent transition-all outline-none text-gray-500"
                >
                  <option value="" disabled>Select Primary Service Needed...</option>
                  <option value="General Landscaping">General Landscaping & Maintenance</option>
                  <option value="Paving, Patios & Driveways">Paving, Patios & Driveways</option>
                  <option value="Garden Design & Planting">Garden Design & Planting</option>
                  <option value="Fencing & Decking">Fencing & Decking</option>
                  <option value="Other / Full Redesign">Other / Full Redesign</option>
                </select>

                <textarea 
                  id="wa-details" 
                  rows={4} 
                  placeholder="Describe what you would like done in your garden..." 
                  required 
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-stone-white border-none rounded-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                ></textarea>
                
                <div className="border-2 border-dashed border-gray-200 p-6 text-center rounded-sm bg-stone-white/50">
                  <label htmlFor="wa-photos" className="cursor-pointer flex flex-col items-center gap-2">
                    <ImageIcon className="text-accent" size={32} />
                    <span className="font-bold text-primary">Add Photos of Your Space</span>
                    <span className="text-xs text-gray-500">Select multiple images to help us quote accurately</span>
                  </label>
                  <input 
                    type="file" 
                    id="wa-photos" 
                    accept="image/*" 
                    multiple 
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {fileCount > 0 && (
                    <p className="mt-2 text-sm text-green-600 font-bold">{fileCount} files selected</p>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-sm font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <Send size={20} />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
