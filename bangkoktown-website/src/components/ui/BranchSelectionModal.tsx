import React from 'react';

interface BranchSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BranchSelectionModal: React.FC<BranchSelectionModalProps> = ({ isOpen, onClose }) => {
  const branches = [
    {
      name: "Al Majaz 3, Sharjah",
      phone: "06 556 8282",
      tel: "065568282"
    },
    {
      name: "Zawaya Walk, Sharjah",
      phone: "06 546 8383",
      tel: "065468383"
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#060503]/75 backdrop-blur-md transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#16140F] border border-[#C9A96E]/30 p-8 sm:p-12 flex flex-col items-center gap-2 max-w-lg w-full animate-in fade-in zoom-in duration-300">
        <p className="font-['Jost'] font-bold text-[0.85rem] sm:text-[1rem] tracking-[0.4em] uppercase text-[#C9A96E] mb-6">Choose a branch</p>

        <div className="w-full flex flex-col gap-4">
          {branches.map((branch, index) => (
            <React.Fragment key={branch.tel}>
              <a 
                href={`tel:${branch.tel}`}
                className="w-full bg-transparent border border-[#C9A96E]/15 p-6 sm:p-8 flex items-center justify-between gap-8 cursor-pointer transition-all duration-300 hover:bg-[#C9A96E]/5 hover:border-[#C9A96E]/35 group no-underline"
              >
                <div className="text-left">
                  <span className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-normal text-[#F0E6D0] block mb-2 leading-tight group-hover:text-white transition-colors">{branch.name}</span>
                  <span className="font-['Jost'] font-light text-[0.85rem] sm:text-[1rem] tracking-[0.12em] text-[#C9A96E] block uppercase">📞 {branch.phone}</span>
                </div>
                <span className="text-3xl text-[#C9A96E]/70 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
              </a>
              {index === 0 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/15 to-transparent my-2" />
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-8 font-['Jost'] font-bold text-[0.75rem] sm:text-[0.85rem] tracking-[0.25em] uppercase text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors cursor-pointer py-2 px-6 border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
