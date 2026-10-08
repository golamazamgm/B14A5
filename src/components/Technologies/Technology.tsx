import React from 'react';
import type { technologyType } from '../../type';

interface TechnologyProps {
  techno: technologyType;
  onAddToStack: (tech: technologyType) => void;
  isAdded: boolean;
}

const Technology = ({ techno, onAddToStack, isAdded }: TechnologyProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = techno;

  return (
    <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={icon} alt={`${name} icon`} className="w-8 h-8 object-contain" />
          </div>
          {badge && (
            <span className="badge border-none bg-sky-50 text-sky-600 font-medium text-xs px-3 py-2.5 rounded-full">
              {badge}
            </span>
          )}
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900 tracking-tight">{name}</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">{description}</p>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-gray-600 mb-5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 font-medium rounded-md">
              {category}
            </span>
            <span className="text-gray-500 font-medium">{difficulty}</span>
          </div>

          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onAddToStack(techno)}
          disabled={isAdded}
          className={`btn btn-block rounded-xl border-none normal-case font-medium text-sm h-11 min-h-[44px] transition-colors ${
            isAdded
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#0B0F19] hover:bg-gray-800 text-white'
          }`}
        >
          {isAdded ? 'Added' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default Technology;