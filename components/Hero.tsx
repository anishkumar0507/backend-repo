import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchYouTubeVideos } from '../utils/api';
import { YouTubeVideo } from '../types/youtube';

const Hero: React.FC = () => {
  const [heroVideo, setHeroVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHeroVideo = async () => {
      try {
        const data = await fetchYouTubeVideos();
        setHeroVideo(data.heroVideo);
      } catch (err) {
        console.error('Failed to load hero video:', err);
        setHeroVideo(null);
      } finally {
        setLoading(false);
      }
    };

    loadHeroVideo();
    const interval = setInterval(() => {
      loadHeroVideo();
    }, 5 * 60 * 1000); // ⏱ 5 minutes
  
    return () => clearInterval(interval);
  }, []);

  const handleStartListening = () => {
    window.open(
      'https://open.spotify.com/show/6x5RTg1jFNRFflUE3yoGXY',
      '_blank'
    );
  };

  const handleBrowseEpisodes = () => {
    window.open(
      'https://www.youtube.com/@healthbook.official/playlists',
      '_blank'
    );
  };

  const handleHeroVideoClick = () => {
    if (heroVideo) {
      window.open(
        `https://www.youtube.com/watch?v=${heroVideo.videoId}`,
        '_blank'
      );
    } else {
      handleBrowseEpisodes();
    }
  };

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 min-h-[90vh] overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] -z-10"
      />

      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-teal-50 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-[64px] lg:text-[100px] font-extrabold leading-[1.1] mb-6 whitespace-nowrap">
              All About <span className="text-teal-primary">Health</span>
            </h1>

            <p className="text-[22px] text-slate-600 max-w-lg mb-10 font-medium">
              Your one-stop podcast for practical, expert-backed insights on
              physical and mental wellness
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <button
                onClick={handleStartListening}
                className="flex items-center gap-2 px-10 py-4 bg-teal-primary text-white rounded-[14px] font-bold text-lg hover:shadow-xl hover:shadow-teal-500/20 transition-all active:scale-95"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Start Listening
              </button>

              <button
                onClick={handleBrowseEpisodes}
                className="flex items-center gap-2 px-10 py-4 bg-white text-[#1a1a1a] border border-teal-200 rounded-[14px] font-bold text-lg hover:bg-gray-50 transition-all active:scale-95"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z" />
                  <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
                </svg>
                Browse Episodes
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl">
              {[
                { val: '30k+', label: 'Views' },
                { val: '3K+', label: 'Watch hour' },
                { val: '18k+', label: 'Subscribers' },
                { val: 'Award Winner', icon: true },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-white/80 border border-teal-50 rounded-[20px] p-5 flex flex-col items-center justify-center shadow-lg shadow-teal-500/5 min-h-[140px]"
                >
                  {stat.icon ? (
                    <div className="flex flex-col items-center">
                      {/* Award Icon */}
                      <svg
                        className="w-8 h-8 text-teal-primary mb-2"
                        viewBox="0 0 64 64"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="32" cy="24" r="18" />
                        <circle cx="32" cy="24" r="12" />
                        <path d="M32 16l3.5 7.5 8 .7-6 5.5 1.8 8-7.3-4-7.3 4 1.8-8-6-5.5 8-.7L32 16z" />
                        <path d="M22 42l-8 14 10-4 6 6" />
                        <path d="M42 42l8 14-10-4-6 6" />
                      </svg>

                      <span className="text-[11px] font-bold text-teal-primary uppercase">
                        Award Winner
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="text-[32px] font-black text-[#1a1a1a] mb-1">
                        {stat.val}
                      </div>
                      <div className="text-[12px] font-bold text-teal-primary uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE – VIDEO */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex-1 w-full relative"
          >
            <div
              className="relative rounded-[32px] overflow-hidden border-[6px] border-[#eaf6f6] shadow-2xl bg-white aspect-[16/10] cursor-pointer group"
              onClick={handleHeroVideoClick}
            >
              <img
                src={
                  heroVideo?.thumbnail ||
                  'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200'
                }
                alt="HealthBook Episode"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-10 h-10 text-slate-800 fill-current ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-sm px-5 py-2.5 rounded-[16px] flex items-center gap-3 shadow-xl">
                <span className="w-2 h-2 bg-teal-primary rounded-full animate-pulse" />
                <span className="text-[14px] font-bold text-white">
                  New Episode
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
