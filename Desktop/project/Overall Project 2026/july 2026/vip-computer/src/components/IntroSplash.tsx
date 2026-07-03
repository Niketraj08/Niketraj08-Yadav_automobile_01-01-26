import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Cpu, Server, Shield, Activity, Zap, Terminal, Database, HelpCircle } from 'lucide-react';

interface IntroSplashProps {
  onComplete: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const logsRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);
  const techGridRef = useRef<HTMLDivElement>(null);

  const [percent, setPercent] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Futuristic bootup logs with premium technical jargon matching VIP Computer
  const logs = [
    "STB: BOOTING VIP SECURE BOOT v4.21...",
    "CPU: INITIATING INTEL CORE ULTRA 9 285K CHIPSET...",
    "GPU: COUPLING NVIDIA GEFORCE RTX 5090 FOUNDERS EDITION...",
    "RAM: SYNCING 64GB DDR5 XMP PROFILE @ 8200MT/s...",
    "SSD: LINKING DUAL 4TB GEN5 NVMe RAID-0 MATRICES...",
    "COOL: FLOW-TESTING CUSTOM LIQUID D5 LOOP SYSTEM...",
    "NET: HANDSHAKING ASTRACGONIX PLATFORM INJECTOR...",
    "SEC: CRYPTO-SIGNATURE VERIFIED • PERMISSION GRANTED."
  ];

  const specsList = [
    { label: "ENGINE CODE", value: "ASTRACGONIX-V9" },
    { label: "IP ADDRESS", value: "192.168.12.99" },
    { label: "REGION", value: "DELHI / NOIDA NCR" },
    { label: "SECURITY", value: "SHA-512 SECURE" }
  ];

  // Mouse coordinate light glow effect
  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isExiting) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isExiting]);

  // Fast Automatic Loading Sequence with 2-second hold-off before unmounting
  useEffect(() => {
    let currentPercent = 0;
    const interval = setInterval(() => {
      // Increase percentage beautifully and steadily
      const increment = Math.floor(Math.random() * 8) + 6; 
      currentPercent = Math.min(currentPercent + increment, 100);
      setPercent(currentPercent);

      // Dynamically cycle through boot diagnostic logs
      const calculatedIndex = Math.min(
        Math.floor((currentPercent / 100) * logs.length),
        logs.length - 1
      );
      setLogIndex(calculatedIndex);

      if (currentPercent >= 100) {
        clearInterval(interval);
        // Once 100% complete is reached, hold the screen for exactly 2 seconds (2000ms)
        // so the user can fully experience the "COMPLETE" boot state
        setTimeout(() => {
          triggerExitSequence();
        }, 2000);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Set initial states for cinematic reveal
      gsap.set('.grid-item-line', { scaleX: 0, opacity: 0 });
      gsap.set('.sys-readout', { opacity: 0, x: -15 });
      gsap.set(titleRef.current, { opacity: 0, y: 40, scale: 0.9, letterSpacing: '0.4em' });
      gsap.set(subtitleRef.current, { opacity: 0, y: 15 });
      gsap.set(progressContainerRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(logsRef.current, { opacity: 0, y: 20 });
      gsap.set('.tech-badge-pill', { opacity: 0, scale: 0.5 });

      // Run GSAP timeline
      tl.to('.grid-item-line', { scaleX: 1, opacity: 0.2, duration: 1, stagger: 0.05, ease: 'power2.out' })
        .to('.tech-badge-pill', { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.5)' }, '-=0.6')
        .to(titleRef.current, { opacity: 1, y: 0, scale: 1, letterSpacing: '0.2em', duration: 1, ease: 'power3.out' }, '-=0.5')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.6')
        .to(progressContainerRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .to(logsRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .to('.sys-readout', { opacity: 0.6, x: 0, duration: 0.6, stagger: 0.05, ease: 'power1.out' }, '-=0.3');

      // Slow elegant continuous scanline vertical slide
      gsap.fromTo(scanlineRef.current, 
        { y: '-100%' }, 
        { y: '100%', duration: 3.5, repeat: -1, ease: 'none' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Exit sequence: splits the screens left & right, then unmounts the intro
  const triggerExitSequence = () => {
    setIsExiting(true);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete(); // Hand off state control back to the App
        }
      });

      // Animate key visuals zooming into the distance
      tl.to([titleRef.current, subtitleRef.current, progressContainerRef.current, logsRef.current, '.sys-readout', '.tech-badge-pill'], {
        opacity: 0,
        y: -40,
        scale: 0.95,
        filter: 'blur(8px)',
        duration: 0.6,
        stagger: 0.03,
        ease: 'power3.in'
      })
      // Split and slide open the left and right ambient backing panels
      .to(leftPanelRef.current, {
        x: '-100%',
        duration: 1,
        ease: 'power4.inOut'
      }, '-=0.2')
      .to(rightPanelRef.current, {
        x: '100%',
        duration: 1,
        ease: 'power4.inOut'
      }, '-=1') // Synchronize panel doors sliding apart
      // Smooth fade out of container backdrop
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4');

    }, containerRef);
  };

  return (
    <div 
      ref={containerRef}
      id="intro-splash-container"
      className="fixed inset-0 z-50 overflow-hidden bg-[#020617] flex items-center justify-center select-none"
    >
      {/* Heavy split screen backing frames */}
      <div 
        ref={leftPanelRef} 
        className="absolute inset-y-0 left-0 w-1/2 bg-[#020617] border-r border-slate-900/60 z-10 shadow-2xl"
      />
      <div 
        ref={rightPanelRef} 
        className="absolute inset-y-0 right-0 w-1/2 bg-[#020617] border-l border-slate-900/60 z-10 shadow-2xl"
      />

      {/* Sweeping radar scanline */}
      <div 
        ref={scanlineRef}
        className="absolute inset-x-0 h-48 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent z-20 pointer-events-none"
      />

      {/* Cybernetic Grid & Crosshairs Overlay */}
      <div ref={techGridRef} className="absolute inset-0 z-10 pointer-events-none opacity-30">
        {/* Futuristic horizontal guide ticks */}
        <div className="absolute top-1/4 inset-x-0 h-[1px] bg-slate-900 grid-item-line" />
        <div className="absolute top-2/4 inset-x-0 h-[1px] bg-slate-900 grid-item-line" />
        <div className="absolute top-3/4 inset-x-0 h-[1px] bg-slate-900 grid-item-line" />
        
        {/* Subtle decorative crosshairs on corners */}
        <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-slate-800" />
        <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-slate-800" />
        <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-slate-800" />
        <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-slate-800" />
      </div>

      {/* Custom spotlight glow trailing the mouse */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-15 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: `${mousePos.x - 250}px`,
          top: `${mousePos.y - 250}px`,
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.05) 0%, rgba(234, 179, 8, 0.01) 50%, transparent 80%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Front-facing Content Container */}
      <div className="relative z-30 text-center px-4 max-w-3xl space-y-8 flex flex-col items-center">
        
        {/* Category Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="tech-badge-pill flex items-center gap-1.5 px-3 py-1 bg-slate-950/90 border border-slate-900 rounded-lg text-[9px] font-mono text-slate-400 tracking-wider">
            <Cpu className="w-3 h-3 text-yellow-500" />
            SECURE BOOT-V4
          </div>
          <div className="tech-badge-pill flex items-center gap-1.5 px-3 py-1 bg-slate-950/90 border border-slate-900 rounded-lg text-[9px] font-mono text-slate-400 tracking-wider">
            <Database className="w-3 h-3 text-yellow-500 animate-pulse" />
            ASTRACGONIX CORE
          </div>
          <div className="tech-badge-pill flex items-center gap-1.5 px-3 py-1 bg-slate-950/90 border border-slate-900 rounded-lg text-[9px] font-mono text-slate-400 tracking-wider">
            <Shield className="w-3 h-3 text-yellow-500" />
            BYPASS ACTIVE
          </div>
        </div>

        {/* Master Logo Text */}
        <div className="space-y-2">
          <h1 
            ref={titleRef}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-yellow-500 tracking-[0.25em] uppercase text-center drop-shadow-xl"
          >
            VIP COMPUTER
          </h1>
          
          <div 
            ref={subtitleRef}
            className="flex items-center justify-center gap-2 text-slate-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-ping" />
            AUTOMATIC SYSTEMS AUTHENTICATION
          </div>
        </div>

        {/* Elegant Radial Cyber Loader with internal Telemetry count */}
        <div 
          ref={progressContainerRef} 
          className="relative flex flex-col items-center py-4"
        >
          {/* Radial visual tracks */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Ambient outer rotating dashboard border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-slate-900/60 animate-spin-slow" style={{ animationDuration: '30s' }} />
            
            <svg className="w-full h-full transform -rotate-90">
              {/* Core container track */}
              <circle 
                cx="72" 
                cy="72" 
                r="56" 
                stroke="#090d16" 
                strokeWidth="3" 
                fill="transparent" 
              />
              {/* Dynamic glowing gauge bar */}
              <circle 
                cx="72" 
                cy="72" 
                r="56" 
                stroke="#eab308" 
                strokeWidth="3" 
                fill="transparent" 
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - percent / 100)}`}
                className="transition-all duration-100"
                style={{ filter: 'drop-shadow(0 0 6px rgba(234, 179, 8, 0.45))' }}
              />
            </svg>

            {/* Inner dynamic readout text details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono font-black text-3xl text-white tracking-widest pl-1">
                {percent.toString().padStart(3, '0')}%
              </span>
              <div className="flex items-center gap-1 font-mono text-[8px] text-yellow-500 uppercase tracking-widest mt-1">
                <Terminal className="w-2.5 h-2.5" />
                {percent < 100 ? "BOOT-DIAG" : "SUCCESS"}
              </div>
            </div>
          </div>
        </div>

        {/* Real-time system diagnostics terminal feed */}
        <div 
          ref={logsRef}
          className="w-full max-w-lg h-14 bg-[#090d16]/90 border border-slate-900/60 rounded-xl p-4 flex items-center justify-center gap-3 font-mono text-[10px] text-slate-300 select-none overflow-hidden"
        >
          <Activity className="w-4 h-4 text-yellow-500 animate-pulse shrink-0" />
          <span className="truncate text-left font-mono text-yellow-500/90">{logs[logIndex]}</span>
        </div>

        {/* Tech diagnostic telemetry indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl pt-2">
          {specsList.map((spec, i) => (
            <div key={i} className="sys-readout bg-[#090d16]/40 border border-slate-900/60 rounded-xl p-2.5 text-center">
              <div className="font-mono text-[8px] text-slate-600 tracking-wider uppercase">{spec.label}</div>
              <div className="font-mono text-[10px] text-slate-300 font-bold tracking-wide mt-1">{spec.value}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Static lower frame telemetry metrics */}
      <div className="absolute bottom-6 left-6 z-30 font-mono text-[9px] text-slate-600 space-y-1 hidden sm:block">
        <div>CODENAME: ASTRA-MATRIX</div>
        <div>SYS DIRECTORY: DELHI NCR BLOCK</div>
      </div>
      <div className="absolute bottom-6 right-6 z-30 font-mono text-[9px] text-slate-600 text-right space-y-1 hidden sm:block">
        <div>AUTHORIZED AGENTS ONLY</div>
        <div>AUTOMATIC RE-ROUTE ACTIVE (3.0S)</div>
      </div>

    </div>
  );
};
