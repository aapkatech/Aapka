import React from 'react';
import { motion } from 'framer-motion';

export const DIAL_RADIUS = 78;
export const DIAL_CIRCUMFERENCE = 2 * Math.PI * DIAL_RADIUS;

interface DialRingSvgProps {
  gradientId: string;
  gradientFrom: string;
  gradientTo: string;
  gradientMid?: string;
  tickCount: number;
  tickHighlightEvery: number;
  tickStrokeColor?: string;
  progress: number; // 0 to 1
  showTipDot?: boolean;
  tipDotColor?: string;
  showOuterHalo?: boolean;
  animateOnMount?: boolean;
  children: React.ReactNode;
}

/** Shared precision radial SVG dial frame used across the 3 patient savings chronometers. */
export const DialRingSvg: React.FC<DialRingSvgProps> = ({
  gradientId,
  gradientFrom,
  gradientTo,
  gradientMid,
  tickCount,
  tickHighlightEvery,
  tickStrokeColor = '#cbd5e1',
  progress,
  showTipDot = false,
  tipDotColor = '#0f766e',
  showOuterHalo = false,
  animateOnMount = false,
  children,
}) => {
  const clamped = Math.min(1, Math.max(0, progress));
  const dashOffset = DIAL_CIRCUMFERENCE * (1 - clamped);

  const theta = clamped * 2 * Math.PI - Math.PI / 2;
  const dotX = 100 + DIAL_RADIUS * Math.cos(theta);
  const dotY = 100 + DIAL_RADIUS * Math.sin(theta);

  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const angle = (i / tickCount) * 2 * Math.PI - Math.PI / 2;
    const isMajor = i % tickHighlightEvery === 0;
    const inner = isMajor ? 87 : 90;
    return {
      x1: 100 + inner * Math.cos(angle),
      y1: 100 + inner * Math.sin(angle),
      x2: 100 + 93 * Math.cos(angle),
      y2: 100 + 93 * Math.sin(angle),
      isMajor,
    };
  });

  return (
    <div className="relative w-48 h-48 sm:w-52 sm:h-52 mx-auto select-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            {gradientMid && <stop offset="55%" stopColor={gradientMid} />}
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>

        <g aria-hidden="true">
          {ticks.map((t, idx) => (
            <line
              key={idx}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke={t.isMajor ? '#64748b' : tickStrokeColor}
              strokeWidth={t.isMajor ? 1.75 : 1}
              strokeLinecap="round"
            />
          ))}
        </g>

        {showOuterHalo && (
          <circle
            cx="100"
            cy="100"
            r={DIAL_RADIUS + 7}
            fill="none"
            stroke="#10b981"
            strokeOpacity="0.22"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        )}

        {/* Base track */}
        <circle
          cx="100"
          cy="100"
          r={DIAL_RADIUS}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="6"
        />

        {/* Progress Arc */}
        {animateOnMount ? (
          <motion.circle
            cx="100"
            cy="100"
            r={DIAL_RADIUS}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeDasharray={DIAL_CIRCUMFERENCE}
            initial={{ strokeDashoffset: DIAL_CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: dashOffset }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.15, ease: 'easeOut' }}
            transform="rotate(-90 100 100)"
          />
        ) : (
          <circle
            cx="100"
            cy="100"
            r={DIAL_RADIUS}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeDasharray={DIAL_CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 100 100)"
          />
        )}

        {showTipDot && (
          <circle cx={dotX} cy={dotY} r="5.5" fill={tipDotColor} stroke="#ffffff" strokeWidth="2" />
        )}
      </svg>

      {/* Center Readout Slot */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {children}
      </div>
    </div>
  );
};
