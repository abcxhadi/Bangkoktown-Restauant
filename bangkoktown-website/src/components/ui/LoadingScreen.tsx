import React from 'react';
import { Logo } from './Logo';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-company-neutral z-50 flex items-center justify-center">
      <div className="animate-pulse">
        <Logo size="xxl" showText={false} />
      </div>
    </div>
  );
};