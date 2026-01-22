
import React from 'react';
import { motion } from 'framer-motion';

const WhySection: React.FC = () => {
  const features = [
    {
      title: 'Experts You Can Trust',
      desc: 'We go beyond opinions — every episode features real doctors, fitness coaches, insurance advisors, and mental health professionals sharing practical, evidence-based advice.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253'
    },
    {
      title: 'Practical Topics That Matter',
      desc: 'From preventive care to nutrition, mental health, financial wellness, and fitness — we cover the full spectrum of health, in a way that’s relatable and real.',
      icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
    },
    {
      title: 'Health , made simple',
      desc: 'We break down complex health topics into clear, everyday conversations. No jargon. No fluff. Just meaningful insights you can actually use.',
      icon: 'M5 10l7-7m0 0l7 7m-7-7v18'
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-[64px] font-extrabold text-[#1a1a1a] mb-6">
            Why <span className="text-teal-primary">Healthbook</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            The HealthBook Podcast brings together trusted voices from medicine, fitness, insurance, and mental wellness to help you live better, think clearer, and stay informed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[28px] border border-[#e0f2f2] flex flex-col items-start shadow-xl shadow-teal-500/5 hover:border-teal-200 transition-colors"
            >
              <div className="w-14 h-14 bg-teal-primary rounded-[14px] flex items-center justify-center text-white mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon} />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed text-[17px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
