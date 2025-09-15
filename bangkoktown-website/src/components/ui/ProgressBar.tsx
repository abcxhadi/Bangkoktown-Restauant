
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  steps: { number: number; title: string; icon: string }[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: currentStep >= step.number ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                currentStep >= step.number
                  ? "bg-gradient-to-r from-red-500 to-amber-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 border-2 border-gray-700"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: currentStep === step.number ? 1.1 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {currentStep > step.number ? (
                <motion.span 
                  className="text-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  ✓
                </motion.span>
              ) : (
                <span className="text-lg">{step.icon}</span>
              )}
            </motion.div>
            <div className="hidden sm:block">
              <p
                className={`netflix-body-medium text-sm ${
                  currentStep >= step.number
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                Step {step.number}
              </p>
              <p
                className={`netflix-caption text-xs ${
                  currentStep >= step.number
                    ? "text-gray-200"
                    : "text-gray-500"
                }`}
              >
                {step.title}
              </p>
            </div>
          </motion.div>
          {index < steps.length - 1 && (
            <motion.div 
              className="w-16 h-1 bg-gray-700 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: currentStep > step.number ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
