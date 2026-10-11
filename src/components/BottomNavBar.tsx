import React, { useEffect, useRef, useState } from 'react';
import { Home, ShoppingBag, TrendingUp, Store } from 'lucide-react';
import { NavTabId } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BottomNavBarProps {
  activeTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 6,
    width: 60,
  });
  const [hasMounted, setHasMounted] = useState(false);

  const navItems = [
    { id: 'home' as NavTabId, label: t.navHome, icon: Home },
    { id: 'products' as NavTabId, label: t.navProducts, icon: ShoppingBag },
    { id: 'rates' as NavTabId, label: t.navRates, icon: TrendingUp },
    { id: 'store' as NavTabId, label: t.navStore, icon: Store },
  ];

  // Play subtle haptic tap sound using Web Audio API
  const playTapSound = () => {
    try {
      if (typeof window === 'undefined') return;
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.035);
    } catch {
      // Audio might be blocked by browser policy until interaction
    }
  };

  const updateIndicator = (tabId: NavTabId, isInitial = false) => {
    if (!containerRef.current) return;
    const buttons = containerRef.current.querySelectorAll<HTMLButtonElement>('[data-nav-item]');
    const activeIndex = navItems.findIndex((item) => item.id === tabId);
    if (activeIndex >= 0 && buttons[activeIndex]) {
      const btn = buttons[activeIndex];
      const containerRect = containerRef.current.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      const left = btnRect.left - containerRect.left;
      const width = btnRect.width;

      setIndicatorStyle({ left, width });
      if (isInitial) {
        setHasMounted(true);
      }
    }
  };

  useEffect(() => {
    updateIndicator(activeTab, !hasMounted);
  }, [activeTab, hasMounted]);

  useEffect(() => {
    const handleResize = () => {
      updateIndicator(activeTab, true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  const handleTabClick = (tabId: NavTabId) => {
    playTapSound();
    onSelectTab(tabId);
  };

  return (
    <aside
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:max-w-md z-50 select-none pointer-events-auto box-border"
      aria-label="Bottom Navigation Bar"
    >
      <div
        ref={containerRef}
        className="relative flex items-center justify-between p-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_16px_36px_-6px_rgba(30,20,10,0.18),0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)]"
      >
        {/* Apple-Style Sliding Indicator Pill */}
        <div
          aria-hidden="true"
          className={`absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-b from-amber-500 to-amber-600 shadow-[0_4px_12px_rgba(217,119,6,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] pointer-events-none z-0 ${
            hasMounted ? 'transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]' : ''
          }`}
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: `${indicatorStyle.width}px`,
          }}
        >
          {/* Subtle top glare highlight */}
          <div className="absolute inset-x-2 top-0.5 h-[1.5px] rounded-full bg-white/50" />
        </div>

        {/* The 4 Navigation Tabs */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              data-nav-item={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => handleTabClick(item.id)}
              className={`relative flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-full z-10 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer ${
                isActive ? 'text-white' : 'text-stone-500 hover:text-stone-800'
              }`}
              aria-selected={isActive}
              role="tab"
            >
              {/* Icon Container */}
              <div
                className={`relative flex items-center justify-center transition-transform duration-300 ${
                  isActive ? 'scale-110 -translate-y-0.5' : 'hover:scale-105'
                }`}
              >
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Label */}
              <span
                className={`text-[11px] leading-none mt-1 font-semibold tracking-tight whitespace-nowrap transition-all ${
                  isActive ? 'font-bold opacity-100' : 'opacity-85'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
