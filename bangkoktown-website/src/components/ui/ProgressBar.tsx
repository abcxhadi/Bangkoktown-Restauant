
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  steps: { number: number; title: string; icon: string }[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex items-start justify-center space-x-4">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex flex-col items-center space-y-2">
            <motion.div
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                currentStep >= step.number ? 'bg-green-500' : 'bg-gray-800 border-2 border-gray-700'
              }`}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentStep > step.number ? (
                <motion.svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              ) : (
                <span className="text-lg font-semibold text-white">{step.number}</span>
              )}
            </motion.div>
            <div className="hidden sm:block">
              <p
                className={`netflix-body-medium text-sm text-center ${
                  currentStep >= step.number ? 'text-white' : 'text-gray-400'
                }`}
              >
                {step.title}
              </p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden mt-5">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-teal-500"
                initial={{ width: '0%' }}
                animate={{ width: currentStep > step.number ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
