import React from 'react';
import { Logo } from './Logo';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#dd87ff] z-50 flex items-center justify-center">
      <div className="relative animate-pulse">
        <Logo size="xxxl" showText={false} noBorder={true} />
      </div>
    </div>
  );
};