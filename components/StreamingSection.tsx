
import React from 'react';

const StreamingSection: React.FC = () => {
  const episodes = [
    { title: "The Blueprint to Optimal Wellbeing", desc: "Discover foundational principles for living your healthiest life", date: "March 15, 2025", trending: true },
    { title: "Advanced Nutrition Strategies", desc: "Science-backed approaches to fuel your body for peak performance", date: "April 2, 2025", trending: false },
    { title: "Mind-Body Connection Mastery", desc: "Practices to strengthen the vital link between mental and physical health", date: "May 10, 2025", trending: true },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold text-slate-900 mb-6">
            Now <span className="text-teal-primary">Streaming</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">Catch the latest HealthBook Podcast episodes on video.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {episodes.map((ep, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] border border-teal-100 overflow-hidden card-shadow">
              <div className="relative aspect-video bg-slate-100">
                <img src={`https://picsum.photos/id/${idx + 40}/600/400`} alt="" className="w-full h-full object-cover" />
                {ep.trending && (
                  <div className="absolute top-4 right-4 bg-teal-400 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    Trending
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                      <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{ep.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{ep.desc}</p>
                <div className="flex items-center justify-between text-teal-primary">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {ep.date}
                  </div>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-10 py-4 bg-teal-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-teal-500/20 hover:bg-teal-600 transition-all">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
             Explore Full Video Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default StreamingSection;
