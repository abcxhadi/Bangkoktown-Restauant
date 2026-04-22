import React from 'react';
import { Logo } from './Logo';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 z-50 flex items-center justify-center">
      <div className="animate-pulse">
        <Logo size="xxxl" showText={false} noBorder={true} />
      </div>
    </div>
  );
};