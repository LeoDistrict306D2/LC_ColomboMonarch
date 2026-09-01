import { useState, useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState('enter'); // enter -> hold -> exit

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('hold'), 100);
    const exitTimer = setTimeout(() => setPhase('exit'), 4300);
    const finishTimer = setTimeout(() => onFinish(), 5000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#07111F' }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#C8A951' : 'rgba(255,255,255,0.15)',
              animation: `splashFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow behind logo */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(200,169,81,0.12) 0%, transparent 70%)',
          animation: 'splashPulse 3s ease-in-out infinite',
        }}
      />

      {/* Rotating ring */}
      <div
        className="absolute w-64 h-64 rounded-full border border-gold/10"
        style={{ animation: 'splashSpin 8s linear infinite' }}
      />
      <div
        className="absolute w-80 h-80 rounded-full border border-white/5"
        style={{ animation: 'splashSpin 12s linear infinite reverse' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            phase !== 'enter'
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-75 translate-y-8'
          }`}
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-4 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(200,169,81,0.3), transparent, rgba(200,169,81,0.15), transparent)',
                animation: 'splashSpin 4s linear infinite',
              }}
            />
            {/* Logo image */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gold/40 bg-navy-dark flex items-center justify-center shadow-lg"
              style={{ boxShadow: '0 0 40px rgba(200,169,81,0.2), 0 0 80px rgba(200,169,81,0.1)' }}
            >
              <img
                src="/images/logo/logo_Cm.png"
                alt="Leo Club of Colombo Monarch"
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center absolute inset-0">
                <span className="text-3xl font-display font-bold text-gold">LEO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Club name with staggered animation */}
        <div className="text-center">
          <div
            className={`transition-all duration-700 delay-300 ${
              phase !== 'enter'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-wide">
              <span className="text-gold">Leo Club</span>
              <span className="text-white"> of</span>
            </h1>
          </div>
          <div
            className={`transition-all duration-700 delay-500 ${
              phase !== 'enter'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wider text-white mt-1">
              COLOMBO MONARCH
            </h1>
          </div>

          {/* Divider line */}
          <div
            className={`mx-auto mt-6 h-px transition-all duration-1000 delay-700 ${
              phase !== 'enter' ? 'w-48 opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ background: 'linear-gradient(90deg, transparent, #C8A951, transparent)' }}
          />

          {/* Tagline */}
          <div
            className={`transition-all duration-700 delay-[900ms] ${
              phase !== 'enter'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mt-4 font-sans">
              Leadership &middot; Experience &middot; Opportunity
            </p>
          </div>

          {/* Theme */}
          <div
            className={`transition-all duration-700 delay-[1100ms] ${
              phase !== 'enter'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-gold/60 text-sm font-display italic mt-3">
              "Thriving, Not Surviving"
            </p>
          </div>
        </div>

        {/* Loading bar */}
        <div className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full"
            style={{
              animation: 'splashLoad 4.2s ease-in-out forwards',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes splashFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
        }
        @keyframes splashPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes splashSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes splashLoad {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
