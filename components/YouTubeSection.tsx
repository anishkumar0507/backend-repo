
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchYouTubeVideos, formatDate } from '../utils/api';
import { YouTubeVideo } from '../types/youtube';

const YouTubeSection: React.FC = () => {
  const [episodes, setEpisodes] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchYouTubeVideos();
        
        // Use only long videos (max 3, already limited by backend)
        setEpisodes(data.longVideos);
      } catch (err) {
        console.error('Failed to load videos:', err);
        setError('Failed to load videos. Please try again later.');
        // Keep empty array on error to show nothing
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
    loadVideos();

  // 🔁 AUTO REFRESH EVERY 5 MINUTES
  const interval = setInterval(() => {
    loadVideos();
  }, 5 * 60 * 1000);

  // 🧹 CLEANUP
  return () => clearInterval(interval);
  }, []);

  // Show loading state (optional - you can customize this)
  if (loading && episodes.length === 0) {
    return (
      <section id="featured" className="py-24 bg-[#f8ffff] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[64px] font-extrabold text-[#1a1a1a] mb-6">
              Now <span className="text-teal-primary">Streaming</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">Catch the latest HealthBook Podcast episodes on video.</p>
          </motion.div>
          <div className="text-center text-slate-500">Loading videos...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured" className="py-24 bg-[#f8ffff] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[64px] font-extrabold text-[#1a1a1a] mb-6">
            Now <span className="text-teal-primary">Streaming</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium">Catch the latest HealthBook Podcast episodes on video.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {episodes.length > 0 ? (
            episodes.map((ep, idx) => (
              <motion.div 
                key={ep.videoId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[28px] border border-[#e0f2f2] overflow-hidden shadow-xl shadow-teal-500/5 group"
              >
                <div 
                  className="relative aspect-video bg-slate-100 cursor-pointer"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${ep.videoId}`, '_blank')}
                >
                  <img src={ep.thumbnail || `https://img.youtube.com/vi/${ep.videoId}/maxresdefault.jpg`} alt={ep.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                     </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 line-clamp-1">{ep.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 h-10 line-clamp-2">Watch the latest HealthBook episode for expert insights on wellness.</p>
                  <div className="flex items-center justify-between text-teal-primary">
                    <div className="flex items-center gap-2 text-xs font-bold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {formatDate(ep.publishedAt)}
                    </div>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            !loading && (
              <div className="col-span-3 text-center text-slate-500 py-8">
                {error || 'No videos available at the moment.'}
              </div>
            )
          )}
        </div>

        <div className="text-center">
          <button 
            onClick={() => window.open('https://www.youtube.com/@healthbook.official', '_blank')}
            className="inline-flex items-center gap-2 px-10 py-4 bg-teal-primary text-white rounded-[14px] font-bold text-lg hover:shadow-xl hover:shadow-teal-500/20 transition-all active:scale-95"
          >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
             Explore Full Video Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
