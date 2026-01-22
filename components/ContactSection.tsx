
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent('New Contact Form Submission from HealthBook Website');
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email Address: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:healthbookdigital@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8ffff] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[64px] font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            Start Your <span className="text-teal-primary">Wellness Journey</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
            Ready to transform your health? Connect with our team of wellness experts and take the first step towards your optimal wellbeing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Form */}
          <div className="bg-white p-10 rounded-[32px] border border-[#e0f2f2] shadow-xl shadow-teal-500/5">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </span>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    className="w-full pl-12 pr-6 py-4 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-primary focus:outline-none" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number" 
                    className="w-full pl-12 pr-6 py-4 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-primary focus:outline-none" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address" 
                    className="w-full pl-12 pr-6 py-4 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-primary focus:outline-none" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your wellness goals..." 
                  rows={4} 
                  className="w-full p-6 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-primary focus:outline-none resize-none" 
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-teal-primary text-white font-bold rounded-xl shadow-lg shadow-teal-500/20 hover:bg-teal-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Info & Metrics */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-10 rounded-[32px] border border-[#e0f2f2] shadow-xl shadow-teal-500/5">
               <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
               <div className="space-y-8">
                 <div className="flex items-start gap-5">
                   <div className="w-12 h-12 bg-[#f0f9f9] rounded-xl flex items-center justify-center text-teal-primary shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-lg">Email Us</p>
                     <p className="text-slate-500">healthbookdigital@gmail.com</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-5">
                   <div className="w-12 h-12 bg-[#f0f9f9] rounded-xl flex items-center justify-center text-teal-primary shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-lg">Call Us</p>
                     <p className="text-slate-500">+91 73048 06615</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-5">
                   <div className="w-12 h-12 bg-[#f0f9f9] rounded-xl flex items-center justify-center text-teal-primary shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-lg">Response Time</p>
                     <p className="text-slate-500">3-5 business days</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-auto">
               {[
                 { v: '150+', l: 'Episodes' },
                 { v: '75K+', l: 'Listeners' },
                 { v: '30+', l: 'Experts' },
                 { v: '4.9', l: 'Rating' }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-6 rounded-[20px] border border-[#e0f2f2] text-center shadow-lg shadow-teal-500/5">
                   <div className="text-2xl font-black text-teal-primary">{item.v}</div>
                   <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.l}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
