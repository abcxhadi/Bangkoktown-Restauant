
import React from 'react';
import { Button } from './Button';

interface ScrollArrowsProps {
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

export const ScrollArrows: React.FC<ScrollArrowsProps> = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <Button onClick={onScrollLeft} variant="outline" size="sm">
        &larr;
      </Button>
      <Button onClick={onScrollRight} variant="outline" size="sm">
        &rarr;
      </Button>
    </div>
  );
};
