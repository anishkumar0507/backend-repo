
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Views', value: '30k+', icon: null },
    { label: 'Watch hour', value: '3K+', icon: null },
    { label: 'Subscribers', value: '18k+', icon: null },
    { label: 'Award Winner', value: '', icon: 'ribbon' },
  ];

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/60 p-8 rounded-[1.5rem] border border-teal-100 flex flex-col items-center justify-center text-center shadow-sm card-shadow">
              {stat.icon === 'ribbon' ? (
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-teal-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18z M12 11l2 2-2 2-2-2 2-2z" />
                  </svg>
                  <span className="text-teal-primary font-bold text-sm">Award Winner</span>
                </div>
              ) : (
                <>
                  <div className="text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-teal-primary uppercase tracking-wider">{stat.label}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
