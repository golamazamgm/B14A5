import React, { use, useState } from 'react';
import type { technologyType } from '../../type';
import Technology from './Technology';
import YourStack from './YourStack';

interface TechnologiesProps {
  dataPromise: Promise<technologyType[]>;
}

const Technologies = ({ dataPromise }: TechnologiesProps) => {
  const technologieaData = use(dataPromise);
  const [selectedStack, setSelectedStack] = useState<technologyType[]>([]);

  // Add technology (enforces "Pick one technology per category")
  const handleAddToStack = (tech: technologyType) => {
    setSelectedStack((prev) => {
      // Replaces previous technology of the same category, or adds new
      const withoutCategory = prev.filter((item) => item.category !== tech.category);
      return [...withoutCategory, tech];
    });
  };

  // Remove individual item
  const handleRemove = (id: string) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all items
  const handleClear = () => {
    setSelectedStack([]);
  };

  return (
    <div className="lg:max-w-6xl max-w-5xl mx-auto px-4 mb-7">
      {/* Header */}
      <div className="mb-8">
        <h1 className="md:text-4xl text-2xl font-extrabold text-center md:text-left mt-8 mb-3">
          Explore the{' '}
          <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D8187E_50%,#7C3AED_100%)] text-transparent bg-clip-text">
            Technologies
          </span>
        </h1>
        <p className="text-center md:text-left text-[#475569] text-sm">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout: Cards Grid (Left) + Sticky Stack Sidebar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Side: 2 Columns of Technology Cards */}
        <div className="md:col-span-2 lg:col-span-3 lg:grid-cols-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {technologieaData.map((tech) => (
            <Technology
              key={tech.id}
              techno={tech}
              onAddToStack={handleAddToStack}
              isAdded={selectedStack.some((item) => item.id === tech.id)}
            />
          ))}
        </div>

        {/* Right Side: Sticky "Your Stack" Card */}
        <div className="lg:col-span-1 lg:sticky lg:top-6">
          <YourStack
            stack={selectedStack}
            onRemove={handleRemove}
            onClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;