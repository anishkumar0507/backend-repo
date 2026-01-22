
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchYouTubeVideos, formatDuration } from '../utils/api';
import { YouTubeVideo } from '../types/youtube';

const ShortsSection: React.FC = () => {
  const [shorts, setShorts] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadShorts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchYouTubeVideos();
        // Use only shorts (max 3, already limited by backend)
        setShorts(data.shorts);
      } catch (err) {
        console.error('Failed to load shorts:', err);
        setError('Failed to load shorts. Please try again later.');
        setShorts([]);
      } finally {
        setLoading(false);
      }
    };

    loadShorts();
    const interval = setInterval(() => {
      loadShorts();
    }, 5 * 60 * 1000);
  
    return () => clearInterval(interval);
  }, []);

  const handleShortsClick = () => {
    window.open('https://www.youtube.com/@HEALTHBOOK.OFFICIAL/shorts', '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[64px] font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            Health Hacks in <span className="text-teal-primary">Under 90 Seconds</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
            Bite-sized wellness wisdom that delivers maximum impact in minimum time. Perfect for your busy lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {loading && shorts.length === 0 ? (
            <div className="col-span-3 text-center text-slate-500 py-8">Loading shorts...</div>
          ) : shorts.length > 0 ? (
            shorts.map((short, idx) => (
              <motion.div 
                key={short.videoId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[28px] border border-[#e0f2f2] overflow-hidden shadow-xl shadow-teal-500/5 group"
              >
                <div 
                  className="relative aspect-[4/5] cursor-pointer"
                  onClick={() => window.open(`https://www.youtube.com/shorts/${short.videoId}`, '_blank')}
                >
                  <img src={short.thumbnail || `https://img.youtube.com/vi/${short.videoId}/maxresdefault.jpg`} alt={short.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] text-white font-bold flex items-center gap-1">
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     {formatDuration(short.durationInSeconds)}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{short.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">Science-backed tip to supercharge your health in minimal time.</p>
                  <div className="flex items-center gap-2 text-teal-primary text-xs font-bold">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     Quick Impact
                     <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            !loading && (
              <div className="col-span-3 text-center text-slate-500 py-8">
                {error || 'No shorts available at the moment.'}
              </div>
            )
          )}
        </div>

        <div className="text-center">
          <button 
            onClick={handleShortsClick}
            className="inline-flex items-center gap-2 px-10 py-4 bg-teal-primary text-white rounded-[14px] font-bold text-lg hover:shadow-xl hover:shadow-teal-500/20 transition-all active:scale-95"
          >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             Watch All Health Shorts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShortsSection;
